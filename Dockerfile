# Stage 1: Dependencies
FROM node:20-alpine AS deps
# sharp 빌드를 위한 필수 패키지 설치
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 의존성 설치를 위한 package files 복사
COPY package*.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js standalone 모드 활성화 (next.config.js에서 설정 필요)
# 빌드
RUN npm run build

# Stage 3: Runner (Production)
FROM node:20-alpine AS runner
WORKDIR /app

# Install curl for health check
RUN apk add --no-cache curl

ENV NODE_ENV=production
ENV PORT=3000

# 보안을 위한 non-root user 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Next.js standalone 출력물 복사
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# Health check 추가
HEALTHCHECK --interval=10s --timeout=5s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Next.js standalone 서버 실행
CMD ["node", "server.js"]

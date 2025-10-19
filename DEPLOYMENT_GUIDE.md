# KangKangParks 배포 가이드

## 🚀 빠른 배포

### 1단계: 코드 수정
```bash
# 파일 수정 후
git add .
git commit -m "feat: 새로운 기능 추가"
```

### 2단계: deploy 브랜치에 Push
```bash
git push origin deploy
```

### 3단계: 완료!
- GitHub Actions가 자동으로 배포
- 약 1분 30초 소요
- **다운타임: 0.5~1초**

---

## 📊 배포 프로세스

### Blue-Green 배포 방식
```
현재: Blue (3010) 실행 중
  ↓
Green (3011) 빌드 및 기동
  ↓
Health Check 통과
  ↓
Nginx upstream → Green으로 전환 (0.5초)
  ↓
Blue 정리
  ↓
다음 배포 시 Blue (3010) 사용
```

### 포트 구성
- **Blue**: 호스트 3010 → 컨테이너 3000
- **Green**: 호스트 3011 → 컨테이너 3000
- **컨테이너 이름**:
  - Blue: `kangkangparks-frontend`
  - Green: `kangkangparks-frontend-green`
- **도메인**: https://kangkangparks.com

### Nginx 설정
- **Upstream 이름**: `kangkangparks-frontend`
- **설정 파일**: `/home/kangkangparks/docker/nginx/volumes/conf/kangkangparks.com.conf`
- **Nginx 컨테이너**: `kangkangparks-nginx-proxy`
- **Blue-Green 전환**: upstream 서버를 컨테이너 이름으로 전환
  - Blue 활성: `server kangkangparks-frontend:3000`
  - Green 활성: `server kangkangparks-frontend-green:3000`

### 배포 모니터링
- **GitHub Actions**: https://github.com/your-repo/actions
- **서버 접속**: `ssh kangkangparks@kangkangparks.com`
- **로그 확인**:
  - Blue: `docker logs kangkangparks-frontend`
  - Green: `docker logs kangkangparks-frontend-green`

---

## 🔧 로컬 개발

### 개발 서버 실행
```bash
npm install
npm run dev
```

### 로컬 빌드 테스트
```bash
# Next.js 빌드
npm run build
npm start

# 브라우저 접속
open http://localhost:3000
```

### Docker 로컬 테스트
```bash
# 이미지 빌드
docker build -t kangkangparks-test .

# 컨테이너 실행
docker run -p 3012:3000 kangkangparks-test

# 브라우저 접속
open http://localhost:3012
```

---

## 🔄 롤백

### 긴급 롤백 (수동)
```bash
# 1. 서버 접속
ssh kangkangparks@kangkangparks.com

# 2. Nginx 백업 설정으로 복구
sudo cp /home/kangkangparks/docker/nginx/volumes/conf/kangkangparks.com.conf.backup \
        /home/kangkangparks/docker/nginx/volumes/conf/kangkangparks.com.conf

# 3. Nginx reload
docker exec kangkangparks-nginx-proxy nginx -s reload
```

### Git으로 롤백 (권장)
```bash
# 이전 커밋으로 되돌리기
git revert HEAD
git push origin deploy
```

---

## 🐛 트러블슈팅

### Health Check 실패
```bash
# 로컬에서 빌드 테스트
docker build -t test .
docker run -p 3012:3000 test
curl http://localhost:3012
```

### 502 Bad Gateway
```bash
# 서버에서 컨테이너 상태 확인
docker ps | grep kangkangparks-frontend
docker logs kangkangparks-frontend
docker logs kangkangparks-frontend-green

# Nginx upstream 확인
cat /home/kangkangparks/docker/nginx/volumes/conf/kangkangparks.com.conf | grep upstream -A 2
```

### 배포 중단
```bash
# GitHub Actions에서 workflow 취소
# 또는 서버에서 수동 정리
docker stop kangkangparks-frontend-green
docker rm kangkangparks-frontend-green
docker rmi kangkangparks-frontend:green
```

### Next.js 빌드 에러
```bash
# standalone 모드 확인
cat next.config.js | grep standalone

# 로컬에서 빌드 테스트
npm run build
ls -la .next/standalone
```

### Health Check Unhealthy 상태
```bash
# 컨테이너 로그 확인
docker logs kangkangparks-frontend-green --tail 50

# Health check 상세 정보
docker inspect kangkangparks-frontend-green | grep -A 20 Health

# 해결 방법: HOSTNAME 환경변수 확인
docker exec kangkangparks-frontend-green env | grep HOSTNAME
# 출력: HOSTNAME=0.0.0.0 이어야 함

# 만약 없다면 수동으로 재시작 (이미 Dockerfile에 포함됨)
docker restart kangkangparks-frontend-green
```

**원인**: Next.js standalone 서버가 `0.0.0.0`으로 바인딩되지 않아 health check 실패
**해결**: `HOSTNAME=0.0.0.0` 환경변수 추가 (Dockerfile, deploy.yml에 이미 적용됨)

---

## 📝 중요 파일

- `.github/workflows/deploy.yml` - 배포 스크립트 (Blue-Green)
- `Dockerfile` - Next.js standalone Docker 이미지 설정
- `next.config.js` - standalone 모드 설정
- `docker-compose.yml` - 로컬 Docker 실행 설정

---

## 🔐 GitHub Secrets 설정

다음 Secrets를 GitHub 저장소에 설정해야 합니다:

```
SSH_HOST: kangkangparks.com (또는 서버 IP)
SSH_USER: kangkangparks
SSH_PASSWORD: [서버 비밀번호]
```

**설정 방법**:
1. GitHub 저장소 → Settings → Secrets and variables → Actions
2. New repository secret 클릭
3. 위 3개 항목 추가

---

## 📊 프로젝트 구조

```
kangkangparks/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 배포 워크플로우
├── app/                       # Next.js App Router
├── public/                    # 정적 파일
├── Dockerfile                 # Docker 이미지 설정
├── docker-compose.yml         # Docker Compose 설정
├── next.config.js            # Next.js 설정 (standalone 모드)
├── package.json              # 의존성 관리
└── DEPLOYMENT_GUIDE.md       # 이 파일
```

---

## 🌐 서버 경로

```bash
# 프로젝트 배포 경로
/home/kangkangparks/docker/kangkangparks/website/

# Nginx 설정 경로
/home/kangkangparks/docker/nginx/volumes/conf/kangkangparks.com.conf

# Nginx 컨테이너
kangkangparks-nginx-proxy

# Docker 네트워크
nginx_nginx-proxy
```

---

## ⚠️ 배포 전 필수 설정

### 1. GitHub Secrets 설정 (필수)
GitHub 저장소 → Settings → Secrets → Actions:
```
SSH_HOST: kangkangparks.com
SSH_USER: kangkangparks
SSH_PASSWORD: [서버 비밀번호]
```

### 2. 서버 폴더 생성 (필수)
```bash
ssh kangkangparks@kangkangparks.com
mkdir -p /home/kangkangparks/docker/kangkangparks/website
```

### 3. Nginx Upstream 설정 수정 (중요!)
**현재 설정**:
```nginx
upstream kangkangparks-frontend {
    server kangkangparks-frontend:3010 max_fails=3 fail_timeout=30s;
}
```

**다음과 같이 수정**:
```nginx
upstream kangkangparks-frontend {
    server kangkangparks-frontend:3000 max_fails=3 fail_timeout=30s;
}
```

**이유**: Nginx는 Docker network를 통해 컨테이너 내부 포트(3000)로 접근합니다.
호스트 포트(3010, 3011)는 외부 직접 접근용입니다.

**수정 방법**:
```bash
# 서버 접속
ssh kangkangparks@kangkangparks.com

# Nginx 설정 편집
sudo nano /home/kangkangparks/docker/nginx/volumes/conf/kangkangparks.com.conf

# upstream 부분에서 :3010을 :3000으로 변경 후 저장

# Nginx reload
docker exec kangkangparks-nginx-proxy nginx -s reload
```

### 4. 체크리스트
- [ ] GitHub Secrets 설정 완료
- [ ] deploy 브랜치 생성
- [ ] 서버 폴더 생성 완료
- [ ] Nginx upstream 포트 수정 (3010 → 3000)
- [ ] 포트 3010, 3011 사용 가능 확인
- [ ] 로컬 Docker 빌드 테스트 성공

---

## 📞 도움말

문제 발생 시: support@kangkangparks.com

자세한 Next.js 배포 정보: https://nextjs.org/docs/deployment

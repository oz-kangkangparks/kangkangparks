export type BlogPost = {
  slug: string
  title: string
  summary: string
  content: string
  date: string
  cover: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js 성능 최적화: 실전 가이드',
    summary:
      '프로젝트 로딩 속도를 2배 개선한 Next.js 최적화 노하우를 공유합니다. 이미지 최적화부터 코드 스플리팅까지, 실무에서 바로 적용 가능한 기법들을 알아보세요.',
    cover: '/images/blog/nextjs-performance-optimization.png',
    content: `# Next.js 성능 최적화: 실전 가이드

웹 사이트의 성능은 사용자 경험과 SEO에 직접적인 영향을 미칩니다. 구글의 연구에 따르면 페이지 로딩 속도가 1초 증가할 때마다 전환율이 7% 감소한다고 합니다. 강강박스가 실제 프로젝트에서 적용한 Next.js 성능 최적화 방법을 상세히 공유합니다.

## 1. 이미지 최적화로 로딩 속도 개선하기

이미지는 대부분의 웹사이트에서 가장 큰 용량을 차지하는 리소스입니다. Next.js의 Image 컴포넌트는 이러한 문제를 효과적으로 해결합니다.

### 자동 포맷 변환과 크기 조정

Next.js는 WebP나 AVIF 같은 최신 이미지 포맷을 자동으로 지원합니다. 사용자의 브라우저가 지원하는 가장 최적화된 포맷으로 이미지를 제공하여 파일 크기를 최대 80%까지 줄일 수 있습니다.

\`\`\`tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero Image"
  width={1200}
  height={600}
  priority // 중요한 이미지는 우선 로딩
  sizes="(max-width: 768px) 100vw, 50vw"
/>
\`\`\`

### 레이지 로딩과 Blur Placeholder

뷰포트에 들어올 때만 이미지를 로드하는 레이지 로딩은 초기 로딩 시간을 크게 단축시킵니다. 또한 placeholder="blur" 옵션을 사용하면 이미지가 로딩되는 동안 블러 처리된 미리보기를 보여줄 수 있어 사용자 경험이 향상됩니다.

**실측 데이터:** 강강박스의 포트폴리오 사이트에 이미지 최적화를 적용한 결과, 총 페이지 용량이 3.2MB에서 850KB로 감소했습니다.

## 2. 코드 스플리팅과 동적 임포트

초기 번들 크기를 줄이는 것은 성능 최적화의 핵심입니다. 사용자가 실제로 필요한 코드만 로드하도록 설계해야 합니다.

### 동적 임포트로 번들 사이즈 최적화

\`\`\`tsx
import dynamic from 'next/dynamic'

// 컴포넌트를 동적으로 임포트
const DynamicModal = dynamic(() => import('@/components/Modal'), {
  loading: () => <div>로딩중...</div>,
  ssr: false // 클라이언트에서만 렌더링
})
\`\`\`

### 라이브러리 최적화

외부 라이브러리를 사용할 때는 트리 쉐이킹이 가능한 방식으로 임포트해야 합니다.

\`\`\`tsx
// Bad - 전체 라이브러리 임포트
import _ from 'lodash'

// Good - 필요한 함수만 임포트
import debounce from 'lodash/debounce'
\`\`\`

## 3. 서버 사이드 렌더링 전략

Next.js의 다양한 렌더링 방식을 적재적소에 활용하는 것이 중요합니다.

### Static Generation (SSG)

변경이 거의 없는 페이지는 빌드 타임에 미리 생성하여 CDN에서 제공합니다. 가장 빠른 성능을 제공합니다.

\`\`\`tsx
export async function getStaticProps() {
  const data = await fetchData()
  return { props: { data }, revalidate: 3600 } // 1시간마다 재생성
}
\`\`\`

### Server-Side Rendering (SSR)

실시간 데이터가 필요한 경우에만 SSR을 사용합니다.

### Incremental Static Regeneration (ISR)

정적 생성의 속도와 서버 렌더링의 최신성을 모두 확보하는 방법입니다.

## 4. 폰트 최적화

\`\`\`tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
\`\`\`

next/font를 사용하면 폰트 파일을 자체 호스팅하여 외부 요청을 제거하고, 레이아웃 시프트를 방지할 수 있습니다.

## 5. 번들 분석과 모니터링

\`\`\`bash
npm install @next/bundle-analyzer
\`\`\`

정기적으로 번들을 분석하여 불필요한 의존성을 제거하고, Lighthouse와 Web Vitals를 모니터링하여 성능을 추적합니다.

**실제 적용 사례:**
강강박스의 최근 프로젝트에서 이러한 최적화를 적용한 결과:
- Lighthouse 성능 점수: 65점 → 95점
- First Contentful Paint: 2.1s → 0.8s
- Total Blocking Time: 450ms → 120ms
- SEO 점수: 88점 → 100점

성능 최적화는 일회성 작업이 아닌 지속적인 모니터링과 개선이 필요합니다.`,

    date: '2024-11-15',
    category: 'Tech',
  },
  {
    slug: 'startup-mvp-development-guide',
    title: '스타트업 MVP 개발, 3주 만에 완성하는 법',
    summary:
      '아이디어를 빠르게 검증하고 싶은 스타트업을 위한 MVP 개발 전략입니다. 최소한의 기능으로 최대의 가치를 전달하는 방법을 알려드립니다.',
    cover: '/images/blog/startup-mvp-development-guide.png',
    content: `# 스타트업 MVP 개발, 3주 만에 완성하는 법

"린 스타트업의 시대, 가설 검증이 곧 생존이다." 빠른 검증이 성공의 열쇠입니다. 강강박스가 여러 스타트업과 함께 진행한 MVP 개발 경험을 바탕으로 효율적인 3주 개발 프로세스를 상세히 소개합니다.

## MVP란 무엇인가?

MVP(Minimum Viable Product)는 최소한의 기능으로 고객의 피드백을 받을 수 있는 제품입니다. 핵심은 '완벽한 제품'이 아닌 '검증 가능한 제품'을 만드는 것입니다.

**일반적인 오해:**
- MVP = 품질이 낮은 제품 (X)
- MVP = 핵심 가치를 검증하는 최소 기능 (O)

## 1주차: 핵심 가치 정의하기

### 문제 정의 워크샵

첫 주는 코딩이 아닌 문제 정의에 집중합니다. "어떤 문제를 해결할 것인가?"라는 질문에 명확히 답해야 합니다.

**체크리스트:**
- 해결하려는 문제가 명확한가?
- 타겟 사용자가 구체적으로 정의되었는가?
- 핵심 기능이 3개 이하로 압축 가능한가?
- 경쟁 제품과의 차별점이 무엇인가?

### 사용자 페르소나 작성

실제 타겟 사용자를 구체화합니다. 나이, 직업, 불편함, 니즈를 상세히 기록하세요.

예시:
- 이름: 김스타 (가명)
- 직업: 3년차 프리랜서 디자이너
- 문제: 프로젝트 견적 계산에 매번 2-3시간 소요
- 니즈: 빠르고 정확한 견적서 자동 생성

### 핵심 기능 선정 (MoSCoW 기법)

- **Must have**: 반드시 있어야 하는 기능 (1-2개)
- **Should have**: 있으면 좋은 기능
- **Could have**: 여유가 있으면 추가
- **Won't have**: 이번 버전에서는 제외

## 2주차: 빠른 프로토타입 개발

### 기술 스택 선택

강강박스가 추천하는 빠른 MVP 개발 스택:

**프론트:**
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Shadcn/ui (컴포넌트 라이브러리)

**백엔드:**
- Supabase (인증 + DB + 스토리지)
- Vercel (배포)

이 조합으로 인프라 설정 시간을 90% 단축할 수 있습니다.

### 개발 일정 (2주)

**Day 1-2:** 프로젝트 세팅 & 디자인 시스템
**Day 3-5:** 핵심 기능 1 개발
**Day 6-8:** 핵심 기능 2 개발  
**Day 9-10:** 통합 테스트 & 버그 수정
**Day 11-12:** 배포 및 Analytics 설정
**Day 13-14:** 랜딩 페이지 & 문서화

### 코드 퀄리티 vs 속도

MVP 단계에서는 완벽한 코드보다 작동하는 코드가 우선입니다. 다만, 기본적인 타입 안정성과 컴포넌트 재사용성은 확보해야 합니다.

\`\`\`tsx
// 너무 복잡한 추상화는 나중에
// 기본적인 컴포넌트 재사용만 확보
function Button({ children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 rounded"
    >
      {children}
    </button>
  )
}
\`\`\`

## 3주차: 사용자 테스트와 피드백

### 얼리 어답터 찾기

첫 10명의 사용자를 직접 찾아가세요. SNS, 커뮤니티, 지인을 통해 적극적으로 홍보합니다.

**효과적인 방법:**
- Product Hunt, 디스콰이엇 같은 플랫폼 활용
- 타겟 커뮤니티에서 직접 문제 해결 제안
- 베타 테스터에게 소정의 혜택 제공

### 핵심 지표 설정

MVP 단계에서 측정해야 할 핵심 지표:

- **Activation Rate**: 회원가입 → 핵심 기능 사용
- **Retention**: 재방문율 (7일, 30일)
- **NPS**: 추천 의향 점수

\`\`\`tsx
// Google Analytics 4 설정 예시
gtag('event', 'sign_up', {
  method: 'email'
});

gtag('event', 'core_feature_used', {
  feature_name: 'calculator'
});
\`\`\`

### 피드백 수집 및 우선순위화

모든 피드백을 수용할 수는 없습니다. Impact(영향력) vs Effort(노력)으로 우선순위를 정하세요.

**실제 사례:**
강강박스가 진행한 SaaS MVP 프로젝트에서 3주 만에 첫 버전을 출시하고, 30명의 베타 사용자로부터 70%의 긍정 평가를 받았습니다.

## 성공의 핵심

- **완벽함보다는 빠른 출시**: Done is better than perfect
- **데이터 기반 의사결정**: 추측이 아닌 데이터로 검증
- **지속적인 개선 사이클**: Build - Measure - Learn 반복

MVP는 끝이 아닌 시작입니다. 빠르게 출시하고, 배우고, 개선하세요.`,
    date: '2024-11-10',
    category: 'Insight',
  },
  {
    slug: 'responsive-web-design-2024',
    title: '2024 반응형 웹 디자인 트렌드',
    summary:
      '모바일 우선 시대, 모든 디바이스에서 완벽한 사용자 경험을 제공하는 반응형 디자인 전략을 소개합니다. 최신 CSS 기법부터 성능 최적화까지 다룹니다.',
    cover: '/images/blog/responsive-web-design-2024.png',
    content: `# 2024 반응형 웹 디자인 트렌드

모바일 트래픽이 전체의 70%를 차지하는 시대입니다. 강강박스가 제안하는 2024년 반응형 웹 디자인 전략을 소개합니다.

## Container Queries로 진화하는 반응형 디자인

기존의 Media Queries를 넘어 Container Queries가 새로운 표준으로 자리잡고 있습니다. 컴포넌트 단위의 반응형 디자인이 가능해져 더욱 유연한 레이아웃을 구현할 수 있습니다.

## 모바일 퍼스트는 필수, 터치 최적화는 기본

모바일 우선 디자인은 이제 선택이 아닌 필수입니다. 터치 영역은 최소 44x44px 이상으로 설정하고, 제스처 기반 네비게이션을 적극 활용하세요.

**체크포인트:**
- 버튼과 링크의 간격이 충분한가?
- 스와이프 제스처가 직관적인가?
- 로딩 상태가 명확하게 표시되는가?

## 성능과 미학의 균형

아름다운 디자인과 빠른 로딩 속도를 모두 잡는 것이 2024년의 핵심 과제입니다. CSS 애니메이션은 transform과 opacity만 사용하고, 이미지는 반드시 최적화하세요.

**실전 팁:**
강강박스의 최근 프로젝트에서는 디자인 시스템을 구축하여 일관성과 성능을 동시에 확보했습니다.`,
    date: '2024-11-05',
    category: 'Design',
  },
  {
    slug: 'digital-transformation-success',
    title: '디지털 전환 성공 사례: 오프라인 비즈니스의 온라인 진출',
    summary:
      '20년 된 오프라인 매장이 디지털 전환으로 매출 300% 성장을 달성한 이야기입니다. 전통 비즈니스의 온라인 진출 전략을 공유합니다.',
    cover: '/images/blog/digital-transformation-success.png',
    content: `# 디지털 전환 성공 사례: 오프라인 비즈니스의 온라인 진출

디지털 전환은 단순히 웹사이트를 만드는 것이 아닙니다. 강강박스가 함께한 오프라인 비즈니스의 성공적인 디지털 전환 사례를 소개합니다.

## 현황 분석이 출발점

20년간 오프라인 매장을 운영하던 고객사는 코로나로 인한 매출 감소에 직면했습니다. 기존 고객 데이터를 분석하고 온라인 진출 전략을 수립했습니다.

## 단계별 디지털 전환 로드맵

**1단계: 온라인 주문 시스템 구축 (1개월)**
- 간편한 예약 및 주문 시스템
- 카카오톡 알림 연동
- 모바일 최적화

**2단계: 고객 데이터 활용 (2-3개월)**
- CRM 시스템 도입
- 맞춤형 프로모션 발송
- 재구매율 향상 전략

**3단계: 온라인 마케팅 (4-6개월)**
- 네이버 스마트플레이스 최적화
- 인스타그램 마케팅
- 고객 리뷰 관리

## 놀라운 성과

6개월 만에 온라인 주문이 전체 매출의 60%를 차지하게 되었고, 신규 고객이 200% 증가했습니다. 디지털 전환의 성공 요인은 단계적 접근과 데이터 기반 의사결정이었습니다.`,
    date: '2024-10-28',
    category: 'Insight',
  },
  {
    slug: 'tailwind-css-design-system',
    title: 'TailwindCSS로 디자인 시스템 구축하기',
    summary:
      '일관성 있는 UI와 빠른 개발 속도를 동시에 잡는 디자인 시스템 구축 가이드입니다. TailwindCSS를 활용한 효율적인 프론트엔드 개발 방법을 알려드립니다.',
    cover: '/images/blog/tailwind-css-design-system.png',
    content: `# TailwindCSS로 디자인 시스템 구축하기

디자인 시스템은 팀의 생산성을 크게 향상시킵니다. 강강박스가 실제로 사용하는 TailwindCSS 기반 디자인 시스템 구축 방법을 공유합니다.

## 컬러 팔레트 정의하기

Tailwind의 색상 시스템을 확장하여 브랜드 컬러를 정의하세요. Primary, Secondary, Accent 색상을 50부터 950까지 단계별로 설정하면 다양한 상황에 유연하게 대응할 수 있습니다.

\`\`\`javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#f0f9ff',
    // ...
    500: '#0ea5e9',
    // ...
    950: '#082f49',
  }
}
\`\`\`

## 재사용 가능한 컴포넌트 패턴

자주 사용하는 UI 패턴을 컴포넌트화하세요. 버튼, 카드, 입력 필드 등의 베이스 컴포넌트를 만들고 variant props로 다양한 스타일을 지원합니다.

## 타이포그래피 시스템

글꼴 크기, 행간, 자간을 일관되게 관리하세요. Tailwind의 프리셋을 활용하되, 프로젝트에 맞게 커스터마이징하는 것이 중요합니다.

**실전 팁:**
- 컴포넌트 라이브러리 문서화
- Storybook 활용
- 디자이너와의 긴밀한 협업`,
    date: '2024-10-20',
    category: 'Tech',
  },
  {
    slug: 'saas-product-launch-strategy',
    title: 'SaaS 제품 런칭 전략: 첫 100명의 유료 고객 확보하기',
    summary:
      'SaaS 제품의 성공적인 런칭을 위한 실전 전략입니다. 제품 개발부터 마케팅, 고객 확보까지 단계별로 알려드립니다.',
    cover: '/images/blog/saas-product-launch-strategy.png',
    content: `# SaaS 제품 런칭 전략: 첫 100명의 유료 고객 확보하기

SaaS 제품의 성공은 첫 100명의 유료 고객을 확보하는 데 달려있습니다. 강강박스가 여러 SaaS 스타트업과 함께한 경험을 바탕으로 실전 전략을 공유합니다.

## 프리랜칭: 웨이팅 리스트 만들기

제품 개발 전부터 잠재 고객을 모으세요. 랜딩 페이지를 만들고 이메일을 수집하는 것이 첫 단계입니다.

**효과적인 랜딩 페이지 요소:**
- 명확한 가치 제안 (3초 안에 이해 가능해야 함)
- 실제 문제 해결 사례
- 베타 테스터 혜택 강조
- 간단한 이메일 입력 폼

## 베타 테스트: 얼리 어답터 찾기

첫 10-20명의 유료 고객은 직접 찾아가세요. 타겟 고객이 모여있는 커뮤니티에 적극 참여하고, 1:1 온보딩을 제공하세요.

## 제품 주도 성장 (PLG) 전략

프리미엄 기능을 먼저 경험하게 하세요. 14일 무료 체험 후 자연스럽게 유료 전환되도록 설계하는 것이 핵심입니다.

**전환율을 높이는 방법:**
- 온보딩 프로세스 최적화
- 결제 전 가치 경험
- 적절한 타이밍의 업그레이드 제안

## 성공 지표 (KPI) 설정

초기에는 활성 사용자 수(DAU/MAU)와 이탈률에 집중하세요. 제품-시장 적합성(PMF)을 찾는 것이 우선입니다.`,
    date: '2024-10-12',
    category: 'Insight',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript 실전 활용법: 타입 안정성과 생산성 높이기',
    summary:
      'TypeScript를 제대로 활용하면 버그를 사전에 방지하고 개발 속도를 높일 수 있습니다. 실무에서 바로 쓸 수 있는 타입스크립트 베스트 프랙티스를 소개합니다.',
    cover: '/images/blog/typescript-best-practices.png',
    content: `# TypeScript 실전 활용법: 타입 안정성과 생산성 높이기

TypeScript는 단순한 타입 체크 도구가 아닙니다. 강강박스가 대규모 프로젝트에서 적용한 TypeScript 활용법을 공유합니다.

## 제네릭으로 재사용성 높이기

제네릭을 활용하면 타입 안정성을 유지하면서도 코드 재사용성을 크게 높일 수 있습니다.

\`\`\`typescript
// API 응답 타입을 제네릭으로
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 사용 예시
const userResponse: ApiResponse<User> = await fetchUser();
\`\`\`

## Union 타입과 Type Guard 활용

복잡한 비즈니스 로직을 타입으로 표현하세요. Union 타입과 Type Guard를 조합하면 런타임 에러를 컴파일 타임에 잡을 수 있습니다.

## 유틸리티 타입 마스터하기

TypeScript의 내장 유틸리티 타입(Partial, Pick, Omit 등)을 활용하면 보일러플레이트 코드를 크게 줄일 수 있습니다.

**실전 사례:**
강강박스 프로젝트에서 TypeScript 도입 후 런타임 에러가 60% 감소했고, 코드 리뷰 시간이 30% 단축되었습니다.

## API 타입 자동 생성

백엔드 API 스키마에서 TypeScript 타입을 자동 생성하는 도구(openapi-generator, GraphQL Code Generator)를 활용하면 프론트엔드와 백엔드 간 타입 불일치를 방지할 수 있습니다.`,
    date: '2024-10-05',
    category: 'Tech',
  },
  {
    slug: 'ux-research-methods',
    title: 'UX 리서치 방법론: 사용자의 진짜 니즈 찾기',
    summary:
      '좋은 제품은 사용자를 깊이 이해하는 데서 시작됩니다. 실무에서 활용하는 UX 리서치 방법과 인사이트 도출 과정을 소개합니다.',
    cover: '/images/blog/ux-research-methods.png',
    content: `# UX 리서치 방법론: 사용자의 진짜 니즈 찾기

사용자 리서치 없이 만든 제품은 실패할 확률이 높습니다. 강강박스가 실제 프로젝트에서 활용하는 UX 리서치 방법론을 소개합니다.

## 정성 조사: 사용자 인터뷰

5-10명의 타겟 사용자와 1:1 인터뷰를 진행하세요. 'Why'를 5번 묻는 5 Whys 기법으로 근본적인 문제를 파악할 수 있습니다.

**효과적인 인터뷰 질문:**
- "○○할 때 가장 불편한 점이 무엇인가요?"
- "이상적으로는 어떻게 되면 좋을까요?"
- "현재는 어떤 방식으로 해결하고 있나요?"

## 정량 조사: 설문과 데이터 분석

구글 애널리틱스와 Hotjar 같은 도구로 사용자 행동을 분석하세요. 클릭률, 이탈률, 체류 시간 등의 데이터는 객관적인 인사이트를 제공합니다.

## 사용성 테스트

프로토타입 단계에서 5명의 사용자에게 테스트를 진행하면 주요 문제점의 80%를 발견할 수 있습니다.

**테스트 시나리오 예시:**
1. 메인 페이지에서 원하는 서비스 찾기
2. 회원 가입 완료하기
3. 첫 주문 완료하기

## 페르소나와 사용자 여정 맵

리서치 결과를 바탕으로 페르소나를 만들고 사용자 여정을 시각화하세요. 팀 전체가 사용자를 이해하고 같은 방향을 바라보게 됩니다.`,
    date: '2024-09-28',
    category: 'Design',
  },
  {
    slug: 'web-accessibility-guide',
    title: '웹 접근성 가이드: 모두를 위한 웹 만들기',
    summary:
      '웹 접근성은 선택이 아닌 필수입니다. WCAG 2.1 기준을 충족하면서도 아름다운 디자인을 유지하는 방법을 알려드립니다.',
    cover: '/images/blog/web-accessibility-guide.png',
    content: `# 웹 접근성 가이드: 모두를 위한 웹 만들기

웹 접근성 준수는 법적 요구사항일 뿐만 아니라, 더 많은 사용자에게 서비스를 제공할 수 있는 기회입니다. 강강박스의 웹 접근성 구현 가이드를 소개합니다.

## 시맨틱 HTML 사용하기

div와 span 대신 header, nav, main, article, section 등의 시맨틱 태그를 사용하세요. 스크린 리더 사용자가 페이지 구조를 쉽게 이해할 수 있습니다.

\`\`\`html
<!-- Bad -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- Good -->
<header>
  <nav>...</nav>
</header>
\`\`\`

## 색상 대비 비율 지키기

텍스트와 배경의 명도 대비는 최소 4.5:1을 유지해야 합니다. 큰 텍스트(18pt 이상)는 3:1로 완화됩니다.

**도구 활용:**
- WebAIM Contrast Checker
- Chrome DevTools Accessibility Panel

## 키보드 네비게이션 지원

모든 기능이 키보드만으로도 접근 가능해야 합니다. Tab 키로 이동 순서를 확인하고, focus 스타일을 명확히 표시하세요.

## 대체 텍스트와 ARIA 레이블

이미지에는 반드시 alt 속성을 작성하고, 복잡한 UI 컴포넌트에는 ARIA 레이블을 추가하세요.

**실전 체크리스트:**
- 이미지에 의미있는 alt 텍스트 제공
- 버튼과 링크의 목적이 명확한가
- 폼 입력 필드에 레이블이 있는가
- 에러 메시지가 명확하게 전달되는가`,
    date: '2024-09-20',
    category: 'Tech',
  },
  {
    slug: 'agile-project-management',
    title: '애자일 프로젝트 관리: 작은 팀의 큰 성과',
    summary:
      '3-5명의 소규모 팀이 대기업 못지않은 결과물을 만드는 비결은 무엇일까요? 강강박스의 애자일 프로젝트 관리 노하우를 공유합니다.',
    cover: '/images/blog/agile-project-management.png',
    content: `# 애자일 프로젝트 관리: 작은 팀의 큰 성과

소규모 팀의 장점을 극대화하는 애자일 방법론을 소개합니다. 강강박스가 실제로 사용하는 프로젝트 관리 시스템을 공유합니다.

## 2주 스프린트로 빠르게 반복하기

2주 단위로 목표를 설정하고 달성하는 습관을 만드세요. 짧은 주기로 피드백을 받고 개선하는 것이 성공의 열쇠입니다.

**스프린트 구조:**
- 월요일: 스프린트 기획 (Sprint Planning)
- 매일 오전: 데일리 스탠드업 (15분)
- 목요일: 중간 점검
- 다음 금요일: 스프린트 리뷰 & 회고

## 칸반 보드로 업무 시각화

Notion이나 Linear 같은 도구로 업무를 시각화하세요. To Do, In Progress, Review, Done으로 단순하게 관리하는 것이 효과적입니다.

## 회고(Retrospective)의 중요성

2주마다 팀 회고를 진행하세요. 잘된 점(Keep), 개선할 점(Problem), 시도할 점(Try)을 정리하고 다음 스프린트에 반영합니다.

**효과적인 회고 질문:**
- 이번 스프린트에서 가장 자랑스러운 순간은?
- 다음에는 다르게 하고 싶은 것은?
- 팀이나 프로세스에서 개선이 필요한 부분은?

## 비동기 커뮤니케이션 활용

모든 논의를 실시간으로 할 필요는 없습니다. Notion에 문서로 정리하고, Slack의 스레드를 활용하여 비동기로 소통하세요.

**실천 팁:**
강강박스는 오전에만 회의를 하고, 오후는 집중 작업 시간으로 지정했습니다. 생산성이 40% 향상되었습니다.`,
    date: '2024-09-15',
    category: 'Culture',
  },
]

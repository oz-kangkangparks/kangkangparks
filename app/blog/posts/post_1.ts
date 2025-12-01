import { BlogPost } from "../types";

export const post_1: BlogPost = {
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
}

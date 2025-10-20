# Services 섹션 구현 가이드

## ✅ 구현 완료 항목

### 1. 레이아웃
- ✅ 중앙 정렬 섹션 제목 + 설명
- ✅ 반응형 그리드 시스템
  - 모바일: 1단 (grid-cols-1)
  - 태블릿: 2단 (md:grid-cols-2)
  - 데스크톱: 3단 (lg:grid-cols-3)
- ✅ 충분한 여백 (gap-8 lg:gap-10)

### 2. 카드 디자인
- ✅ 흰색 배경, 둥근 모서리 (rounded-2xl)
- ✅ 미세한 그림자 (shadow-md)
- ✅ 얇은 회색 테두리 (border-gray-100)
- ✅ 호버 효과:
  - 위로 떠오름 (hover:-translate-y-2)
  - 그림자 강화 (hover:shadow-xl)
  - 테두리 색상 변경 (hover:border-primary-200)

### 3. 카드 콘텐츠
- ✅ **아이콘** (react-icons)
  - FaBrain: AI 솔루션
  - FaNetworkWired: IoT 개발
  - FaCode: 맞춤형 소프트웨어
  - 핑크 톤 그라데이션 배경
  - 호버 시 확대 효과
- ✅ **서비스명** (h3, text-2xl, font-bold)
  - 호버 시 핑크색으로 변경
- ✅ **설명** (p, text-gray-600, leading-relaxed)
- ✅ **"자세히 보기" 링크** (호버 시 나타남)

### 4. 애니메이션
- ✅ Framer Motion 스크롤 애니메이션
- ✅ Stagger 효과 (0.15초 간격)
- ✅ Fade-in + Slide-up
- ✅ viewport 감지 (once: true)

## 🎨 디자인 특징

### 배경
```css
gradient-to-b from-white to-gray-50
```
부드러운 그라데이션으로 깊이감 표현

### 카드 스타일
```css
- 패딩: p-8
- 그림자: shadow-md → hover:shadow-xl
- 변환: hover:-translate-y-2
- 전환: transition-all duration-300
```

### 아이콘 컨테이너
```css
- 크기: w-16 h-16
- 배경: gradient from-primary-50 to-primary-100
- 호버: scale-110
```

### 색상 시스템
- **AI 솔루션**: text-primary-500
- **IoT 개발**: text-primary-600
- **맞춤형 소프트웨어**: text-primary-700

## 📊 서비스 데이터 구조

```typescript
interface Service {
  icon: IconType      // react-icons 타입
  title: string       // 서비스명
  description: string // 설명
  color: string       // 아이콘 색상 클래스
}

const services: Service[] = [
  {
    icon: FaBrain,
    title: 'AI 솔루션',
    description: '머신러닝과 딥러닝 기술로...',
    color: 'text-primary-500',
  },
  // ...
]
```

## 🚀 사용 방법

### 기본 사용
```tsx
import { Services } from "@/components/sections"

export default function Page() {
  return (
    <>
      <Services />
    </>
  )
}
```

### 서비스 추가/수정
```tsx
// components/sections/Services.tsx 파일에서

const services: Service[] = [
  {
    icon: FaRobot,  // react-icons에서 선택
    title: '새로운 서비스',
    description: '설명 추가...',
    color: 'text-primary-500',
  },
  // 기존 서비스들...
]
```

## 🎯 주요 기능

### 1. 동적 렌더링
- `.map()` 함수로 서비스 배열을 순회
- 데이터 중심 설계로 유지보수 용이

### 2. 반응형 디자인
```css
모바일 (< 768px): 1단 세로 배치
태블릿 (≥ 768px): 2단 그리드
데스크톱 (≥ 1024px): 3단 그리드
```

### 3. 호버 인터랙션
- **카드**: 위로 떠오름 + 그림자 강화
- **아이콘**: 확대 (scale-110)
- **제목**: 색상 변경 (primary-600)
- **화살표**: 페이드 인 + 우측 이동

### 4. 스크롤 애니메이션
- 뷰포트 진입 시 활성화
- Stagger로 순차적 표시
- `once: true`로 한 번만 실행

## 🎨 커스터마이징

### 카드 색상 변경
```tsx
// 호버 색상
hover:border-primary-200  // 테두리
group-hover:text-primary-600  // 제목
```

### 그리드 열 수 조절
```tsx
// 4단 그리드로 변경
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ..."
```

### 아이콘 크기 변경
```tsx
// 아이콘 컨테이너
className="w-20 h-20 ..."  // 16 → 20

// 아이콘 자체
className="text-4xl ..."  // 3xl → 4xl
```

### 애니메이션 속도 조절
```tsx
const cardVariants = {
  visible: {
    duration: 0.8,  // 0.6 → 0.8 (느리게)
  },
}
```

## 🌟 추가 개선 아이디어

### 1. 링크 추가
```tsx
<Link href={`/services/${service.slug}`}>
  <div className="...">
    {/* 카드 내용 */}
  </div>
</Link>
```

### 2. 숫자 배지
```tsx
<div className="text-4xl font-bold text-primary-500 mb-2">
  0{index + 1}
</div>
```

### 3. 읽기 시간 표시
```tsx
<span className="text-sm text-gray-400">
  ~5분 소요
</span>
```

### 4. 태그 추가
```tsx
<div className="flex gap-2 mt-4">
  {service.tags.map(tag => (
    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
      {tag}
    </span>
  ))}
</div>
```

## 📦 필요한 패키지
- `framer-motion`: ^12.23.24
- `react-icons`: ^5.0.0+

## 🔧 문제 해결

### 아이콘이 표시되지 않음
```bash
npm install react-icons
```

### 애니메이션이 작동하지 않음
- `'use client'` 지시어 확인
- Framer Motion 설치 확인

### 레이아웃이 깨짐
- Tailwind CSS 빌드 확인
- 브라우저 캐시 삭제


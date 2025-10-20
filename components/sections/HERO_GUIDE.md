# Hero 섹션 구현 가이드

## ✅ 구현 완료 항목

### 1. 레이아웃
- ✅ 100vh 풀스크린 높이
- ✅ 중앙 정렬 (수직/수평)
- ✅ 반응형 디자인

### 2. 배경 디자인
- ✅ Gradient 배경 (폴백)
- ✅ 배경 이미지 지원 (`/images/abstract-network-bg.jpg`)
- ✅ 어두운 오버레이 (bg-black/30)
- ✅ 데이터 시각화 패턴 효과

### 3. 타이포그래피
- ✅ H1: `text-5xl md:text-6xl lg:text-7xl`, `font-extrabold`, 흰색
- ✅ 내용: "데이터로 미래를 코딩합니다."
- ✅ P: `text-xl md:text-2xl`, `text-gray-300`
- ✅ 내용: "AI와 IoT 기술을 통해 비즈니스의 잠재력을 현실로 만듭니다."

### 4. CTA 버튼
- ✅ 핑크 배경 (`bg-primary-500`)
- ✅ 흰색 텍스트, 둥근 모서리 (`rounded-xl`)
- ✅ 호버 효과: 색상 변경 + scale-up
- ✅ 화살표 아이콘 포함

### 5. 애니메이션 (Framer Motion)
- ✅ 페이드 인 효과
- ✅ 슬라이드 업 효과 (y: 30 → 0)
- ✅ Stagger 애니메이션 (0.2초 간격)
- ✅ Custom easing 적용
- ✅ 스크롤 유도 애니메이션 (SCROLL + 화살표)

## 🎨 디자인 특징

### 배경
```css
- Gradient: gray-900 → primary-900/40 → gray-800
- 패턴: Radial gradient dots (데이터 시각화 느낌)
- 오버레이: 3단계 gradient (top: black/40, middle: black/30, bottom: black/50)
```

### 애니메이션 타이밍
```
1. H1: 0.1초 시작, 0.8초 지속
2. P: 0.3초 시작 (0.2초 stagger), 0.8초 지속
3. Button: 0.5초 시작 (0.2초 stagger), 0.8초 지속
4. Scroll: 1.2초 시작, 무한 반복
```

## 📸 배경 이미지 추가 방법

### Option 1: 직접 다운로드
1. Unsplash/Pexels에서 "abstract technology network" 검색
2. 1920x1080 이상 해상도 이미지 다운로드
3. `public/images/abstract-network-bg.jpg`로 저장

### Option 2: AI 이미지 생성
프롬프트 예시:
```
Abstract data network visualization with glowing connections, 
digital nodes, futuristic technology background, 
dark blue and purple gradient tones, 
high quality, cinematic, 8k
```

### Option 3: Gradient만 사용
- 이미지 없이도 gradient + 패턴으로 충분히 멋진 배경
- 별도 이미지 불필요

## 🚀 사용 방법

```tsx
// app/page.tsx
import { Hero } from "@/components/sections"

export default function Page() {
  return (
    <>
      <Hero />
      {/* 다른 섹션들... */}
    </>
  )
}
```

## 🎯 최적화 포인트

1. **이미지 최적화**
   - Next.js Image 컴포넌트 사용
   - Priority loading 적용
   - WebP 포맷 권장

2. **애니메이션 성능**
   - transform 속성 사용 (GPU 가속)
   - Custom easing으로 부드러운 효과
   - will-change 자동 적용

3. **반응형**
   - 모바일: text-5xl
   - 태블릿: text-6xl
   - 데스크톱: text-7xl

## 🎨 커스터마이징

### 색상 변경
```tsx
// 버튼 색상
className="... bg-primary-500 hover:bg-primary-600 ..."

// 텍스트 색상
className="... text-gray-300 ..."
```

### 애니메이션 속도 조절
```tsx
const itemVariants = {
  visible: {
    duration: 0.8, // 여기서 조절
    ease: [0.22, 1, 0.36, 1],
  },
}
```

### 텍스트 수정
```tsx
<h1>데이터로 미래를 코딩합니다.</h1>
<p>AI와 IoT 기술을 통해...</p>
```


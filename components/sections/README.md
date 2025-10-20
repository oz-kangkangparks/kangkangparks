# Sections Components

이 폴더에는 메인 페이지를 구성하는 섹션 컴포넌트들이 포함되어 있습니다.

## 컴포넌트 목록

### Hero.tsx
- 메인 히어로 섹션
- 메인 타이틀과 CTA 버튼 포함
- 그라데이션 배경 적용

### Services.tsx
- 서비스 소개 섹션
- 제공하는 서비스 카드 그리드

### Portfolio.tsx
- 포트폴리오 섹션
- 프로젝트 사례 카드 그리드
- 회색 배경

### TechStack.tsx
- 기술 스택 섹션
- 사용하는 기술들을 아이콘으로 표시

### Contact.tsx
- 연락처/문의 섹션
- 핑크 그라데이션 배경
- CTA 버튼 포함

### CTA.tsx
- Call-to-Action 섹션
- 강한 핑크 배경
- 프로젝트 시작 유도

## 사용 방법

```tsx
// 개별 import
import Hero from '@/components/sections/Hero'

// 또는 index를 통한 import
import { Hero, Services, Portfolio } from '@/components/sections'
```

## 디자인 시스템

모든 섹션 컴포넌트는 다음을 따릅니다:
- Tailwind CSS 유틸리티 클래스 사용
- 일관된 간격 (section 클래스: py-16 md:py-24)
- 반응형 그리드 레이아웃
- 정의된 컬러 팔레트 (primary, gray 등)


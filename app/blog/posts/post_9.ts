import { BlogPost } from "../types";

export const post_9: BlogPost = {
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
}

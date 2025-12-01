import { BlogPost } from "../types";

export const post_5: BlogPost = {
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
}

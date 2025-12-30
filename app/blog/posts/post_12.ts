import { BlogPost } from "../types";

export const post_12: BlogPost = {
  slug: 'interaction-optimization',
  title: '인터랙션 최적화: 0.1초의 디테일로 만드는 브랜드 신뢰',
  summary:
    'Sticky Scroll부터 Coverflow까지, 5가지 인터랙션을 직접 구현하며 검증했습니다. 0.1초의 타이밍과 Easing 함수가 사용자 경험에 미치는 영향을 분석하고, 강강박스만의 최적값을 찾아낸 과정을 공유합니다.',
  cover: '/images/blog/interaction-optimization.png',
  content: `# 인터랙션 최적화: 0.1초의 디테일로 만드는 브랜드 신뢰

웹사이트에서 첫인상은 3초 안에 결정됩니다. 그 3초 안에 사용자는 이 사이트가 신뢰할 만한지, 전문적인지, 다시 방문할 가치가 있는지를 판단합니다.

강강박스 홈페이지의 'Our Projects' 섹션을 만들 때, 우리는 단순히 프로젝트 목록을 나열하는 것 이상을 원했습니다. 사용자가 스크롤하거나 마우스를 움직일 때마다 자연스럽게 반응하는, 살아있는 인터페이스를 만들고 싶었습니다.

하지만 '자연스럽다'는 것은 주관적입니다. 어떤 애니메이션이 브랜드의 정체성을 가장 잘 표현하는가? 어떤 인터랙션이 사용자의 시선 흐름을 방해하지 않으면서도 몰입감을 주는가?

답을 찾기 위해, 우리는 수십 번 코드를 작성했습니다.

---

## 시안을 버리는 기준

### 1. Sticky Scroll Reveal - 시선의 분산

처음 구현한 것은 **Sticky Scroll Reveal**이었습니다. 스크롤하면 우측에는 프로젝트 설명이 흐르고, 좌측에는 해당 이미지가 고정되어 부드럽게 전환되는 방식입니다.

<video autoPlay loop muted playsInline className="w-full rounded-lg my-4">
  <source src="/videos/blog/sticky-scroll-demo.webm" type="video/webm" />
  <source src="/videos/blog/sticky-scroll-demo.mp4" type="video/mp4" />
</video>

구현 후 직접 테스트했습니다. 기술적으로는 문제없었습니다. 애니메이션도 매끄러웠습니다. 하지만 뭔가 부족했습니다.

실제로 사용해보니 시선이 좌우로 과도하게 이동했습니다. 텍스트를 읽다가 이미지를 보고, 다시 텍스트로 돌아오는 과정에서 인지 부하가 발생했습니다. 우리가 원한 것은 '정보 전달'이 아니라 '몰입'이었습니다.

### 2. Horizontal Parallax Scroll - 효율성의 문제

다음은 **Horizontal Parallax Scroll**이었습니다. 세로 스크롤이 가로 이동으로 전환되며 프로젝트 카드들이 영화 필름처럼 지나가는 방식입니다. 시각적으로는 인상적이었습니다.

<video autoPlay loop muted playsInline className="w-full rounded-lg my-4">
  <source src="/videos/blog/horizontal-parallax-demo.webm" type="video/webm" />
  <source src="/videos/blog/horizontal-parallax-demo.mp4" type="video/mp4" />
</video>

하지만 문제가 있었습니다. 스크롤 길이가 너무 길어졌습니다. 사용자는 프로젝트 5개를 보기 위해 화면 3배 길이를 스크롤해야 했습니다. 효율성이 떨어졌습니다. 인상적이지만 피곤한 경험이었습니다.

이번에도 버렸습니다.

### 3. Netflix-style Carousel - 익숙함의 함정

세 번째 시도는 **Netflix-style Carousel**이었습니다. 익숙한 UX였습니다. 마우스를 올리면 카드가 확대되며 상세 정보가 나타나는 방식. 사용자는 이미 이 패턴을 알고 있었고, 학습 비용이 없었습니다.

<video autoPlay loop muted playsInline className="w-full rounded-lg my-4">
  <source src="/videos/blog/netflix-carousel-demo.webm" type="video/webm" />
  <source src="/videos/blog/netflix-carousel-demo.mp4" type="video/mp4" />
</video>

하지만 '익숙하다'는 것은 양날의 검이었습니다. 너무 흔했습니다. 강강박스만의 정체성이 느껴지지 않았습니다.

### 4. Vertical Accordion - 모바일의 한계

네 번째, **Vertical Accordion**. 얇은 세로 패널들이 나란히 서 있다가, 마우스를 올리면 해당 패널이 부드럽게 펼쳐지는 방식. 공간 효율이 좋았고, 시각적으로 세련됐습니다.

<video autoPlay loop muted playsInline className="w-full rounded-lg my-4">
  <source src="/videos/blog/vertical-accordion-demo.webm" type="video/webm" />
  <source src="/videos/blog/vertical-accordion-demo.mp4" type="video/mp4" />
</video>

하지만 모바일에서 문제가 있었습니다. 가로 공간이 부족한 환경에서는 패널이 너무 좁아져 가독성이 떨어졌습니다.

### 5. Coverflow - 최종 선택

다섯 번째는 **Coverflow**였습니다.

<video autoPlay loop muted playsInline className="w-full rounded-lg my-4">
  <source src="/videos/blog/coverflow-demo.webm" type="video/webm" />
  <source src="/videos/blog/coverflow-demo.mp4" type="video/mp4" />
</video>

3D 회전 효과로 프로젝트들이 입체적으로 배치되는 방식입니다.

네 가지 시안을 테스트하며 우리의 선택 기준이 명확해졌습니다.

- 시선의 흐름이 자연스러울 것
- 모바일과 데스크톱 모두에서 일관된 경험을 제공할 것
- 브랜드의 정체성(기술력, 세련됨)을 표현할 것

Coverflow는 이 세 가지를 모두 충족했습니다.

---

## 0.1초의 차이

애니메이션 방식을 선택한 후에도 작업은 끝나지 않았습니다. 이제는 '어떻게 움직일 것인가'를 결정해야 했습니다.

카드가 회전할 때의 각도는 몇 도가 적당한가? 25도? 30도? 35도?  
전환 시간은 0.3초? 0.5초? 0.7초?  
움직임의 속도 변화는 어떻게 할 것인가? 일정한 속도? 처음엔 빠르다가 점점 느리게? 아니면 그 반대?

각각의 조합을 테스트했습니다. 코드 몇 줄의 차이였지만, 사용자가 느끼는 경험은 완전히 달랐습니다.

\`\`\`tsx
// 너무 빠른 전환 (0.3초)
transition={{ duration: 0.3 }}
// → 급하고 불안정한 느낌

// 너무 느린 전환 (0.7초)
transition={{ duration: 0.7 }}
// → 답답하고 지루한 느낌

// 최종 선택 (0.5초, 처음 빠르게 → 끝에서 부드럽게 감속)
transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// → 부드럽고 자연스러운 느낌
\`\`\`

움직임의 속도 변화 곡선 \`[0.22, 1, 0.36, 1]\`은 "처음에는 빠르게 시작했다가 끝에서 부드럽게 감속"하는 패턴입니다. 이 값을 찾기까지 수십 개의 조합을 테스트했습니다.

카드의 회전 각도도 마찬가지였습니다. 25도는 3D 효과가 약했고, 35도는 과했습니다. 최종적으로 선택한 -25도는 입체감을 주면서도 과하지 않은 균형점이었습니다.

\`\`\`tsx
animate={{
  rotateY: offset * -25,  // 최종 선택된 각도
  scale: isCenter ? 1 : 0.7,
  opacity: Math.abs(offset) > 2 ? 0 : 1,
}}
\`\`\`

이 모든 값들은 '감'이 아니라 '테스트'로 결정했습니다. 직접 클릭하고, 스크롤하고, 다양한 디바이스에서 확인했습니다.

"이 정도면 됐지"가 아니라 "이게 맞아"라는 확신이 들 때까지 반복했습니다.

---

## 집요함의 비즈니스 가치

### 왜 이렇게까지 했을까?

프로젝트 카드 애니메이션 하나가 매출에 직접적인 영향을 주지는 않습니다. 사용자는 애니메이션의 easing 함수가 무엇인지 알지 못합니다.

하지만 사용자는 '느낌'을 압니다.

### 디테일이 만드는 신뢰

매끄럽게 움직이는 사이트는 전문적으로 느껴집니다.  
디테일이 살아있는 인터페이스는 신뢰를 줍니다.  
그리고 그 신뢰는 "이 팀에게 우리 프로젝트를 맡겨도 되겠다"는 판단으로 이어집니다.

### 우리의 기준

강강박스는 클라이언트의 프로젝트에서도 같은 수준의 집요함을 유지합니다.

- "이 정도면 됐지"가 아니라 "이게 맞아"를 찾을 때까지
- 화려한 효과가 아니라 절제된 디테일을
- 기술 과시가 아니라 사용자 경험을

우리가 만드는 것은 단순히 '돌아가는 코드'가 아닙니다.  
사용자가 느끼고, 기억하고, 다시 찾는 경험입니다.

### 당신의 프로젝트에서도

당신의 프로젝트에서도 우리는 같은 질문을 던질 것입니다.

**"이게 정말 최선인가?"**

그리고 답을 찾을 때까지, 코드를 작성할 것입니다. 수십 번이라도.

---

**🔑 핵심 요약**
- Sticky Scroll, Horizontal Parallax, Netflix Carousel, Vertical Accordion, Coverflow 등 5가지 애니메이션 방식을 모두 구현하고 테스트
- 0.1초의 타이밍 차이와 easing 함수 조합을 수십 번 반복 테스트하여 최적값 도출
- "이 정도면 됐지"가 아닌 "이게 맞아"를 찾을 때까지 반복하는 업무 문화
- 인터랙션 디테일이 브랜드 신뢰도와 전문성 인식에 미치는 영향 검증

*절제된 디테일이 만드는 신뢰, 그것이 강강박스의 기술력입니다.*`,
  date: '2024-12-30',
  category: 'Tech',
}

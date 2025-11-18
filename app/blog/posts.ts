export type BlogPost = {
  slug: string
  title: string
  summary: string
  content: string
  date: string
  cover: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'first-story',
    title: '강강박스의 첫 번째 이야기',
    summary:
      '대외활동과 프로젝트 경험을 담은 첫 번째 블로그 글. 준비 과정과 배운 점을 정리했습니다.',
    cover: '/images/venture/venture_2.webp',
    content: `# 강강박스의 첫 번째 이야기\n\n## 1. 대외활동 준비\n이번 대외활동에서는 협약식과 공모전 발표를 동시에 준비했습니다.\n- 발표 자료를 1주일 전에 완성하고\n- 피드백 세션을 2회 진행했습니다.\n\n## 2. 현장에서 느낀 점\n현장 분위기와 참가자들의 반응이 매우 긍정적이었습니다.\n\n> "협업과 실행력을 동시에 보여준 경험"\n\n- 네트워킹 세션에서 3건의 추가 미팅을 확정했고\n- 현장 문의를 통해 새로운 고객을 알게 되었습니다.\n\n**다음 글에서는 후속 프로젝트와 준비 과정을 더 자세히 공유드릴게요.**`,
    date: '2024-05-20',
  },
]

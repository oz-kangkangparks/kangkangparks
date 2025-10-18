import HeroSlider from "@/components/HeroSlider"

export const metadata = {
  title: "Home | 강강박스",
  description: "기획부터 배포까지, 웹·앱·SaaS·AI 원스톱 제작",
  alternates: { canonical: "/" },
}

export default function Page(){
  return (
    <>
      <HeroSlider />
    </>
  )
}

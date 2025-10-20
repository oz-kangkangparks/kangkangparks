import HeroSlider from "@/components/HeroSlider"
import { Services } from "@/components/sections"

export const metadata = {
  title: "Home | 강강박스",
  description: "AI와 IoT 기술을 통해 비즈니스의 잠재력을 현실로 만듭니다. 기획부터 배포까지, 웹·앱·SaaS·AI 원스톱 제작",
  alternates: { canonical: "/" },
}

export default function Page(){
  return (
    <>
      <HeroSlider />
      <Services />
    </>
  )
}

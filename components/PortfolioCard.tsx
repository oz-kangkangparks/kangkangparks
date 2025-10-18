import Image from "next/image"

export default function PortfolioCard(){
  return (
    <div className="card">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image src="/placeholder.svg" alt="프로젝트 썸네일" fill className="object-cover" />
      </div>
      <h3 className="font-bold text-lg mt-4">프로젝트 타이틀</h3>
      <p className="muted text-sm mt-1">목표 · 기능 · 성과 요약</p>
    </div>
  )
}

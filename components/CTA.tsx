import Link from "next/link"
export default function CTA(){
  return (
    <section className="section bg-accent">
      <div className="container text-center">
        <p className="kicker">Get started</p>
        <h2 className="h2 mt-2">지금 프로젝트 상담을 시작해보자</h2>
        <p className="mt-3 muted">기획·디자인·개발·배포까지 한 번에</p>
        <Link href="/contact" className="btn-primary mt-6 inline-block">상담 요청</Link>
      </div>
    </section>
  )
}

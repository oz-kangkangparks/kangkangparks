"use client"
import { useState } from "react"

export default function Page(){
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setStatus("loading")
    try{
      const res = await fetch("/api/contact", { method:"POST", body: form })
      if(!res.ok) throw new Error()
      setStatus("ok")
      e.currentTarget.reset()
    }catch{
      setStatus("err")
    }
  }

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="py-20 bg-accent">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">Contact Us</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            프로젝트에 대해 자세히 알려주세요.<br/>
            최대한 빠르게 연락드리겠습니다.
          </p>
        </div>
      </section>

      {/* 상담 폼 */}
      <section className="section">
        <div className="container max-w-2xl">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">이름 *</label>
                <input 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">연락처 *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">회사</label>
              <input 
                name="company" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">프로젝트 유형 *</label>
                <select 
                  name="type" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">선택해주세요</option>
                  <option>웹사이트</option>
                  <option>모바일 앱</option>
                  <option>SaaS</option>
                  <option>AI 서비스</option>
                  <option>랜딩페이지</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">예상 예산</label>
                <input 
                  name="budget" 
                  placeholder="예: 2천만 ~ 5천만" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">요청 내용 *</label>
              <textarea 
                name="message" 
                rows={6} 
                required
                placeholder="프로젝트에 대해 자세히 설명해주세요..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
              />
            </div>

            <div className="text-center">
              <button 
                type="submit"
                className="btn-primary px-12 py-4 text-lg" 
                disabled={status==="loading"}
              >
                {status === "loading" ? "전송 중..." : "Submit"}
              </button>
            </div>

            {status==="ok" && (
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600 font-medium">문의가 성공적으로 접수되었습니다!</p>
                <p className="text-green-600 text-sm mt-1">빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            )}
            
            {status==="err" && (
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-medium">오류가 발생했습니다.</p>
                <p className="text-red-600 text-sm mt-1">다시 시도해주세요.</p>
              </div>
            )}
          </form>

          {/* 추가 연락처 정보 */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold mb-4">또는 직접 연락주세요</h3>
            <div className="inline-block bg-accent px-6 py-4 rounded-lg">
              <p className="text-gray-700">contact@kangkangparks.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 - 푸터 색상 */}
      <section className="section bg-accent">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">빠른 응답을 약속드립니다</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            접수된 문의는 24시간 이내에 답변드리며,<br/>
            긴급한 경우 직접 연락주시면 더욱 빠르게 도움드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-primary px-8 py-3">
              서비스 보기
            </a>
            <a href="/portfolio" className="btn-secondary px-8 py-3">
              포트폴리오 보기
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

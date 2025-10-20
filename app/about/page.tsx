import Image from "next/image"

export const metadata = {
  title: "About Us | 강강박스",
  description: "기획·디자인·개발·배포 원스톱 에이전시",
  alternates: { canonical: "/about" },
}

export default function Page(){
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="py-20 bg-accent">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">About Us</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">아이디어를 기술로 실현하고, 효율을 가치로 바꾸는 AI 개발 파트너가 되겠습니다.</p>
        </div>
      </section>

      {/* 실행 중심의 개발 파트너 섹션 */}
    <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">실행 중심의 개발 파트너</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="/images/about/developer-workspace.jpg" 
                alt="개발자 작업 환경" 
                width={600} 
                height={400} 
                className="rounded-2xl object-cover w-full shadow-lg"
                priority
                quality={75}
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                강강박스는 AI 웹 기반 서비스 개발에 특화된 팀입니다.
                아이디어 기획부터 설계, 개발, 배포, 운영까지 전 과정을 직접 관리하며 웹·모바일 서비스, 내부 시스템 등 다양한 프로젝트를 수행합니다.
              </p>
              
              <p className="text-lg leading-relaxed">
                AI API, 음성 처리, 데이터 분석, 자동화 시스템 등 기술을 React, Node.js, PostgreSQL, Tailwind CSS 등과 결합해 빠르고 완성도 높은 솔루션을 제공합니다.
              </p>
              
              <p className="text-lg leading-relaxed">
                프로젝트 규모와 상관없이 목적과 예산에 맞는 효율적 아키텍처를 설계하고, UI/UX 컨설팅부터 운영까지 전 과정을 지원합니다.
              </p>
              
              <p className="text-lg leading-relaxed">
                SaaS, AI 플랫폼, 관리형 웹 시스템 등 다양한 분야에서 효율적 프로세스를 수행할 수 있는 기술 역량을 보유하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 업무 분야 섹션 */}
      <section className="section bg-accent">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">주요 업무 분야</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">기업 초기 단계의 아이디어를 MVP</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">부터 상용 서비스까지 구현.</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">웹·앱 통합 서비스 제공 · 반응형</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">웹과 데이터 연동 아우르는<br/>크로스플랫폼 솔루션 구현</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">음성·문서·이미지 등 데이터 처리</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">빅 자동화 서비스 개발. GPT API와<br/>LangChain을 활용한 지능형<br/>시스템을 제공합니다</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">기업용 업무 시스템 구축</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">ERP, 재고관리, 업무 자동화 등<br/>실무 효율을 높이는 내부 시스템 설계.<br/>PostgreSQL 기반의 안정적인<br/>데이터 관리를 보장합니다.</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">기획 → 배포 전 과정 관리</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">설계부터 개발, 배포까지 지원<br/>상황 공유와 지속적인 기술 지원<br/>제공합니다.</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">빠른 상품과 지속 가능한 구조</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">스타트업에서 바로 서비스 가능한<br/>수준의 품질과 속도 보장, 운지속으로<br/>확장을 고려한 아키텍처로 설계지<br/>성장을 지원합니다.</p>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export const metadata = {
  title: "Services | 강강박스",
  description: "웹/앱/SaaS/AI 제작",
  alternates: { canonical: "/services" },
}

export default function Page(){
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="section bg-accent">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">SERVICES</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            귀사의 아이디어를 현실로 만드는 맞춤형 디지털 솔루션을 제공합니다.<br/>
            기획부터 개발·배포까지 전 과정을 함께하며, 빠르고 확장 가능한 서비스를 구축해 드립니다.
          </p>
        </div>
      </section>

      {/* 서비스 설명 */}
      <section className="section">
        <div className="container text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            AI·IoT·소프트웨어·웹 기반 서비스 개발에 특화되어 있습니다.<br/>
            단순한 코드 구현을 넘어, 사용자의 아이디어를 실제 제품으로 전환하는 실행 중심의 개발 파트너로 활동합니다.
          </p>
        </div>
      </section>

      {/* 서비스 그리드 */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 웹 서비스 및 SaaS 플랫폼 개발 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">웹 서비스 및 SaaS 플랫폼 개발</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/50 -z-0"></span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                기업 초기 단계의 아이디어를 MVP부터
                상용 서비스까지 구현.
                React, Node.js 등 최신 기술 스택으로
                확장 가능한 플랫폼을 제공합니다.
              </p>
            </div>

            {/* 모바일 및 통합 관리 시스템 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">모바일 및 통합 관리 시스템</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-300/50 -z-0"></span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                웹·앱 통합 서비스 제공,
                반응형 웹과 데이터 연동 아우르는
                크로스플랫폼 솔루션을 구현합니다.
              </p>
            </div>

            {/* AI 및 데이터 기반 솔루션 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">AI 및 데이터 기반 솔루션</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-green-300/50 -z-0"></span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                음성·문서·이미지 등 데이터 처리 기반
                자동화 서비스 개발.
                GPT API와 LangChain을 활용한
                지능형 시스템을 제공합니다.
              </p>
            </div>

            {/* 기업용 업무 시스템 구축 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">기업용 업무 시스템 구축</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-300/50 -z-0"></span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ERP, 재고관리, 업무 자동화 등
                실무 효율을 높이는 내부 시스템 설계.
                PostgreSQL 기반의 안정적인
                데이터 관리를 보장합니다.
              </p>
            </div>

            {/* 기획 → 배포 전 과정 관리 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">기획 → 배포 전 과정 관리</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-300/50 -z-0"></span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                설계부터 개발, 배포까지 지원
                상황 공유와 지속적인
                기술 지원 제공합니다.
              </p>
            </div>

            {/* 빠른 상품과 지속 가능한 구조 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">빠른 상품과 지속 가능한 구조</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-300/50 -z-0"></span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                스타트업에서 바로 서비스 가능한
                수준의 품질과 속도 보장,
                지속적으로 확장을 고려한
                아키텍처로 설계하여 성장을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 - 푸터 색상 */}
      <section className="section bg-accent">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">프로젝트를 시작해보세요</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            아이디어가 있으시다면 언제든 연락주세요.<br/>
            함께 성공적인 프로젝트를 만들어가겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary px-8 py-3">
              상담 신청하기
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

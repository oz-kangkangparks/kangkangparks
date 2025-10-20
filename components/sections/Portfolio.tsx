import React from 'react'

export default function Portfolio() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="kicker">포트폴리오</span>
          <h2 className="h2 mt-4 mb-6">
            성공적인 프로젝트 사례
          </h2>
          <p className="text-gray-600">
            다양한 산업군의 클라이언트와 함께한 프로젝트를 확인해보세요.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 포트폴리오 카드는 기존 PortfolioCard 컴포넌트를 활용할 수 있습니다 */}
        </div>
      </div>
    </section>
  )
}


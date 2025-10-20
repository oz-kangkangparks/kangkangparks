import React from 'react'

export default function TechStack() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="kicker">기술 스택</span>
          <h2 className="h2 mt-4 mb-6">
            최신 기술로 안정적인 서비스를 구현합니다
          </h2>
          <p className="text-gray-600">
            검증된 기술 스택으로 확장 가능하고 유지보수가 쉬운 솔루션을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* 기술 스택 아이콘 및 로고 */}
        </div>
      </div>
    </section>
  )
}


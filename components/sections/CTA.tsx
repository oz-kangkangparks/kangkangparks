import React from 'react'

export default function CTA() {
  return (
    <section className="section bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="h2 mb-6">
            지금 바로 프로젝트를 시작하세요
          </h2>
          <p className="text-lg mb-8 text-primary-50">
            강강박스와 함께라면 성공적인 디지털 제품을 만들 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-primary-600 font-semibold hover:bg-gray-50 transition">
              무료 상담 시작하기
            </a>
            <a href="/portfolio" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-transparent text-white border-2 border-white font-semibold hover:bg-white/10 transition">
              포트폴리오 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


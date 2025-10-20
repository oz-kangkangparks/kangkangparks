import React from 'react'

export default function Contact() {
  return (
    <section className="section bg-gradient-to-br from-primary/5 to-accent">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="kicker">문의하기</span>
          <h2 className="h2 mt-4 mb-6">
            프로젝트를 시작할 준비가 되셨나요?
          </h2>
          <p className="text-gray-600 mb-8">
            아이디어가 있으신가요? 지금 바로 상담을 시작해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              무료 상담 신청
            </a>
            <a href="mailto:contact@ganggangbox.example" className="btn-secondary">
              이메일 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


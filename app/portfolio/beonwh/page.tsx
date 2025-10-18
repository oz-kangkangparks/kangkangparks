import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "BEONWH | 강강박스 포트폴리오",
  description: "날씨 기반 감정 일기 앱 - BEONWH 프로젝트 상세",
  alternates: { canonical: "/portfolio/beonwh" },
}

export default function BeonwhPage() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="section bg-accent">
        <div className="container">
          <div className="mb-8">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          포트폴리오로 돌아가기
        </Link>
      </div>
          <div className="text-center">
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
              모바일 앱
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">BEONWH</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              날씨 기반 감정 일기 앱으로, 사용자의 감정 상태를 날씨와 연결하여 
              기록하고 분석할 수 있는 서비스입니다.
            </p>
          </div>
        </div>
      </section>

          {/* 메인 이미지 */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <Image 
              src="/images/projects/beonwh-main.png" 
              alt="BEONWH 메인 화면" 
              width={800} 
              height={600} 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 이미지들 */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">앱 화면 소개</h2>
          
          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (1).png"
                alt="BEONWH 메인 화면"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (2).png"
                alt="BEONWH 감정 입력"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (3).png"
                alt="BEONWH 일기 작성"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (4).png"
                alt="BEONWH 타이머"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (5).png"
                alt="BEONWH 설정"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (6).png"
                alt="BEONWH 통계"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (7).png"
                alt="BEONWH 음성 기능"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/beonwh/beonwh 1 (8).png"
                alt="BEONWH 힐링"
                width={3200}
                height={2400}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          {/* 주요 특징 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">주요 특징</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">실시간 날씨 연동</h4>
                    <p className="text-gray-600 text-sm">현재 위치의 날씨 정보를 자동으로 가져와 감정과 연결</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">직관적인 감정 표현</h4>
                    <p className="text-gray-600 text-sm">다양한 이모티콘과 색상으로 감정을 시각적으로 표현</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">감정 패턴 분석</h4>
                    <p className="text-gray-600 text-sm">시간별, 날씨별 감정 변화 패턴을 차트로 분석</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">개인 맞춤 리포트</h4>
                    <p className="text-gray-600 text-sm">개인의 감정 데이터를 바탕으로 한 인사이트 제공</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 정보 */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">프로젝트 개요</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>플랫폼:</strong> iOS, Android</li>
                <li><strong>개발 기간:</strong> 3개월</li>
                <li><strong>팀 구성:</strong> 기획 1명, 디자인 1명, 개발 2명</li>
                <li><strong>주요 기능:</strong> 감정 일기, 날씨 연동, 통계 분석</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'TypeScript', 'Firebase', 'Weather API', 'Chart.js'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 - 푸터 색상 */}
      <section className="section bg-accent">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">더 많은 프로젝트 보기</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            다양한 분야의 프로젝트를 통해 쌓은 경험과 노하우를<br/>
            다음 프로젝트에서 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/portfolio" className="btn-primary px-8 py-3">
              포트폴리오 보기
            </a>
            <a href="/contact" className="btn-secondary px-8 py-3">
              상담 신청하기
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

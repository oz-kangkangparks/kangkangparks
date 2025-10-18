import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "MoaPDF | 강강박스 포트폴리오",
  description: "PDF 편집부터 변환, 압축까지 프로그램 설치 없이 진행하는 MoaPDF",
  alternates: { canonical: "/portfolio/moapdf" },
}

export default function MoaPDFPage() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="section bg-gradient-to-r from-pink-50 to-rose-50">
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
            <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              웹 서비스
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MoaPDF</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PDF 편집부터 변환, 압축까지<br/>
              프로그램 설치 없이 진행하는 온라인 PDF 도구 서비스입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 메인 이미지 */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto mb-16">
            <Image 
              src="/images/projects/moapdf-main.png" 
              alt="MoaPDF 메인 화면" 
              width={1200} 
              height={800} 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 이미지들 */}
      <section className="section bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">서비스 화면 소개</h2>
          
          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (1).png"
                alt="MoaPDF 메인 화면"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (2).png"
                alt="MoaPDF PDF 편집 도구"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (3).png"
                alt="MoaPDF 파일 변환"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (4).png"
                alt="MoaPDF PDF 병합"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (5).png"
                alt="MoaPDF PDF 압축"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (6).png"
                alt="MoaPDF OCR 기능"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (7).png"
                alt="MoaPDF 디지털 서명"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moapdf/moapdf-1 (8).png"
                alt="MoaPDF 클라우드 연동"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          {/* 주요 특징 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">서비스 특징</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">설치 불필요</h4>
                    <p className="text-gray-600 text-sm">브라우저에서 바로 사용하는 온라인 PDF 도구</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">빠른 처리</h4>
                    <p className="text-gray-600 text-sm">클라우드 기반 고속 PDF 처리 엔진</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">보안 강화</h4>
                    <p className="text-gray-600 text-sm">SSL 암호화 및 자동 파일 삭제로 보안 보장</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">다양한 형식 지원</h4>
                    <p className="text-gray-600 text-sm">Word, Excel, PPT, 이미지 등 다양한 파일 형식 지원</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">무료 사용</h4>
                    <p className="text-gray-600 text-sm">기본 기능은 무료로 제공, 프리미엄 기능 선택 가능</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">모바일 최적화</h4>
                    <p className="text-gray-600 text-sm">PC, 태블릿, 스마트폰에서 모두 사용 가능</p>
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
                <li><strong>플랫폼:</strong> 웹 서비스</li>
                <li><strong>개발 기간:</strong> 5개월</li>
                <li><strong>팀 구성:</strong> 기획 1명, 디자인 1명, 개발 2명</li>
                <li><strong>주요 기능:</strong> PDF 편집, 변환, 압축, 병합, 분할</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PDF-lib', 'Canvas API', 'AWS S3', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 - 푸터 색상 */}
      <section className="section bg-gradient-to-r from-pink-50 to-rose-50">
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

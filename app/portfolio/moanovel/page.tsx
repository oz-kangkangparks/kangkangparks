import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "모아노벨 | 강강박스 포트폴리오",
  description: "AI를 활용한 창작부터 북킷 관리까지 웹소설 작가를 위한 모든 기능을 담은 모아노벨",
  alternates: { canonical: "/portfolio/moanovel" },
}

export default function MoanovelPage() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
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
            <div className="inline-block bg-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              AI 서비스
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">모아노벨</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI를 활용한 창작부터 북킷 관리까지<br/>
              웹소설 작가를 위한 모든 기능을 담은 종합 창작 플랫폼입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 메인 이미지 */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto mb-16">
            <Image 
              src="/images/projects/moanovel-main.webp" 
              alt="모아노벨 메인 화면" 
              width={1200} 
              height={800} 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 이미지들 */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">플랫폼 화면 소개</h2>
          
          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moanovel/moanovel 1 (1).webp"
                alt="모아노벨 AI 창작 도구"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moanovel/moanovel 1 (2).webp"
                alt="모아노벨 작품 관리"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moanovel/moanovel 1 (3).webp"
                alt="모아노벨 에디터"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moanovel/moanovel 1 (4).webp"
                alt="모아노벨 북킷 제작"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/moanovel/moanovel 1 (5).webp"
                alt="모아노벨 출간 지원"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          {/* 주요 특징 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">플랫폼 특징</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">AI 창작 지원</h4>
                    <p className="text-gray-600 text-sm">GPT 기반 스토리 아이디어 생성 및 문체 개선</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">체계적 관리</h4>
                    <p className="text-gray-600 text-sm">캐릭터, 설정, 줄거리를 체계적으로 관리</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">북킷 자동 생성</h4>
                    <p className="text-gray-600 text-sm">작품 정보를 바탕으로 자동 북킷 제작</p>
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
                    <h4 className="font-semibold">다중 플랫폼 출간</h4>
                    <p className="text-gray-600 text-sm">카카오페이지, 네이버 등 주요 플랫폼 연동</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">실시간 협업</h4>
                    <p className="text-gray-600 text-sm">편집자와 실시간으로 협업하며 작품 완성</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">수익 분석</h4>
                    <p className="text-gray-600 text-sm">플랫폼별 수익 현황 및 독자 반응 분석</p>
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
                <li><strong>플랫폼:</strong> 웹 애플리케이션</li>
                <li><strong>개발 기간:</strong> 6개월</li>
                <li><strong>팀 구성:</strong> 기획 2명, 디자인 1명, 개발 3명</li>
                <li><strong>주요 기능:</strong> AI 창작 도구, 북킷 관리, 출간 지원</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Prisma', 'Vercel'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 - 푸터 색상 */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
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

import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "재고관리 시스템 | 강강박스 포트폴리오",
  description: "제품의 입고 및 출고 정보 전반 통계 재고관리 시스템",
  alternates: { canonical: "/portfolio/inventory-system" },
}

export default function InventorySystemPage() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="section bg-gradient-to-r from-yellow-50 to-orange-50">
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
            <div className="inline-block bg-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              웹 시스템
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">재고관리 시스템</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              제품의 입고 및 출고 정보 전반 통계으로 
              재고 관리를 간편하게 처리할 수 있는 웹 기반 관리 시스템입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 메인 이미지 */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto mb-16">
            <Image 
              src="/images/projects/inventory-system.png" 
              alt="재고관리 시스템 메인 화면" 
              width={1200} 
              height={800} 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 이미지들 */}
      <section className="section bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">시스템 화면 소개</h2>
          
          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/inventory-system/inventory-system 1 (1).png"
                alt="재고관리 시스템 대시보드"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/inventory-system/inventory-system 1 (2).png"
                alt="재고 목록 화면"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/inventory-system/inventory-system 1 (3).png"
                alt="입출고 관리 화면"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/inventory-system/inventory-system 1 (4).png"
                alt="통계 분석 화면"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/inventory-system/inventory-system 1 (5).png"
                alt="알림 관리 화면"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/inventory-system/inventory-system 1 (6).png"
                alt="사용자 관리 화면"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          <div className="mb-80">
            <div className="flex justify-center max-w-none mx-auto">
              <Image 
                src="/images/projects/inventory-system/inventory-system 1 (7).png"
                alt="설정 관리 화면"
                width={1400}
                height={1000}
                className="rounded-xl w-full h-auto shadow-lg max-w-none"
              />
            </div>
          </div>

          {/* 주요 특징 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">시스템 특징</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">실시간 재고 추적</h4>
                    <p className="text-gray-600 text-sm">입출고 즉시 반영되는 실시간 재고 현황 관리</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">통계 대시보드</h4>
                    <p className="text-gray-600 text-sm">차트와 그래프로 한눈에 보는 재고 분석</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">바코드 스캔</h4>
                    <p className="text-gray-600 text-sm">바코드 스캔을 통한 빠른 제품 등록 및 조회</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">권한 관리</h4>
                    <p className="text-gray-600 text-sm">사용자별 접근 권한 및 기능 제한 관리</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">알림 시스템</h4>
                    <p className="text-gray-600 text-sm">재고 부족 및 중요 이벤트 실시간 알림</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">데이터 내보내기</h4>
                    <p className="text-gray-600 text-sm">Excel, PDF 형태로 리포트 및 데이터 내보내기</p>
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
                <li><strong>개발 기간:</strong> 4개월</li>
                <li><strong>팀 구성:</strong> 기획 1명, 디자인 1명, 개발 3명</li>
                <li><strong>주요 기능:</strong> 입출고 관리, 재고 현황, 통계 대시보드</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Chart.js', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 - 푸터 색상 */}
      <section className="section bg-gradient-to-r from-yellow-50 to-orange-50">
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

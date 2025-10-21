import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "PortFolio | 강강박스",
  description: "성과 중심 사례",
  alternates: { canonical: "/portfolio" },
}

export default function Page(){
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="py-20 bg-accent">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">PortFolio</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">
            포트폴리오를 찾아주셔서 감사합니다.<br/>
            그동안 참여한 작업과 함께 제공 서비스에 관한 자세한 정보를 확인해보세요.
          </p>
        </div>
      </section>

      {/* BEONWH 프로젝트 */}
    <section className="section">
      <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <Link href="/portfolio/beonwh" className="block">
                <Image
                  src="/images/projects/beonwh-main.webp"
                  alt="비온후 프로젝트 메인 화면"
                  width={600}
                  height={400}
                  className="rounded-2xl object-contain w-full shadow-lg bg-white p-4 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
                모바일 앱
              </div>
              <h2 className="text-3xl font-bold mb-4">비온후</h2>
              <p className="text-gray-600 mb-6">
                날씨 기반 감정 일기 앱으로, 사용자의 감정 상태를 날씨와 연결하여 
                기록하고 분석할 수 있는 서비스입니다.
              </p>
              <Link 
                href="/portfolio/beonwh" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 재고관리 프로젝트 */}
      <section className="section bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                웹 시스템
              </div>
              <h2 className="text-3xl font-bold mb-4">재고관리</h2>
              <p className="text-gray-700 mb-6">
                제품의 입고 및 출고 정보 전반 통계으로 
                재고 관리를 간편하게
              </p>
              <Link 
                href="/portfolio/inventory-system" 
                className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-600 font-medium"
              >
                자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <Link href="/portfolio/inventory-system" className="block">
                <Image
                  src="/images/projects/inventory-system.webp"
                  alt="재고관리 시스템 화면"
                  width={600}
                  height={400}
                  className="rounded-2xl object-contain w-full shadow-lg bg-white p-4 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MoaPDF 프로젝트 */}
      <section className="section bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <Link href="/portfolio/moapdf" className="block">
                <Image
                  src="/images/projects/moapdf-main.webp"
                  alt="MoaPDF 프로젝트 화면"
                  width={600}
                  height={400}
                  className="rounded-2xl object-contain w-full shadow-lg bg-white p-4 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                웹 서비스
              </div>
              <h2 className="text-3xl font-bold mb-4">MoaPDF</h2>
              <p className="text-gray-700 mb-6">
                PDF 편집부터 변환, 압축까지<br/>
                프로그램 설치 없이 진행하는 MoaPDF
              </p>
              <Link 
                href="/portfolio/moapdf" 
                className="inline-flex items-center gap-2 text-pink-700 hover:text-pink-600 font-medium"
              >
                자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 모아노벨 프로젝트 */}
      <section className="section bg-gradient-to-r from-blue-100 to-indigo-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                AI 서비스
              </div>
              <h2 className="text-3xl font-bold mb-4">모아노벨</h2>
              <p className="text-gray-700 mb-6">
                AI를 활용한 창작부터 북킷 관리까지<br/>
                웹소설 작가를 위한 모든 기능을 담은 모아노벨
              </p>
              <Link 
                href="/portfolio/moanovel" 
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-600 font-medium"
              >
                자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <Link href="/portfolio/moanovel" className="block">
                <Image
                  src="/images/projects/moanovel-main.webp"
                  alt="모아노벨 프로젝트 화면"
                  width={600}
                  height={400}
                  className="rounded-2xl object-contain w-full shadow-lg bg-white p-4 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

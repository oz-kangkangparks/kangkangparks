"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    kicker: "We Do",
    title: "강강박스",
    description: "AI·IoT·소프트웨어로 더 스마트한 세상을 만듭니다",
    background: "bg-accent" // 핑크톤
  },
  {
    id: 2,
    kicker: "We Show",
    title: "RESULTS",
    description: "AI·IoT·소프트웨어로 더 스마트한 세상을 만듭니다",
    background: "bg-gradient-to-r from-accent to-yellow-200" // 왼쪽 핑크 → 우측 노랑
  },
  {
    id: 3,
    kicker: "We Have",
    title: "STRATEGY",
    description: "AI·IoT·소프트웨어로 더 스마트한 세상을 만듭니다",
    background: "bg-gradient-to-r from-yellow-200 to-accent" // 왼쪽 노랑 → 우측 핑크
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // 4초마다 슬라이드 변경

    return () => clearInterval(timer)
  }, [])

  const current = slides[currentSlide]

  return (
    <section className={`section ${current.background} transition-all duration-1000 ease-in-out`}>
      <div className="container grid md:grid-cols-2 gap-8 items-center min-h-[60vh]">
        <div className="text-center md:text-left">
          <p className="kicker">{current.kicker}</p>
          <h1 className="h1 mt-2 text-5xl md:text-7xl font-black tracking-tight">
            {current.title}
          </h1>
          <p className="mt-4 muted text-lg">{current.description}</p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link 
              href="/portfolio" 
              className="px-6 py-3 rounded-xl border-2 border-ink hover:bg-ink hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Our Work 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* 슬라이드 인디케이터 */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="flex flex-col gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary scale-125" 
                    : "bg-ink/30 hover:bg-ink/50"
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

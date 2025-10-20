'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  // 애니메이션 variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const, // Custom easing
      },
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 배경 - 핑크 그라데이션 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-100 via-accent to-primary-200">
        {/* 배경 이미지가 있으면 표시 */}
        <div className="absolute inset-0">
          <Image
            src="/images/main.jpg"
            alt="강강박스 메인 배경"
            fill
            priority
            className="object-cover object-center opacity-0 transition-opacity duration-700"
            quality={90}
            onLoad={(e) => {
              const img = e.target as HTMLImageElement
              img.style.opacity = '1'
            }}
            onError={(e) => {
              // 이미지 로드 실패 시 숨김 (gradient 사용)
              const img = e.target as HTMLImageElement
              img.style.display = 'none'
            }}
          />
        </div>

        {/* 부드러운 패턴 효과 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 79, 139, 0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
      </div>

      {/* 콘텐츠 */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 메인 헤드라인 */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
          variants={itemVariants}
          style={{ letterSpacing: '-0.02em' }}
        >
          데이터로 미래를 코딩합니다.
        </motion.h1>

        {/* 서브 텍스트 */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          AI와 IoT 기술을 통해 비즈니스의 잠재력을 현실로 만듭니다.
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-500 rounded-xl shadow-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300 ease-out"
          >
            프로젝트 문의
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>

        {/* 스크롤 유도 애니메이션 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.3,
          }}
        >
          <div className="flex flex-col items-center text-gray-600">
            <span className="text-sm mb-2 tracking-wider">SCROLL</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}


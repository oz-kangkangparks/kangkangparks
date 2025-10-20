'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaNetworkWired, FaCode } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface Service {
  icon: IconType
  title: string
  description: string
  color: string
}

const services: Service[] = [
  {
    icon: FaBrain,
    title: 'AI 솔루션',
    description: '머신러닝과 딥러닝 기술로 데이터를 인사이트로 전환합니다. 예측 모델링, 자연어 처리, 컴퓨터 비전 등 AI 기반 비즈니스 솔루션을 제공합니다.',
    color: 'text-primary-500',
  },
  {
    icon: FaNetworkWired,
    title: 'IoT 개발',
    description: '사물인터넷 기술로 스마트한 연결을 구현합니다. 센서 데이터 수집, 실시간 모니터링, 자동화 시스템을 통해 효율성을 극대화합니다.',
    color: 'text-primary-600',
  },
  {
    icon: FaCode,
    title: '맞춤형 소프트웨어',
    description: '비즈니스 요구사항에 완벽히 맞춘 웹/앱 개발. 확장 가능하고 유지보수가 쉬운 코드로 장기적인 성장을 지원합니다.',
    color: 'text-primary-700',
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="kicker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            핵심 서비스
          </motion.span>
          <motion.h2
            className="h2 mt-4 mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Core Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI, IoT, 맞춤형 소프트웨어 개발을 통해 비즈니스의 디지털 전환을 실현합니다.
            <br />
            검증된 기술력으로 고객의 성공을 함께 만들어갑니다.
          </motion.p>
        </div>

        {/* 서비스 카드 그리드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary-200">
                  {/* 아이콘 */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 transition-transform duration-300 group-hover:scale-110">
                      <Icon className={`text-3xl ${service.color}`} />
                    </div>
                  </div>

                  {/* 제목 */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* 호버 시 나타나는 화살표 */}
                  <div className="mt-6 flex items-center text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">자세히 보기</span>
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  {/* 장식 요소 */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}



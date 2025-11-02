'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 'beonwh',
    title: '비온후',
    category: '모바일 앱',
    industry: '날씨 정보 서비스',
    description: '날씨 정보와 사용자 위치 기반 서비스를 제공하는 모바일 애플리케이션입니다. React Native로 크로스플랫폼 개발하여 iOS와 Android를 동시 지원합니다.',
    details: 'Firebase 실시간 데이터베이스를 활용한 실시간 날씨 업데이트, Google Maps API 기반 위치 서비스, 푸시 알림 기능을 구현했습니다.',
    tech: ['React Native', 'Firebase', 'Google Maps API', 'Push Notification'],
    images: ['/images/beonwh.webp', '/images/beonwh-1.webp', '/images/beonwh-2.webp'],
    mainImage: '/images/beonwh.webp'
  },
  {
    id: 'inventory',
    title: '재고관리 시스템',
    category: '웹 시스템',
    industry: '제조 · 물류',
    description: '실시간 재고 추적 및 자동 발주 시스템으로 운영 효율을 200% 향상시킨 업무 관리 시스템입니다.',
    details: 'PostgreSQL 기반의 안정적인 데이터 관리, 실시간 재고 알림, 자동 발주 로직, 다양한 리포트 기능을 제공합니다.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'WebSocket'],
    images: ['/images/재고관리 (1).webp', '/images/inventory-system-2.webp', '/images/inventory-system-3.webp'],
    mainImage: '/images/재고관리 (1).webp'
  },
  {
    id: 'moapdf',
    title: 'MoaPDF',
    category: '웹 서비스',
    industry: 'SaaS',
    description: 'AI 기반 PDF 변환 및 편집 도구로 월 10만 건 이상의 문서를 처리하는 SaaS 플랫폼입니다.',
    details: 'AWS Lambda를 활용한 서버리스 아키텍처, Python 기반 PDF 처리 엔진, Next.js로 구현된 빠른 사용자 인터페이스를 제공합니다.',
    tech: ['Next.js', 'Python', 'AWS Lambda', 'S3', 'DynamoDB'],
    images: ['/images/moapdf-main.webp', '/images/moapdf-2.webp', '/images/moapdf-3.webp'],
    mainImage: '/images/moapdf-main.webp'
  },
  {
    id: 'moanovel',
    title: '모아노벨',
    category: 'AI 서비스',
    industry: '콘텐츠',
    description: 'GPT-4 기반 소설 생성 플랫폼으로 일일 활성 사용자 5,000명 이상을 보유한 AI 콘텐츠 서비스입니다.',
    details: 'OpenAI GPT-4 API 연동, Redis 캐싱으로 빠른 응답 속도, Next.js 서버 사이드 렌더링으로 SEO 최적화를 구현했습니다.',
    tech: ['Next.js', 'GPT-4 API', 'Redis', 'Prisma', 'PostgreSQL'],
    images: ['/images/모아노벨 (1).webp', '/images/moanovel-2.webp', '/images/moanovel-3.webp'],
    mainImage: '/images/모아노벨 (1).webp'
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              다양한 산업 분야에서 검증된 솔루션을<br className="hidden sm:block" />
              제공한 프로젝트들을 소개합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-neutral-950" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid gap-16">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={`order-1 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden border border-neutral-800 group">
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-lg bg-neutral-900/80 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-white border border-neutral-700">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`order-2 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm text-cyan-400 mb-2">{item.industry}</p>
                  <h2 className="text-4xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-base text-neutral-400 mb-8 leading-relaxed">
                    {item.details}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                      기술 스택
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-lg bg-neutral-800/50 px-3 py-1.5 text-sm font-medium text-neutral-300 border border-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-neutral-900" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              숫자로 보는{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                성과
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: '완료된 프로젝트' },
              { value: '100K+', label: '월간 활성 사용자' },
              { value: '99.9%', label: '시스템 가동률' },
              { value: '24/7', label: '지원 서비스' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-neutral-950" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              다음 프로젝트를 시작할 준비가 되셨나요?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              지금 바로 문의하시고 무료 컨설팅을 받아보세요.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-neutral-950 hover:bg-neutral-100 transition-colors shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 시작하기 <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/Layout';

export default function PortfolioPage() { return <PortfolioSection />; }

function PortfolioSection() {
  const items = [
    { 
      id: 'bionhu',
      title: '모바일 앱 (비온후)', 
      desc: '크로스플랫폼 모바일 앱',
      details: '날씨 정보와 사용자 위치 기반 서비스를 제공하는 모바일 애플리케이션',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'inventory',
      title: '웹 시스템 (재고관리)', 
      desc: '업무 효율을 높이는 관리형 시스템',
      details: '실시간 재고 추적 및 자동 발주 시스템으로 운영 효율 200% 증가',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      gradient: 'from-emerald-500 to-green-500'
    },
    { 
      id: 'moapdf',
      title: '웹 서비스 (MoaPDF)', 
      desc: '문서 처리 중심 웹 서비스',
      details: 'AI 기반 PDF 변환 및 편집 도구로 월 10만 건 이상의 문서 처리',
      tech: ['Next.js', 'Python', 'AWS Lambda'],
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      id: 'moanovel',
      title: 'AI 서비스 (모아노벨)', 
      desc: '생성형 AI 기반 콘텐츠 서비스',
      details: 'GPT-4 기반 소설 생성 플랫폼으로 일일 활성 사용자 5,000명 이상',
      tech: ['Next.js', 'GPT-4 API', 'Redis'],
      gradient: 'from-purple-500 to-pink-500'
    },
  ];
  
  return (
    <>
      <Section id="portfolio-hero">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="mt-6 text-xl text-neutral-300">
              선별된 작업 사례를 소개합니다.
            </p>
            <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto">
              다양한 산업 분야에서 검증된 솔루션을 제공한 프로젝트들입니다.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="portfolio-grid" band>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {items.map((it, idx) => (
              <motion.a
                key={it.title}
                href={`#/portfolio/${it.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-neutral-700 transition-all cursor-pointer"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${it.gradient}`} />
                
                <div className="p-8">
                  {/* Title and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-400 group-hover:to-cyan-400 transition-all">
                        {it.title}
                      </h3>
                      <p className="text-sm text-neutral-400">{it.desc}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  {/* Details */}
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {it.details}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                      기술 스택
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {it.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-lg bg-neutral-800/50 px-3 py-1.5 text-xs font-medium text-neutral-300 border border-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* View Details Link */}
                  <div className="mt-6 text-sm text-pink-400 group-hover:text-pink-300 transition-colors">
                    상세 보기 →
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${it.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section id="stats">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              숫자로 보는 <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">성과</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="portfolio-cta" band>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12"
            style={{ pointerEvents: 'auto' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              다음 프로젝트를 시작할 준비가 되셨나요?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              지금 바로 문의하시고 무료 컨설팅을 받아보세요.
            </p>
            <motion.a
              href="#/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-neutral-950 hover:bg-neutral-100 transition-colors shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 시작하기 <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

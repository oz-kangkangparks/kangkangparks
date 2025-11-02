'use client'

import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    step: '01',
    icon: '💬',
    title: '문의 및 상담',
    description: '프로젝트 목표와\n요구사항을 분석하고\n최적의 솔루션을\n제안합니다.',
  },
  {
    step: '02',
    icon: '📋',
    title: '요구사항 정의',
    description: '기능 명세와\n기술 스택을 확정하고\n일정을 수립합니다.',
  },
  {
    step: '03',
    icon: '💻',
    title: '설계 및 개발',
    description: '아키텍처를 설계하고\n단계별로 개발을\n진행합니다.',
  },
  {
    step: '04',
    icon: '🔄',
    title: '테스트 및 피드백',
    description: '품질 검증과\n피드백으로\n완성도를 높입니다.',
  },
  {
    step: '05',
    icon: '✅',
    title: '배포 및 운영',
    description: '안정적으로 배포하고\n유지보수를 지원합니다.',
  },
];

export default function Process() {
  return (
    <section className="relative bg-black py-16">
      <div className="mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
              처음부터 끝까지, 함께 완성합니다.
            </h2>
            <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed">
              명확한 프로세스로 프로젝트의 모든 단계를 투명하게 진행하며, 완성 후에도 지속적인 지원을 약속합니다.
            </p>
          </motion.div>

          {/* Right - Empty Space */}
          <div></div>
        </div>
      </div>

      <div className="mx-auto px-6 lg:px-12">
        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">{step.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-neutral-300 leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

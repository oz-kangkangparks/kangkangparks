'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Zap, Globe } from 'lucide-react';
import { Section } from '@/components/Layout';

export default function AboutPage() { return <AboutSection />; }

function AboutSection() {
  return (
    <>
      <Section id="about-hero">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="mt-6 text-xl text-neutral-300">
              아이디어를 기술로 실현하고, 효율을 가치로 바꾸는 AI 개발 파트너
            </p>
            <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto">
              기획부터 설계, 개발, 배포, 운영까지 전 과정을 함께합니다.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="about-content" band>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">전문성</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    강강박스는 AI 웹 기반 서비스 개발에 특화된 팀입니다. 아이디어 기획부터 설계, 개발, 배포, 운영까지 전 과정을 직접 관리하며 웹·모바일 서비스, 내부 시스템 등 다양한 프로젝트를 수행합니다.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">기술 스택</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    AI API, 음성 처리, 데이터 분석, 자동화 시스템 등 기술을 React, Node.js, PostgreSQL, Tailwind CSS 등과 결합해 빠르고 완성도 높은 솔루션을 제공합니다.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">맞춤형 솔루션</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    프로젝트 규모와 상관없이 목적과 예산에 맞는 효율적 아키텍처를 설계하고, UI/UX 컨설팅부터 운영까지 전 과정을 지원합니다.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">다양한 경험</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    SaaS, AI 플랫폼, 관리형 웹 시스템 등 다양한 분야에서 효율적 프로세스를 수행할 수 있는 기술 역량을 보유하고 있습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Team Values */}
      <Section id="values">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              우리의 <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">가치</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '혁신',
                desc: '최신 기술과 방법론을 적용하여 혁신적인 솔루션을 제공합니다.',
                icon: <Zap className="h-5 w-5" />
              },
              {
                title: '품질',
                desc: '코드 품질과 사용자 경험을 최우선으로 생각합니다.',
                icon: <Shield className="h-5 w-5" />
              },
              {
                title: '협업',
                desc: '고객과의 긴밀한 소통을 통해 최고의 결과를 만들어냅니다.',
                icon: <Globe className="h-5 w-5" />
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

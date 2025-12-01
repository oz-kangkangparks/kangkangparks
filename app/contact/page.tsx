'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';
import { Container } from '@/components/Layout';

export default function ContactPage() {
  return (
    <div className="bg-neutral-950 text-white">
      <HeroSection />
      <ContactFormSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black px-4 py-24 sm:px-6">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.6em] text-neutral-400">
          contact us
        </p>
        <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
          함께 만드는 새로운 가치
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
          당신의 아이디어가 현실이 되는 곳. 강강박스와 함께 혁신적인 프로젝트를 시작해보세요.
        </p>
      </motion.div>
    </section>
  );
}

function ExampleBox() {
  const sample = `이름: 홍길동\n이메일: hong@example.com\n회사: Axiom Labs\n예상 예산: 3천만 원 ~ 5천만 원\n요구사항: 공장 설비 온도 센서 데이터 기반 이상 탐지 모델 개발 및 대시보드 구축을 희망합니다. 파일 연동: CSV/REST 가능하며, 4주 내 PoC 진행을 원합니다.`;
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold text-neutral-400">작성 예시</div>
        <button 
          type="button" 
          onClick={() => navigator.clipboard?.writeText(sample)} 
          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
        >
          <Code className="w-3 h-3" />
          예시 복사
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-xs text-neutral-400 leading-relaxed font-mono bg-black/20 p-4 rounded-xl border border-neutral-800/50">{sample}</pre>
    </div>
  );
}

function ContactFormSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">프로젝트 문의</h2>
              <p className="text-neutral-400">
                구체적인 요구사항을 알려주시면 더 정확한 상담이 가능합니다.
              </p>
            </div>

            <ExampleBox />

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400">이름</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="홍길동"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400">연락처</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">이메일</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="hello@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">프로젝트 내용</label>
                <textarea
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-4 text-sm outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all min-h-[200px] resize-none"
                  placeholder="프로젝트의 목적, 일정, 예산 등 구체적인 내용을 적어주세요."
                />
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-base font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 mt-4"
              >
                문의하기 <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
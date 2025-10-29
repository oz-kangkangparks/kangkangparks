'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, ArrowRight } from 'lucide-react';
import { Section } from '@/components/Layout';

export default function ContactPage() { return <Contact />; }

function ExampleBox() {
  const sample = `이름: 홍길동\n이메일: hong@example.com\n회사: Axiom Labs\n예상 예산: 3천만 원 ~ 5천만 원\n요구사항: 공장 설비 온도 센서 데이터 기반 이상 탐지 모델 개발 및 대시보드 구축을 희망합니다. 파일 연동: CSV/REST 가능하며, 4주 내 PoC 진행을 원합니다.`;
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold text-neutral-400">예시</div>
        <button 
          type="button" 
          onClick={() => navigator.clipboard?.writeText(sample)} 
          className="text-xs text-pink-400 hover:text-pink-300 transition-colors"
        >
          예시 복사
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-xs text-neutral-400 leading-relaxed font-mono">{sample}</pre>
    </div>
  );
}

function Contact() {
  return (
    <>
      <Section id="contact-hero">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="mt-6 text-xl text-neutral-300">
              프로젝트에 대해 알려주세요
            </p>
            <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto">
              24시간 이내에 답변드리겠습니다
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="contact-form" band>
        <div className="mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2">이메일</h3>
                <p className="text-sm text-neutral-400">contact@kangkangbox.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-4">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2">응답 시간</h3>
                <p className="text-sm text-neutral-400">평균 24시간 이내</p>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h3 className="text-2xl font-bold mb-6">프로젝트를 알려주세요</h3>
                
                <div className="mb-6">
                  <ExampleBox />
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">
                      프로젝트 내용
                    </label>
                    <textarea
                      placeholder="이름, 이메일, 회사, 예상 예산, 요구사항 등을 자유롭게 작성해주세요"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-4 text-sm outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all min-h-[240px] resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-neutral-950 hover:bg-neutral-100 transition-colors shadow-lg"
                  >
                    보내기 <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ or Additional Info */}
      <Section id="contact-info">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-neutral-400 mb-8">
              프로젝트 규모, 예산, 기간에 대한 상담이 필요하시면 언제든지 연락주세요.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#/services"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/50 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors backdrop-blur"
              >
                서비스 보기
              </a>
              <a
                href="#/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/50 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors backdrop-blur"
              >
                포트폴리오 보기
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
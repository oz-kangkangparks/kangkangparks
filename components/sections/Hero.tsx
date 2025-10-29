'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/Layout';
import { Canvas2DHeroScene } from '@/components/canvas/hero-canvas';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Canvas2DHeroScene variant="black" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(closest-side,black,transparent)] opacity-70">
          <DotGrid />
        </div>
        {/* Gradient Background - Resend Style */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-cyan-500/5 opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10 min-h-[100svh] flex items-center py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Heading - Resend Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                AI·IoT·소프트웨어
              </span>
              <br />
              <span className="text-white">for developers</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            아이디어를 기술로 실현하는 최고의 방법.
            <br />
            강강박스와 함께 트랜잭션 및 마케팅 시스템을 대규모로 구축하세요.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-neutral-950 hover:bg-neutral-100 transition-colors shadow-lg"
            >
              시작하기 <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#/services"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/50 px-6 py-4 text-base font-semibold text-white hover:bg-neutral-800 transition-colors backdrop-blur"
            >
              서비스 보기
            </a>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <p className="text-sm text-neutral-500 mb-6">다양한 규모의 기업들이 강강박스를 신뢰합니다</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['AI/ML', 'IoT', 'Cloud', 'Frontend', 'Design', 'Security'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut"
                  }}
                  className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent" />
    </section>
  );
}

function DotGrid() {
  const dots = Array.from({ length: 14 * 24 });
  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-24 grid-rows-14 gap-2 p-4">
        {dots.map((_, i) => (
          <motion.div key={i} className="h-1 w-1 rounded-full bg-white/10"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: (i % 24) * 0.02 }} />
        ))}
      </div>
    </div>
  );
}
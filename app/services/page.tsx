'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Zap, TerminalSquare, Globe } from 'lucide-react';
import { Section } from '@/components/Layout';

export default function ServicesPage() { return <Services />; }

function Services() {
  const items = [
    { 
      title: 'AI/ML', 
      text: '전략·데이터·모델·LLMOps', 
      icon: <Code className="h-6 w-6" />,
      gradient: 'from-pink-500 to-rose-500',
      features: ['GPT-4 통합', '커스텀 모델 훈련', 'MLOps 파이프라인']
    },
    { 
      title: 'IoT', 
      text: '디바이스·펌웨어·엣지 추론', 
      icon: <TerminalSquare className="h-6 w-6" />,
      gradient: 'from-cyan-500 to-blue-500',
      features: ['센서 통합', '실시간 데이터', '엣지 컴퓨팅']
    },
    { 
      title: 'Cloud', 
      text: 'API·데이터 파이프라인·MLOps', 
      icon: <Globe className="h-6 w-6" />,
      gradient: 'from-violet-500 to-purple-500',
      features: ['확장 가능한 API', '자동 스케일링', '멀티 리전']
    },
    { 
      title: 'Frontend', 
      text: '웹·모바일·대시보드', 
      icon: <Code className="h-6 w-6" />,
      gradient: 'from-amber-500 to-orange-500',
      features: ['React/Next.js', '반응형 디자인', 'PWA']
    },
    { 
      title: 'Design', 
      text: '리서치·UX·프로토타이핑', 
      icon: <Zap className="h-6 w-6" />,
      gradient: 'from-emerald-500 to-green-500',
      features: ['사용자 리서치', 'UI/UX 설계', '프로토타이핑']
    },
    { 
      title: 'Security', 
      text: 'IAM·비밀관리·규정 준수', 
      icon: <Shield className="h-6 w-6" />,
      gradient: 'from-red-500 to-pink-500',
      features: ['SOC 2 준수', 'GDPR 대응', '보안 감사']
    },
  ];
  
  return (
    <>
      <Section id="services-hero">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                서비스
              </span>
            </h1>
            <p className="mt-6 text-xl text-neutral-300">
              아이디어부터 운영까지 한 팀이 끝냅니다.
            </p>
            <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto">
              AI·IoT·소프트웨어를 한곳에서 제공합니다. 실험 속도와 운영 안정성을 균형 있게 잡습니다.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="services-grid" band>
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-neutral-700 transition-all duration-300"
              >
                {/* Icon with Gradient */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${it.gradient} mb-6`}>
                  {it.icon}
                </div>
                
                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-2">{it.title}</h3>
                <p className="text-sm text-neutral-400 mb-4">{it.text}</p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {it.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Additional Benefits Section */}
      <Section id="benefits">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              왜 <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">강강박스</span>인가?
            </h2>
            <p className="text-lg text-neutral-400 mb-12">
              우리는 단순히 코드를 작성하는 것이 아닙니다. 비즈니스 성공을 위한 기술 파트너입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: '빠른 출시',
                desc: '프로토타입부터 프로덕션까지 최소 시간으로 이동합니다.',
                icon: <Zap className="h-5 w-5" />
              },
              {
                title: '검증된 기술',
                desc: '현대적이고 안정적인 기술 스택으로 리스크를 줄입니다.',
                icon: <Shield className="h-5 w-5" />
              },
              {
                title: '전문가 팀',
                desc: 'AI, IoT, 웹 개발 전문가들이 함께 작업합니다.',
                icon: <Code className="h-5 w-5" />
              },
              {
                title: '지속적인 지원',
                desc: '배포 후에도 지속적인 유지보수와 개선을 제공합니다.',
                icon: <Globe className="h-5 w-5" />
              },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-neutral-400">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function TiltCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<{ transform: string }>({ transform: '' });
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setStyle({ transform: `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)` });
      }}
      onMouseLeave={() => setStyle({ transform: '' })}
      className="rounded-2xl border border-neutral-900 bg-neutral-950 p-4 text-center [transform-style:preserve-3d] transition will-change-transform"
      style={style}
    >
      {children}
    </motion.div>
  );
}

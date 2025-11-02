'use client'

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '50+',
    label: '완료 프로젝트',
    description: '제조, 물류, SaaS 등 다양한 분야'
  },
  {
    number: '주 2회',
    label: '진행상황 보고',
    description: '카카오톡으로 실시간 소통'
  },
  {
    number: '3개월',
    label: '평균 완성 기간',
    description: '기획부터 배포까지 체계적 진행'
  },
  {
    number: '무료',
    label: '유지보수 1개월',
    description: '배포 후 안정화까지 책임'
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-neutral-950 py-32">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl mb-24">
        <p className="text-sm text-neutral-400 uppercase tracking-widest mb-4">
          Why Choose Us
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-3xl">
            투명한 진행,<br />확실한 결과
          </h2>
        </motion.div>
      </div>

      <div className="mx-auto px-6 lg:px-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t-2 border-white pt-8"
            >
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {stat.label}
              </h3>
              <p className="text-base text-neutral-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

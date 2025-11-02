'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'beonwh',
    title: '비온후',
    subtitle: '모바일 앱 제작',
    category: 'Mobile App',
    description: '날씨 기반 일기 서비스 앱으로 감성적인 UI/UX와 사용자 경험을 중심으로 디자인하였습니다. iOS와 Android 동시 출시로 빠른 시장 진입을 이루었으며, 직관적인 인터페이스로 사용자들의 높은 만족도를 얻었습니다.',
    image: '/images/beonwh.webp',
  },
  {
    id: 'inventory',
    title: '재고관리 시스템',
    subtitle: '웹 시스템 개발',
    category: 'Web System',
    description: '제조업체의 복잡한 재고 관리를 효율적으로 처리하는 맞춤형 웹 시스템입니다. 실시간 재고 현황 파악과 입출고 관리를 자동화하여 업무 효율을 50% 이상 향상시켰으며, 관리자 페이지를 통해 손쉽게 데이터를 관리할 수 있습니다.',
    image: '/images/재고관리 (1).webp',
  },
  {
    id: 'moapdf',
    title: 'MoaPDF',
    subtitle: 'SaaS 플랫폼',
    category: 'SaaS Platform',
    description: 'PDF 변환 및 편집 SaaS 플랫폼으로 월 10만 건 이상의 문서 처리를 안정적으로 제공합니다. 클라우드 기반 아키텍처로 확장성을 확보하였으며, 직관적인 UI로 누구나 쉽게 사용할 수 있도록 구현하였습니다.',
    image: '/images/moapdf-main.webp',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="relative bg-black py-16">
      {/* Header */}
      <div className="mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight">
              실제로 만들고 운영하는 서비스들입니다.
            </h2>
            <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed">
              AI, 웹사이트, 모바일 앱, SaaS 플랫폼까지 다양한 프로젝트를 성공적으로 수행했습니다.
            </p>
          </motion.div>

          {/* Right - Empty Space */}
          <div></div>
        </div>
      </div>

      <div className="mx-auto px-6 lg:px-12">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/portfolio#${project.id}`}
                className="group block relative aspect-[4/3] overflow-hidden bg-neutral-900"
              >
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Basic Info (Always Visible) */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-xs text-neutral-300 uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {project.subtitle}
                  </h3>
                </div>

                {/* Hover Overlay with Full Info */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {project.subtitle}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-sm text-white font-medium">
                    MORE VIEW+
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-block px-10 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all"
          >
            MORE VIEW+
          </Link>
        </div>
      </div>
    </section>
  );
}

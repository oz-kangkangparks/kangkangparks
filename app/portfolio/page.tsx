"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Layout"; // Import Section component

const portfolioItems = [
    {
        id: "beonwh",
        title: "비온후",
        category: "모바일 앱",
        industry: "날씨 정보 서비스",
        description:
            "날씨 정보와 사용자 위치 기반 서비스를 제공하는 모바일 애플리케이션입니다. React Native로 크로스플랫폼 개발하여 iOS와 Android를 동시 지원합니다.",
        details:
            "Firebase 실시간 데이터베이스를 활용한 실시간 날씨 업데이트, Google Maps API 기반 위치 서비스, 푸시 알림 기능을 구현했습니다.",
        tech: [
            "React Native",
            "Firebase",
            "Google Maps API",
            "Push Notification",
        ],
        images: [
            "/images/beonwh.webp",
            "/images/beonwh-1.webp",
            "/images/beonwh-2.webp",
        ],
        mainImage: "/images/beonwh.webp",
    },
    {
        id: "inventory",
        title: "재고관리 시스템",
        category: "웹 시스템",
        industry: "제조 · 물류",
        description:
            "실시간 재고 추적 및 자동 발주 시스템으로 운영 효율을 200% 향상시킨 업무 관리 시스템입니다.",
        details:
            "PostgreSQL 기반의 안정적인 데이터 관리, 실시간 재고 알림, 자동 발주 로직, 다양한 리포트 기능을 제공합니다.",
        tech: ["React", "Node.js", "PostgreSQL", "Express", "WebSocket"],
        images: [
            "/images/재고관리 (1).webp",
            "/images/inventory-system-2.webp",
            "/images/inventory-system-3.webp",
        ],
        mainImage: "/images/재고관리 (1).webp",
    },
    {
        id: "moapdf",
        title: "MoaPDF",
        category: "웹 서비스",
        industry: "SaaS",
        description:
            "AI 기반 PDF 변환 및 편집 도구로 월 10만 건 이상의 문서를 처리하는 SaaS 플랫폼입니다.",
        details:
            "AWS Lambda를 활용한 서버리스 아키텍처, Python 기반 PDF 처리 엔진, Next.js로 구현된 빠른 사용자 인터페이스를 제공합니다.",
        tech: ["Next.js", "Python", "AWS Lambda", "S3", "DynamoDB"],
        images: [
            "/images/moapdf-main.webp",
            "/images/moapdf-2.webp",
            "/images/moapdf-3.webp",
        ],
        mainImage: "/images/moapdf-main.webp",
    },
    {
        id: "moanovel",
        title: "모아노벨",
        category: "AI 서비스",
        industry: "콘텐츠",
        description:
            "GPT-4 기반 소설 생성 플랫폼으로 일일 활성 사용자 5,000명 이상을 보유한 AI 콘텐츠 서비스입니다.",
        details:
            "OpenAI GPT-4 API 연동, Redis 캐싱으로 빠른 응답 속도, Next.js 서버 사이드 렌더링으로 SEO 최적화를 구현했습니다.",
        tech: ["Next.js", "GPT-4 API", "Redis", "Prisma", "PostgreSQL"],
        images: [
            "/images/모아노벨 (1).webp",
            "/images/moanovel-2.webp",
            "/images/moanovel-3.webp",
        ],
        mainImage: "/images/모아노벨 (1).webp",
    },
];

export default function PortfolioPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

                {/* Blur Elements from about/page.tsx */}
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl text-center">
                    {" "}
                    {/* Changed max-w-4xl to max-w-7xl */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* New uppercase label */}
                        <p className="text-xs uppercase tracking-[0.6em] text-neutral-400">
                            portfolio
                        </p>
                        {/* Title */}
                        <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
                            {" "}
                            {/* Reverted font size */}
                            기술로 비즈니스의 문제를 해결합니다
                        </h1>
                        {/* Subtitle */}
                        <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
                            검증된 기술력으로, 성공적인 비즈니스 결과를
                            증명합니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <Section sectionClassName="bg-neutral-950">
                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="grid gap-16">
                        {portfolioItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                id={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="grid items-center lg:grid-cols-2 gap-12"
                            >
                                {/* Image */}
                                <div
                                    className={`order-1 ${
                                        idx % 2 === 1 ? "lg:order-2" : ""
                                    }`}
                                >
                                    <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 group">
                                        <Image
                                            src={item.mainImage}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                                        {/* Category Badge */}
                                        <div className="absolute left-4 top-4">
                                            <span className="inline-flex items-center rounded-lg border border-neutral-700 bg-neutral-900/80 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div
                                    className={`order-2 ${
                                        idx % 2 === 1 ? "lg:order-1" : ""
                                    }`}
                                >
                                    <p className="mb-2 text-sm text-cyan-400">
                                        {item.industry}
                                    </p>
                                    <h2 className="mb-4 text-4xl font-bold text-white">
                                        {item.title}
                                    </h2>
                                    <p className="mb-6 leading-relaxed text-neutral-300">
                                        {item.description}
                                    </p>
                                    <p className="mb-8 leading-relaxed text-neutral-400">
                                        {item.details}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="space-y-3">
                                        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                            기술 스택
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center rounded-lg border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 text-sm font-medium text-neutral-300"
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
            </Section>

            {/* Stats Section */}
            <Section sectionClassName="bg-neutral-900">
                <div className="relative z-10 mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-white">
                            숫자로 보는{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                성과
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[
                            { value: "50+", label: "완료된 프로젝트" },
                            { value: "100K+", label: "월간 활성 사용자" },
                            { value: "99.9%", label: "시스템 가동률" },
                            { value: "24/7", label: "지원 서비스" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="mb-3 text-4xl font-bold text-cyan-400 sm:text-5xl">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-neutral-500">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section sectionClassName="bg-neutral-950">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-white/10 bg-neutral-900/50 p-12 backdrop-blur-sm"
                    >
                        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                            다음 프로젝트를 시작할 준비가 되셨나요?
                        </h2>
                        <p className="mb-8 text-lg text-neutral-400">
                            지금 바로 문의하시고 무료 컨설팅을 받아보세요.
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-8 py-4 text-lg font-semibold text-black shadow-lg transition-colors hover:bg-cyan-500"
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
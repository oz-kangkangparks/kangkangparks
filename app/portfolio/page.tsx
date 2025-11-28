"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/Layout";

const portfolioItems = [
    {
        id: "beonwh",
        title: "비온후",
        category: "모바일 앱",
        industry: "날씨 정보 서비스",
        description: "React Native 기반 크로스플랫폼 날씨 정보 앱",
        details: "Firebase 실시간 데이터베이스를 활용한 실시간 날씨 업데이트, Google Maps API 기반 위치 서비스, 푸시 알림 기능을 구현했습니다.",
        tech: ["React Native", "Firebase", "Google Maps API"],
        mainImage: "/images/beonwh.webp",
        images: ["/images/beonwh.webp", "/images/beonwh-1.webp", "/images/beonwh-2.webp"],
    },
    {
        id: "inventory",
        title: "재고관리 시스템",
        category: "웹 시스템",
        industry: "제조 · 물류",
        description: "실시간 재고 추적 및 자동 발주 시스템",
        details: "PostgreSQL 기반의 안정적인 데이터 관리, 실시간 재고 알림, 자동 발주 로직, 다양한 리포트 기능을 제공합니다.",
        tech: ["React", "Node.js", "PostgreSQL", "Express"],
        mainImage: "/images/재고관리 (1).webp",
        images: ["/images/재고관리 (1).webp", "/images/inventory-system-2.webp", "/images/inventory-system-3.webp"],
    },
    {
        id: "moapdf",
        title: "MoaPDF",
        category: "웹 서비스",
        industry: "SaaS",
        description: "AI 기반 PDF 변환 및 편집 SaaS 플랫폼",
        details: "AWS Lambda를 활용한 서버리스 아키텍처, Python 기반 PDF 처리 엔진, Next.js로 구현된 빠른 사용자 인터페이스를 제공합니다.",
        tech: ["Next.js", "Python", "AWS Lambda", "S3"],
        mainImage: "/images/moapdf-main.webp",
        images: ["/images/moapdf-main.webp", "/images/moapdf-2.webp", "/images/moapdf-3.webp"],
    },
    {
        id: "moanovel",
        title: "모아노벨",
        category: "AI 서비스",
        industry: "콘텐츠",
        description: "GPT-4 기반 소설 생성 AI 플랫폼",
        details: "OpenAI GPT-4 API 연동, Redis 캐싱으로 빠른 응답 속도, Next.js 서버 사이드 렌더링으로 SEO 최적화를 구현했습니다.",
        tech: ["Next.js", "GPT-4 API", "Redis", "Prisma"],
        mainImage: "/images/모아노벨 (1).webp",
        images: ["/images/모아노벨 (1).webp", "/images/moanovel-2.webp", "/images/moanovel-3.webp"],
    },
    {
        id: "placeholder",
        title: "신규 프로젝트",
        category: "준비 중",
        industry: "Stealth Mode",
        description: "현재 준비 중인 신규 프로젝트입니다.",
        details: "곧 공개될 예정입니다. 많은 기대 부탁드립니다.",
        tech: ["Next.js", "TypeScript", "tRPC"],
        mainImage: "/images/service-web-system.jpg",
        images: ["/images/service-web-system.jpg", "/images/service-ai.jpg", "/images/service-mobile.jpg"],
    },
];

type PortfolioItem = (typeof portfolioItems)[0];

const PortfolioModal = ({ item, onClose }: { item: PortfolioItem; onClose: () => void }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} transition={{ duration: 0.3 }} className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900" onClick={(e) => e.stopPropagation()}>
                <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8">
                    <h2 className="mb-2 text-3xl font-bold text-white">{item.title}</h2>
                    <p className="mb-4 text-sm text-cyan-400">{item.industry}</p>
                    <p className="mb-6 text-neutral-300">{item.description}</p>
                    <p className="mb-8 text-neutral-400">{item.details}</p>
                    <div className="mb-8 h-px bg-neutral-800" />
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">주요 기술 스택</h3>
                            <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech) => (<span key={tech} className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">{tech}</span>))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">프로젝트 이미지</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {item.images.map((image) => (<div key={image} className="relative aspect-square overflow-hidden rounded-lg"><Image src={image} alt={item.title} fill className="object-cover" /></div>))}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
            </motion.div>
        </motion.div>
    );
};

const BentoGridPortfolio = () => {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedItem]);

    const featureItem = portfolioItems[0];
    const standardItems = portfolioItems.slice(1);

    return (
        <>
            <Section sectionClassName="bg-neutral-950">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Feature Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="group relative cursor-pointer md:col-span-2"
                        onClick={() => setSelectedItem(featureItem)}
                    >
                        <div className="relative h-full min-h-[480px] overflow-hidden rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-cyan-400/50">
                            <Image src={featureItem.mainImage} alt={featureItem.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40" />
                            <div className="relative flex h-full flex-col items-start justify-end">
                                <p className="mb-1 text-sm text-cyan-400">{featureItem.industry}</p>
                                <h3 className="text-3xl font-bold text-white">{featureItem.title}</h3>
                                <p className="mt-2 max-w-lg text-neutral-300">{featureItem.description}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Standard Items */}
                    {standardItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="relative h-full min-h-[480px] overflow-hidden rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-cyan-400/50">
                                <Image src={item.mainImage} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40" />
                                <div className="relative flex h-full flex-col items-start justify-end">
                                    <p className="mb-1 text-sm text-cyan-400">{item.industry}</p>
                                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="mt-2 text-neutral-300">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
            <AnimatePresence>
                {selectedItem && <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
            </AnimatePresence>
        </>
    );
};

function HeroSection() {
    return (
        <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-4xl text-center"
            >
                <p className="text-xs uppercase tracking-[0.6em] text-neutral-400">
                    portfolio
                </p>
                <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
                    기술로 비즈니스의 문제를 해결합니다
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
                    검증된 기술력으로, 성공적인 비즈니스 결과를 증명합니다.
                </p>
            </motion.div>
        </section>
    );
}

export default function PortfolioPage() {
    return (
        <div className="bg-neutral-950 text-white">
            <HeroSection />
            <BentoGridPortfolio />
        </div>
    );
}
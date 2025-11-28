"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/Layout";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    ShieldCheck,
    Zap,
    Users,
} from "lucide-react";
import Link from "next/link";

const portfolioItems = [
    {
        id: "beonwh",
        title: "비온후",
        category: "모바일 앱",
        industry: "Mobile App",
        description:
            "정책 연계가 가능한 헬스케어 기반 서비스로, 감정 기록 → 데이터 분석 → 정책 보고까지 이어지는 정책형 멘탈케어 루틴 서비스입니다.",
        details:
            "Firebase 실시간 데이터베이스를 활용한 실시간 날씨 업데이트, Google Maps API 기반 위치 서비스, 푸시 알림 기능을 구현했습니다.",
        tech: ["React Native", "Firebase", "Google Maps API"],
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
        category: "맞춤형 웹 시스템",
        industry: "Custom Web System",
        description:
            "AppSheet기반 스마트 재고관리 시스템으로, 누구나 사용할 수 있는 웹 기반의 입출고 자동화 시스템입니다.",
        details:
            "PostgreSQL 기반의 안정적인 데이터 관리, 실시간 재고 알림, 자동 발주 로직, 다양한 리포트 기능을 제공합니다.",
        tech: ["React", "Node.js", "PostgreSQL", "Express"],
        mainImage: "/images/재고관리 (1).webp",
        images: [
            "/images/재고관리 (1).webp",
            "/images/inventory-system-2.webp",
            "/images/inventory-system-3.webp",
        ],
    },
    {
        id: "moapdf",
        title: "MoaPDF",
        category: "SaaS 플랫폼",
        industry: "SaaS Platform",
        description:
            "설치가 필요 없는 웹 브라우저 기반의 PDF 문서 처리 솔루션입니다",
        details:
            "AWS Lambda를 활용한 서버리스 아키텍처, Python 기반 PDF 처리 엔진, Next.js로 구현된 빠른 사용자 인터페이스를 제공합니다.",
        tech: ["Next.js", "Python", "AWS Lambda", "S3"],
        mainImage: "/images/moapdf-main.webp",
        images: [
            "/images/moapdf-main.webp",
            "/images/moapdf-2.webp",
            "/images/moapdf-3.webp",
        ],
    },
    {
        id: "moanovel",
        title: "모아노벨",
        category: "AI 서비스",
        industry: "AI service",
        description:
            "AI 기반의 웹소설 집필도구로, 작가 친화적인 환경으로 AI 기반 집필 보조 툴을 제공합니다.",
        details:
            "OpenAI GPT-4 API 연동, Redis 캐싱으로 빠른 응답 속도, Next.js 서버 사이드 렌더링으로 SEO 최적화를 구현했습니다.",
        tech: ["Next.js", "GPT-4 API", "Redis", "Prisma"],
        mainImage: "/images/모아노벨 (1).webp",
        images: [
            "/images/모아노벨 (1).webp",
            "/images/moanovel-2.webp",
            "/images/moanovel-3.webp",
        ],
    },
    {
        id: "mes",
        title: "MES",
        category: "맞춤형 웹 시스템",
        industry: "Custom Web System",
        description:
            "실시간 생산 관리 체계를 구축하여 디지털 전환이 필요한 제조업의 현실적인 문제들을 해결하기 위한 맞춤형 웹 시스템입니다.",
        details:
            "26개의 화면을 통해 생산, 품질, 재고 등 전 과정을 데이터로 관리하며 스마트 팩토리의 핵심 기능을 구현했습니다.",
        tech: [
            "Kubernetes",
            "Flutter",
            "CI/CD",
            "Spring Boot",
            "PostgreSQL",
            "Vue.js",
            "Docker",
            "Gitlab-Runner",
            "RabbitMQ",
        ],
        mainImage: "/images/MES_표지.png",
        images: [
            "/images/모아노벨 (1).webp",
            "/images/moanovel-2.webp",
            "/images/moanovel-3.webp",
        ],
    },
];

const extendedPortfolioItems = [
    ...portfolioItems,
    ...portfolioItems,
    ...portfolioItems,
];

type PortfolioItem = (typeof portfolioItems)[0];

const PortfolioModal = ({
    item,
    onClose,
}: {
    item: PortfolioItem;
    onClose: () => void;
}) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8">
                    <h2 className="mb-2 text-3xl font-bold text-white">
                        {item.title}
                    </h2>
                    <p className="mb-4 text-sm text-cyan-400">
                        {item.industry}
                    </p>
                    <p className="mb-6 text-neutral-300">{item.description}</p>
                    <p className="mb-8 text-neutral-400">{item.details}</p>
                    <div className="mb-8 h-px bg-neutral-800" />
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">
                                주요 기술 스택
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">
                                프로젝트 이미지
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                {item.images.map((image) => (
                                    <div
                                        key={image}
                                        className="relative aspect-square overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src={image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </motion.div>
        </motion.div>
    );
};

const CoverflowPortfolio = () => {
    const [activeIndex, setActiveIndex] = useState(portfolioItems.length);
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(
        null
    );
    const [isJumping, setIsJumping] = useState(false);

    const animationDuration = 0.5;

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedItem]);

    const handleNext = () => {
        if (isJumping) return;
        setActiveIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (isJumping) return;
        setActiveIndex((prev) => prev - 1);
    };

    const handleAnimationComplete = () => {
        if (isJumping) {
            setIsJumping(false); // Reset the flag after the instant jump has processed
            return; // No further checks if it was a jump
        }

        // Only check for wrap-around if it was a normal animation completion
        if (activeIndex >= portfolioItems.length * 2) {
            setIsJumping(true); // Flag that next transition should be instant
            setActiveIndex(portfolioItems.length); // Jump to the start of the middle group
        } else if (activeIndex < portfolioItems.length) {
            // Check for prev wrap
            setIsJumping(true); // Flag that next transition should be instant
            setActiveIndex(portfolioItems.length * 2 - 1); // Jump to the end of the middle group
        }
    };

    return (
        <>
            <Section
                sectionClassName="bg-neutral-950"
                className="flex flex-col items-center justify-center"
            >
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Our Projects
                    </h2>
                </motion.div>
                <motion.div
                    className="relative w-full h-[60vh]"
                    style={{ perspective: "1000px" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence initial={false}>
                        {extendedPortfolioItems.map((item, i) => {
                            const offset = i - activeIndex;
                            const isCenter = offset === 0;
                            const zIndex =
                                extendedPortfolioItems.length -
                                Math.abs(offset);

                            return (
                                <motion.div
                                    key={i}
                                    className="absolute left-0 right-0 mx-auto w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-square cursor-pointer"
                                    initial={false}
                                    animate={{
                                        x: `${offset * 35}%`,
                                        scale: isCenter ? 1 : 0.7,
                                        rotateY: offset * -25,
                                        zIndex: zIndex,
                                        opacity: Math.abs(offset) > 2 ? 0 : 1,
                                    }}
                                    transition={{
                                        duration: isJumping
                                            ? 0
                                            : animationDuration,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    onAnimationComplete={
                                        handleAnimationComplete
                                    }
                                    onClick={() =>
                                        isCenter && setSelectedItem(item)
                                    }
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-neutral-900">
                                        <Image
                                            src={item.mainImage}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div
                                            className={`absolute inset-0 transition-all duration-500 ${
                                                isCenter
                                                    ? "bg-black/20"
                                                    : "bg-black/60"
                                            }`}
                                        />
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <p className="text-sm text-cyan-400">
                                                {item.industry}
                                            </p>
                                            <h3 className="mt-1 text-2xl font-bold text-white">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button
                        onClick={handlePrev}
                        className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </Section>
            <AnimatePresence>
                {selectedItem && (
                    <PortfolioModal
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
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
                className="relative z-10 max-w-7xl text-center"
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

const WHY_US_ITEMS = [
    {
        icon: ShieldCheck,
        title: "20년 경력의 안정성",
        description:
            "20년 경력의 시니어 아키텍트가 설계하여, 수십만 트래픽도 감당하는 안정적이고 확장 가능한 시스템을 구축합니다.",
    },
    {
        icon: Zap,
        title: "최신 기술 스택",
        description:
            "React, Next.js, Flutter 등 최신 기술 스택을 적극 활용하여 가장 빠르고 현대적인 사용자 경험을 제공합니다.",
    },
    {
        icon: Users,
        title: "비즈니스 파트너십",
        description:
            "단순한 외주 개발이 아닌, 비즈니스 목표를 함께 고민하고 성공을 위해 협력하는 장기적인 기술 파트너가 되어 드립니다.",
    },
];

function WhyUsSection() {
    return (
        <Section
            sectionClassName="bg-neutral-900"
            className="flex min-h-screen flex-col items-center justify-center"
        >
            <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                    Why Choose Us
                </h2>
            </motion.div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                {WHY_US_ITEMS.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="inline-block rounded-2xl bg-neutral-800 p-4">
                                <Icon
                                    className="h-10 w-10 text-cyan-400"
                                    strokeWidth={2}
                                />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-neutral-400">
                                {item.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}

function CtaSection() {
    return (
        <Section
            id="contact"
            sectionClassName="bg-black"
            className="flex min-h-screen items-center justify-center"
        >
            <motion.div
                className="mx-auto max-w-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    아이디어를 현실로 만들 준비가 되셨나요?
                </h2>
                <p className="mt-4 text-lg text-neutral-400">
                    비즈니스 목표만 말씀해 주세요. 최적의 기술 스택과 실행
                    로드맵은 저희가 설계합니다.
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-black shadow-lg transition-colors hover:bg-cyan-400"
                    >
                        프로젝트 문의하기 <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </motion.div>
        </Section>
    );
}

export default function PortfolioPage() {
    return (
        <div className="bg-neutral-950 text-white">
            <HeroSection />
            <CoverflowPortfolio />
            <WhyUsSection />
            <CtaSection />
        </div>
    );
}

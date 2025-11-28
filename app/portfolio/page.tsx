"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/Layout";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    ClipboardCheck,
    Infinity,
    Anchor,
} from "lucide-react";
import Link from "next/link";

const portfolioItems = [
    {
        id: "beonwh",
        title: "비온후",
        category: "모바일 앱",
        industry: "Mobile App",
        description:
            "창업자의 번아웃 예방을 위한 3단계 루틴(STOP-NOTE-HEAL)을 제공하는 멘탈케어 루틴 서비스입니다.",
        details:
            "하루 1분 내 실행 가능한 단순·직관적 루틴으로 설계되어 사용자의 편의성을 높이고, PostgreSQL + 암호화 적용 및 JWT 기반 인증을 통해 안전하게 설계하였습니다.",
        tech: [
            "jwt",
            "Vite",
            "PostgreSQL",
            "shadcn",
            "TailwindCSS",
            "Express",
            "Node.js",
            "Rest api",
            "React",
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
        category: "맞춤형 웹 시스템",
        industry: "Custom Web System",
        description:
            "AppSheet기반 스마트 재고관리 시스템으로, 중소기업 맞춤형 실시간 재고 관리 및 입출고 자동화 시스템입니다.",
        details:
            "Google AppSheet 플랫폼을 기반으로 노코드(No-Code) 개발 방식을 적용하여 안드로이드, iOS, 웹 환경을 단기간에 구축했습니다. Google Sheets를 데이터베이스로 활용해 실시간 데이터 동기화를 구현했으며, 모바일 기기의 카메라를 활용한 바코드/QR 스캔 기능을 네이티브 수준으로 통합했습니다.",
        tech: ["AppSheet"],
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
            "별도의 프로그램 설치 없이 웹 브라우저에서 병합, 분할, 압축 등 모든 PDF 작업을 안전하고 신속하게 처리하는 올인원 SaaS 플랫폼입니다.",
        details:
            "React와 Tailwind CSS(Shadcn UI)로 직관적인 인터페이스를 구현하고, Node.js와 Express로 대용량 파일 처리에 최적화된 백엔드를 구축했습니다.",
        tech: ["PostgreSQL", "Express", "Node.js", "React", "Python"],
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
            "세계관과 줄거리 입력만으로 등장인물과 챕터를 자동 생성하고, 복선(Plot Hook) 관리와 문맥 교정 기능을 통해 웹소설 창작의 생산성과 개연성을 극대화하는 올인원 집필 도구입니다.",
        details:
            "Node.js와 Express로 백엔드를 구축하고 PostgreSQL을 활용해 복잡한 세계관과 등장인물 관계(ERD) 데이터를 구조화했습니다. Frontend는 React와 Tailwind CSS(Shadcn UI)로 몰입감 있는 집필 환경을 제공하며, 최신 생성형 AI 모델을 API로 연동하여 자동 집필 및 문맥 분석 기능을 구현했습니다.",
        tech: [
            "PostgreSQL",
            "GPT-4 API",
            "Express",
            "Node.js",
            "React",
            "Python",
        ],
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
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handlePrev = () => {
        setImageIndex(
            (prev) => (prev - 1 + item.images.length) % item.images.length
        );
    };

    const handleNext = () => {
        setImageIndex((prev) => (prev + 1) % item.images.length);
    };

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
                className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-h-[90vh] overflow-y-auto">
                    <div className="grid md:grid-cols-2">
                        <div className="relative group overflow-hidden">
                            <motion.div
                                className="flex"
                                animate={{ x: `-${imageIndex * 100}%` }}
                                transition={{
                                    type: "tween",
                                    ease: "easeInOut",
                                    duration: 0.4,
                                }}
                            >
                                {item.images.map((imageSrc, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full aspect-square flex-shrink-0"
                                    >
                                        <Image
                                            src={imageSrc}
                                            alt={`${item.title} image ${
                                                index + 1
                                            }`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>

                            {item.images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/75 z-10"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/75 z-10"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                        {item.images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`h-2 w-2 rounded-full transition-all ${
                                                    index === imageIndex
                                                        ? "bg-white w-4"
                                                        : "bg-gray-500"
                                                }`}
                                                onClick={() =>
                                                    setImageIndex(index)
                                                }
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="p-6 md:p-8">
                            <h2 className="mb-2 text-3xl font-bold text-white">
                                {item.title}
                            </h2>
                            <p className="mb-4 text-sm text-cyan-400">
                                {item.industry}
                            </p>
                            <p className="mb-6 text-neutral-300">
                                {item.description}
                            </p>
                            <p className="mb-8 text-neutral-400">
                                {item.details}
                            </p>
                            <div className="mb-8 h-px bg-neutral-800" />
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
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
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
        icon: ClipboardCheck,
        title: "검증된 설계",
        description:
            "아이디어만 가져오세요. 20년 경력의 노하우로 실패 확률을 줄이고, 가장 효율적인 실행 계획을 설계합니다.",
    },
    {
        icon: Infinity,
        title: "한계 없는 기술",
        description:
            "웹, 앱, AI까지. 검증된 최신 기술 스택으로 빠르게 구현하고, 유연하게 확장 가능한 시스템을 구축합니다.",
    },
    {
        icon: Anchor,
        title: "안정적 런칭",
        description:
            "런칭은 끝이 아닌 시작입니다. 안정적인 배포로, 비즈니스의 성공적인 안착을 돕습니다.",
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
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-white md:text-4xl">
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
                            viewport={{ once: false, amount: 0.3 }}
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

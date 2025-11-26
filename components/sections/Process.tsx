"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    MessageCircle,
    FileText,
    Code,
    RefreshCw,
    CheckCircle,
    ChevronRight,
} from "lucide-react";

const processSteps = [
    {
        icon: MessageCircle,
        title: "문의 및 상담",
        description: "아이디어를 구체화하고\n로드맵을 제안합니다.",
    },
    {
        icon: FileText,
        title: "기획 및 설계",
        description: "기능 명세를 확정하고\n최적의 기술 설계를 제공합니다.",
    },
    {
        icon: Code,
        title: "개발 및 구현",
        description: "설계대로 개발을 진행하고\n진행상황을 공유합니다.",
    },
    {
        icon: RefreshCw,
        title: "테스트 및 피드백",
        description: "철저하게 품질을 검증하고\n피드백을 반영합니다.",
    },
    {
        icon: CheckCircle,
        title: "배포 및 운영",
        description: "안정적으로 배포하고\n유지보수를 제공합니다.",
    },
];

export default function Process() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % processSteps.length);
        }, 1000);
        return () => clearInterval(timer);
    }, [isPaused, activeIndex]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 1000);
    };

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center bg-black py-16 md:py-0">
            <div className="mx-auto w-full px-6 lg:px-12">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
                        Process
                    </h2>
                </motion.div>
                <div className="flex flex-wrap items-stretch justify-center gap-8">
                    {processSteps.map((step, index) => {
                        const isActive = activeIndex === index;
                        const Icon = step.icon;
                        return (
                            <React.Fragment key={step.title}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.1,
                                    }}
                                    className="relative w-60 cursor-pointer"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div
                                        className={`h-full w-full rounded-2xl border p-8 text-center transition-all duration-300 ${
                                            isActive
                                                ? "border-cyan-400 shadow-lg shadow-cyan-400/20"
                                                : "border-neutral-800"
                                        } bg-neutral-900`}
                                    >
                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800">
                                            <Icon
                                                className="h-9 w-9 text-cyan-400"
                                                strokeWidth={2}
                                            />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-white">
                                            {step.title}
                                        </h3>
                                        <p className="whitespace-pre-line text-base leading-relaxed text-neutral-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:flex items-center">
                                        <ChevronRight
                                            className={`h-8 w-8 transition-colors duration-300 ${
                                                isActive
                                                    ? "text-cyan-400"
                                                    : "text-neutral-600"
                                            }`}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const processSteps = [
    {
        step: "01",
        icon: "💬",
        title: "문의 및 상담",
        description:
            "프로젝트 목표와\n요구사항을 분석하고\n최적의 솔루션을\n제안합니다.",
    },
    {
        step: "02",
        icon: "📋",
        title: "요구사항 정의",
        description: "기능 명세와\n기술 스택을 확정하고\n일정을 수립합니다.",
    },
    {
        step: "03",
        icon: "💻",
        title: "설계 및 개발",
        description: "아키텍처를 설계하고\n단계별로 개발을\n진행합니다.",
    },
    {
        step: "04",
        icon: "🔄",
        title: "테스트 및 피드백",
        description: "품질 검증과\n피드백으로\n완성도를 높입니다.",
    },
    {
        step: "05",
        icon: "✅",
        title: "배포 및 운영",
        description: "안정적으로 배포하고\n유지보수를 지원합니다.",
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
    }, [isPaused]);

    const handleMouseEnter = (index: number) => {
        setIsPaused(true);
        setActiveIndex(index);
    };

    const handleMouseLeave = (index: number) => {
        setActiveIndex((index + 1) % processSteps.length);
        setIsPaused(false);
    };

    return (
        <section className="relative flex h-screen w-full items-center justify-center bg-black">
            <div className="mx-auto w-full px-6 lg:px-12">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
                        PROCESS
                    </h2>
                </motion.div>
                {/* Process Steps */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {processSteps.map((step, index) => {
                        const isActive = activeIndex === index;
                        const card = (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                className="relative flex w-full max-w-sm flex-col items-center text-center sm:max-w-md lg:max-w-[260px]"
                            >
                                <div
                                    className={`w-full rounded-3xl border p-7 transition-all duration-300 ${
                                        isActive
                                            ? "border-white/70 shadow-xl shadow-white/10 scale-[1.02]"
                                            : "border-neutral-800 hover:border-neutral-600"
                                    } bg-neutral-900`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800 sm:h-20 sm:w-20">
                                        <span className="text-3xl sm:text-4xl">
                                            {step.icon}
                                        </span>
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-white sm:text-[1.65rem]">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-neutral-300 leading-relaxed whitespace-pre-line">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );

                        return (
                            <div
                                key={step.step}
                                className="flex items-center gap-6"
                            >
                                {card}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-center">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-lg shadow-white/20">
                                            <svg
                                                className="h-4 w-4 text-black"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

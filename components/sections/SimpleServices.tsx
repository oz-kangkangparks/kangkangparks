"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
    {
        id: "web-service",
        title: "Web Service & SaaS",
        titleKo: "웹 서비스 및 SaaS 플랫폼",
        subtitle:
            "아이디어 검증을 위한 MVP부터 대규모 트래픽을 감당하는 상용 플랫폼까지, 비즈니스의 성장을 견인하는 확장 가능한 웹 서비스를 구축합니다.",
        image: "/images/service-homepage.webp",
    },
    {
        id: "mobile",
        title: "Mobile & Integration",
        titleKo: "모바일 및 통합 관리 시스템",
        subtitle:
            "하나의 코드로 iOS와 Android를 동시에 출시하는 크로스 플랫폼 앱과, 이를 효율적으로 관리하는 통합 어드민 시스템을 제공합니다.",
        image: "/images/service-web-system.webp",
    },
    {
        id: "ai-service",
        title: "AI & Data",
        titleKo: "AI 서비스 및 데이터 분석",
        subtitle:
            "GPT 챗봇, 음성/이미지/영상 분석 등 기업의 데이터를 활용한 실용적인 AI 솔루션으로 업무 자동화와 혁신을 실현합니다.",
        image: "/images/service-mobile.webp",
    },
    {
        id: "enterprise",
        title: "Enterprise System",
        titleKo: "기업용 업무 시스템 구축",
        subtitle:
            "20년 도메인 지식으로 비즈니스 프로세스를 최적화합니다. ERP, MES, 재고관리 등 현장에 꼭 필요한 맞춤형 시스템을 설계합니다.",
        image: "/images/service-ai.webp",
    },
];

export default function SimpleServices() {
    const [activeService, setActiveService] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide every 4 seconds (pause on hover)
    useEffect(() => {
        if (isHovered) return; // Don't auto-slide when hovering

        const timer = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [isHovered]);

    return (
        <section
            id="services"
            className="relative flex min-h-screen w-full items-center justify-center bg-neutral-900 border-t border-neutral-800 py-16 md:py-0"
        >
            <motion.div
                className="mx-auto w-full max-w-[90rem] px-6 lg:px-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:items-center">
                    {/* Left - Navigation */}
                    <div className="flex-shrink-0">
                        <nav
                            className="flex flex-col"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onTouchEnd={() => setIsHovered(false)}
                        >
                            {services.map((service, index) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(index)}
                                    className={`w-full text-left py-6 border-b border-neutral-800 transition-all ${
                                        activeService === index
                                            ? "text-white font-bold"
                                            : "text-neutral-600 hover:text-neutral-400"
                                    }`}
                                >
                                    <span className="text-lg tracking-wider">
                                        {service.title}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Right - Content */}
                    <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[500px_1fr] lg:items-center lg:gap-16">
                        {/* Circular Image with Timer Animation */}
                        <div className="relative w-full aspect-square">
                            {/* SVG Progress Circle */}
                            <svg className="absolute inset-0 h-full w-full -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="49%"
                                    fill="none"
                                    stroke="#262626"
                                    strokeWidth="4"
                                    pathLength="100"
                                />
                                <motion.circle
                                    key={`${activeService}-${isHovered}`}
                                    cx="50%"
                                    cy="50%"
                                    r="49%"
                                    fill="none"
                                    stroke="#22d3ee"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    pathLength="100"
                                    initial={{
                                        strokeDasharray: "0 100",
                                    }}
                                    animate={
                                        isHovered
                                            ? {
                                                  strokeDasharray: "0 100",
                                              }
                                            : {
                                                  strokeDasharray: "100 100",
                                              }
                                    }
                                    transition={{
                                        duration: isHovered ? 0 : 4,
                                        ease: "linear",
                                    }}
                                />
                            </svg>

                            {/* Image */}
                            <div className="absolute inset-2 overflow-hidden rounded-full">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        className="absolute inset-0"
                                        initial={false}
                                        animate={{
                                            opacity:
                                                index === activeService ? 1 : 0,
                                            scale:
                                                index === activeService
                                                    ? 1
                                                    : 1.02,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeInOut",
                                        }}
                                        aria-hidden={index !== activeService}
                                        style={{
                                            pointerEvents:
                                                index === activeService
                                                    ? "auto"
                                                    : "none",
                                        }}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.titleKo}
                                            fill
                                            priority={index === 0}
                                            sizes="(min-width: 1024px) 500px, 70vw"
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-center lg:text-left">
                            <div className="relative min-h-[14rem]">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={services[activeService].id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <h3 className="mb-8 text-2xl font-bold text-white lg:text-3xl">
                                            {services[activeService].titleKo}
                                        </h3>

                                        <p className="mb-12 whitespace-pre-line text-lg text-neutral-400 leading-relaxed lg:text-xl">
                                            {services[activeService].subtitle}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* More View Button */}
                            <a
                                href="services"
                                className="inline-flex items-center justify-center rounded-full border-2 border-white px-10 py-4 font-medium text-white transition-all hover:bg-cyan-400 hover:text-black hover:border-cyan-400"
                            >
                                MORE VIEW +
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

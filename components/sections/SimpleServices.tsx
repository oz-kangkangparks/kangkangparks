"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
    {
        id: "homepage",
        title: "HOMEPAGE",
        titleKo: "홈페이지 제작",
        subtitle:
            "단순한 회사 소개 페이지를 넘어, 20년 시니어의 '안정적인 백엔드' 설계로 트래픽이 몰려도 다운되지 않는 '프리미엄' 웹사이트를 보장합니다.",
        image: "/images/service-homepage.jpg",
    },
    {
        id: "web-system",
        title: "WEB SYSTEM",
        titleKo: "웹 시스템 개발",
        subtitle:
            "엑셀로 관리하던 업무, 혹은 오래되고 느려진 기존 시스템(레거시)이 고민이신가요?\n 20년 경력의 'B2B 지식'으로 문제를 진단하고 '맞춤형 업무 시스템'을 설계합니다.",
        image: "/images/service-web-system.jpg",
    },
    {
        id: "mobile-app",
        title: "MOBILE APP",
        titleKo: "모바일 앱",
        subtitle:
            "고객의 눈길을 끄는 '매력적인 B2C 앱'과 20년 시니어의 '안정적인 서버'를 결합합니다.\n 고성능 하이브리드 앱을 만나보세요.",
        image: "/images/service-mobile.jpg",
    },
    {
        id: "ai-service",
        title: "AI SERVICE",
        titleKo: "AI 서비스",
        subtitle:
            "AI 기술로 업무 혁신이 필요하신가요? GPT 챗봇, 영상 인식, 데이터 분석 등 원하는 AI 시스템을 모두 개발합니다.",
        image: "/images/service-ai.jpg",
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
            className="relative flex min-h-screen w-full items-center justify-center bg-black py-16 md:py-0"
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
                                    stroke="#ffffff"
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
                                className="inline-flex items-center justify-center rounded-full border-2 border-white px-10 py-4 font-medium text-white transition-all hover:bg-white hover:text-black"
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

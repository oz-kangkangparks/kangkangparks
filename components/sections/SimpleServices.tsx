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
            "복잡한 기획 자료 없어도 괜찮습니다.\n아이디어만 있으면 전문 기획부터 디자인, 운영 방법까지 함께 제공합니다.",
        image: "/images/service-homepage.jpg",
    },
    {
        id: "web-system",
        title: "WEB SYSTEM",
        titleKo: "웹 시스템 개발",
        subtitle:
            "ERP·MES·그룹웨어·CMS 등 30+ 프로젝트를 성공적으로 구축했습니다.\n기획부터 운영까지 전 과정을 책임집니다.",
        image: "/images/service-web-system.jpg",
    },
    {
        id: "mobile-app",
        title: "MOBILE APP",
        titleKo: "모바일 앱",
        subtitle:
            "한 번 개발로 iOS·Android 동시 출시합니다.\n앱스토어 심사부터 배포까지 전 과정을 책임집니다.",
        image: "/images/service-mobile.jpg",
    },
    {
        id: "ai-service",
        title: "AI SERVICE",
        titleKo: "AI 서비스",
        subtitle:
            "AI 기술로 업무 혁신이 필요하신가요?\nGPT 챗봇, 영상 인식, 데이터 분석 등 원하는 AI 시스템을 모두 개발합니다.",
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
            className="relative bg-black h-screen w-full flex items-center justify-center"
        >
            <motion.div
                className="max-w-7xl mx-auto w-full px-4"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[256px_1fr] lg:items-center">
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
                                href="#contact"
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

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Layout";
import { Globe, Building2, Smartphone, Bot, CheckCircle } from "lucide-react";
import Link from "next/link";

const SERVICES = [
    {
        icon: Globe,
        title: "웹 서비스 및 SaaS 플랫폼",
        summary: "아이디어를 검증하는 가장 빠르고 안정적인 방법",
        details: [
            "초기 스타트업 MVP 신속 개발",
            "대규모 트래픽 SaaS 아키텍처 설계",
            "SEO 및 Core Web Vitals 최적화",
        ],
        recommendedFor: "플랫폼 비즈니스 창업자, 레거시 웹 리뉴얼",
    },
    {
        icon: Building2,
        title: "기업용 업무 시스템 구축",
        summary: "20년 도메인 지식으로 비즈니스 프로세스 최적화",
        details: [
            "제조/물류 특화 MES/ERP 구축",
            "재고 관리/발주 자동화",
            "엑셀 업무 디지털 전환",
        ],
        recommendedFor:
            "엑셀 관리에 한계가 온 중소기업, 스마트 팩토리 도입 기업",
    },
    {
        icon: Smartphone,
        title: "모바일 및 통합 관리 시스템",
        summary: "하나의 코드로 웹과 앱을 동시에, 효율적인 관리",
        details: [
            "React Native/Flutter 크로스 플랫폼 개발",
            "앱-웹 통합 관리자(Admin) 구축",
            "네이티브 기능(위치/카메라) 구현",
        ],
        recommendedFor: "O2O 서비스, 현장직용 앱, 커뮤니티 앱",
    },
    {
        icon: Bot,
        title: "AI 및 데이터 기반 솔루션",
        summary: "실무에 즉시 적용 가능한 업무 자동화",
        details: [
            "ChatGPT API 연동 챗봇",
            "OCR 문서 자동화",
            "음성/이미지 분석 솔루션",
        ],
        recommendedFor: "반복 업무 자동화 필요 기업, AI 도입 희망 스타트업",
    },
];

const PROCESS_STEPS = [
    {
        step: "1",
        title: "문의 및 분석 (Consulting)",
        description:
            "단순 견적이 아닌 기술적 실현 가능성과 비즈니스 목표를 함께 진단합니다.",
    },
    {
        step: "2",
        title: "설계 및 제안 (Architecture)",
        description:
            "확장성과 안정성을 고려한 최적의 시스템 아키텍처와 구체적인 로드맵을 제안합니다.",
    },
    {
        step: "3",
        title: "개발 (Agile)",
        description:
            "투명한 소통과 애자일 방법론에 기반하여 빠르고 유연하게 개발을 진행합니다.",
    },
    {
        step: "4",
        title: "품질 검증 (QA)",
        description:
            "사용자 시나리오 기반의 테스트와 코드 리뷰를 통해 서비스 안정성을 확보합니다.",
    },
    {
        step: "5",
        title: "배포 및 이관 (Deploy)",
        description:
            "안정적인 배포 환경을 구축하고, 소스코드 소유권과 운영 노하우를 모두 이관합니다.",
    },
];

const TECH_STACKS = [
    {
        category: "Frontend & Mobile",
        techs: ["React", "Next.js", "TypeScript", "Flutter", "Tailwind CSS"],
    },
    {
        category: "Backend & Infra",
        techs: [
            "Node.js",
            "Python",
            "Java(Spring Boot)",
            "PostgreSQL",
            "AWS",
            "Docker",
        ],
    },
    {
        category: "AI & Data",
        techs: ["OpenAI API", "LangChain", "Hugging Face", "PyTorch"],
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-neutral-950 text-white">
            <HeroSection />
            <ServiceLineupSection />
            <ProcessSection />
            <TechStackSection />
            <CtaSection />
        </div>
    );
}

function HeroSection() {
    return (
        <Section
            className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
            sectionClassName="bg-gradient-to-b from-neutral-900 to-black"
        >
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xs uppercase tracking-[0.6em] text-neutral-400">
                    our services
                </p>
                <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
                    개발, 그 이상의 비즈니스를 실현합니다.
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
                    가장 빠른 실행력과 가장 견고한 설계로, 상상을 성공적인
                    비즈니스로 만듭니다.
                </p>
            </motion.div>
        </Section>
    );
}

function ServiceLineupSection() {
    return (
        <Section
            id="services"
            sectionClassName="bg-neutral-900"
            className="flex min-h-screen items-center"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            className="flex flex-col rounded-xl border-t-4 border-cyan-400 bg-neutral-950 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-neutral-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4">
                                <Icon className="h-10 w-10 text-cyan-400" />
                                <h2 className="text-2xl font-bold text-white">
                                    {service.title}
                                </h2>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-cyan-400">
                                {service.summary}
                            </p>
                            <ul className="mt-6 flex-grow space-y-3">
                                {service.details.map((detail) => (
                                    <li
                                        key={detail}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                                        <span className="text-neutral-300 break-keep">
                                            {detail}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 rounded-lg bg-neutral-800/50 p-4">
                                <p className="text-sm font-semibold text-white">
                                    Recommended For
                                </p>
                                <p className="mt-1 text-sm text-neutral-400 break-keep">
                                    {service.recommendedFor}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}

function ProcessSection() {
    return (
        <Section
            id="process"
            sectionClassName="bg-neutral-950"
            className="flex min-h-screen flex-col items-center justify-center"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Development Process
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
                    체계적인 5단계 프로세스를 통해 아이디어를 현실로 만듭니다.
                </p>
            </div>
            <div className="relative mt-16 w-full max-w-2xl">
                <div
                    className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-800"
                    aria-hidden="true"
                />
                {PROCESS_STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        className="relative mb-12 flex items-center justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div
                            className={`flex w-full items-center ${
                                index % 2 === 0
                                    ? "justify-start"
                                    : "justify-end"
                            }`}
                        >
                            <div
                                className={`w-2/5 ${
                                    index % 2 === 0 ? "text-left" : "text-right"
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-neutral-400 break-keep">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-cyan-400 text-2xl font-bold text-black">
                            {step.step}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

function TechStackSection() {
    return (
        <Section
            id="tech-stack"
            sectionClassName="bg-neutral-900"
            className="flex min-h-screen flex-col items-center justify-center"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Our Tech Stack
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
                    비즈니스 목표 달성을 위해 검증되고 신뢰할 수 있는 기술을
                    사용합니다.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {TECH_STACKS.map((stack) => (
                    <motion.div
                        key={stack.category}
                        className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold text-white">
                            {stack.category}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {stack.techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-neutral-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

function CtaSection() {
    return (
        <Section
            id="cta"
            sectionClassName="bg-neutral-950"
            className="flex min-h-screen items-center justify-center"
        >
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    어떤 솔루션이 필요한지 고민이신가요?
                </h2>
                <p className="mt-4 text-lg text-neutral-400">
                    현재 비즈니스 상황을 알려주시면, 가장 적합한 기술과 로드맵을
                    제안해 드립니다.
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8"
                >
                    <Link
                        href="/contact"
                        className="inline-block rounded-lg bg-cyan-400 px-8 py-3 text-lg font-semibold text-black transition hover:bg-cyan-500"
                    >
                        무료 기술 상담 신청하기
                    </Link>
                </motion.div>
            </div>
        </Section>
    );
}

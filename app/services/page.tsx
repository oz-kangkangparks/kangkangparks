"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Layout";
import {
    Globe,
    Building2,
    Smartphone,
    Bot,
    CheckCircle,
    Monitor,
    Server,
    BrainCircuit,
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
    {
        icon: Monitor,
        title: "웹 서비스 및 SaaS 플랫폼",
        description:
            "기획 초기 단계의 아이디어를 검증된 MVP로, 더 나아가 대규모 상용 서비스로 확장합니다. 아이디어의 실현부터 운영까지 전 과정을 책임집니다.",
        checks: [
            "아이디어 검증을 위한 MVP 신속 개발",
            "대규모 상용 서비스를 위한 확장성 설계",
            "기획부터 배포까지 올인원 구현",
        ],
    },
    {
        icon: Server,
        title: "기업용 업무 시스템 구축",
        description:
            "ERP, 재고관리, 업무 자동화 등 기업 현장에 꼭 필요한 기능을 탑재하여, 실무 효율을 극대화하는 맞춤형 내부 시스템을 구축합니다.",
        checks: [
            "기업 맞춤형 ERP 및 재고관리 시스템",
            "반복 업무 자동화(RPA) 솔루션",
            "실무 효율 중심의 UI/UX 설계",
        ],
    },
    {
        icon: Smartphone,
        title: "모바일 및 통합 관리 시스템",
        description:
            "단순한 앱 개발이 아닙니다. 사용자용 모바일 앱 서비스뿐만 아니라, 이를 관리하는 웹 서비스까지 유기적으로 연결된 '통합형 시스템'을 구축합니다.",
        checks: [
            "Web & App 통합 서비스 동시 개발",
            "React Native / Flutter 기반 크로스 플랫폼",
            "통합 관리자(Admin) 시스템 구축",
        ],
    },
    {
        icon: BrainCircuit,
        title: "AI 및 데이터 기반 솔루션",
        description:
            "GPT 챗봇은 물론 음성, 문서, 이미지, 영상 등 기업이 보유한 다양한 형태의 데이터를 처리하여, 실무에 즉시 적용 가능한 자동화 서비스를 개발합니다.",
        checks: [
            "음성/문서/이미지/영상 데이터 처리 자동화",
            "GPT 기반 지능형 챗봇 서비스",
            "비정형 데이터 분석 솔루션",
        ],
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

export default function ServicesPage() {
    return (
        <div className="bg-neutral-950 text-white">
            <HeroSection />
            <ServiceLineupSection />
            <ProcessSection />
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
            className="flex min-h-screen flex-col items-center justify-center"
        >
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Our Services
                </h2>
            </motion.div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            className="group flex flex-col items-start rounded-2xl border border-white/5 bg-neutral-900 p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Icon
                                className="h-12 w-12 text-cyan-400"
                                strokeWidth={2}
                            />
                            <h2 className="mb-4 mt-6 text-2xl font-bold text-white">
                                {service.title}
                            </h2>
                            <p className="mb-6 leading-relaxed text-neutral-300 break-keep">
                                {service.description}
                            </p>
                            <ul className="flex-grow space-y-3">
                                {service.checks.map((check) => (
                                    <li
                                        key={check}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                                        <span className="font-medium text-neutral-300 break-keep">
                                            {check}
                                        </span>
                                    </li>
                                ))}
                            </ul>
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

function CtaSection() {
    return (
        <Section
            id="cta"
            sectionClassName="bg-neutral-900"
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

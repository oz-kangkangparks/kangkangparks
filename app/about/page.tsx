"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gem, ShieldCheck, Sliders, Layers } from "lucide-react";
import { Section } from "@/components/Layout";
import Image from "next/image";

const TEAM = [
    {
        name: "Tech Lead",
        role: "#Tech-Lead #Full-Stack",
        detail: "40개 이상의 프로젝트 경험을 보유한 20년차 시니어 개발자로서, 프로젝트의 기술적 전문성과 안정성을 책임집니다.",
        photo: "/images/about-member_1.png",
    },
    {
        name: "Full-Stack Creator",
        role: "#Full-Stack #Marketing",
        detail: "기획, 개발, 마케팅 등 다양한 경험을 보유한 크리에이터로서, 비즈니스의 유연한 확장과 실행을 책임집니다.",
        photo: "/images/about-member_2.png",
    },
];

const VALUES = [
    {
        icon: Gem,
        title: "확장 가능한 시스템",
        description:
            "단순한 기능 구현을 넘어, 비즈니스의 성장과 변화에 유연하게 대응할 수 있는 확장 가능한 시스템을 설계합니다. 오늘 만든 시스템이 내일의 성장에 든든한 기반이 되어야 합니다.",
    },
    {
        icon: ShieldCheck,
        title: "검증된 안정성",
        description:
            "20년의 경험으로 다져진 '탄탄한 아키텍처' 위에, 사용자를 사로잡는 '최신 기술의 사용성'을 더했습니다. 가장 혁신적이면서도 가장 믿을 수 있는 결과물을 제공합니다.",
    },
    {
        icon: Sliders,
        title: "비즈니스 최적화",
        description:
            "복잡한 업무 흐름과 현장의 요구사항을 정확히 이해하고 기술로 해결합니다. 귀사의 비즈니스 로직에 딱 맞춰, 불필요한 과정은 줄이고 업무 효율은 극대화합니다.",
    },
    {
        icon: Layers,
        title: "원스톱 통합 개발",
        description:
            "AI, Web, App 등 필요한 기술을 단절 없이 연결합니다. 기획부터 배포까지 하나의 팀 안에서 완결성 있게 수행하여, 의도한 바가 100% 구현된 통합 솔루션을 제공합니다.",
    },
];

const ACHIEVEMENTS = [
    {
        category: "COMPETITION",
        event: "창업진흥원 정책 아이디어 공모전 표창",
        images: [
            "/images/gongmojeon/공모전_2.webp",
            "/images/gongmojeon/공모전_5.webp",
            "/images/gongmojeon/공모전_6.webp",
        ],
        description:
            "창업진흥원에서 주최한 정책 아이디어 공모전에서 우수한 성적으로 표창을 받았습니다. 저희의 혁신적인 아이디어가 공식적으로 인정받은 순간입니다.",
    },
    {
        category: "PARTNERSHIP",
        event: "김해시 복지재단 협약 체결",
        images: [
            "/images/hyeobyak/협약식_1.webp",
            "/images/hyeobyak/협약식_2.webp",
            "/images/hyeobyak/협약식_3.webp",
        ],
        description:
            "김해시 복지재단과의 협약을 통해 지역 사회 발전에 기여할 수 있는 기회를 마련했습니다. 기술로 사회에 기여하는 강강박스의 가치를 실현합니다.",
    },
    {
        category: "AWARD",
        event: "경남벤처기업협회 표창장 수상",
        images: [
            "/images/venture/venture_2.webp",
            "/images/venture/venture_3.webp",
            "/images/venture/venture_4.webp",
        ],
        description:
            "경남벤처기업협회로부터 기술 혁신과 지역 경제 발전에 기여한 공로를 인정받아 유공포상을 수상했습니다.",
    },
];

type Achievement = (typeof ACHIEVEMENTS)[0];

export default function AboutPage() {
    return (
        <div className="bg-neutral-950 text-white">
            <HeroSection />
            <StorySection />
            <TeamSection />
            <ValuesSection />
            <AchievementsSection />
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black px-4 py-24 sm:px-6">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-4xl text-center"
            >
                <p className="text-xs uppercase tracking-[0.6em] text-neutral-400">
                    about us
                </p>
                <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
                    기획부터 운영까지 함께합니다
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
                    사람과 프로세스를 이해하는 파트너로, 복잡한 아이디어를
                    우아한 제품 경험으로 바꿉니다.
                </p>
            </motion.div>
        </section>
    );
}

function StorySection() {
    return (
        <Section
            id="story"
            band
            className="flex min-h-screen items-center justify-center"
            sectionClassName="bg-neutral-900"
        >
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
                <motion.div
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Our Story
                    </h2>

                    <p className="text-xl text-neutral-200 md:text-2xl">
                        강강박스는 기획부터 운영까지 책임지는 완벽한 팀을 목표로
                        결성되었습니다.
                    </p>

                    <p className="text-lg text-neutral-200">
                        '고객을 단숨에 사로잡는 매력적인 서비스 구현'과 '수십만
                        트래픽도 거뜬한 20년 내공의 튼튼한 시스템 설계'로 화려한
                        겉모습뿐만 아니라, 보이지 않는 시스템의 뼈대까지
                        튼튼하게 설계하여 귀사의 비즈니스가 기술적 문제 없이
                        오직 성장에만 집중할 수 있도록 돕습니다.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="relative h-80 w-full rounded-3xl md:h-96"
                >
                    <Image
                        src="/images/about-our_story.jpeg"
                        alt="Our Story"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-3xl object-cover"
                    />
                </motion.div>
            </div>
        </Section>
    );
}

function TeamSection() {
    const containerVariants = {
        hidden: { opacity: 0 },

        visible: {
            opacity: 1,

            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },

        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Section
            id="team"
            band
            className="flex min-h-screen items-center justify-center"
            sectionClassName="bg-neutral-950"
        >
            <div className="mx-auto max-w-5xl space-y-12 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Team Members
                    </h2>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {TEAM.map((member) => (
                        <motion.article
                            key={member.name}
                            variants={itemVariants}
                            className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-white"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 px-6 py-6">
                                <h3 className="text-xl font-semibold">
                                    {member.name}
                                </h3>

                                <p className="text-sm text-cyan-300">
                                    {member.role}
                                </p>

                                <p className="mt-3 text-neutral-200">
                                    {member.detail}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}

function ValuesSection() {
    return (
        <Section
            id="values"
            className="flex min-h-screen items-center justify-center"
            sectionClassName="bg-neutral-900"
        >
            <div className="mx-auto max-w-4xl space-y-16">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Our Values
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {VALUES.map((value) => {
                        const Icon = value.icon;

                        return (
                            <motion.div
                                key={value.title}
                                className="rounded-xl border-t-4 border-cyan-400 bg-neutral-950 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-neutral-800"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="text-center">
                                    <Icon className="inline-block h-10 w-10 text-cyan-400" />

                                    <h3 className="mt-6 text-xl font-bold text-white">
                                        {value.title}
                                    </h3>
                                </div>

                                <p className="mt-6 text-left leading-loose text-neutral-300 break-keep">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

const ModalImageGallery = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="flex flex-col gap-2">
            <div className="relative h-60 w-full overflow-hidden rounded-lg md:h-96">
                <Image
                    src={images[current]}
                    alt="Main achievement"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                    <button
                        key={i}
                        className={`relative h-20 w-full rounded-md ${
                            current === i
                                ? "ring-2 ring-cyan-400"
                                : "opacity-70"
                        }`}
                        onClick={() => setCurrent(i)}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${i}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

const AchievementModal = ({
    achievement,

    onClose,
}: {
    achievement: Achievement;

    onClose: () => void;
}) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
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
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid gap-8 md:grid-cols-2">
                    <ModalImageGallery images={achievement.images} />

                    <div className="flex flex-col">
                        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                            {achievement.category}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-white">
                            {achievement.event}
                        </h3>

                        <p className="mt-4 text-neutral-300">
                            {achievement.description}
                        </p>
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

function AchievementsSection() {
    const [selected, setSelected] = useState<Achievement | null>(null);

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selected]);

    return (
        <>
            <Section
                id="achievements"
                band
                className="flex min-h-screen items-center justify-center"
                sectionClassName="bg-neutral-950"
            >
                <div className="mx-auto w-full max-w-6xl space-y-12 px-4">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                    >
                        <h2 className="text-3xl font-bold text-white md:text-4xl">
                            Achievements
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {ACHIEVEMENTS.map((item) => (
                            <motion.div
                                key={item.event}
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                                onClick={() => setSelected(item)}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },

                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={item.images[0]}
                                        alt={item.event}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                <div className="p-4">
                                    <p className="text-xs font-semibold uppercase text-cyan-400">
                                        {item.category}
                                    </p>

                                    <h3 className="mt-1 font-semibold text-white">
                                        {item.event}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            <AnimatePresence>
                {selected && (
                    <AchievementModal
                        achievement={selected}
                        onClose={() => setSelected(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

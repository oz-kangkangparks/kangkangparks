"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: "beonwh",
        title: "비온후",
        subtitle: "모바일 앱",
        category: "Mobile App",
        description:
            "정책 연계가 가능한 헬스케어 기반 서비스로, 감정 기록 → 데이터 분석 → 정책 보고까지 이어지는 정책형 멘탈케어 루틴 서비스입니다.",
        image: "/images/beonwh.webp",
    },
    {
        id: "moapdf",
        title: "MoaPDF",
        subtitle: "SaaS 플랫폼",
        category: "SaaS Platform",
        description:
            "설치가 필요 없는 웹 브라우저 기반의 PDF 문서 처리 솔루션입니다",
        image: "/images/moapdf-main.webp",
    },
    {
        id: "inventory",
        title: "재고관리 시스템",
        subtitle: "맞춤형 웹 시스템",
        category: "Custom Web System",
        description:
            "AppSheet기반 스마트 재고관리 시스템으로, 누구나 사용할 수 있는 웹 기반의 입출고 자동화 시스템입니다.",
        image: "/images/재고관리 (1).webp",
    },
    {
        id: "moanovel",
        title: "MoaNOVEL",
        subtitle: "AI 서비스",
        category: "AI service",
        description:
            "AI 기반의 웹소설 집필도구로, 작가 친화적인 환경으로 AI 기반 집필 보조 툴을 제공합니다.",
        image: "/images/모아노벨 (1).webp",
    },
    {
        id: "mes",
        title: "MES",
        subtitle: "맞춤형 웹 시스템",
        category: "Custom Web System",
        description:
            "실시간 생산 관리 체계를 구축하여 디지털 전환이 필요한 제조업의 현실적인 문제들을 해결하기 위한 맞춤형 웹 시스템입니다.",
        image: "/images/MES_표지.png",
    },
];

const CAROUSEL_COPIES = 4;
const duplicatedProjects = Array.from(
    { length: CAROUSEL_COPIES },
    () => projects
).flat();
const BASE_SPEED = 0.5;

export default function FeaturedProjects() {
    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const segmentWidthRef = useRef(0);
    const baseOffsetRef = useRef(0);
    const animationRef = useRef<number>();
    const [isHovering, setIsHovering] = useState(false);
    const isJumpingRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);

    const applyTransform = () => {
        const track = trackRef.current;
        const segmentWidth = segmentWidthRef.current;
        if (!track || segmentWidth === 0) return;
        const loopWidth = segmentWidth;
        const modOffset =
            ((offsetRef.current % loopWidth) + loopWidth) % loopWidth;
        const translate = baseOffsetRef.current + modOffset;
        track.style.transform = `translate3d(-${translate}px,0,0)`;
    };

    const computeStepSize = () => {
        if (typeof window === "undefined") return 0;
        const track = trackRef.current;
        if (!track) return 0;
        const firstCard = track.children[0] as HTMLElement | undefined;
        if (!firstCard) return 0;
        const cardWidth = firstCard.getBoundingClientRect().width;
        const style = window.getComputedStyle(track);
        const gapValue = parseFloat(style.columnGap || style.gap || "0") || 0;
        return cardWidth + gapValue;
    };

    const runJumpAnimation = (targetOffset: number, duration = 700) => {
        const track = trackRef.current;
        if (!track) return;

        const startOffset = offsetRef.current;
        const distance = targetOffset - startOffset;
        const startTime = performance.now();
        isJumpingRef.current = true;

        const animateStep = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const currentOffset = startOffset + distance * eased;

            offsetRef.current = currentOffset;
            applyTransform();

            if (progress < 1) {
                requestAnimationFrame(animateStep);
            } else {
                offsetRef.current = targetOffset;
                applyTransform();
                isJumpingRef.current = false;
            }
        };

        requestAnimationFrame(animateStep);
    };

    useEffect(() => {
        const updateViewport = () => {
            if (typeof window === "undefined") return;
            setIsMobile(window.innerWidth < 1024);
        };
        updateViewport();
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    const handleJump = (dir: 1 | -1) => {
        if (isJumpingRef.current) return;
        const track = trackRef.current;
        if (!track) return;
        const segmentWidth = segmentWidthRef.current;
        const singleStep = computeStepSize();
        if (singleStep === 0 || segmentWidth === 0) return;

        const alignedOffset =
            Math.round(offsetRef.current / singleStep) * singleStep;
        offsetRef.current = alignedOffset;
        applyTransform();
        const stepMultiplier = isMobile ? 1 : 3;
        const jumpDistance = singleStep * stepMultiplier;
        const targetOffset = alignedOffset + jumpDistance * dir;
        runJumpAnimation(targetOffset);
    };

    useEffect(() => {
        const animate = () => {
            const track = trackRef.current;
            if (!track) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const segmentWidth = segmentWidthRef.current;
            if (segmentWidth === 0) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            if (isJumpingRef.current) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const increment = isHovering ? 0 : BASE_SPEED;

            offsetRef.current += increment;

            applyTransform();

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isHovering]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const segmentWidth = track.scrollWidth / CAROUSEL_COPIES;
        segmentWidthRef.current = segmentWidth;
        baseOffsetRef.current = segmentWidth;
        offsetRef.current = 0;
        applyTransform();

        const handleResize = () => {
            const nextSegmentWidth =
                (trackRef.current?.scrollWidth || 0) / CAROUSEL_COPIES;
            segmentWidthRef.current = nextSegmentWidth;
            baseOffsetRef.current = nextSegmentWidth;
            applyTransform();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="portfolio"
            className="relative flex min-h-screen w-full items-center justify-center bg-neutral-900 border-t border-neutral-800 py-16 md:h-screen md:py-0"
        >
            <div className="mx-auto w-full px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
                        PERFORMANCE
                    </h2>
                </motion.div>
                {/* Carousel */}
                <div className="relative">
                    <div
                        className="overflow-hidden"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div
                            ref={trackRef}
                            className="flex gap-8 will-change-transform"
                        >
                            {duplicatedProjects.map((project, index) => (
                                <Link
                                    key={`${project.id}-${index}`}
                                    href={`/portfolio#${project.id}`}
                                    className="group relative h-80 w-[280px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority={index < projects.length}
                                        sizes="(min-width: 1024px) 280px, 70vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                                        <p className="mb-2 text-xs uppercase tracking-wider text-cyan-300">
                                            {project.category}
                                        </p>
                                        <h3 className="text-xl font-bold text-white lg:text-2xl">
                                            {project.subtitle}
                                        </h3>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-center bg-black/90 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <p className="mb-3 text-xs uppercase tracking-wider text-cyan-400">
                                            {project.category}
                                        </p>
                                        <h3 className="mb-4 text-2xl font-bold text-white">
                                            {project.subtitle}
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-neutral-300">
                                            {project.description}
                                        </p>
                                        <p className="text-sm font-medium text-cyan-400">
                                            MORE VIEW+
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="pointer-events-none absolute inset-y-0 flex w-full items-center justify-between">
                        <button
                            type="button"
                            aria-label="Skip left"
                            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:border-white"
                            onClick={() => handleJump(-1)}
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            aria-label="Skip right"
                            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:border-white"
                            onClick={() => handleJump(1)}
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <Link
                        href="/portfolio"
                        className="inline-block px-10 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all"
                    >
                        MORE VIEW+
                    </Link>
                </div>
            </div>
        </section>
    );
}

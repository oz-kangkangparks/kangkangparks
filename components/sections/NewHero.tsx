"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ParticleConstellation, {
    ParticleConstellationHandle,
} from "../canvas/ParticleConstellation";

const heroSlides = [
    { id: 1, title: "기업 · 기관\n웹사이트 제작" },
    { id: 2, title: "맞춤형\n웹 시스템 개발" },
    { id: 3, title: "AI 기반\nSaaS 플랫폼" },
    { id: 4, title: "모바일 앱\n개발" },
];

export default function NewHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationDirection, setAnimationDirection] = useState<
        "left" | "right"
    >("right");
    const constellationRef = useRef<ParticleConstellationHandle>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            const newDirection = Math.random() > 0.5 ? "left" : "right";
            setAnimationDirection(newDirection);
            constellationRef.current?.triggerWhoosh(
                newDirection === "left" ? "right" : "left"
            );
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const getTextVariants = (direction: "left" | "right"): Variants => ({
        initial: {
            opacity: 0,
            x: direction === "right" ? 200 : -200,
            y: -100,
            z: -400,
            rotateY: direction === "right" ? -90 : 90,
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            z: 0,
            rotateY: 0,
            transition: { duration: 0.5, ease: "circOut" },
        },
        exit: {
            opacity: 0,
            x: direction === "right" ? -200 : 200,
            y: 100,
            z: -400,
            rotateY: direction === "right" ? 90 : -90,
            transition: { duration: 0.5, ease: "circIn" },
        },
    });

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <ParticleConstellation ref={constellationRef} />
            <div
                className="absolute inset-0 z-10 flex items-center justify-center text-center"
                style={{ perspective: "1200px" }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        variants={getTextVariants(animationDirection)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="whitespace-pre-wrap"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <h1 className="text-5xl font-bold drop-shadow-xl bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                            {heroSlides[currentSlide].title}
                        </h1>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Starfield from "../canvas/Starfield";

const heroSlides = [
    { id: 1, title: "기업 · 기관\n웹사이트 제작" },
    { id: 2, title: "맞춤형\n웹 시스템 개발" },
    { id: 3, title: "AI 기반\nSaaS 플랫폼" },
    { id: 4, title: "모바일 앱\n개발" },
];

export default function NewHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000); // 4-second cycle

        return () => clearInterval(timer);
    }, []);

    const textVariants: Variants = {
        initial: { opacity: 0, z: -300, rotateY: 60 },
        animate: {
            opacity: 1,
            z: 0,
            rotateY: 0,
            transition: {
                duration: 1.2, // Entry animation
                ease: "circOut",
            },
        },
        exit: {
            opacity: 0,
            z: 300,
            rotateY: -60,
            transition: {
                duration: 1.2, // Exit animation
                ease: "circIn",
            },
        },
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <Starfield starCount={1500} />

            <div
                className="relative z-10 h-full flex items-center justify-center text-center px-4"
                style={{ perspective: "1200px" }}
            >
                <AnimatePresence>
                    {" "}
                    {/* Removed mode="wait" */}
                    <motion.div
                        key={currentSlide}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="whitespace-pre-wrap absolute" // Use absolute positioning to allow overlap
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <h1 className="text-5xl font-bold">
                            <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                                {heroSlides[currentSlide].title}
                            </span>
                        </h1>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroSequences = [
    {
        id: "plan",
        label: "PLAN",
        video: "/videos/plan.mp4",
    },
    {
        id: "design",
        label: "DESIGN",
        video: "/videos/design.mp4",
    },
    {
        id: "build",
        label: "BUILD",
        video: "/videos/build.mp4",
    },
    {
        id: "test",
        label: "TEST",
        video: "/videos/test.mp4",
    },
    {
        id: "care",
        label: "CARE",
        video: "/videos/care.mp4",
    },
];

const TRANSITION_DURATION = 0.8;
const DISPLAY_DURATION = 3000;

export default function NewHero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSequences.length);
        }, DISPLAY_DURATION);

        return () => clearInterval(intervalId);
    }, []);

    const currentSequence = heroSequences[activeIndex];

    return (
        <section className="relative flex h-screen w-full overflow-hidden bg-black">
            {heroSequences.map((sequence, index) => (
                <motion.video
                    key={sequence.id}
                    src={sequence.video}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    initial={false}
                    animate={{ opacity: index === activeIndex ? 1 : 0 }}
                    transition={{
                        duration: TRANSITION_DURATION,
                        ease: "easeInOut",
                    }}
                    style={{ zIndex: index === activeIndex ? 1 : 0 }}
                    aria-hidden={index !== activeIndex}
                />
            ))}
            <div className="relative z-20 flex h-full w-full max-w-3xl flex-col items-start justify-center p-12 text-white md:p-16">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black via-black/85 to-transparent md:w-[60vw]" />
                <div className="relative z-10 min-h-[8rem] w-full">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentSequence.id}
                            className="absolute inset-x-0 font-extrabold tracking-tight text-[8rem] md:text-[14rem]"
                            initial={{ opacity: 0, x: -160, y: -480 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -160 }}
                            transition={{
                                duration: TRANSITION_DURATION,
                                ease: "easeInOut",
                            }}
                        >
                            {currentSequence.label}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

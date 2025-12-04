"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Transition } from "framer-motion";

const heroSequences = [
    {
        id: "plan",
        label: "PLAN",
        videoMp4: "/videos/plan.mp4",
        videoWebm: "/videos/plan.webm",
        poster: "/videos/plan-poster.webp",
    },
    {
        id: "design",
        label: "DESIGN",
        videoMp4: "/videos/design.mp4",
        videoWebm: "/videos/design.webm",
        poster: "/videos/design-poster.webp",
    },
    {
        id: "build",
        label: "BUILD",
        videoMp4: "/videos/build.mp4",
        videoWebm: "/videos/build.webm",
        poster: "/videos/build-poster.webp",
    },
    {
        id: "test",
        label: "TEST",
        videoMp4: "/videos/test.mp4",
        videoWebm: "/videos/test.webm",
        poster: "/videos/test-poster.webp",
    },
    {
        id: "care",
        label: "CARE",
        videoMp4: "/videos/care.mp4",
        videoWebm: "/videos/care.webm",
        poster: "/videos/care-poster.webp",
    },
];

const TRANSITION_DURATION = 0.8;
const DISPLAY_DURATION = 3000;

export default function NewHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSequences.length);
        }, DISPLAY_DURATION);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const checkIsMobile = () => {
            if (typeof window === "undefined") return;
            setIsMobile(window.innerWidth < 768);
        };
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const currentSequence = heroSequences[activeIndex];

    const mobileHeadingVariants = {
        initial: { opacity: 0, scale: 0.9, filter: "blur(24px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, scale: 1.05, filter: "blur(32px)" },
    };

    const desktopHeadingVariants = {
        initial: { opacity: 0, x: -160 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -160 },
    };

    const headingVariants = isMobile
        ? mobileHeadingVariants
        : desktopHeadingVariants;

    const headingTransition: Transition = isMobile
        ? {
              duration: 1.2,
              ease: "easeInOut",
              type: "tween",
          }
        : { duration: TRANSITION_DURATION, ease: "easeInOut", type: "tween" };

    return (
        <section className="relative flex h-screen w-full overflow-hidden bg-black">
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.video
                        key={currentSequence.id}
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={currentSequence.poster}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: TRANSITION_DURATION,
                            ease: "easeInOut",
                        }}
                    >
                        {currentSequence.videoWebm && (
                            <source
                                src={currentSequence.videoWebm}
                                type="video/webm"
                            />
                        )}
                        <source
                            src={currentSequence.videoMp4}
                            type="video/mp4"
                        />
                    </motion.video>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                <div className="absolute inset-0 bg-black/20 md:hidden" />
            </div>
            <div className="relative z-20 flex h-full w-full max-w-3xl flex-col items-center justify-center px-6 text-white md:items-start md:justify-start md:px-16 md:py-16">
                <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full bg-gradient-to-r from-black via-black/80 to-transparent md:block md:w-[60vw]" />
                <div className="relative z-10 min-h-[6rem] w-full text-center md:text-left">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentSequence.id}
                            className="block text-center font-extrabold tracking-tight text-6xl sm:text-7xl md:absolute md:inset-x-0 md:text-left md:text-[12rem] lg:text-[14rem]"
                            variants={headingVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={headingTransition}
                        >
                            {currentSequence.label}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

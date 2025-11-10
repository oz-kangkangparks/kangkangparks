"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SimpleCTA() {
    return (
        <section
            id="contact"
            className="relative flex min-h-screen items-center overflow-hidden border-t border-neutral-800 py-20"
        >
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="videos/contact.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 lg:px-12">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold text-white leading-tight lg:text-5xl xl:text-6xl">
                        CONTACT
                    </h2>
                    <p className="mt-6 text-lg text-neutral-400 lg:text-xl">
                        비즈니스의 새로운 도약, 강강박스와 함께 시작하세요.
                    </p>

                    <a
                        href="mailto:box@kangkangparks.com"
                        className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-neutral-950 transition-colors hover:bg-neutral-100"
                    >
                        <span>문의하기</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

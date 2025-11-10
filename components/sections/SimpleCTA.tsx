"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SimpleCTA() {
    return (
        <section
            id="contact"
            className="relative bg-neutral-900 border-t border-neutral-800 py-16"
        >
            <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
                            프로젝트 문의
                        </h2>
                        <p className="text-lg lg:text-xl text-neutral-400 mb-12 leading-relaxed">
                            ERP, 모바일 앱, AI 시스템 등<br />
                            필요한 프로젝트를 상담해보세요.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="mailto:box@kangkangparks.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-950 font-semibold rounded-xl hover:bg-neutral-100 transition-colors group"
                        >
                            <span>이메일 문의하기</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Email */}
                        <div className="border-t-2 border-white pt-8">
                            <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">
                                Email
                            </p>
                            <a
                                href="mailto:box@kangkangparks.com"
                                className="text-2xl lg:text-3xl font-bold text-white hover:text-neutral-300 transition-colors"
                            >
                                box@kangkangparks.com
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "./Layout";
import { LogoConnected } from "./Logo";

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
            <Container className="flex items-center justify-between py-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <LogoConnected />
                </div>
                <HeaderNav />
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-100 transition-colors"
                    >
                        문의하기 <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </Container>
        </header>
    );
}

const NAV_ITEMS = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

function HeaderNav() {
    const variants = {
        init: { opacity: 0, y: -8 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.04 * i, duration: 0.3 },
        }),
    };
    return (
        <nav className="hidden md:flex items-center gap-1 text-sm text-neutral-300">
            {NAV_ITEMS.map((it, i) => (
                <Link key={it.href} href={it.href}>
                    <motion.div
                        custom={i}
                        initial="init"
                        animate="show"
                        variants={variants}
                        className="relative px-4 py-2 rounded-lg hover:bg-neutral-800/50 hover:text-white transition-colors"
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{it.label}</span>
                    </motion.div>
                </Link>
            ))}
        </nav>
    );
}

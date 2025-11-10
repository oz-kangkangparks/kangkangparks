"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Container } from "./Layout";
import { LogoConnected } from "./Logo";

export default function SiteHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen((prev) => !prev);
    const closeMobile = () => setMobileOpen(false);

    useEffect(() => {
        const body = document.body;
        if (mobileOpen) {
            const prev = body.style.overflow;
            body.style.overflow = "hidden";
            return () => {
                body.style.overflow = prev;
            };
        }
    }, [mobileOpen]);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
            <Container className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <button
                    className="flex items-center"
                    onClick={closeMobile}
                    aria-label="Go to home"
                >
                    <LogoConnected />
                </button>
                <HeaderNav />
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-100 md:inline-flex"
                    >
                        문의하기 <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:border-white md:hidden"
                        onClick={toggleMobile}
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </Container>
            <MobileMenu open={mobileOpen} onClose={closeMobile} />
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
        <nav className="hidden items-center gap-1 text-sm text-neutral-300 md:flex">
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

function MobileMenu({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="fixed inset-0 z-[999] bg-black md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                    />
                    <motion.nav
                        className="fixed inset-y-0 right-0 z-[1000] h-full w-full max-w-xs bg-neutral-950 p-6 shadow-2xl md:hidden"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6 text-right">
                            <button
                                aria-label="Close menu"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white"
                                onClick={onClose}
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <ul className="space-y-4 text-lg font-semibold text-white">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block rounded-xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
                                        onClick={onClose}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-base font-semibold text-neutral-900"
                                    onClick={onClose}
                                >
                                    문의하기
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

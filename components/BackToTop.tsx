"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const reduced = useReducedMotion();
    const [show, setShow] = useState(false);
    useEffect(() => {
        function onScroll() {
            // 300px 이상 스크롤하면 버튼 표시
            setShow(window.scrollY > 300);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    const onClick = () => {
        try {
            window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
        } catch {
            window.scrollTo(0, 0);
        }
    };
    return (
        <motion.button
            type="button"
            aria-label="맨 위로"
            onClick={onClick}
            className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white-500/50 bg-white text-black shadow-2xl backdrop-blur hover:white-pink-400 hover:shadow-white-500/50 transition-all"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={
                show
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 20, pointerEvents: "none" }
            }
            transition={{ duration: reduced ? 0 : 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <ArrowUp className="h-6 w-6" />
        </motion.button>
    );
}

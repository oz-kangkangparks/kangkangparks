"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";

const achievements = [
    {
        category: "NETWORK & AWARD",
        title: "경남벤처기업협회 정기총회 유공포상",
        description: "경남벤처기업협회 표창장 수상",
        images: [
            "/images/venture/venture_2.webp",
            "/images/venture/venture_3.webp",
            "/images/venture/venture_4.webp",
        ],
    },
    {
        category: "PARTNERSHIP",
        title: "김해시 복지재단 협약식",
        description: "김해시 복지재단과의 업무 협약",
        images: [
            "/images/hyeobyak/hyeobyak-1.webp",
            "/images/hyeobyak/hyeobyak-2.webp",
            "/images/hyeobyak/hyeobyak-3.webp",
        ],
    },
    {
        category: "COMPETITION",
        title: "창업진흥원 정책 아이디어 공모전 표창",
        description: "정책 아이디어 공모전 수상",
        images: [
            "/images/gongmojeon/gongmojeon-1.webp",
            "/images/gongmojeon/gongmojeon-2.webp",
            "/images/gongmojeon/gongmojeon-3.webp",
        ],
    },
    {
        category: "coming soon",
        title: "COMING SOON",
        images: [],
    },
];

export default function Achievements() {
    return (
        <section
            id="archievements"
            className="relative flex min-h-screen w-full items-center justify-center bg-neutral-950 border-t border-neutral-900 py-16 md:h-screen md:py-0"
        >
            <AchievementsContent />
        </section>
    );
}

function AchievementsContent() {
    const [modalState, setModalState] = useState<ImageModalState>(null);

    const openModal = (images: string[], index: number, title: string) => {
        if (!images.length) return;
        setModalState({ images, index, title });
    };

    const closeModal = () => setModalState(null);

    const navigateModal = (direction: number) => {
        setModalState((prev) => {
            if (!prev || prev.images.length === 0) return prev;
            const nextIndex =
                (prev.index + direction + prev.images.length) %
                prev.images.length;
            return { ...prev, index: nextIndex };
        });
    };

    return (
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-12">
            <div className="mb-14 text-center">
                <motion.h2
                    className="text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    ARCHIEVEMENTS
                </motion.h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {achievements.map((item, index) => (
                    <AchievementCard
                        key={item.title}
                        item={item}
                        delay={index * 0.05}
                        onImageClick={(idx) =>
                            openModal(item.images ?? [], idx, item.title)
                        }
                    />
                ))}
            </div>

            <ImageModal
                state={modalState}
                onClose={closeModal}
                onNavigate={navigateModal}
            />
        </div>
    );
}

type Achievement = (typeof achievements)[number];
type ImageModalState = {
    images: string[];
    index: number;
    title: string;
} | null;

function AchievementCard({
    item,
    delay,
    onImageClick,
}: {
    item: Achievement;
    delay: number;
    onImageClick: (index: number) => void;
}) {
    const [activeImage, setActiveImage] = useState(0);
    const images = item.images ?? [];

    return (
        <motion.div
            className="flex min-h-[420px] flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay, duration: 0.4 }}
        >
            {images.length > 0 ? (
                <>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-cyan-300">
                            {item.category}
                        </p>
                        <h3 className="mt-3 text-lg font-semibold">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-400">
                            {item.description}
                        </p>
                    </div>
                    <div className="mt-5">
                        <button
                            type="button"
                            onClick={() => onImageClick(activeImage)}
                            className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/15"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={images[activeImage]}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={images[activeImage]}
                                        alt={`${item.title} 이미지 ${
                                            activeImage + 1
                                        }`}
                                        fill
                                        sizes="(min-width: 1024px) 260px, 100vw"
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </button>
                        <div className="mt-4 flex gap-3">
                            {images.map((img, thumbIndex) => (
                                <button
                                    key={img + thumbIndex}
                                    type="button"
                                    className={`relative h-14 flex-1 overflow-hidden rounded-xl border ${
                                        activeImage === thumbIndex
                                            ? "border-white"
                                            : "border-white/20"
                                    }`}
                                    onClick={() => setActiveImage(thumbIndex)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${item.title} 썸네일 ${
                                            thumbIndex + 1
                                        }`}
                                        fill
                                        sizes="(min-width: 1024px) 80px, 33vw"
                                        className="object-cover"
                                    />
                                    {activeImage !== thumbIndex && (
                                        <div className="absolute inset-0 bg-black/40" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                        {item.category}
                    </p>
                    <p className="mt-6 text-2xl font-bold tracking-[0.4em] text-white sm:text-3xl lg:text-[1.5rem]">
                        COMING
                        <br />
                        SOON
                    </p>
                </div>
            )}
        </motion.div>
    );
}

function ImageModal({
    state,
    onClose,
    onNavigate,
}: {
    state: ImageModalState;
    onClose: () => void;
    onNavigate: (direction: number) => void;
}) {
    useEffect(() => {
        if (!state) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [state]);

    if (!state) return null;
    const { images, index, title } = state;
    const currentImage = images[index];
    if (!currentImage) return null;

    return createPortal(
        <AnimatePresence>
            {currentImage && (
                <motion.div
                    className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/90 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="relative h-full w-full max-h-[80vh] max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentImage}
                            alt={`${title} 확대 이미지`}
                            fill
                            sizes="(min-width: 1024px) 800px, 100vw"
                            className="object-contain"
                        />
                        {images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onNavigate(-1);
                                    }}
                                >
                                    ‹
                                </button>
                                <button
                                    type="button"
                                    className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onNavigate(1);
                                    }}
                                >
                                    ›
                                </button>
                            </>
                        )}
                        <button
                            type="button"
                            className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-4xl text-white shadow-lg shadow-black/40"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            aria-label="닫기"
                        >
                            ×
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

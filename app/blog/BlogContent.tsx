"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "./posts";

export default function BlogContent() {
    return (
        <div className="bg-neutral-950 text-white">
            <HeroSection />
            <BlogListSection />
        </div>
    );
}

function HeroSection() {
    return (
        <Section
            className="relative isolate flex min-h-screen items-center justify-center overflow-hidden text-center"
            sectionClassName="bg-gradient-to-b from-neutral-900 to-black"
        >
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                <p className="text-xs uppercase tracking-[0.6em] text-neutral-400">
                    Blog
                </p>
                <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
                    강강박스의 생각과 경험을 공유합니다
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
                    기술적인 이슈부터 서비스 운영 이야기까지, 차곡차곡 기록합니다.
                </p>
            </motion.div>
        </Section>
    );
}

function BlogListSection() {
    const [visiblePosts, setVisiblePosts] = React.useState(6);
    const sentinelRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisiblePosts((prev) => Math.min(prev + 6, blogPosts.length));
                }
            },
            { rootMargin: "100px" }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, []);

    const displayedPosts = blogPosts.slice(0, visiblePosts);

    return (
        <Section
            id="blog-list"
            sectionClassName="bg-neutral-950"
            className="min-h-screen py-24"
        >
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                {displayedPosts.length === 0 ? (
                    <div className="col-span-full flex min-h-[400px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
                        <p className="text-xl text-neutral-400">
                            준비 중인 콘텐츠입니다.
                        </p>
                    </div>
                ) : (
                    <>
                        {displayedPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    delay: index % 3 * 0.1,
                                    duration: 0.5,
                                }}
                                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-900/20"
                            >
                                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                                    <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                                        <Image
                                            src={post.cover}
                                            alt={post.title}
                                            fill
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-60" />
                                    </div>
                                    <div className="flex flex-1 flex-col p-8">
                                        <div className="mb-4 inline-flex w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                                            {post.category}
                                        </div>
                                        <h2 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                                            {post.title}
                                        </h2>
                                        <p className="mb-6 flex-1 text-neutral-400 line-clamp-3">
                                            {post.summary}
                                        </p>
                                        <span
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-cyan-400"
                                        >
                                            글 읽기 <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </>
                )}
            </div>
            {visiblePosts < blogPosts.length && (
                <div ref={sentinelRef} className="h-20 w-full" />
            )}
        </Section>
    );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Share2, ArrowRight } from "lucide-react";
import { blogPosts } from "../posts";

function getPost(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}

function getRelatedPosts(currentSlug: string) {
    const currentIndex = blogPosts.findIndex((p) => p.slug === currentSlug);
    const related = [];
    for (let i = 1; i <= 3; i++) {
        related.push(blogPosts[(currentIndex + i) % blogPosts.length]);
    }
    return related;
}

export default function BlogDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const router = useRouter();
    const post = getPost(params.slug);
    const relatedPosts = post ? getRelatedPosts(post.slug) : [];

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("링크가 복사되었습니다!");
    };

    if (!post) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        존재하지 않는 글입니다.
                    </h1>
                    <button
                        onClick={() => router.back()}
                        className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        돌아가기
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-neutral-950" />
                <div className="absolute inset-0 flex items-end pb-20">
                    <div className="mx-auto w-full max-w-4xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <button
                                    onClick={() => router.back()}
                                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    목록으로
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-cyan-500/20 hover:text-cyan-400"
                                >
                                    <Share2 className="h-4 w-4" />
                                    공유하기
                                </button>
                            </div>
                            
                            <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                                {post.category}
                            </div>

                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                {post.title}
                            </h1>


                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="mx-auto max-w-4xl px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-neutral-300 prose-strong:text-white prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-cyan-400 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:pr-4 prose-li:text-neutral-300"
                >
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </motion.div>

                <div className="mt-20 border-t border-white/10 pt-10">
                    <div className="mb-12 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">
                            이런 글은 어떠세요?
                        </h3>
                        <Link
                            href="/blog"
                            className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
                        >
                            전체 보기
                        </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedPosts.map((relatedPost) => (
                            <Link
                                key={relatedPost.slug}
                                href={`/blog/${relatedPost.slug}`}
                                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/20"
                            >
                                <div className="relative h-40 w-full overflow-hidden bg-neutral-900">
                                    <Image
                                        src={relatedPost.cover}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="mb-2 text-xs font-medium text-cyan-400">
                                        {relatedPost.category}
                                    </div>
                                    <h4 className="line-clamp-2 text-lg font-bold text-white group-hover:text-cyan-400">
                                        {relatedPost.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
}

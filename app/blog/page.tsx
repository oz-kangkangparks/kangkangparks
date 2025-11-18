'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from './posts'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 py-24 text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 px-6 py-20 text-center sm:px-10">
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.6em] text-cyan-200">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white lg:text-6xl">
              집요하게 기록하는 제작 노트
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-300">
              강강박스 팀이 직접 경험한 제작 과정, 대외활동 후기, 배운 인사이트를 단계별로 공유합니다.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {blogPosts.length === 0 ? (
            <p className="rounded-3xl border border-white/10 bg-white/5 p-6 text-neutral-300 md:col-span-2">
              준비 중인 콘텐츠입니다.
            </p>
          ) : (
            blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/5"
              >
                <div className="relative h-64 w-full bg-black">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs uppercase text-neutral-500">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
                  <p className="mt-3 flex-1 text-neutral-300">{post.summary}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                  >
                    글 읽기 <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  )
}

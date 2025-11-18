'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { blogPosts } from '../posts'

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-neutral-950 py-24 text-white">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-bold">존재하지 않는 글입니다.</h1>
          <Link href="/blog" className="mt-6 inline-flex text-cyan-300">
            블로그 목록으로 돌아가기
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-950 py-24 text-white">
      <article className="mx-auto w-full max-w-4xl px-6">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
          <div className="relative h-72 w-full">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <p className="text-sm uppercase text-neutral-500">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
            <div className="mt-8 whitespace-pre-wrap text-neutral-200">
              {post.content}
            </div>
            <Link
              href="/blog"
              className="mt-10 inline-flex text-sm font-semibold text-cyan-300"
            >
              ← 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

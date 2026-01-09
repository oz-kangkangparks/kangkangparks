import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../posts';
import BlogDetailContent, { BlogDetailNotFound } from './BlogDetailContent';

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

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: '글을 찾을 수 없습니다',
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: `${post.title} | 강강박스 블로그`,
      description: post.summary,
      images: [post.cover],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return <BlogDetailNotFound />;
  }

  const relatedPosts = getRelatedPosts(post.slug);

  return <BlogDetailContent post={post} relatedPosts={relatedPosts} />;
}

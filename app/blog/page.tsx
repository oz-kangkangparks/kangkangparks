import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: '블로그',
  description: '강강박스의 기술 블로그입니다. 웹 개발, 앱 개발, AI 솔루션 등 기술적인 이슈부터 서비스 운영 이야기까지 공유합니다.',
  openGraph: {
    title: '블로그 | 강강박스',
    description: '강강박스의 생각과 경험을 공유합니다',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}

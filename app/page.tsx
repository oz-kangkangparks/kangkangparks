import { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: '강강박스 | 웹 개발 전문 기업',
  description: '강강박스 - 20년 경력의 시니어 개발자가 이끄는 웹 개발 전문 기업. 웹사이트, 웹앱, AI 솔루션까지 원스톱 개발 서비스를 제공합니다.',
  openGraph: {
    title: '강강박스 | 웹 개발 전문 기업',
    description: '20년 경력의 시니어 개발자가 이끄는 웹 개발 전문 기업',
  },
};

export default function HomePage() {
  return <HomeContent />;
}

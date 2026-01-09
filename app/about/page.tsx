import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: '회사소개',
  description: '강강박스를 소개합니다. 기획부터 운영까지 함께하는 파트너로, 20년 경력의 시니어 개발자가 이끄는 웹 개발 전문 기업입니다.',
  openGraph: {
    title: '회사소개 | 강강박스',
    description: '기획부터 운영까지 함께하는 웹 개발 전문 파트너',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

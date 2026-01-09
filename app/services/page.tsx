import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: '서비스 소개',
  description: '강강박스가 제공하는 웹 개발 서비스를 소개합니다. 웹 서비스, SaaS 플랫폼, 기업용 시스템, 모바일 앱, AI 솔루션까지 원스톱으로 개발합니다.',
  openGraph: {
    title: '서비스 소개 | 강강박스',
    description: '웹 서비스, SaaS 플랫폼, 기업용 시스템, 모바일 앱, AI 솔루션 개발',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}

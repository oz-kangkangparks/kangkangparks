import { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '강강박스의 프로젝트 포트폴리오입니다. 웹 서비스, SaaS 플랫폼, 기업용 시스템, 모바일 앱, AI 솔루션 등 다양한 프로젝트 사례를 확인하세요.',
  openGraph: {
    title: '포트폴리오 | 강강박스',
    description: '검증된 기술력으로 성공적인 비즈니스 결과를 증명합니다.',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}

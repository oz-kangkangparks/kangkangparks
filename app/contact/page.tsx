import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: '문의하기',
  description: '강강박스에 프로젝트를 문의하세요. 웹 개발, 앱 개발, AI 솔루션 등 다양한 개발 프로젝트 상담을 진행합니다.',
  openGraph: {
    title: '문의하기 | 강강박스',
    description: '프로젝트 개발 문의 및 상담',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

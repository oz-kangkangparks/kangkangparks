import { Metadata } from 'next';
import CookiesContent from './CookiesContent';

export const metadata: Metadata = {
  title: '쿠키 정책',
  description: '강강박스 쿠키 정책입니다.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CookiesPage() {
  return <CookiesContent />;
}

import { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '강강박스 개인정보처리방침입니다.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

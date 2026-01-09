import { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: '이용약관',
  description: '강강박스 서비스 이용약관입니다.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return <TermsContent />;
}

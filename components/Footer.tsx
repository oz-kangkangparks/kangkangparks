import React from 'react';
import Link from 'next/link';
import { Github, ExternalLink, Shield } from 'lucide-react';
import { Container } from './Layout';
import { LogoConnected } from './Logo';

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800/50 mt-24 bg-neutral-950">
      <Container className="py-16">
        {/* Brand Section */}
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <LogoConnected size={32} />
            <span className="text-lg font-bold tracking-tight">강강박스</span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            AI·IoT·소프트웨어를 한곳에서 제공합니다.
            <br />
            실험 속도와 운영 안정성을 균형 있게 잡습니다.
          </p>
          <p className="text-sm text-neutral-400 mb-6">
            box@kangkangparks.com
          </p>
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="border-t border-neutral-800/50">
        <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} 강강박스. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <Link href="/policy/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/policy/terms" className="hover:text-white transition-colors">이용약관</Link>
            <Link href="/policy/cookies" className="hover:text-white transition-colors">쿠키 정책</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

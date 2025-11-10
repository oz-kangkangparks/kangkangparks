import React from "react";
import Link from "next/link";
import { Github, ExternalLink, Shield } from "lucide-react";
import { Container } from "./Layout";
import { LogoConnected } from "./Logo";

export default function SiteFooter() {
    return (
        <footer className="border-t border-neutral-800/50 bg-neutral-950">
            <Container className="py-16">
                {/* Brand Section */}
                <div className="max-w-md mx-auto text-center">
                    <div className="flex items-center justify-center mb-4">
                        <LogoConnected />
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        AI·IoT·소프트웨어로 더 스마트한 세상을 만듭니다.
                    </p>
                    <a
                        href="mailto:box@kangkangparks.com"
                        className="text-sm text-neutral-400 hover:text-white transition-colors inline-block mb-6"
                    >
                        box@kangkangparks.com
                    </a>
                </div>
            </Container>

            {/* Bottom Section */}
            <div className="border-t border-neutral-800/50">
                <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-neutral-500">
                        © {new Date().getFullYear()} 강강박스. All rights
                        reserved.
                    </div>
                    <div className="flex items-center gap-6 text-sm text-neutral-500">
                        <Link
                            href="/policy/privacy"
                            className="hover:text-white transition-colors"
                        >
                            개인정보처리방침
                        </Link>
                        <Link
                            href="/policy/terms"
                            className="hover:text-white transition-colors"
                        >
                            이용약관
                        </Link>
                        <Link
                            href="/policy/cookies"
                            className="hover:text-white transition-colors"
                        >
                            쿠키 정책
                        </Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

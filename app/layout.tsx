import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/Header";
import SiteFooter from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-14RCET9J3K";

const siteUrl = "https://kangkangparks.com";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "강강박스 | KangKang Parks",
        template: "%s | 강강박스",
    },
    description: "강강박스 - 20년 경력의 시니어 개발자가 이끄는 웹 개발 전문 기업. 웹사이트, 웹앱, AI 솔루션까지 원스톱 개발 서비스를 제공합니다.",
    keywords: [
        "웹개발",
        "웹사이트 제작",
        "웹앱 개발",
        "소프트웨어 개발",
        "강강박스",
        "kangkangparks",
        "외주 개발",
        "SI",
        "스타트업 개발",
        "MVP 개발",
        "랜딩페이지",
        "관리자 페이지",
    ],
    authors: [{ name: "강강박스", url: siteUrl }],
    creator: "강강박스",
    publisher: "강강박스",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "강강박스 | KangKang Parks",
        description: "강강박스 - 20년 경력의 시니어 개발자가 이끄는 웹 개발 전문 기업",
        url: siteUrl,
        siteName: "강강박스",
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "강강박스 | KangKang Parks",
        description: "강강박스 - 20년 경력의 시니어 개발자가 이끄는 웹 개발 전문 기업",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "qJtFiH-VW5Uej5kzHRI9L1MFPrZ4mCb1Xhm60Ie0o2g",
    },
    alternates: {
        canonical: siteUrl,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <head>
                {/* Google Analytics */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_ID}');
                    `}
                </Script>
            </head>
            <body className="min-h-screen bg-neutral-950 text-white">
                <SiteHeader />
                <main>{children}</main>
                <BackToTop />
                <SiteFooter />
            </body>
        </html>
    );
}

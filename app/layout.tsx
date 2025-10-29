import type { Metadata } from "next"
import "./globals.css"
import SiteHeader from "@/components/Header"
import SiteFooter from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

export const metadata: Metadata = {
  title: "강강박스 | KangKang Parks",
  description: "강강박스 - 혁신적인 웹 개발 솔루션",
  keywords: ["웹개발", "소프트웨어", "강강박스", "kangkangparks"],
  authors: [{ name: "강강박스" }],
  openGraph: {
    title: "강강박스 | KangKang Parks",
    description: "강강박스 - 혁신적인 웹 개발 솔루션",
    type: "website",
    locale: "ko_KR",
    siteName: "강강박스",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-neutral-950 text-white">
        <SiteHeader />
        <main className="px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <BackToTop />
        <SiteFooter />
      </body>
    </html>
  )
}

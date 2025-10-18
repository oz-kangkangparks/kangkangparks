import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ganggangbox.example"),
  title: "강강박스 | 기획·개발 에이전시",
  description: "웹/앱/SaaS/AI, 기획부터 배포까지 원스톱 제공",
  alternates: { canonical: "/" },
  openGraph: {
    title: "강강박스 | 기획·개발 에이전시",
    description: "웹/앱/SaaS/AI, 기획부터 배포까지 원스톱 제공",
    url: "https://www.ganggangbox.example",
    siteName: "강강박스",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context":"https://schema.org",
    "@type":"Organization",
    name:"강강박스",
    url:"https://www.ganggangbox.example",
    sameAs:[],
    logo:"https://www.ganggangbox.example/logo.png",
    description:"기획·디자인·개발·배포 에이전시",
  }
  return (
    <html lang="ko">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

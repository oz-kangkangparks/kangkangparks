import Link from "next/link"
import Image from "next/image"

export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container py-10 grid md:grid-cols-4 gap-8">
        <div>
          <Image 
            src="/images/logo.png" 
            alt="강강박스" 
            width={180} 
            height={60} 
            className="h-14 w-auto mb-3"
          />
          <p className="muted">기획부터 배포까지, 원스톱 에이전시</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Menu</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/portfolio">PortFolio</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Policy</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/policy/privacy">개인정보처리방침</Link></li>
            <li><Link href="/policy/privacy/termas">이용약관</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <p className="text-sm">kji@kangkangparks.com</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-gray-500">
          © {new Date().getFullYear()} 강강박스. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"

export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container py-10 flex flex-col items-center">
        <Image 
          src="/images/logo.png" 
          alt="강강박스" 
          width={180} 
          height={60} 
          className="h-14 w-auto mb-6"
        />
        
        <div className="flex justify-center items-start gap-16 mb-4 ml-8">
          <div className="text-left">
            <div className="font-semibold mb-2">Policy</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/policy/privacy" className="hover:text-primary transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/policy/privacy/termas" className="hover:text-primary transition-colors">이용약관</Link></li>
            </ul>
          </div>
          <div className="text-left ml-16">
            <div className="font-semibold mb-2">Contact</div>
            <p className="text-sm">contact@kangkangparks.com</p>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} 강강박스. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

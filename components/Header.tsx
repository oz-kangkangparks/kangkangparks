"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Item = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 rounded-lg ${active ? "bg-accent text-ink" : "hover:bg-accent/70"}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="강강박스" 
            width={150} 
            height={50} 
            className="h-12 w-auto"
            priority
          />
        </Link>
        
        {/* 데스크톱 메뉴 */}
        <nav className="desktop-menu hidden md:flex items-center gap-1">
          <Item href="/" label="Home" />
          <Item href="/about" label="About Us" />
          <Item href="/portfolio" label="PortFolio" />
          <Item href="/services" label="Services" />
          <Item href="/contact" label="Contact Us" />
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="메뉴 열기"
        >
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container py-4 flex flex-col space-y-2">
            <Item href="/" label="Home" onClick={closeMenu} />
            <Item href="/about" label="About Us" onClick={closeMenu} />
            <Item href="/portfolio" label="PortFolio" onClick={closeMenu} />
            <Item href="/services" label="Services" onClick={closeMenu} />
            <Item href="/contact" label="Contact Us" onClick={closeMenu} />
          </nav>
        </div>
      )}
    </header>
  )
}

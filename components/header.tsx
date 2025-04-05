"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Navigation items array for DRY code
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/departments", label: "Department" },
    { href: "/doctors", label: "Doctor" },
    { href: "/contact", label: "Contact" },
  ]

  // Function to determine if a link is active
  const isActive = (href: any) => pathname === href

  return (
    <header className="bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto md:px-10 px-4">
        <div className="flex items-center justify-between md:h-24 h-20">
          <Link href="/" className="text-2xl font-bold">
            <img src="/images/vmc_logo.png" alt="VMC Logo" className="md:h-20 h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${isActive(item.href)
                    ? "text-[#036894] font-semibold border-b-2 border-[#036894]"
                    : "hover:text-[#036894]"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <div className="flex items-center mr-4">
              <Phone className="w-5 h-5 mr-2" />
              <div>
                <div className="text-xs font-medium">EMERGENCY</div>
                <div className="font-bold">555-123-4567</div>
              </div>
            </div>
            <Link href="/appointment">
              <Button className="text-[#036894] bg-[#03689457] hover:bg-[#036894] hover:text-white">
                Book Now
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#036894] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-2 ${isActive(item.href)
                    ? "text-white font-semibold bg-[#34b3d4] px-3 rounded"
                    : "text-white hover:text-[#34b3d4]"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center py-2 text-red-400">
              <Phone className="w-5 h-5 mr-2" />
              <div>
                <div className="text-xs font-medium">EMERGENCY</div>
                <div className="font-bold">555-123-4567</div>
              </div>
            </div>
            <Link href="/appointment" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-white text-[#036894] hover:bg-teal-100 mt-5">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
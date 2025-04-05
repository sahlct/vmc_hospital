"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/departments", label: "Department" },
    { href: "/doctors", label: "Doctor" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: any) => pathname === href

  return (
    <header className="bg-white text-black sticky top-0 z-50 font-noto">
      <div className="container mx-auto md:px-10 px-4">
        <div className="flex items-center justify-between md:h-24 h-20">
          <Link href="/" className="text-2xl font-bold">
            <img src="/images/vmc_logo.png" alt="VMC Logo" className="md:h-20 h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors text-lg ${isActive(item.href)
                  ? "text-[#036894] font-semibold border-b-2 border-[#036894]"
                  : "hover:text-[#036894]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center font-noto">
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

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-[75%] bg-[#036894]/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 py-8 h-full flex flex-col justify-between">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-3 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-lg rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-white bg-[#34b3d4] font-semibold shadow-md"
                      : "text-white hover:bg-white/10 hover:text-[#34b3d4]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.href) && (
                    <span className="absolute inset-0 rounded-lg bg-[#34b3d4] -z-10"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Emergency Contact and Button */}
            <div className="mt-auto space-y-6">
              <div className="flex items-center text-white bg-white/10 rounded-lg p-4 mb-4">
                <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium uppercase tracking-wide">Emergency</div>
                  <div className="text-lg font-bold">555-123-4567</div>
                </div>
              </div>
              <Link href="/appointment" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-white text-[#036894] hover:bg-[#34b3d4] hover:text-white text-lg py-6 rounded-lg shadow-md transition-all duration-200">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const links = [
    { label: "Home", href: "#" },
    { label: "Our Story", href: "#about" },
    { label: "Advertise With Us", href: "#marketing" },
    { label: "Projects", href: "#coming-soon" },
    { label: "Contact Us", href: "#footer" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight
      setIsScrolledPastHero(currentScrollY > heroHeight * 0.8)

      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolledPastHero ? "bg-white shadow-lg py-2 sm:py-3" : "bg-transparent py-3 sm:py-4 lg:py-6"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="relative w-24 h-14 sm:w-28 sm:h-16 lg:w-32 lg:h-20">
              <Image src="/logo-Photoroom.png" alt="Free Aqua Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm lg:text-base font-semibold tracking-wide text-gray-800 hover:text-teal-600 transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-b-2xl shadow-xl px-4 py-6 space-y-2 animate-in slide-in-from-top">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-xl text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

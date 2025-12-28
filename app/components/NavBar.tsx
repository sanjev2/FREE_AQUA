"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      if (currentScrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" }, // Added Services link
    { label: "Our Story", href: "#about" },
    { label: "Advertise With Us", href: "#marketing" },
    { label: "Projects", href: "#coming-soon" },
    { label: "Contact Us", href: "#footer" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      // Generic smooth scroll handler
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="relative w-28 h-16 sm:w-32 sm:h-18">
              <Image src="/logo-Photoroom.png" alt="Free Aqua Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm lg:text-base font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap text-gray-900 hover:text-teal-600"
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
                onClick={handleNavClick}
                className="block px-4 py-3 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-xl text-base font-medium transition-colors"
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

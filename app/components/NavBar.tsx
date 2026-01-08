"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

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
    { label: "Services", href: "#services" },
    { label: "Our Story", href: "#about" },
    { label: "Projects", href: "#coming-soon" },
    { label: "Advertise With Us", href: "#marketing" },
    { label: "Contact Us", href: "#footer" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })
      } else if (href === "#home") {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })
      }
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-xl shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 sm:h-24 py-4 sm:py-6">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="relative w-28 h-16 sm:w-32 sm:h-18">
                <Image src="/logo-Photoroom.png" alt="Free Aqua Logo" fill className="object-contain" priority />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 xl:gap-10 items-center">
            {links.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-[11px] font-black tracking-[0.2em] uppercase transition-colors duration-300 whitespace-nowrap text-zinc-900 hover:text-teal-600 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
        >
          <div className="mt-2 bg-white/80 backdrop-blur-xl rounded-b-2xl shadow-2xl px-4 py-6 space-y-2 border border-white/20">
            {links.map((link) => (
              <motion.div key={link.label} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-gray-800 hover:bg-teal-50/50 hover:text-teal-600 rounded-xl text-base font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

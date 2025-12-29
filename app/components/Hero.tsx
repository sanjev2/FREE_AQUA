"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  const handlePartnerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("marketing")
    if (element) {
      element.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(13,148,136,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8))] z-[1]" />
        <div className="absolute inset-0 opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/water.png')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-160px)] w-full">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-zinc-900 leading-[0.85] tracking-tighter">
            Water is <span className="text-teal-600 italic font-serif">Free</span>.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-600 max-w-3xl mx-auto font-medium leading-tight px-4">
            Clean drinking water for communities, powered by ethical advertising partnerships.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="#marketing"
              onClick={handlePartnerClick}
              /* Upgraded CTA to a stark, bold aesthetic with sharp corners (rounded-sm) and premium transitions */
              className="inline-flex items-center gap-4 bg-zinc-900 hover:bg-teal-600 text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase transition-all duration-500 shadow-2xl hover:shadow-teal-600/20 group"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-gray-700 text-xs sm:text-sm font-medium">Scroll to explore</span>
          <div className="animate-bounce">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-transparent via-white/60 to-white z-[5]" />
    </section>
  )
}

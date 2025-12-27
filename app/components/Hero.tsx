"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  // Light, logo-friendly gradients
  const gradients = [
    "from-sky-200 via-blue-200 to-cyan-200",
    "from-blue-100 via-sky-200 to-teal-200",
    "from-cyan-100 via-blue-200 to-sky-300",
    "from-teal-100 via-cyan-200 to-blue-200",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % gradients.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[bgIndex]} transition-all duration-1000 ease-in-out`}
      />

      {/* Soft light overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-96px)] sm:min-h-[calc(100vh-112px)] lg:min-h-[calc(100vh-128px)] w-full">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight tracking-tight px-2">
            Welcome to Free Aqua
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Free, clean drinking water for communities, powered by ethical advertising.
          </p>

          <div className="flex justify-center pt-2 sm:pt-4 mb-16 sm:mb-20 lg:mb-24">
            <Link
              href="#marketing"
              className="inline-flex items-center gap-2 sm:gap-3 bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
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

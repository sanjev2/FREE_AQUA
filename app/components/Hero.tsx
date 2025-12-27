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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[bgIndex]} transition-all duration-1000 ease-in-out`}
      />

      {/* Soft light overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-128px)] w-full">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
            Welcome to Free Aqua
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Free, clean drinking water for communities, powered by ethical advertising.
          </p>

          <div className="flex justify-center pt-4">
            <Link
              href="#marketing"
              className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Partner With Us
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-gray-700 text-sm font-medium">Scroll to explore</span>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-white/60 to-white z-[5]" />
    </section>
  )
}

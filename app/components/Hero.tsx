"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  const gradients = [
    "from-teal-600 via-cyan-500 to-blue-600",
    "from-cyan-600 via-teal-500 to-emerald-600",
    "from-blue-600 via-teal-500 to-cyan-600",
    "from-emerald-600 via-cyan-500 to-teal-600",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % gradients.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[bgIndex]} transition-all duration-1000 ease-in-out`}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center min-h-screen w-full">
        <div className="max-w-4xl mx-auto space-y-16 mb-32">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-pretty leading-tight tracking-tight">
            Welcome to Free Aqua
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">
            Free, clean drinking water for communities, powered by ethical advertising.
          </p>

          <div className="flex justify-center pt-4">
            <Link
              href="#marketing"
              className="inline-flex items-center gap-3 bg-gray-900/90 hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 backdrop-blur-sm border border-white/10"
            >
              Partner With Us
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Hero() {
  const handlePartnerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("marketing")
    if (element) {
      element.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(13,148,136,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8))] z-[1]" />
        {/* Floating Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-cyan-400/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-400/15 to-teal-300/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-160px)] w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-zinc-900 leading-[0.85] tracking-tighter"
          >
            Water is{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent italic font-serif drop-shadow-lg">
              Free
            </span>
            .
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-600 max-w-3xl mx-auto font-medium leading-tight px-4 tracking-wide"
          >
            Clean drinking water for communities, powered by ethical advertising partnerships.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center pt-4">
            <motion.a
              href="#marketing"
              onClick={handlePartnerClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-teal-600 hover:to-teal-700 text-white px-10 py-5 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-500 shadow-2xl hover:shadow-teal-600/30 group border border-zinc-700/50 hover:border-teal-500/50 backdrop-blur-sm"
            >
              Partner With Us
              <motion.div
                className="transition-transform"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-gray-700 text-xs sm:text-sm font-medium">Scroll to explore</span>
          <motion.svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-transparent via-white/60 to-white z-[5]" />
    </section>
  )
}

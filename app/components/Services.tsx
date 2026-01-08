"use client"

import React from "react"
import { Droplet, Leaf, Globe, TrendingUp } from "lucide-react"
import { motion, Variants } from "framer-motion"

// Services Data
const services = [
  {
    icon: Droplet,
    title: "Free Water Access",
    description:
      "Universal access to clean, safe drinking water for all communities, regardless of economic status.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Distribution",
    description:
      "Sustainable packaging and logistics that minimize environmental impact while maximizing reach.",
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description:
      "Direct engagement with local communities to understand and address specific water access needs.",
  },
  {
    icon: TrendingUp,
    title: "Brand Impact Marketing",
    description:
      "Ethical advertising platform that connects brands with meaningful social impact opportunities.",
  },
]

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white scroll-mt-24 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-teal-300/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-t from-cyan-300/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <motion.span
              className="text-teal-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Impact
            </motion.span>
            <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 leading-[0.9] tracking-tighter">
              Social Mission Meets <br />
              Sustainable Growth
            </h2>
          </div>
          <p className="text-lg text-zinc-500 max-w-sm font-medium leading-relaxed italic border-l-2 border-teal-600 pl-6 hover:text-zinc-700 transition-colors">
            We're building a future where business growth directly fuels universal water access.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/40 backdrop-blur-xl border border-white/60 p-8 hover:bg-gradient-to-br hover:from-teal-50/60 hover:to-cyan-50/40 transition-all duration-500 min-h-[320px] flex flex-col rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/0 to-cyan-600/0 group-hover:from-teal-600/5 group-hover:to-cyan-600/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 mb-auto">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                    <Icon className="w-8 h-8 text-teal-600 group-hover:text-cyan-600 transition-colors duration-500" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-teal-700 mb-3 transition-colors duration-500 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 group-hover:text-zinc-700 transition-colors duration-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

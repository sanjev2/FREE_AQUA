"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  "Glass Bottle Options",
  "Eco-Certified Paper Cartons",
  "Expanded Distribution Network",
  "Sustainability Roadmap 2030",
]

export default function ComingSoon() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <section
      id="coming-soon"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-cyan-50/20 to-white scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-teal-300/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-gradient-to-tl from-blue-300/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance tracking-tight">
              Coming Soon
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              We're expanding our mission with new packaging solutions and distribution channels. These innovations will
              make Free Aqua even more accessible and sustainable for the communities we serve.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-3 items-center group p-3 rounded-lg hover:bg-teal-50/50 transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.15, rotate: 10 }} transition={{ duration: 0.2 }}>
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 group-hover:text-cyan-600 transition-colors" />
                  </motion.div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm h-80 sm:h-96 bg-gradient-to-br from-cyan-200/50 via-blue-200/30 to-teal-200/20 rounded-3xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-sm"
            >
              <img src="/bottles2.png" alt="Community impact" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

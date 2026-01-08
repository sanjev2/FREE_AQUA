"use client"

import { motion } from "framer-motion"

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  }

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center text-balance tracking-tight"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm h-96 bg-gradient-to-br from-teal-200/50 via-cyan-200/30 to-blue-200/20 rounded-3xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-sm"
            >
              <img src="/download.jpeg" alt="Free Aqua branded bottle" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-8">
            {[
              {
                title: "Water is a Human Right",
                description:
                  "At Free Aqua, we believe clean drinking water should be accessible to everyone, everywhere. Yet billions of people lack access to safe water. We're solving this through innovative partnerships that create value for all stakeholders.",
              },
              {
                title: "The Ethical Business Model",
                description:
                  "Advertisers and brands fund our water distribution through ethical marketing partnerships. Instead of traditional advertising costs, companies invest in social impact while gaining authentic brand exposure in communities that matter.",
              },
              {
                title: "Win-Win Impact",
                description:
                  "Communities receive free water. Brands build genuine connections through purpose-driven marketing. We create sustainable systems that benefit everyone while proving that business and social impact aren't mutually exclusive.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 hover:border-teal-300/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

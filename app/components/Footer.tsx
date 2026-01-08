"use client"

import type React from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      e.preventDefault()
      const id = href === "#partner" ? "marketing" : href.replace("#", "")
      const element = document.getElementById(id)
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
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-12 lg:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent tracking-tight">
                Free Aqua
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Providing free, clean drinking water to communities worldwide through ethical advertising partnerships.
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors group cursor-pointer">
                <MapPin
                  size={16}
                  className="text-teal-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                />
                <span>123 Water Street, Clean City, CA 90210</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Mission", href: "#mission" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Partner With Us", href: "#partner" },
                  { label: "Blog & News", href: "#blog" },
                ].map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="text-gray-400 hover:text-teal-400 transition-colors text-sm inline-block group"
                    >
                      {link.label}
                      <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-300 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect With Us */}
            <motion.div variants={itemVariants} className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-lg text-white">Connect With Us</h4>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  {
                    Icon: Phone,
                    href: "tel:+1234567890",
                    label: "+1 (234) 567-890",
                  },
                  {
                    Icon: Mail,
                    href: "mailto:hello@freeaqua.com",
                    label: "hello@freeaqua.com",
                  },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
                  >
                    <motion.div
                      className="w-10 h-10 bg-slate-700/50 border border-slate-600 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-teal-600 group-hover:to-cyan-600 group-hover:border-teal-500 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={16} className="text-teal-400 group-hover:text-white transition-colors" />
                    </motion.div>
                    <span className="text-sm">{label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <p className="text-sm text-gray-400 mb-3 font-medium">Follow us on social media</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    { Icon: Facebook, href: "#facebook", label: "Facebook" },
                    { Icon: Twitter, href: "#twitter", label: "Twitter" },
                    { Icon: Instagram, href: "#instagram", label: "Instagram" },
                    { Icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
                    { Icon: Youtube, href: "#youtube", label: "YouTube" },
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-slate-700/50 border border-slate-600 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-teal-600 hover:to-cyan-600 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-700/50" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6"
        >
          <p className="text-gray-400 text-sm text-center font-medium">
            © 2025 Free Aqua. All rights reserved. Built with purpose for positive impact.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

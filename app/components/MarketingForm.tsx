"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface FormData {
  firstName: string
  lastName: string
  email: string
  contactNumber: string
  companyName?: string
  message?: string
}

export default function MarketingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Failed to send request")
        return
      }

      setStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        companyName: "",
        message: "",
      })

      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("An error occurred. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
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
    <section
      id="marketing"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-teal-300/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-t from-cyan-300/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span
              variants={itemVariants}
              className="text-teal-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Let's Connect
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-black text-zinc-900 mb-8 leading-[0.9] tracking-tighter"
            >
              Partner With <br />
              Free Aqua
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-zinc-600 leading-relaxed font-medium mb-12 tracking-wide"
            >
              Transform your marketing budget into social impact. Join our network of ethical brands today.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-8">
              {[
                { label: "Global Reach", desc: "Connect with millions through purpose-driven placement." },
                { label: "Impact Verified", desc: "Transparent reporting on every drop distributed." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex gap-6 items-start group p-4 rounded-xl hover:bg-teal-50/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all">
                    <span className="font-bold text-teal-700 text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1 group-hover:text-teal-700 transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-zinc-600 text-sm font-medium group-hover:text-zinc-700 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/40 backdrop-blur-xl border border-white/60 p-8 sm:p-12 rounded-3xl overflow-visible shadow-2xl shadow-teal-500/10 hover:shadow-teal-500/20 transition-shadow duration-500"
          >
            <div className="absolute -top-1 -right-1 w-8 h-8 pointer-events-none">
              <div className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-teal-600 to-transparent" />
              <div className="absolute top-0 right-0 h-[3px] w-full bg-gradient-to-l from-teal-600 to-transparent" />
            </div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-teal-600 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-transparent" />
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { id: "firstName", label: "First Name", type: "text" },
                  { id: "lastName", label: "Last Name", type: "text" },
                ].map((field) => (
                  <motion.div key={field.id} className="space-y-2" whileHover={{ y: -2 }}>
                    <label
                      htmlFor={field.id}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 block"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof FormData]}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300 hover:border-zinc-400"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { id: "email", label: "Your Email", type: "email" },
                  { id: "contactNumber", label: "Contact", type: "tel" },
                ].map((field) => (
                  <motion.div key={field.id} className="space-y-2" whileHover={{ y: -2 }}>
                    <label
                      htmlFor={field.id}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof FormData]}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300 hover:border-zinc-400"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div className="space-y-2" whileHover={{ y: -2 }}>
                <label
                  htmlFor="companyName"
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300 hover:border-zinc-400"
                />
              </motion.div>

              <motion.div className="space-y-2" whileHover={{ y: -2 }}>
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300 resize-none hover:border-zinc-400"
                  placeholder="Tell us how we can help..."
                />
              </motion.div>

              {/* Status Messages */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: status !== "idle" ? 1 : 0, y: status !== "idle" ? 0 : -10 }}
              >
                {status === "success" && (
                  <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-300/50 rounded-lg p-4 text-emerald-700 text-sm font-medium flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    Your request has been sent successfully! We'll contact you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50/80 backdrop-blur-sm border border-red-300/50 rounded-lg p-4 text-red-700 text-sm font-medium flex items-center gap-2">
                    <span className="text-lg">✕</span>
                    {errorMessage}
                  </div>
                )}
              </motion.div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold px-12 py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 border border-teal-500/50 hover:border-teal-400 tracking-wide uppercase"
                >
                  {loading ? "Sending..." : "Let's Connect"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

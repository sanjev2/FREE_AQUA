"use client"

import type React from "react"

import { useState } from "react"

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

  return (
    <section id="marketing" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-teal-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Let's Connect</span>
            <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 mb-8 leading-[0.9] tracking-tighter">
              Partner With <br />
              Free Aqua
            </h2>
            <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-12">
              Transform your marketing budget into social impact. Join our network of ethical brands today.
            </p>

            <div className="space-y-8">
              {[
                { label: "Global Reach", desc: "Connect with millions through purpose-driven placement." },
                { label: "Impact Verified", desc: "Transparent reporting on every drop distributed." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-zinc-900 text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">{item.label}</h4>
                    <p className="text-zinc-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-zinc-50 border border-zinc-200 p-8 sm:p-12 rounded-sm overflow-visible">
            {/* Top Right */}
            <div className="absolute -top-1 -right-1 w-8 h-8 pointer-events-none">
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-teal-600 to-transparent" />
              <div className="absolute top-0 right-0 h-[2px] w-full bg-gradient-to-l from-teal-600 to-transparent" />
            </div>
            {/* Bottom Left */}
            <div className="absolute -bottom-1 -left-1 w-8 h-8 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-teal-600 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-teal-600 to-transparent" />
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contactNumber"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Contact
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="companyName"
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-0 py-2 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-0 py-2 bg-transparent border-b border-zinc-300 focus:border-teal-600 focus:outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-300 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="bg-green-50 border border-green-300 rounded-lg p-4 text-green-700 text-sm font-medium">
                  ✓ Your request has been sent successfully! We'll contact you soon.
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-300 rounded-lg p-4 text-red-700 text-sm font-medium">
                  ✗ {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-teal-600 text-white font-bold px-12 py-3 rounded-full hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-lg hover:shadow-teal-500/20"
                >
                  {loading ? "Sending..." : "Let's Connect"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

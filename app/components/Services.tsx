"use client"

import { Droplet, Leaf, Globe, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Droplet,
    title: "Free Water Access",
    description: "Universal access to clean, safe drinking water for all communities, regardless of economic status.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Distribution",
    description: "Sustainable packaging and logistics that minimize environmental impact while maximizing reach.",
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description: "Direct engagement with local communities to understand and address specific water access needs.",
  },
  {
    icon: TrendingUp,
    title: "Brand Impact Marketing",
    description: "Ethical advertising platform that connects brands with meaningful social impact opportunities.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Impact</span>
            <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 leading-[0.9] tracking-tighter">
              Social Mission Meets <br />
              Sustainable Growth
            </h2>
          </div>
          <p className="text-lg text-zinc-500 max-w-sm font-medium leading-relaxed italic border-l-2 border-teal-600 pl-6">
            We're building a future where business growth directly fuels universal water access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white border border-zinc-200 p-8 hover:bg-zinc-900 hover:border-zinc-900 transition-all duration-500 min-h-[320px] flex flex-col"
              >
                <div className="mb-auto">
                  <Icon
                    className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-white mb-3 transition-colors duration-500 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

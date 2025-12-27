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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're combining a critical social mission with sustainable business opportunity for all stakeholders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                <Icon className="w-12 h-12 text-teal-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

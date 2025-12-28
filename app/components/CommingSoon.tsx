import { CheckCircle } from "lucide-react"

const features = [
  "Glass Bottle Options",
  "Eco-Certified Paper Cartons",
  "Expanded Distribution Network",
  "Sustainability Roadmap 2030",
]

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">Coming Soon</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              We're expanding our mission with new packaging solutions and distribution channels. These innovations will
              make Free Aqua even more accessible and sustainable for the communities we serve.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm h-80 sm:h-96 bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/bottles2.png"
                alt="Community impact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

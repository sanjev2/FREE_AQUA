export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center text-balance">About Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/download.jpeg"
                alt="Free Aqua branded bottle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Water is a Human Right</h3>
              <p className="text-gray-700 leading-relaxed">
                At Free Aqua, we believe clean drinking water should be accessible to everyone, everywhere. Yet billions
                of people lack access to safe water. We're solving this through innovative partnerships that create
                value for all stakeholders.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Ethical Business Model</h3>
              <p className="text-gray-700 leading-relaxed">
                Advertisers and brands fund our water distribution through ethical marketing partnerships. Instead of
                traditional advertising costs, companies invest in social impact while gaining authentic brand exposure
                in communities that matter.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Win-Win Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Communities receive free water. Brands build genuine connections through purpose-driven marketing. We
                create sustainable systems that benefit everyone while proving that business and social impact aren't
                mutually exclusive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

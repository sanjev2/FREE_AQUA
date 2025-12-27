import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Free Aqua
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing free, clean drinking water to communities worldwide through ethical advertising partnerships.
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="text-teal-400 flex-shrink-0 mt-1" />
                <span>123 Water Street, Clean City, CA 90210</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Mission", href: "#mission" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Partner With Us", href: "#partner" },
                  { label: "Blog & News", href: "#blog" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors text-sm inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-lg text-white">Connect With Us</h4>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
                >
                  <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <Phone size={16} className="text-teal-400 group-hover:text-white" />
                  </div>
                  <span className="text-sm">+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:hello@freeaqua.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
                >
                  <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <Mail size={16} className="text-teal-400 group-hover:text-white" />
                  </div>
                  <span className="text-sm">hello@freeaqua.com</span>
                </a>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <p className="text-sm text-gray-400 mb-3">Follow us on social media</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    { Icon: Facebook, href: "#facebook", label: "Facebook" },
                    { Icon: Twitter, href: "#twitter", label: "Twitter" },
                    { Icon: Instagram, href: "#instagram", label: "Instagram" },
                    { Icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
                    { Icon: Youtube, href: "#youtube", label: "YouTube" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        <div className="py-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Free Aqua. All rights reserved. Built with purpose for positive impact.
          </p>
        </div>
      </div>
    </footer>
  )
}

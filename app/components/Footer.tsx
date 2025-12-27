import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Free Aqua</h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Free, clean drinking water for communities — powered by ethical advertising.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-center justify-center sm:justify-start">
                <Phone size={18} className="text-teal-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex gap-3 items-center justify-center sm:justify-start">
                <Mail size={18} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:hello@freeaqua.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@freeaqua.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Free Aqua. All rights reserved. | Built with purpose for positive impact.
          </p>
        </div>
      </div>
    </footer>
  )
}

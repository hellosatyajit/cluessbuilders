"use client"

import { Github, Linkedin, Twitter, Mail, Heart, Code } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-mono text-3xl font-bold mb-6 gradient-text animate-pulse-glow">Clueless Builders</div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-lg">
              We started Clueless Builders not with a plan, but with a habit. A habit of building exceptional digital
              experiences that matter.
            </p>

            {/* Enhanced social links */}
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:hello@clueless.builders"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>

            {/* Mission statement */}
            <div className="glass rounded-xl p-6">
              <p className="text-purple-300 font-medium flex items-center">
                <Heart className="w-4 h-4 mr-2 text-red-400" />
                Built with passion, curiosity, and lots of coffee
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "Mobile App Development",
                "Web Development",
                
                "Backend Architecture",
                
                "Digital Strategy",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <Code className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#team", label: "Team" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
                
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
              &copy; {currentYear} Clueless Builders. Still clueless. Still building.
              <span className="ml-2 animate-pulse">🚀</span>
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" /> in India
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

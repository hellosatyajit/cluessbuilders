"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Clock, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Drop us a line anytime",
      content: "hello@clueless.builders",
      href: "mailto:hello@clueless.builders",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Let's talk about your project",
      content: "+91 98765 43210",
      href: "tel:+919876543210",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      subtitle: "Remote team",
      href: "#",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Always Building",
      subtitle: "We're usually online",
      content: "Response time: 24 hours\nTimezone: IST (GMT+5:30)",
      href: "#",
      gradient: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have an idea? Want to collaborate? Or just want to say hi? We'd love to hear from you and explore what we
            can create together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                Ready to start your next project? We're here to help bring your vision to life with cutting-edge
                technology and creative solutions.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`glass rounded-2xl p-6 hover-lift transition-all duration-500 group animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 mb-3">{info.subtitle}</p>
                    {info.href.startsWith("mailto:") || info.href.startsWith("tel:") ? (
                      <a
                        href={info.href}
                        className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-right animate-delay-200" : "opacity-0"}`}
          >
            <div className="glass rounded-3xl p-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Start Your Project</h3>
                <p className="text-gray-400">Tell us about your vision and let's make it reality.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-transparent peer"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2.5 text-sm text-purple-400 bg-gray-950 px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-transparent peer"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2.5 text-sm text-purple-400 bg-gray-950 px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <select
                    id="project"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
                  >
                    <option value="" className="bg-gray-900">
                      Select Project Type
                    </option>
                    <option value="mobile" className="bg-gray-900">
                      Mobile App
                    </option>
                    <option value="website" className="bg-gray-900">
                      Website
                    </option>
                    <option value="webapp" className="bg-gray-900">
                      Web Application
                    </option>
                    <option value="ecommerce" className="bg-gray-900">
                      E-commerce
                    </option>
                    <option value="consultation" className="bg-gray-900">
                      Consultation
                    </option>
                    <option value="other" className="bg-gray-900">
                      Other
                    </option>
                  </select>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-transparent peer resize-none"
                    placeholder="Tell us about your project"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 text-sm text-purple-400 bg-gray-950 px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                  >
                    Tell us about your project
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

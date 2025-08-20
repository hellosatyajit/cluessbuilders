"use client"

import { useEffect, useRef } from "react"
import { Smartphone, Globe, Palette, Database, Shield, Zap } from "lucide-react"

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps built with React Native and Flutter",
      features: [
        "Cross-platform compatibility",
        "App Store optimization",
        "Push notifications",
        "Offline functionality",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites using Next.js, React, and cutting-edge technologies",
      features: ["SEO optimization", "Performance optimization", "Progressive Web Apps", "E-commerce solutions"],
    },
    
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable APIs and database solutions for your applications",
      features: ["RESTful APIs", "Database design", "Cloud deployment", "Real-time features"],
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Enterprise-grade security and lightning-fast performance optimization",
      features: ["Security audits", "Performance monitoring", "Load balancing", "Data encryption"],
    },
    
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive digital solutions that help your business thrive in the
            modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`animate-on-scroll opacity-0 group animate-delay-${((index % 3) + 1) * 100}`}
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift transition-all duration-500 group-hover:bg-white/10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

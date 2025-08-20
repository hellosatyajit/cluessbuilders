"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Users, Zap, Target, Heart, Rocket } from "lucide-react"

export default function About() {
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

  

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        

        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}
        >
          <div className="glass rounded-3xl p-12 max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 gradient-text">Why Clueless?</h3>
            <p className="text-2xl leading-relaxed text-gray-300 mb-8">
              None of these projects came from a grand vision. We just followed problems, ideas, curiosity, and we
              shipped.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              We're not trying to be experts. We're trying to stay{" "}
              <span className="text-purple-400 font-semibold">explorers</span>. In a world of specialists, we choose to
              remain <span className="text-blue-400 font-semibold">curious generalists,</span> and that's exactly what
              makes us unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

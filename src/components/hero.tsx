"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Code, Smartphone, Globe, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-blue-950/20">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float animate-delay-200"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-float animate-delay-400"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float animate-delay-300"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
         
         
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            We're <span className="gradient-text animate-gradient">Clueless</span> —<br />
            <span className="text-white">and That's the</span>{" "}
            <span className="gradient-text animate-gradient">Point</span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
        >
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            We started Clueless Builders not with a plan, but with a{" "}
            <span className="text-purple-400 font-semibold">habit</span>. A habit of{" "}
            <span className="text-blue-400 font-semibold">building</span>.
          </p>
        </div>

        

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse-glow"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            <a
                  key="contact"
                  href="#contact"
                  className="mr-2"
                >Contact Us</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500/50 hover:border-purple-400 text-white hover:bg-purple-500/10 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 glass bg-transparent"
          >
            View Portfolio
          </Button>
        </div>

        <div
          className={`flex justify-center space-x-16 mb-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 hover-lift">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
              Mobile Apps
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 hover-lift">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
              Websites
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 hover-lift">
              <Code className="w-10 h-10 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
              Custom Solutions
            </span>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-700" : "opacity-0"}`}
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-purple-400 transition-all duration-300 group"
          >
            <span className="text-sm mb-3 font-medium">Discover Our Story</span>
            <div className="w-8 h-8 border-2 border-purple-500/50 rounded-full flex items-center justify-center group-hover:border-purple-400 transition-colors">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

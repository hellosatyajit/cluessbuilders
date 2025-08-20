"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      name: "Statshub.com",
      description: "Football related stats platform.",
      category: "Sports Analytics",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Crework.club",
      description: "Project management learning platform.",
      category: "Education",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "ShivaFabricon.com",
      description: "Corporate website for a fabrication company.",
      category: "Corporate Website",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Email Writer",
      description: "Scribe Pro - Hustle app for fast email writing.",
      category: "Productivity Tool",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "AgentAI.ai",
      description: "AI virtual support and meeting assistant for remote teams.",
      category: "AI Assistant",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "ChelsyCosmetics.com",
      description: "E-commerce app for a cosmetics brand.",
      category: "E-commerce",
      color: "from-pink-500 to-purple-500",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of our experiments, products, and creative solutions built with curiosity and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden ${
                isVisible ? `animate-fade-in-up animate-delay-${((index % 3) + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                  >
                    <ExternalLink size={16} />
                    <span>Visit</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-2 hover:bg-gray-50 bg-transparent"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

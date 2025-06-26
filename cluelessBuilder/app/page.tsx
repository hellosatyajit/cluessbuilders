"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, ExternalLink, Code, Smartphone, Globe, Users, Lightbulb, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const projects = [
    {
      name: "Fanzie.xyz",
      url: "https://fanzie.xyz",
      description: "Fan management webapp",
      category: "Web App",
      tags: ["React", "Management", "Community"],
    },
    {
      name: "Statshub.com",
      url: "https://statshub.com",
      description: "Football related stats platform",
      category: "Platform",
      tags: ["Sports", "Analytics", "Data"],
    },
    {
      name: "Crework.club",
      url: "https://crework.club",
      description: "Product management learning platform",
      category: "Education",
      tags: ["Learning", "Product", "Community"],
    },
    {
      name: "ShivamFabricon.com",
      url: "https://shivamfabricon.com",
      description: "Corporate website for a fabrication company",
      category: "Corporate",
      tags: ["Business", "Manufacturing", "Corporate"],
    },
    {
      name: "Email Writer",
      url: "https://play.google.com/store/search?q=email%20writer&c=apps",
      description: "Google Play — Mobile app for fast email writing",
      category: "Mobile App",
      tags: ["Productivity", "Mobile", "Communication"],
    },
    {
      name: "Agenthi.ai",
      url: "https://agenthi.ai",
      description: "AI-powered support and meeting assistant. Web + Mobile",
      category: "AI Platform",
      tags: ["AI", "Automation", "Support"],
    },
    {
      name: "ChelsyCosmetics.com",
      url: "https://chelsycosmetics.com",
      description: "E-commerce app for a cosmetics brand",
      category: "E-commerce",
      tags: ["E-commerce", "Beauty", "Retail"],
    },
    {
      name: "UnisysOverseas.com",
      url: "https://unisysoverseas.com",
      description: "Website for a visa consultancy company",
      category: "Service",
      tags: ["Consulting", "Immigration", "Services"],
    },
  ]

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-stack web apps built with modern technologies and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions for unique business requirements and challenges.",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Curiosity-Driven",
      description: "We build based on what feels interesting, useful, or fun.",
    },
    {
      icon: Target,
      title: "Problem-Focused",
      description: "We follow problems and ideas, then ship solutions.",
    },
    {
      icon: Users,
      title: "Explorer Mindset",
      description: "We're not trying to be experts. We're trying to stay explorers.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-lg sm:text-xl font-bold text-[#2e547e]">Clueless Builders</h1>
            </div>
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
            </nav>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Menu
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="outline" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
                Still clueless. Still building.
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-[#2e547e] to-[#2e547e] bg-clip-text text-transparent px-4 sm:px-0">
                We're Clueless —<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>and That's the Point
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                We started Clueless Builders not with a plan — but with a habit. A habit of building.
              </p>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-0">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We're two friends who love creating things. Not for trends, not for traction — but for curiosity. We
                build mobile apps and web products across random domains, based on what feels interesting, useful, or
                fun. No roadmap. No niche. Just ideas worth trying.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-[#2e547e] hover:bg-[#1e3a5f] w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4 sm:px-0">What We Build</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              We design and develop mobile apps, web apps, and websites. Some become products. Some become experiments.
              All are driven by curiosity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow mx-4 sm:mx-0">
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="w-12 h-12 bg-[#2e547e]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-[#2e547e]" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-center text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4 sm:px-0">Our Projects</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              A collection of our work across different domains and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md mx-4 sm:mx-0"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-base sm:text-lg group-hover:text-[#2e547e] transition-colors">
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <span className="break-words">{project.name}</span>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </Link>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4 sm:px-0">Why Clueless?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              None of these projects came from a grand vision. We just followed problems, ideas, and curiosity — and
              shipped.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4 px-4 sm:px-0">
                <div className="w-16 h-16 bg-[#2e547e]/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-[#2e547e]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4 sm:px-0">The Team</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Two friends on a mission to build interesting things.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg mx-4 sm:mx-0">
              <CardHeader className="space-y-4 p-6 sm:p-8">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#2e547e] to-[#1e3a5f] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl sm:text-2xl font-bold text-white">S</span>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl">Satyajit</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-[#2e547e] font-medium">
                    Co-founder, Web Developer
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0">
                <p className="text-gray-600 text-sm sm:text-base">
                  Passionate about creating beautiful and functional web experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg mx-4 sm:mx-0">
              <CardHeader className="space-y-4 p-6 sm:p-8">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#2e547e] to-[#1e3a5f] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl sm:text-2xl font-bold text-white">S</span>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl">Shantanu Juvekar</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-[#2e547e] font-medium">
                    Co-founder, Backend & Business Logic
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0">
                <p className="text-gray-600 text-sm sm:text-base">
                  Focused on building robust systems and turning ideas into reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4 sm:px-0">
              Let's Build Together
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Have an interesting project or idea? We'd love to hear about it.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg mx-4 sm:mx-0">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-12 h-12 bg-[#2e547e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2e547e]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Email Us</h3>
                    <Link
                      href="mailto:hello@clueless.builders"
                      className="text-[#2e547e] hover:text-[#1e3a5f] transition-colors text-sm sm:text-base break-all"
                    >
                      hello@clueless.builders
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-[#2e547e]/10 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2e547e]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Find Us</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      <span className="font-medium">Remote team — but you might find us at:</span>
                      <br />
                      F-109, Royal Height, Opp. Lake View, Near Gota Lake,
                      <br />
                      Ahmedabad, Gujarat, India - 382481
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-[#2e547e] rounded-md flex items-center justify-center">
              <Code className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">Clueless Builders</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm px-4 sm:px-0">
            © {new Date().getFullYear()} Clueless Builders. Still clueless. Still building.
          </p>
        </div>
      </footer>
    </div>
  )
}

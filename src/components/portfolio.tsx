"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
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

  const projects = [
    {
      title: "Statshub.com",
      description:
        "Comprehensive football analytics platform providing real-time stats, player performance metrics, and match predictions for football enthusiasts.",
      image: "/statshub.svg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      liveUrl: "https://statshub.com",
      githubUrl: "#",
      category: "Sports Analytics",
      objectcover:"object-contain",
    },
    {
      title: "Crework.club",
      description:
        "Interactive project management learning platform with gamified lessons, progress tracking, and collaborative team exercises.",
      image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2242%22%20viewBox%3D%220%200%20166%2042%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M50.2642%2025.7571V28.3243H40.1948L37.1953%2025.5431V16.1298L40.1948%2013.3486H50.2642V15.9159H41.5873L40.1948%2017.1995V24.4734L41.5873%2025.7571H50.2642Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M60.6447%2023.4099H56.0385V28.3243H53.0391V13.3486H63.8583L66.6435%2015.9315V20.8459L64.0726%2023.3031L67.7147%2028.3243H64.1797L60.6447%2023.4099ZM63.6441%2016.9998L62.4658%2015.9315H56.0385V20.8459H62.4658L63.6441%2019.7776V16.9998Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M70.0703%2013.3486H82.925V15.9315H73.0697V19.5639H80.5683V22.1279H73.0697V25.7603H83.1392V28.3243H70.0703V13.3486Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M95.8928%2017.4272L92.572%2028.3243H88.6084L84.1094%2013.3486H87.3229L90.6437%2025.1193L94.0716%2013.3486H97.7138L101.142%2025.1193L104.463%2013.3486H107.676L103.177%2028.3243H99.2136L95.8928%2017.4272Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M113.58%2015.854L112.187%2017.102V24.5898L113.58%2025.8377H119.471L120.864%2024.5898V17.102L119.471%2015.854H113.58ZM112.187%2013.3486H120.864L123.863%2016.062V25.6298L120.864%2028.3337H112.187L109.188%2025.6298V16.062L112.187%2013.3486Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M134.793%2023.4099H130.187V28.3243H127.188V13.3486H138.006L140.792%2015.9315V20.8459L138.222%2023.3031L141.863%2028.3243H138.329L134.793%2023.4099ZM137.792%2016.9998L136.614%2015.9315H130.187V20.8459H136.614L137.792%2019.7776V16.9998Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M147.218%2022.1279V28.3243H144.219V13.3486H147.218V19.5639H149.789L154.395%2013.3486H158.019L152.575%2020.6322L158.466%2028.3243H154.824L150.11%2022.1279H147.218Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20fillRule%3D%22evenodd%22%20clipRule%3D%22evenodd%22%20d%3D%22M10.4219%2014.8099C10.4219%2012.7436%2012.7482%2010.4268%2014.8228%2010.4268H26.9252C28.9998%2010.4268%2031.3261%2012.7436%2031.3261%2014.8099V26.8635C31.3261%2028.9297%2028.9998%2031.2466%2026.9252%2031.2466C25.9953%2031.2466%2015.6228%2031.2843%2014.8225%2031.2843C12.7482%2031.2843%2010.4219%2028.9297%2010.4219%2026.8635V14.8099ZM19.2237%2013.3488C18.3214%2013.3488%2013.3558%2018.2919%2013.3558%2019.193C13.3558%2020.2888%2013.3558%2021.3846%2013.3558%2022.4804C13.3558%2023.3807%2018.3214%2028.3245%2019.2237%2028.3245C20.3239%2028.3245%2021.4241%2028.3245%2022.5243%2028.3245C23.4269%2028.3245%2028.3921%2023.3807%2028.3921%2022.4804C28.3921%2021.3846%2028.3921%2020.2888%2028.3921%2019.193C28.3921%2018.2919%2023.4269%2013.3488%2022.5243%2013.3488C21.4241%2013.3488%2020.3239%2013.3488%2019.2237%2013.3488Z%22%20fill%3D%22%23FF4C00%22%2F%3E%3C%2Fsvg%3E",
  tags: ["React", "Firebase", "Tailwind CSS", "PWA"],
      liveUrl: "https://crework.club",
      githubUrl: "#",
      category: "Education",
      objectcover:"object-cover:contain" ,   
},
    {
      title: "ShivamFabricon.com",
      description:
        "Professional corporate website for a leading fabrication company, showcasing services, portfolio, and client testimonials with modern design.",
      image: "https://www.shivamfabricon.com/logo.jpg",
      tags: ["Next.js", "Framer Motion", "CMS", "SEO"],
      liveUrl: "https://shivamfabricon.com",
      githubUrl: "#",
      category: "Corporate Website",
	objectcover:"object-cover:contain",  
  },
    {
      title: "Email Writer Pro",
      description:
        "AI-powered email writing assistant that helps professionals craft compelling emails faster with smart templates and tone suggestions.",
      image: "https://play-lh.googleusercontent.com/om2grQMk3ZJzS9OLmsNdQ-M6ezr1eH5qBaCB9PnGfHKcM__4a854biZFmHtbs7kyIw=w416-h235-rw",
      tags: ["React Native", "OpenAI", "Express.js", "MongoDB"],
      liveUrl: "https://play.google.com/store/search?q=email+writer&c=apps&pli=1",
      githubUrl: "#",
      category: "Productivity Tool",
objectcover:"object-cover:cover",
    },
    {
      title: "AgentAI.ai",
      description:
        "Intelligent virtual support and meeting assistant designed for remote teams, featuring automated scheduling and smart note-taking.",
      image: "https://agentai.ai/_next/static/media/header-logo.f4879354.svg",
      tags: ["Vue.js", "Python", "AI/ML", "WebRTC"],
      liveUrl: "https://agentai.ai",
      githubUrl: "#",
      category: "AI Assistant",
objectcover:"object-cover:contain"
	
    },
    {
      title: "ChelsyCosmetics.com",
      description:
        "Beautiful e-commerce platform for premium cosmetics brand with product customization, virtual try-on, and seamless checkout experience.",
      image: "https://utfs.io/f/bc16bcde-5abc-4be8-a15c-2e5daaf94ec9-w4fl6j.jpg",
      tags: ["Shopify", "React", "Stripe", "AR"],
      liveUrl: "https://chelsycosmetics.com",
      githubUrl: "#",
      category: "E-commerce",
objectcover:"object-cover:contain"
    },
{
  title: "Avoid The Tariff", 
  description: "A playful simulation game about tariffs, letting users explore trade impacts through an interactive UI.",
  image: "https://Avoidthetariff.Clueless.Builders/attached_assets/trump_face.png",
  tags: ["game", "economics", "trade", "simulation"],
  liveUrl: "https://Avoidthetariff.Clueless.Builders",
  githubUrl: "#", 
  category: "Interactive Simulation",
  objectcover: "object-cover:contain"
}

  ]

  return (
    <section id="portfolio" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform their digital presence with
            innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-on-scroll opacity-0 group animate-delay-${((index % 3) + 1) * 100}`}
            >
              <div className="glass rounded-2xl overflow-hidden hover-lift transition-all duration-500 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-40 sm:h-52 lg:h-40 ${project.objectcover} transition-transform duration-500 group-hover:scale-110`}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 sm:flex-none bg-transparent border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Visit</span>
                      <span className="sm:hidden">Live</span>
                    </Button>
                   {/* <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 sm:flex-none bg-transparent border-gray-500/50 text-gray-300 hover:bg-gray-500/20 hover:border-gray-400"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Code</span>
                      <span className="sm:hidden">Repo</span>
                    </Button>*/}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  )
}

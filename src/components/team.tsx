"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const delays = ["animate-delay-100", "animate-delay-200", "animate-delay-300"]

  const teamMembers = [
    {
      name: "Satyajit",
      avatar: "/1.png",
      funFact: "Can debug code while making the perfect cup of chai ☕",
      social: { 
        linkedin: "https://x.com/0xSatyajit",
        twitter: "https://linkedin.com/hellosatyajit",
      },
    },
    {
      name: "Jay",
      avatar: "/2.png",
      funFact: "Once made a meme so funny, got banned from Reddit(litrally)",
      social: {
        
        linkedin: "https://www.linkedin.com/in/jaybhattwrites",
        twitter: "https://x.com/jaybhattwrites",
        
      },
    },
    {
      name: "Mann Bhatt",
      avatar: "/3.png",
      funFact: "Tech enthusiast who loves trekking.",
/*social: {
        
        linkedin: "https://www.linkedin.com/in/mann-bhatt-04930a241/",
        twitter: "https://x.com/Mann_Bhatt88",
        
      },*/
    },
    {
      name: "Shantanu Javekar",  
      avatar: "/4.png",
      funFact: "Full-time CEO (Chief Extra-thoughts Officer)",
    },
    {
      name: "Nitya",
      avatar:"/5.png",
      funFact: "Can play Garba for straight 24 hour.",
    },
    {
      name: "Devarsh Shah",
      avatar: "/6.png",
      funFact: "Good communicator with a knack for teamwork.",
    },   
  ]

  return (
    <section id="team" ref={sectionRef} className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-delay-300"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">
            Meet The <span className="gradient-text">Builders</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            A diverse team of passionate creators building digital experiences that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto mb-12 md:mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`glass rounded-2xl md:rounded-3xl p-6 md:p-8 hover-lift transition-all duration-500 group ${
                isVisible ? `animate-fade-in-up ${delays[index % 3]}` : "opacity-0"
              }`}
            >
              <div className="relative mb-6 md:mb-8 text-center">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-28 h-28 md:w-36 lg:w-40 md:h-36 lg:h-40 rounded-xl md:rounded-2xl mx-auto object-cover border-4 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300"
                />
              </div>

              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{member.name}</h3>

                <div className="bg-purple-500/10 rounded-lg p-3 mb-4">
                  <p className="text-purple-300 text-xs md:text-sm font-medium">Fun Fact: {member.funFact}</p>
                </div>
              </div>

              {/* ✅ Only render socials if they exist */}
              {member.social && (
                <div className="flex justify-center space-x-4">
                  {member.social.github && (
                    <a href={member.social.github} className="social-icon"><Github /></a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="social-icon"><Linkedin /></a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="social-icon"><Twitter /></a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="social-icon"><Mail /></a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

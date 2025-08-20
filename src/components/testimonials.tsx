"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const testimonials = [
    {
      name: "Rajendra Patel",
      rating: 5,
      text: "Clueless Builders transformed our Idea into reality. Their attention to detail and technical expertise exceeded our expectations. The mobile app they built became to benificial for our business.",
      image: "https://as1.ftcdn.net/v2/jpg/09/24/48/16/1000_F_924481633_q0Q3elVTg6Nsnc9uykDNww1UPabIYyxn.jpg",
    },
    {
      name: "Mohan Rathod",
      rating: 5,
      text: "Working with Clueless Builders was an absolute pleasure. They delivered a beautiful, functional website that our users love. Their communication throughout the project was exceptional.",
      image: "https://as2.ftcdn.net/v2/jpg/16/22/36/91/1000_F_1622369193_F8M577SN9eEuLDUOdf50OD00bkJaNOMK.jpg",
    },
    {
      name: "Sanket Modi",
      rating: 5,
      text: "The team's technical skills are outstanding. They built a complex financial platform that handles thousands of transactions daily. Their code quality and architecture decisions were spot-on.",
      image: "https://as2.ftcdn.net/v2/jpg/13/18/73/93/1000_F_1318739367_5k9x39TH1pbBjEQ1haJRoRygXiesvWaB.webp",
    },
    {
      name: "Keval Prajapati",
      rating: 5,
      text: "Clueless Builders understood our wellness platform vision perfectly. They created an intuitive, beautiful app that has helped thousands of users on their mindfulness journey.",
      image: "https://as2.ftcdn.net/v2/jpg/09/49/74/89/1000_F_949748964_wrvXmh83Nk5WPKiOPamTfCNfECmzf1TB.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
    ))
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Clueless Builders.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 animate-delay-200">
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
              <Button
                onClick={prevTestimonial}
                size="sm"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
              <Button
                onClick={nextTestimonial}
                size="sm"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">{renderStars(testimonials[currentIndex].rating)}</div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-purple-500/50"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-purple-400">{testimonials[currentIndex].role}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-purple-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

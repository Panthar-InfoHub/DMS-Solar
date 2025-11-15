"use client"

import { Zap, Wrench, Box } from 'lucide-react'
import { useEffect, useRef, useState } from "react"

export default function About() {
  const features = [
    {
      icon: Zap,
      title: "Engineering & Design",
      description:
        "Tailored solar architecture for every site using latest CAD tools and energy-efficient design principles",
    },
    {
      icon: Wrench,
      title: "Procurement & Sourcing",
      description: "Partnered with India's leading Tier-1 solar brands for clean energy components",
    },
    {
      icon: Box,
      title: "Construction & Commissioning",
      description: "Professional EPC execution with safety, compliance, and energy-saving optimization first",
    },
  ]

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-24 md:py-40 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about-bg.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="absolute top-20 right-10 opacity-5 z-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="80" fill="currentColor" className="text-secondary" />
          <path d="M150 20 L150 70" stroke="currentColor" strokeWidth="8" className="text-secondary" />
          <path d="M150 230 L150 280" stroke="currentColor" strokeWidth="8" className="text-secondary" />
          <path d="M20 150 L70 150" stroke="currentColor" strokeWidth="8" className="text-secondary" />
          <path d="M230 150 L280 150" stroke="currentColor" strokeWidth="8" className="text-secondary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose DMS Solars EPC Services</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We bring decades of industry expertise in EPC (Engineering, Procurement, and Construction) to deliver
            world-class clean energy and solar solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`card-hover group bg-gradient-to-br from-card/60 to-card/30 backdrop-blur p-8 rounded-2xl border border-border/40 hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/25 to-primary/10 group-hover:from-primary/35 group-hover:to-primary/20 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

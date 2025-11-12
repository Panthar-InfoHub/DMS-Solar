"use client"

import { useEffect, useRef, useState } from "react"

export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Inquiry & Assessment",
      description: "Site evaluation, load analysis, and energy requirements",
      icon: "📍",
    },
    {
      number: 2,
      title: "Custom Design",
      description: "Engineering design with brand and size options",
      icon: "🎨",
    },
    {
      number: 3,
      title: "Procurement",
      description: "Quality sourcing from trusted Tier-1 vendors",
      icon: "📦",
    },
    {
      number: 4,
      title: "Installation",
      description: "Professional installation with safety compliance",
      icon: "🔧",
    },
    {
      number: 5,
      title: "Commissioning",
      description: "Testing, optimization, and grid synchronization",
      icon: "✅",
    },
    {
      number: 6,
      title: "Support",
      description: "Maintenance, warranty, and remote monitoring",
      icon: "🛡️",
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
    <section id="process" className="py-24 md:py-40 bg-gradient-to-b from-card/10 to-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our EPC Process</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Six-step journey from inquiry to ongoing support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="bg-gradient-to-br from-card/80 to-card/40 hover:from-card/100 hover:to-card/60 p-8 rounded-2xl border border-border/40 hover:border-primary/30 shadow-md hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300 flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 w-8 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

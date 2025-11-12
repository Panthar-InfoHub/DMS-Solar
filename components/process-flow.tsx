"use client"

import { useEffect, useRef, useState } from "react"

export default function ProcessFlow() {
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
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Solar <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            From registration to subsidy disbursement - we guide you through every step of the process
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="rounded-2xl overflow-hidden border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur p-6 md:p-8">
            <img
              src="/website-images/timeline.jpg"
              alt="Solar Project Process Flow - 8 steps from Consumer Registration to Subsidy Disbursal"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 border border-border/30">
          <h3 className="text-2xl font-bold text-foreground mb-6">Process Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏠",
                title: "Consumer Registration",
                description: "Easy online registration to begin your solar journey",
              },
              {
                icon: "📋",
                title: "Application & Feasibility",
                description: "Submit application and get instant feasibility approval",
              },
              {
                icon: "🔧",
                title: "Installation & Commissioning",
                description: "Professional installation with quality assurance",
              },
              {
                icon: "💰",
                title: "Subsidy Disbursement",
                description: "Receive government subsidy directly to your account",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Home, Users, TrendingUp, Check } from "lucide-react"
import Image from "next/image"

export default function Benefits() {
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
    <section id="benefits" className="py-24 md:py-40 relative" ref={sectionRef}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
                  src="/website-images/home-page-image-9.jpg"
                  alt="Solar panels installation"
                  fill
                  quality={90}
                  className="object-cover"
                />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf6de]/95 via-[#fbf6de]/90 to-[#fbf6de]/95" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-secondary">Government Subsidy</span> & Benefits
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Unlock significant government subsidies for residential and community solar installations
          </p>
        </div>

        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="rounded-2xl overflow-hidden border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="/website-images/pm-modi-image.jpg"
              alt="PM Surya Ghar: Muft Bijli Yojana - Government Subsidy Information"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="space-y-12">
          {/* Key Highlights */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "300 Units Free",
                description: "Free electricity every month",
                color: "text-yellow-500",
                bg: "bg-yellow-500/10",
              },
              {
                icon: TrendingUp,
                title: "Rs. 78  ,000 Cr",
                description: "Total investment in the scheme",
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                icon: Home,
                title: "1 Crore Homes",
                description: "Target households to benefit",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                icon: Users,
                title: "Direct Transfer",
                description: "Subsidy directly to your account",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`card-hover group bg-gradient-to-br from-card to-card/60 p-6 rounded-xl border border-border/40 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className={`${item.bg} ${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Residential Households Subsidy */}
          <div
            className={`bg-gradient-to-br from-blue-500/5 to-blue-600/5 p-8 rounded-2xl border border-blue-500/20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-lg">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Residential Households</h3>
                <p className="text-foreground/70">Individual home solar system subsidies</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { capacity: "1-2 kW", subsidy: "Rs. 30,000 per kW", total: "Rs. 60,000 max" },
                {
                  capacity: "2-3 kW",
                  subsidy: "Rs. 30,000 for 2 kW + Rs. 18,000 per additional kW",
                  total: "Rs. 78,000 max",
                },
                { capacity: "Above 3 kW", subsidy: "Rs. 78,000 flat", total: "Capped at Rs. 78,000" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/40 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="text-blue-500 font-bold text-lg mb-2">{tier.capacity}</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-foreground/70">{tier.subsidy}</p>
                    </div>
                    <div className="text-foreground font-semibold">{tier.total}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GHS/RWA Subsidy */}
          <div
            className={`bg-gradient-to-br from-purple-500/5 to-purple-600/5 p-8 rounded-2xl border border-purple-500/20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-500 text-white p-3 rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">GHS/RWA Common Facilities</h3>
                <p className="text-foreground/70">Group housing society and resident welfare association subsidies</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { capacity: "1-10 kW", subsidy: "Rs. 18,000 per kW", total: "Rs. 1,80,000 max" },
                {
                  capacity: "10-50 kW",
                  subsidy: "Rs. 1,80,000 for 10 kW + Rs. 9,000 per additional kW",
                  total: "Rs. 5,40,000 max",
                },
                { capacity: "Above 50 kW", subsidy: "Rs. 5,40,000 flat", total: "Capped at Rs. 5,40,000" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/40 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="text-purple-500 font-bold text-lg mb-2">{tier.capacity}</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-foreground/70">{tier.subsidy}</p>
                    </div>
                    <div className="text-foreground font-semibold">{tier.total}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

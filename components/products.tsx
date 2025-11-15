"use client"

import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Zap, Sun, Droplet, Cog, Lightbulb } from 'lucide-react'
import { useEffect, useRef, useState } from "react"

export default function Products() {
  const products = [
    {
      icon: Zap,
      title: "On-Grid Systems",
      description: "Grid-connected solar systems for maximum efficiency",
      detailedContent: {
        subtitle: "Grid-Tied Systems",
        intro: "This is the civilized version of solar — connected to the main electricity grid.",
        howItWorks:
          "Solar panels generate DC power, which is converted to AC by an inverter and fed into your house or business. If you produce extra, it goes to the grid.",
        benefits: ["You get net metering — credits for the surplus energy you supply back."],
        downsides: [
          "If the grid goes down, your system usually shuts off too (safety reasons). So, no apocalypse power backup.",
        ],
      },
    },
    {
      icon: Sun,
      title: "Off-Grid Systems",
      description: "Independent solar solutions with battery backup",
      detailedContent: {
        subtitle: "Hermit Mode Setup",
        intro: "This is the hermit mode setup — totally independent of the grid.",
        howItWorks:
          "Solar panels charge batteries, and the inverter draws from those batteries to power your appliances.",
        benefits: [
          "Perfect for remote areas or when you don't trust your local power board (and honestly, who does?).",
        ],
        downsides: [
          "Expensive upfront because you need batteries, and you must size the system properly — run out of stored energy, and it's candles and regrets.",
        ],
      },
    },
    {
      icon: Cog,
      title: "Hybrid Inverters",
      description: "Combined grid, solar, and battery integration",
      detailedContent: {
        subtitle: "Best of Both Worlds",
        intro: "Think of this as the best of both worlds — part on-grid, part off-grid.",
        howItWorks:
          "It manages solar power, grid power, and batteries all at once. During the day, it prioritizes solar, stores extra in batteries, and only pulls from the grid when needed.",
        benefits: ["Backup during outages + grid support."],
        downsides: [
          "Costlier than standard inverters, but worth it if you like flexibility (and uninterrupted Wi-Fi).",
        ],
      },
    },
    {
      icon: Sun,
      title: "Solar Panels",
      description: "High-efficiency mono and poly modules",
      detailedContent: {
        subtitle: "The Shiny Rectangles",
        intro: "The shiny rectangles everyone posts on LinkedIn after getting a subsidy.",
        howItWorks:
          "They convert sunlight into direct current (DC) using photovoltaic (PV) cells, usually made of silicon.",
        keyTypes: [
          "Monocrystalline: Expensive but efficient.",
          "Polycrystalline: Cheaper, slightly less efficient.",
          "Thin Film: Flexible, but not great for high-output setups.",
        ],
        mainJob:
          "The energy generator in every solar system. Everything else exists to manage what these panels create.",
      },
    },
    {
      icon: Droplet,
      title: "Solar Pumps",
      description: "Agricultural irrigation without fuel costs",
      detailedContent: {
        subtitle: "For Agriculture",
        intro: "Used mostly in agriculture — because farmers deserve low-cost energy too.",
        howItWorks: "Solar panels power a motor that pumps water from wells, rivers, or tanks.",
        keyTypes: ["DC Pumps: Directly powered by panels.", "AC Pumps: Require an inverter to convert DC to AC."],
        benefits: ["No fuel, no grid power, no headaches — just sunlight and water flow."],
      },
    },
    {
      icon: Lightbulb,
      title: "Solar Lighting",
      description: "Street lights and home lighting solutions",
      detailedContent: {
        subtitle: "Light Without Bills",
        intro: "For people who want to light their gardens or streets without an electric bill.",
        howItWorks:
          "Each light has its own small solar panel, battery, and LED. The panel charges the battery during the day; the battery powers the light at night.",
        whereUsed: "Street lights, pathways, campuses, parks.",
        benefits: ["Low maintenance, no wiring, no energy cost."],
        downsides: ["Doesn't do much on cloudy days — unless you like dim ambience."],
      },
    },
  ]

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

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
    <section id="products" className="py-16 md:py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-100  bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/website-images/home-page-image-3.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Solutions</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive solar solutions tailored to residential, agricultural, and commercial needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div key={index}>
                <Card
                  onClick={() => setSelectedProduct(index)}
                  className={`card-hover group bg-gradient-to-br from-primary/5 via-card/80 to-secondary/5 p-8 rounded-2xl border border-border/40 hover:border-primary/40 cursor-pointer transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                  }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/15 group-hover:from-primary/40 group-hover:to-primary/25 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed text-sm">{product.description}</p>
                  <div className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2 group/link transition-all duration-300">
                    Learn More
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </Card>

                <Dialog
                  open={selectedProduct === index}
                  onOpenChange={(open) => setSelectedProduct(open ? index : null)}
                >
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-bottom-4">
                    <DialogHeader className="animate-in fade-in-0 slide-in-from-top-2 duration-500 delay-100">
                      <div className="flex items-center gap-3 mb-2 animate-in fade-in-0 slide-in-from-left-3 duration-500 delay-150">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/15 rounded-lg flex items-center justify-center animate-in zoom-in-0 duration-500 delay-200">
                          <Icon className="w-6 h-6 text-primary animate-in zoom-in-0 duration-500 delay-300" />
                        </div>
                        <DialogTitle className="text-2xl animate-in fade-in-0 slide-in-from-right-3 duration-500 delay-250">
                          {product.title}
                        </DialogTitle>
                      </div>
                      <DialogDescription className="text-base text-muted-foreground animate-in fade-in-0 duration-500 delay-300">
                        {product.detailedContent.subtitle}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-4">
                      <p className="text-foreground/80 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-350">
                        {product.detailedContent.intro}
                      </p>

                      <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-400">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-primary">⚡</span> How it works
                        </h4>
                        <p className="text-foreground/70 leading-relaxed pl-6">{product.detailedContent.howItWorks}</p>
                      </div>

                      {product.detailedContent.keyTypes && (
                        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-450">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-primary">📋</span> Key Types
                          </h4>
                          <ul className="space-y-2 pl-6">
                            {product.detailedContent.keyTypes.map((type, i) => (
                              <li
                                key={i}
                                className="text-foreground/70 leading-relaxed flex gap-2 animate-in fade-in-0 slide-in-from-left-2 duration-500"
                                style={{ animationDelay: `${500 + i * 50}ms` }}
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{type}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.detailedContent.mainJob && (
                        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-500">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-primary">🎯</span> Main Job
                          </h4>
                          <p className="text-foreground/70 leading-relaxed pl-6">{product.detailedContent.mainJob}</p>
                        </div>
                      )}

                      {product.detailedContent.whereUsed && (
                        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-550">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-primary">📍</span> Where it's used
                          </h4>
                          <p className="text-foreground/70 leading-relaxed pl-6">{product.detailedContent.whereUsed}</p>
                        </div>
                      )}

                      {product.detailedContent.benefits && (
                        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-600">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-primary">✅</span> Key Benefits
                          </h4>
                          <ul className="space-y-2 pl-6">
                            {product.detailedContent.benefits.map((benefit, i) => (
                              <li
                                key={i}
                                className="text-foreground/70 leading-relaxed flex gap-2 animate-in fade-in-0 slide-in-from-left-2 duration-500"
                                style={{ animationDelay: `${650 + i * 50}ms` }}
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.detailedContent.downsides && (
                        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-700">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-amber-500">⚠️</span> Downsides
                          </h4>
                          <ul className="space-y-2 pl-6">
                            {product.detailedContent.downsides.map((downside, i) => (
                              <li
                                key={i}
                                className="text-foreground/70 leading-relaxed flex gap-2 animate-in fade-in-0 slide-in-from-left-2 duration-500"
                                style={{ animationDelay: `${750 + i * 50}ms` }}
                              >
                                <span className="text-amber-500 mt-1">•</span>
                                <span>{downside}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

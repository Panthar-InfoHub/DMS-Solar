"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Award, Wrench, MapPin, ShieldCheck, DollarSign, Headphones } from "lucide-react"
import { useState } from "react"
import ContactModal from "./contact-modal"

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const whyChooseFeatures = [
    {
      icon: Award,
      title: "Vendor diversity",
      description: "Pick the brand and warranty level you prefer; we handle vendor coordination",
      color: "bg-blue-50/80 dark:bg-blue-950/30 border-blue-200/50 dark:border-blue-800/50",
    },
    {
      icon: Wrench,
      title: "End-to-end EPC service",
      description: "From design and approvals to installation, commissioning and O&M",
      color: "bg-green-50/80 dark:bg-green-950/30 border-green-200/50 dark:border-green-800/50",
    },
    {
      icon: MapPin,
      title: "Local expertise",
      description: "Experience with rural & urban EPC installations, net-metering rules, and agricultural pump needs",
      color: "bg-purple-50/80 dark:bg-purple-950/30 border-purple-200/50 dark:border-purple-800/50",
    },
    {
      icon: ShieldCheck,
      title: "Quality assurance",
      description: "Component validation, professional mounting, earthing and safety checks",
      color: "bg-orange-50/80 dark:bg-orange-950/30 border-orange-200/50 dark:border-orange-800/50",
    },
    {
      icon: DollarSign,
      title: "Transparent pricing",
      description: "Clear EPC quotes with ROI / payback estimates and financing options where available",
      color: "bg-pink-50/80 dark:bg-pink-950/30 border-pink-200/50 dark:border-pink-800/50",
    },
    {
      icon: Headphones,
      title: "After-sales support",
      description: "Warranty facilitation, preventative maintenance contracts and responsive technical service",
      color: "bg-cyan-50/80 dark:bg-cyan-950/30 border-cyan-200/50 dark:border-cyan-800/50",
    },
  ]

  return (
    <>
      <section id="home" className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        {/* Animated solar panels illustration */}
        <div className="absolute top-20 right-10 opacity-10 animate-float">
          <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="180" height="110" fill="currentColor" className="text-primary" />
            <line x1="10" y1="50" x2="190" y2="50" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="10" y1="80" x2="190" y2="80" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="10" y1="110" x2="190" y2="110" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="70" y1="20" x2="70" y2="130" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="130" y1="20" x2="130" y2="130" stroke="currentColor" strokeWidth="2" className="text-secondary" />
          </svg>
        </div>

        {/* Sun with rays illustration */}
        <div className="absolute top-32 left-20 opacity-15 animate-scale-bounce">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="30" fill="currentColor" className="text-secondary" />
            <line x1="60" y1="5" x2="60" y2="25" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <line x1="60" y1="95" x2="60" y2="115" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <line x1="5" y1="60" x2="25" y2="60" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <line x1="95" y1="60" x2="115" y2="60" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <line x1="18" y1="18" x2="32" y2="32" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <line x1="88" y1="88" x2="102" y2="102" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <line x1="102" y1="18" x2="88" y2="32" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <line x1="32" y1="88" x2="18" y2="102" stroke="currentColor" strokeWidth="4" className="text-secondary" />
          </svg>
        </div>

        {/* Energy saving leaf illustration */}
        <div className="absolute bottom-20 left-32 opacity-10 animate-float" style={{ animationDelay: "1.5s" }}>
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 10 Q80 40 70 80 Q60 100 50 110 Q40 100 30 80 Q20 40 50 10Z"
              fill="currentColor"
              className="text-green-600"
            />
            <line x1="50" y1="30" x2="50" y2="100" stroke="currentColor" strokeWidth="2" className="text-green-800" />
          </svg>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-float" />
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl opacity-40 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - existing content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Clean Energy EPC Solutions for India</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in-up stagger-1">
                  Reliable Solar EPC Solutions{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    for Homes, Farms & Businesses
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed animate-fade-in-up stagger-2">
                We are a complete EPC Company — delivering end-to-end solar energy systems from design to commissioning
                with engineering excellence and clean energy commitment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up stagger-3">
                <Button className="cta-button group" onClick={() => setIsContactModalOpen(true)}>
                  Get a Free Proposal
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                {/* <Button
                  variant="outline"
                  className="px-8 py-3 rounded-xl text-base font-semibold border-2 border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/50 hover:shadow-lg bg-transparent transition-all duration-300"
                >
                  Explore Solutions
                </Button> */}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-12 animate-fade-in-up stagger-4">
                {[
                  { label: "Projects", value: "500+" },
                  { label: "Capacity", value: "50 MW+" },
                  { label: "Customers", value: "1000+" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-card/50 backdrop-blur rounded-xl p-4 border border-border/50 hover:bg-card/80 transition-all duration-300"
                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  >
                    <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative h-[700px] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />

              <div className="animate-scroll-vertical space-y-4">
                {[...whyChooseFeatures, ...whyChooseFeatures].map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={index}
                      className={`${feature.color} backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-vertical {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-scroll-vertical {
            animation: scroll-vertical 20s linear infinite;
          }

          .animate-scroll-vertical:hover {
            animation-play-state: paused;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes scale-bounce {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          .animate-scale-bounce {
            animation: scale-bounce 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}

"use client"

import Image from "next/image"

export default function Brands() {
  const brands = [
    { name: "Luminous", logo: "/brands/luminous.svg" },
    { name: "TATA", logo: "/brands/tata.svg" },
    { name: "Adani", logo: "/brands/adani.svg" },
    { name: "Nexus", logo: "/brands/nexus.svg" },
    { name: "Invergy", logo: "/brands/invergy.svg" },
    { name: "Devsol", logo: "/brands/devsol.svg" },
    { name: "Waaree", logo: "/brands/waaree.svg" },
    { name: "Crompton", logo: "/brands/crompton.svg" },
    { name: "INVT", logo: "/brands/invt.svg" },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Brands We Have Worked With</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We source and install equipment from reputed brands to match performance, budget and warranty requirements:
            panels, inverters, controllers, batteries, and pump sets.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* First Row - Scrolls Left to Right */}
        <div className="flex mb-8 animate-scroll-left">
          <div className="flex gap-8 shrink-0">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`top-${index}`}
                className="w-48 h-24 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group shrink-0 p-4"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    width={brand.name === "Adani" ? 80 : 120}
                    height={brand.name === "Adani" ? 80 : 60}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolls Right to Left */}
        {/* <div className="flex animate-scroll-right">
          <div className="flex gap-8 shrink-0">
            {[...brands.reverse(), ...brands, ...brands].map((brand, index) => (
              <div
                key={`bottom-${index}`}
                className="w-48 h-24 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group shrink-0 p-4"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    width={brand.name === "Adani" ? 80 : 120}
                    height={brand.name === "Adani" ? 80 : 60}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 7s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

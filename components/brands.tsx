"use client"

import Image from "next/image"

export default function Brands() {
  const brands = [
    { name: "Luminous", logo: "/brands/luminous.svg" },
    { name: "TATA", logo: "/brands/tata-solar-logo.png" },
    { name: "Adani", logo: "/brands/aadani-updated-image.jpeg" },
    { name: "Nexus", logo: "/brands/nexus.svg" },
    { name: "Invergy", logo: "/brands/invergy.svg" },
    { name: "Devsol", logo: "/brands/devsol.svg" },
    { name: "Waaree", logo: "/brands/waaree.svg" },
    { name: "Crompton", logo: "/brands/crompton.svg" },
    { name: "INVT", logo: "/brands/invt.svg" },
    { name: "STATCON ENERGIAA", logo: "/brands/Statcon.png" },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Brands We Have Worked With</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We source and install equipment from reputed brands to match performance, budget and warranty requirements:
            panels, inverters, controllers, batteries, and pump sets.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group p-6 aspect-[3/2]"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={brand.name === "Adani" ? 80 : 120}
                  height={brand.name === "Adani" ? 80 : 60}
                  className="object-contain transition-all duration-300 group-hover:scale-110 max-w-full max-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

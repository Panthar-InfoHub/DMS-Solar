import { MapPin } from "lucide-react"

export default function Presence() {
  const regions = ["Bhopal", "Indore", "Jhansi", "Gwalior", "Agra", "Kanpur", "Lucknow"]

  return (
    <section id="presence" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Presence</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Proudly serving customers across central and northern India
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-12 border border-border">
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-foreground mb-4">Registered Address:</p>
              <p className="text-foreground/80">
                3,4 First floor, Golden Wings, Sant Asharam Nagar, Bagmugalia, Bhopal (M.P) - 462043
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-semibold text-foreground mb-4">Serving in:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regions.map((region) => (
                <div key={region} className="bg-card/50 p-4 rounded-lg text-center font-semibold text-foreground/80">
                  {region}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

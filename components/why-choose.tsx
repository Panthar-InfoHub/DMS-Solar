import { Card } from "@/components/ui/card"
import { Award, Users, Zap, MapPin, Shield, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhyChoose() {
  const reasons = [
    {
      icon: Zap,
      title: "EPC Expertise",
      description: "Engineering, Procurement & Construction under one roof",
    },
    {
      icon: Users,
      title: "Vendor Diversity",
      description: "Choose from TATA, Adani, Luminous, and more",
    },
    {
      icon: Award,
      title: "End-to-End Service",
      description: "From design to after-sales support",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Rural & urban project experience",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Installation safety & component validation",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "ROI-based quotes and financing support",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose DMS Solars</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">The trusted partner for your solar journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="card-hover bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-xl border border-border"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-foreground/70">{reason.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button className="cta-button">Explore Solar Options</Button>
        </div>
      </div>
    </section>
  )
}

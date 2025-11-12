import { Home, Building2, Leaf } from "lucide-react"

export default function UseCases() {
  const useCases = [
    {
      icon: Home,
      title: "Homes & Apartments",
      description: "Cut electricity bills, EV-ready setups",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Building2,
      title: "Commercial & Industries",
      description: "Peak load management, energy savings",
      color: "from-secondary/10 to-secondary/5",
    },
    {
      icon: Leaf,
      title: "Farms & Agriculture",
      description: "Solar water pumps, atta chakki drives, irrigation",
      color: "from-accent/10 to-accent/5",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Use Cases</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Solar solutions for every segment</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${useCase.color} backdrop-blur rounded-xl p-8 border border-border cursor-pointer group hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-foreground/80">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

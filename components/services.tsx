"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Lightbulb, Wrench, Cpu, Settings } from "lucide-react"

const services = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "Trading & Procurement",
    description:
      "EPC-grade sourcing of high-quality solar modules, inverters, batteries and balance-of-system components from leading clean energy manufacturers you trust.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
    size: "col-span-1 row-span-1",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "System Design",
    description:
      "Custom EPC site assessments and engineering for residential, commercial, agricultural and industrial solar energy needs.",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-600",
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Installation & Commissioning",
    description:
      "Professional EPC civil, electrical and mechanical installation with testing, commissioning and grid-integration for optimal energy saving.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
    size: "col-span-1 row-span-2",
  },
  {
    id: 4,
    icon: Cpu,
    title: "Special Solutions",
    description:
      "Solarized atta chakki (flour mill) drives for rural/SME milling, and robust solar water pumps for irrigation & drinking water with energy-efficient EPC design.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
    size: "col-span-1 row-span-2",
  },
  {
    id: 5,
    icon: Settings,
    title: "Operation & Maintenance",
    description:
      "Scheduled EPC maintenance, remote monitoring, warranty management and prompt spare parts/service for long-term energy savings.",
    gradient: "from-red-500/10 to-rose-500/10",
    iconColor: "text-red-600",
    size: "col-span-1 row-span-1",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-5 animate-float">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="110" height="70" fill="currentColor" className="text-green-600" />
          <line x1="20" y1="60" x2="130" y2="60" stroke="white" strokeWidth="2" />
          <line x1="20" y1="80" x2="130" y2="80" stroke="white" strokeWidth="2" />
          <line x1="20" y1="100" x2="130" y2="100" stroke="white" strokeWidth="2" />
          <line x1="55" y1="40" x2="55" y2="110" stroke="white" strokeWidth="2" />
          <line x1="95" y1="40" x2="95" y2="110" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 opacity-5 animate-float" style={{ animationDelay: "2s" }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 10 Q30 30 30 50 Q30 70 50 90 Q70 70 70 50 Q70 30 50 10Z"
            fill="currentColor"
            className="text-primary"
          />
          <circle cx="50" cy="50" r="15" fill="currentColor" className="text-secondary" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            What EPC Services We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solar energy and clean power EPC solutions from procurement to maintenance
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.size} group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Ready to harness the power of solar energy?</p>
          <a href="#contact" className="inline-block cta-button">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

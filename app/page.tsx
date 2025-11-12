import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Services from "@/components/services"
import Benefits from "@/components/benefits"
import ProcessFlow from "@/components/process-flow"
import Gallery from "@/components/gallery"
import Brands from "@/components/brands"
import Presence from "@/components/presence"
import Careers from "@/components/careers"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Brands />
      <Benefits />
      <ProcessFlow />
      <Gallery />
      <Presence />
      <Careers />
      <Contact />
      <Footer />
    </main>
  )
}

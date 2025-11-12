"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "./logo"
import ContactModal from "./contact-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const links = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Our Work", href: "#gallery" },
    { label: "Presence", href: "#presence" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />

            <div className="hidden md:flex gap-8">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="nav-link text-sm font-medium">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button className="cta-button" onClick={() => setIsContactModalOpen(true)}>
                Get Proposal
              </Button>
            </div>

            <button
              className="md:hidden transition-colors duration-300 hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
              {links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-sm nav-link rounded-lg transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full cta-button" onClick={() => setIsContactModalOpen(true)}>
                Get Free Proposal
              </Button>
            </div>
          )}
        </div>
      </nav>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}

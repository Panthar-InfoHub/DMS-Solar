"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email content
    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACity: ${formData.city}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`

    // Open email client
    window.open(`mailto:dmssolar@gmail.com?subject=${subject}&body=${body}`)

    // Reset form
    setFormData({
      name: "",
      email: "",
      city: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background image layer - made more prominent */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "url(/website-images/bg-image.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Lighter overlay for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Get in touch with our team for solar solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-foreground/70">
                      3,4 First floor, Golden Wings, Sant Asharam Nagar, Bagmugalia, Bhopal (M.P) - 462043
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-foreground/70">+91-9125111845</p>
                    <p className="text-foreground/70">+91-9125111846</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-foreground/70">dmssolars@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                    <a href="https://wa.me/9125111846" className="text-primary hover:text-primary/80 font-semibold">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-xl border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your city"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your solar needs"
                  required
                />
              </div>

              <Button type="submit" className="w-full cta-button">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

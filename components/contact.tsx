"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Download } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", formData)
      alert("Thank you for your message! I will get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error sending your message. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Aryan-Jung-Thapa-CV.pdf'
    link.download = 'Aryan-Jung-Thapa-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 wood-texture opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance text-foreground">
            Let's Chat Over Tea
          </h2>
          <p className="text-lg text-primary/80 mb-12 text-pretty">
            I'd love to hear from you! Whether it's a project idea or just to say hello.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 wood-frame">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      disabled={isSubmitting}
                      className="focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 bg-input/50 backdrop-blur-sm border-primary/30 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                      className="focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 bg-input/50 backdrop-blur-sm border-primary/30 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      disabled={isSubmitting}
                      className="focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 bg-input/50 backdrop-blur-sm border-primary/30 rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <Button
                    type="button"
                    size="lg"
                    onClick={downloadCV}
                    className="w-full bg-secondary/80 hover:bg-secondary text-secondary-foreground shadow-lg hover:shadow-secondary/30 transition-all duration-300 hover:scale-[1.02] rounded-full flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download My CV
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 group cursor-pointer wood-frame">
                <Mail className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-all duration-500" />
                <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                <a
                  href="mailto:rnthapa223@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  rnthapa223@gmail.com
                </a>
              </Card>

              <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-700 hover:-translate-y-2 group cursor-pointer wood-frame">
                <Phone className="h-6 w-6 text-secondary mb-3 group-hover:scale-110 transition-all duration-500" />
                <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                <div className="space-y-1">
                  <a
                    href="tel:+9779767984746"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors block"
                  >
                    +977 9767984746
                  </a>
                  <a
                    href="tel:+9779813733362"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors block"
                  >
                    +977 9813733362
                  </a>
                </div>
              </Card>

              <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:-translate-y-2 group cursor-pointer wood-frame">
                <MapPin className="h-6 w-6 text-accent mb-3 group-hover:scale-110 transition-all duration-500" />
                <h3 className="font-semibold mb-1 text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">Gothatar, Kathmandu, Nepal</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-accent blur-3xl animate-cherry-float" />
      </div>
      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-10">
        <div
          className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary blur-3xl animate-cherry-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            <div className="relative group animate-fade-in-up">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl shadow-primary/20 group-hover:shadow-accent/30 transition-all duration-700 group-hover:scale-[1.02] wood-texture">
                <Image src="/profile-photo.jpg" alt="Aryan Jung Thapa" fill className="object-cover" priority />
              </div>
            </div>

            <div
              className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground">
                Aryan Jung Thapa
              </h1>

              <p className="text-xl sm:text-2xl text-primary font-medium text-balance">
                Software Engineering Student & Frontend Developer
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Creating beautiful, user-friendly web experiences with modern technologies. Let's build something
                amazing together.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="group transition-all duration-500 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-accent/30 rounded-full px-8"
                >
                  Explore My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#contact")}
                  className="group border-2 border-primary/40 hover:bg-secondary/50 hover:border-primary/60 transition-all duration-500 hover:scale-105 rounded-full px-8"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-500 hover:scale-110 rounded-full"
                >
                  <a
                    href="https://github.com/AryanJung/AryanJung"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-secondary/20 hover:text-secondary transition-all duration-500 hover:scale-110 rounded-full"
                >
                  <a
                    href="https://www.linkedin.com/in/rn-jung-b58b86314/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-accent/10 hover:text-accent transition-all duration-500 hover:scale-110 rounded-full"
                >
                  <a href="mailto:rnthapa223@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 animate-bounce text-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            aria-label="Scroll down"
            className="hover:bg-primary/10 transition-all duration-500 rounded-full"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  )
}

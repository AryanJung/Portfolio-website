"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Kura-Kani: News Summarizer",
      description:
        "An intelligent news summarization application that uses AI to condense lengthy news articles into concise, easy-to-read summaries.",
      technologies: ["Python", "Machine Learning", "AI", "NLP"],
      github: "https://github.com/AryanJung/Kura_Kani-",
      demo: "https://github.com/AryanJung/Kura_Kani-",
      image: "/news-summarizer-ai-app-interface.jpg",
    },
    {
      title: "Books_Online",
      description:
        "A comprehensive online book platform featuring book browsing, search functionality, and user-friendly interface for book enthusiasts.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/AryanJung/AryanJung/tree/main/BooksOnline",
      demo: "https://github.com/AryanJung/AryanJung/tree/main/BooksOnline",
      image: "/online-bookstore-interface.png",
    },
    {
      title: "Tourist_Destination",
      description:
        "An interactive web application showcasing popular tourist destinations with detailed information and travel guides.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
      github: "https://github.com/AryanJung/AryanJung/tree/main/TouristDestination",
      demo: "https://github.com/AryanJung/AryanJung/tree/main/TouristDestination",
      image: "/tourist-destination-travel-website.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance text-foreground">My Projects</h2>
          <p className="text-lg text-primary/80 mb-16 text-pretty max-w-2xl">
            A collection of work that showcases my passion for creating beautiful and functional web experiences
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden bg-card/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-3 wood-frame animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/30 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-primary/40 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 bg-transparent rounded-full"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-primary/30 transition-all duration-300 rounded-full"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

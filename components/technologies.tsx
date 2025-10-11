import { Card } from "@/components/ui/card"
import { Flower2 } from "lucide-react"

export function Technologies() {
  const technologies = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    },
    {
      category: "Programming Languages",
      skills: ["Java", "C", "C++", "Python", "SQL"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "MongoDB", "Machine Learning", "AI", "Pandas", "NumPy"],
    },
  ]

  return (
    <section
      id="technologies"
      className="py-24 sm:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 wood-texture opacity-5" />
      <div className="absolute top-10 right-10 text-primary/10">
        <Flower2 className="w-32 h-32 animate-cherry-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-lg text-primary/80 mb-16 text-pretty">
            Tools and technologies I use to bring ideas to life
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={tech.category}
                className="p-6 bg-card/90 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:-translate-y-2 group wood-frame animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-accent transition-colors duration-500">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-accent/10 text-foreground border border-accent/30 rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

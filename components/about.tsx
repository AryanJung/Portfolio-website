import { Card } from "@/components/ui/card"
import { GraduationCap, Users, Award } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30"
    >
      <div className="absolute inset-0 wood-texture opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-balance text-foreground">About Me</h2>
          <p className="text-lg text-primary/80 mb-12 text-pretty">Getting to know the person behind the code</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group animate-fade-in-up">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 wood-frame">
                <Image
                  src="/profile-photo.jpg"
                  alt="Aryan Jung Thapa"
                  width={500}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            <div
              className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-pretty">
                Hello! I'm a detail-oriented and highly motivated Software Engineering student at NCIT College,
                affiliated with Pokhara University. With strong expertise in frontend development, I specialize in
                building responsive and user-friendly web applications using HTML, CSS, and JavaScript.
              </p>
              <p className="text-pretty">
                Although I don't have formal work experience, I have worked on multiple projects with my team, allowing
                me to apply my technical skills in practical scenarios. Through these collaborations, I have gained
                hands-on experience in developing web applications, solving complex challenges, and optimizing
                performance.
              </p>
              <p className="text-pretty">
                Working in a team environment has strengthened my communication, problem-solving, and adaptability
                skills, preparing me to tackle real-world development tasks effectively. I'm passionate about creating
                beautiful, functional web experiences that make a difference.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 group cursor-pointer wood-frame animate-fade-in-up">
              <GraduationCap className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-all duration-500" />
              <h3 className="font-semibold mb-2 text-foreground">Education</h3>
              <p className="text-sm text-muted-foreground">Bachelor in Software Engineering</p>
              <p className="text-sm text-muted-foreground">NCIT College (2022-Present)</p>
              <p className="text-sm text-muted-foreground mt-1">+2 Science, Uniglobe College</p>
            </Card>

            <Card
              className="p-6 bg-card/90 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-700 hover:-translate-y-2 group cursor-pointer wood-frame animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Users className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-all duration-500" />
              <h3 className="font-semibold mb-2 text-foreground">Experience</h3>
              <p className="text-sm text-muted-foreground">Team Projects</p>
              <p className="text-sm text-muted-foreground">Web Development</p>
              <p className="text-sm text-muted-foreground mt-1">Problem Solving & Collaboration</p>
            </Card>

            <Card
              className="p-6 bg-card/90 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:-translate-y-2 group cursor-pointer wood-frame animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Award className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-all duration-500" />
              <h3 className="font-semibold mb-2 text-foreground">Certifications</h3>
              <p className="text-sm text-muted-foreground">Intro to Programming</p>
              <p className="text-sm text-muted-foreground">Python Course</p>
              <p className="text-sm text-muted-foreground">Intro to Machine Learning</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

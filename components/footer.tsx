import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/AryanJung/AryanJung"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/rn-jung-b58b86314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rnthapa223@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Aryan Jung Thapa. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

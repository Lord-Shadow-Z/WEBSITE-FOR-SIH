"use client"

import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <Card className="glass-effect p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-4">AI Cattle Breed Identification</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Innovating for India's Livestock Future through Image Based breed identification and smart farming
                solutions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">binaryblades@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Project</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("problem-statement")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Problem Statement
                </button>
                <button
                  onClick={() => scrollToSection("proposed-solution")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Our Solution
                </button>
                <button
                  onClick={() => scrollToSection("workflow-diagram")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Architecture
                </button>
                <button
                  onClick={() => scrollToSection("technologies-used")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Technologies
                </button>
                <button
                  onClick={() => scrollToSection("workflow-diagram")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Working of the Project
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Bar */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
            <span className="text-muted-foreground">© 2025 AI Cattle Breed Identification</span>
            <span className="text-muted-foreground">•</span>
            <span className="gradient-text font-semibold">Smart India Hackathon 2025</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Innovating for India's Livestock Future</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8">
          <p className="text-2xl font-bold gradient-text">Empowering Farmers Through Image Based Innovation</p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </footer>
  )
}

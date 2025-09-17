"use client"

import { Card } from "@/components/ui/card"

export function TechnologiesUsed() {
  const technologies = [
    {
      name: "React",
      logo: "⚛️",
      description: "Frontend framework for building user interfaces",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: "🎨",
      description: "Utility-first CSS framework for styling",
      category: "Frontend",
    },
    {
      name: "FastAPI",
      logo: "⚡",
      description: "High-performance Python web framework",
      category: "Backend",
    },
    {
      name: "YOLOv8",
      logo: "👁️",
      description: "Real-time object detection model",
      category: "AI/ML",
    },
    {
      name: "EfficientNet",
      logo: "🧠",
      description: "Efficient convolutional neural network",
      category: "AI/ML",
    },
    {
      name: "DenseNet",
      logo: "🔗",
      description: "Densely connected convolutional network",
      category: "AI/ML",
    },
    {
      name: "AWS",
      logo: "☁️",
      description: "Cloud computing platform",
      category: "Cloud",
    },
    {
      name: "PostgreSQL",
      logo: "🐘",
      description: "Advanced open-source database",
      category: "Database",
    },
    {
      name: "WhatsApp API",
      logo: "💬",
      description: "Messaging platform integration",
      category: "Integration",
    },
  ]

  const categories = ["Frontend", "Backend", "AI/ML", "Cloud", "Database", "Integration"]
  const categoryColors = {
    Frontend: "bg-blue-500",
    Backend: "bg-green-500",
    "AI/ML": "bg-purple-500",
    Cloud: "bg-cyan-500",
    Database: "bg-orange-500",
    Integration: "bg-pink-500",
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technologies Used</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology stack powering our AI-driven livestock identification system
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="glass-effect p-6 hover:scale-105 transition-all duration-500 group cursor-pointer animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Logo */}
                <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">{tech.logo}</div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>

                {/* Category Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3 ${categoryColors[tech.category as keyof typeof categoryColors]}`}
                >
                  {tech.category}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`}></div>
              <span className="text-sm text-muted-foreground">{category}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Architecture */}
        <Card className="glass-effect p-8">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Architecture Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Frontend Layer</h4>
              <p className="text-sm text-muted-foreground">
                React-based responsive interface with Tailwind CSS styling
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold text-white mb-2">AI/ML Core</h4>
              <p className="text-sm text-muted-foreground">Advanced computer vision models for breed identification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Cloud Infrastructure</h4>
              <p className="text-sm text-muted-foreground">Scalable AWS-based deployment with modern architecture</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  )
}

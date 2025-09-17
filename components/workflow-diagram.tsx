"use client"

import { Card } from "@/components/ui/card"
import { Smartphone, Server, Brain, Database, Cloud, MessageSquare, CheckCircle, ArrowDown } from "lucide-react"

export function WorkflowDiagram() {
  const layers = [
    {
      title: "Frontend",
      description: "Web Interface (Prototype)",
      icon: Smartphone,
      color: "bg-blue-500",
      details: ["Web Dashboard", "User Interface", "Prototype Demo"],
    },
    {
      title: "Backend",
      description: "API & Business Logic",
      icon: Server,
      color: "bg-green-500",
      details: ["FastAPI Server", "Authentication", "Request Processing"],
    },
    {
      title: "AI/ML Pipeline",
      description: "Computer Vision Models",
      icon: Brain,
      color: "bg-purple-500",
      details: ["YOLOv8n Detection", "EfficientNet Features", "DenseNet Classification"],
    },
    {
      title: "Database",
      description: "Data Storage & Management",
      icon: Database,
      color: "bg-orange-500",
      details: ["PostgreSQL", "Breed Database", "User Data"],
    },
    {
      title: "Cloud Services",
      description: "AWS Infrastructure",
      icon: Cloud,
      color: "bg-cyan-500",
      details: ["EC2 Instances", "S3 Storage", "Load Balancing"],
    },
    {
      title: "WhatsApp Expert",
      description: "Expert Consultation",
      icon: MessageSquare,
      color: "bg-pink-500",
      details: ["Expert Network", "Consultation API", "Real-time Chat"],
    },
    {
      title: "Output",
      description: "Results & Reports",
      icon: CheckCircle,
      color: "bg-emerald-500",
      details: ["Breed Identification", "Confidence Score", "Recommendations"],
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">System Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive 7-layer prototype architecture demonstrating scalability and performance potential
          </p>
        </div>

        {/* 3D Layered Diagram */}
        <div className="relative perspective-1000">
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <div key={index} className="relative">
                <Card
                  className="glass-effect p-6 hover:scale-105 transition-all duration-500 group cursor-pointer transform hover:rotate-x-5"
                  style={{
                    transformStyle: "preserve-3d",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-center space-x-6">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full ${layer.color} flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}
                    >
                      <layer.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                      <p className="text-muted-foreground mb-3">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.details.map((detail, detailIndex) => (
                          <span
                            key={detailIndex}
                            className="px-3 py-1 bg-card rounded-full text-xs text-muted-foreground border border-border"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Layer Number */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>

                {/* Arrow */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center animate-bounce">
                      <ArrowDown className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  )
}

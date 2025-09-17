"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Brain, Zap } from "lucide-react"

export function ProposedSolution() {
  const pipeline = [
    {
      name: "YOLOv8n",
      description: "Real-time object detection and localization of cattle/buffalo in images",
      icon: Eye,
      color: "bg-primary",
      features: ["Fast Detection", "High Accuracy", "Real-time Processing"],
    },
    {
      name: "EfficientNet-B0",
      description: "Feature extraction and initial breed classification with optimized efficiency",
      icon: Brain,
      color: "bg-secondary",
      features: ["Feature Extraction", "Efficient Processing", "Breed Classification"],
    },
    {
      name: "DenseNet121",
      description: "Final breed identification with deep feature learning and high precision",
      icon: Zap,
      color: "bg-accent",
      features: ["Deep Learning", "High Precision", "Final Classification"],
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A sophisticated 3-stage AI pipeline combining cutting-edge computer vision models
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {pipeline.map((stage, index) => (
              <div key={index} className="relative">
                <Card className="glass-effect p-8 hover:scale-105 transition-all duration-500 group cursor-pointer h-full">
                  {/* Stage Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stage.color} mb-6 group-hover:animate-pulse-glow transition-all duration-300`}
                  >
                    <stage.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white">{stage.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{stage.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {stage.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="mr-2 mb-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Arrow for desktop */}
                  {index < pipeline.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Expected Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">&lt;2s</div>
                <div className="text-muted-foreground">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  )
}

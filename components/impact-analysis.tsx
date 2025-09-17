"use client"

import { Card } from "@/components/ui/card"
import { Users, TrendingUp, Leaf, Zap } from "lucide-react"

export function ImpactAnalysis() {
  const impacts = [
    {
      category: "Social Impact",
      icon: Users,
      color: "bg-blue-500",
      metrics: [
        { label: "Farmers Empowered", description: "Direct beneficiaries across rural India" },
        { label: "Knowledge Transfer", description: "Continuous access to expert guidance" },
        { label: "Digital Inclusion", description: "Rural smartphone penetration leverage" },
      ],
    },
    {
      category: "Economic Impact",
      icon: TrendingUp,
      color: "bg-green-500",
      metrics: [
        { label: "Income Increase", description: "Average farmer income improvement" },
        { label: "Cost Reduction", description: "Annual savings per farmer" },
        { label: "Market Value", description: "Addressable market size" },
      ],
    },
    {
      category: "Environmental Impact",
      icon: Leaf,
      color: "bg-emerald-500",
      metrics: [
        { label: "Carbon Footprint", description: "Reduction through optimized breeding" },
        { label: "Resource Efficiency", description: "Better feed and water management" },
        { label: "Sustainable Practices", description: "Adoption of eco-friendly methods" },
      ],
    },
    {
      category: "Technological Impact",
      icon: Zap,
      color: "bg-purple-500",
      metrics: [
        { label: "Image Based Adoption", description: "Pioneer in livestock imaging in India" },
        { label: "Data Generation", description: "Monthly livestock data collection" },
        { label: "Innovation Index", description: "AgriTech innovation ranking" },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Future Impact Analysis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Projected transformation of lives, economies, and ecosystems if implemented at scale
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="glass-effect p-8 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full ${impact.color} flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}
                >
                  <impact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Projected {impact.category}</h3>
              </div>

              <div className="space-y-6">
                {impact.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="border-l-2 border-primary/30 pl-4">
                    <div className="mb-2">
                      <span className="text-lg font-semibold text-white">{metric.label}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{metric.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  )
}

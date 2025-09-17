"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Cpu, Users, TrendingUp, DollarSign, CheckCircle } from "lucide-react"

export function FeasibilitySection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      title: "Technical Feasibility",
      icon: Cpu,
      color: "bg-blue-500",
      challenges: ["Model accuracy optimization", "Real-time processing requirements", "Mobile device compatibility"],
      strategies: ["Advanced ensemble methods", "Edge computing implementation", "Progressive web app development"],
    },
    {
      title: "Operational Feasibility",
      icon: Users,
      color: "bg-green-500",
      challenges: ["User adoption barriers", "Training requirements", "Maintenance complexity"],
      strategies: ["Intuitive UI/UX design", "Comprehensive training programs", "Automated monitoring systems"],
    },
    {
      title: "Market Feasibility",
      icon: TrendingUp,
      color: "bg-purple-500",
      challenges: ["Market penetration", "Competition analysis", "Scalability concerns"],
      strategies: ["Targeted marketing campaigns", "Unique value proposition", "Cloud-native architecture"],
    },
    {
      title: "Financial Feasibility",
      icon: DollarSign,
      color: "bg-orange-500",
      challenges: ["Development costs", "Infrastructure expenses", "Revenue model validation"],
      strategies: ["Phased development approach", "Cost-effective cloud solutions", "Freemium business model"],
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Feasibility & Viability</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive analysis across technical, operational, market, and financial dimensions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "glass-effect text-muted-foreground hover:text-white"
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenges */}
          <Card className="glass-effect p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-red-900 font-bold text-xl bg-red-100 w-8 h-8 rounded-full flex items-center justify-center">
                  !
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">Challenges</h3>
            </div>
            <div className="space-y-4">
              {categories[activeCategory].challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Strategies */}
          <Card className="glass-effect p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Strategies</h3>
            </div>
            <div className="space-y-4">
              {categories[activeCategory].strategies.map((strategy, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{strategy}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/3 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  )
}

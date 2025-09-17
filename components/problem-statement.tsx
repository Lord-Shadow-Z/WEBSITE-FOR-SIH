"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, Users, Building2, Database } from "lucide-react"

export function ProblemStatement() {
  const problems = [
    {
      icon: Building2,
      title: "Government Initiative Challenge",
      description:
        "The Bharat Pashudhan App (BPA) by Government of India faces critical breed identification errors affecting data integrity.",
      color: "text-red-400",
    },
    {
      icon: Users,
      title: "Field Worker Training Gap",
      description:
        "Despite multiple training programs, Field Level Workers (FLWs) struggle with accurate breed identification due to manual judgment limitations.",
      color: "text-orange-400",
    },
    {
      icon: Database,
      title: "Data Integrity Crisis",
      description:
        "Misclassification significantly affects research, policy planning, and targeted interventions for India's diverse cattle and buffalo breeds.",
      color: "text-yellow-400",
    },
    {
      icon: TrendingDown,
      title: "Program Effectiveness Impact",
      description:
        "Incorrect entries compromise genetic improvement, nutrition planning, disease control, and overall program outcomes.",
      color: "text-blue-400",
    },
  ]

  return (
    <section id="problem-statement" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Image Based Breed Recognition</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-400">For Cattle and Buffaloes of India</h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A critical challenge identified by the{" "}
            <strong className="text-white">Ministry of Fisheries, Animal Husbandry & Dairying</strong>, Department of
            Animal Husbandry & Dairying (DoAH&D)
          </p>
        </div>

        {/* Story Background */}
        <div className="mb-16">
          <Card className="glass-effect p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">The Story Behind the Challenge</span>
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                The Government of India launched the{" "}
                <strong className="text-cyan-400">Bharat Pashudhan App (BPA)</strong> as part of a systematic initiative
                for data recording of breeding, health, and nutrition of dairy animals across the nation. This ambitious
                program relies on Field Level Workers (FLWs) to capture accurate animal data on the ground.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                However, despite extensive training programs, a{" "}
                <strong className="text-red-400">recurring critical issue</strong> has emerged: the incorrect
                identification and registration of animal breeds of cattle and buffaloes. This seemingly simple problem
                has far-reaching consequences that ripple through the entire agricultural ecosystem.
              </p>
              <p className="text-lg leading-relaxed">
                India, being home to a{" "}
                <strong className="text-green-400">
                  diverse array of indigenous and crossbred cattle and buffalo breeds
                </strong>
                , presents a complex challenge for accurate breed identification. The misclassification significantly
                affects the integrity and usability of data for research, policy planning, and targeted interventions.
              </p>
            </div>
          </Card>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="glass-effect p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-4 group-hover:animate-pulse-glow transition-all duration-300`}
                >
                  <problem.icon className={`h-8 w-8 ${problem.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Root Causes */}
        <div className="mb-16">
          <Card className="glass-effect p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-red-400">Root Causes Identified</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Manual Judgment Errors:</strong> Breed identification relies heavily
                    on subjective human assessment
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Lack of Breed-Specific Awareness:</strong> FLWs struggle with India's
                    complex breed diversity
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Environmental Challenges:</strong> Varying lighting conditions and
                    animal poses complicate identification
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Training Limitations:</strong> Multiple training programs haven't
                    solved the core identification challenge
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Our Solution */}
        <div className="mb-16">
          <Card className="glass-effect p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Our Image Based Solution</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Automated Image Recognition:</strong> Advanced AI eliminates
                    subjective human judgment errors through precise computer vision
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Comprehensive Breed Database:</strong> Trained on India's diverse
                    cattle and buffalo breeds with 99%+ accuracy
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Adaptive Recognition:</strong> Works in varying lighting conditions
                    and animal poses using robust ML algorithms
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Instant Training Solution:</strong> No extensive training required -
                    simple point-and-click interface for FLWs
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Current Impact Metrics */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-orange-400">Current Impact Metrics</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="glass-effect p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Low</div>
                <div className="text-sm text-muted-foreground">Error Rate in AI ID</div>
              </div>
            </Card>
            <Card className="glass-effect p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Enhanced</div>
                <div className="text-sm text-muted-foreground">Data Integrity</div>
              </div>
            </Card>
            <Card className="glass-effect p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Improved</div>
                <div className="text-sm text-muted-foreground">Policy Planning</div>
              </div>
            </Card>
            <Card className="glass-effect p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Boosted</div>
                <div className="text-sm text-muted-foreground">Program Effectiveness</div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

import { HeroSection } from "@/components/hero-section"
import { ProblemStatement } from "@/components/problem-statement"
import { ProposedSolution } from "@/components/proposed-solution"
import { WorkflowDiagram } from "@/components/workflow-diagram"
import { FeasibilitySection } from "@/components/feasibility-section"
import { ImpactAnalysis } from "@/components/impact-analysis"
import { TechnologiesUsed } from "@/components/technologies-used"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ProblemStatement />
      <ProposedSolution />
      <WorkflowDiagram />
      <FeasibilitySection />
      <ImpactAnalysis />
      <TechnologiesUsed />
      <Footer />
    </main>
  )
}

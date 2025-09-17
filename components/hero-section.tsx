"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToNext = () => {
    window.scrollBy({ top: 400, behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#gradient)" strokeWidth="1" />
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 animate-float blur-xl"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-secondary/20 animate-float blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-accent/20 animate-float blur-xl"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Interactive Cursor Effect */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Image Based</span>
          <br />
          <span className="text-white">Cattle & Buffalo</span>
          <br />
          <span className="text-secondary">Breed Identification</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Empowering Farmers. Transforming Livestock Management.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="px-8 py-4 text-lg font-semibold animate-glow hover:scale-105 transition-all duration-300 mt-8"
          onClick={scrollToNext}
        >
          Explore Project
          <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>

        {/* 3D Rotating Logo/Icon */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-rotate3d opacity-80"></div>
            <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
              <div className="text-4xl">🐄</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}

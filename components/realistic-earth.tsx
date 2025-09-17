"use client"

import { useEffect, useState } from "react"

export function RealisticEarth() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-1/2 right-10 transform -translate-y-1/2 z-0 pointer-events-none"
      style={{
        transform: `translateY(calc(-50% + ${scrollY * 0.1}px))`,
      }}
    >
      <div className="relative w-80 h-80 lg:w-96 lg:h-96">
        {/* Outer atmosphere glow */}
        <div className="absolute -inset-8 rounded-full bg-gradient-radial from-blue-400/30 via-blue-500/20 to-transparent animate-pulse-slow"></div>

        {/* Main Earth sphere */}
        <div className="relative w-full h-full rounded-full overflow-hidden earth-sphere">
          {/* Ocean base layer */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 animate-earth-rotate-main"></div>

          {/* Continental landmasses */}
          <div className="absolute inset-0 rounded-full earth-continents animate-earth-rotate-main"></div>

          {/* Ice caps */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-b from-white/80 to-white/40 blur-sm animate-earth-rotate-main"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-t from-white/70 to-white/30 blur-sm animate-earth-rotate-main"></div>

          {/* Cloud layer */}
          <div className="absolute inset-0 rounded-full earth-clouds animate-earth-rotate-clouds opacity-60"></div>

          {/* Atmospheric scattering */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/20 via-transparent to-blue-400/10"></div>

          {/* Day/night terminator */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-transparent to-black/40 animate-earth-rotate-terminator"></div>

          {/* Surface lighting */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
        </div>

        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-orbit-slow"></div>
        <div className="absolute -inset-4 rounded-full border border-secondary/15 animate-orbit-reverse"></div>

        {/* Satellite dots */}
        <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-primary animate-satellite-1"></div>
        <div className="absolute bottom-1/3 left-0 w-1.5 h-1.5 rounded-full bg-secondary animate-satellite-2"></div>
      </div>
    </div>
  )
}

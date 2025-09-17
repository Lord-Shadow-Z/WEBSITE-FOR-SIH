"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import type { Mesh } from "three"
import { TextureLoader } from "three"

function EarthSphere() {
  const earthRef = useRef<Mesh>(null)
  const cloudsRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003 // Medium rotation speed - west to east like real Earth
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.004
    }
  })

  const earthTexture = `data:image/svg+xml;base64,${btoa(`
    <svg width="1024" height="512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ocean" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#1e3a8a"/>
          <stop offset="50%" style="stop-color:#1e40af"/>
          <stop offset="100%" style="stop-color:#0c4a6e"/>
        </radialGradient>
        <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22c55e"/>
          <stop offset="50%" style="stop-color:#16a34a"/>
          <stop offset="100%" style="stop-color:#15803d"/>
        </linearGradient>
        <linearGradient id="desertGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fbbf24"/>
          <stop offset="50%" style="stop-color:#f59e0b"/>
          <stop offset="100%" style="stop-color:#d97706"/>
        </linearGradient>
      </defs>
      
      <!-- Deep ocean background -->
      <rect width="1024" height="512" fill="url(#ocean)"/>
      
      <!-- Africa - Accurate distinctive shape -->
      <path d="M480 160 Q485 140 495 145 Q510 150 525 160 Q540 175 550 195 Q555 215 560 235 Q565 255 560 275 Q555 295 550 315 Q545 335 535 350 Q525 365 515 375 Q505 380 495 375 Q485 370 475 360 Q465 350 460 335 Q455 320 450 305 Q445 290 440 275 Q435 260 430 245 Q425 230 430 215 Q435 200 445 185 Q455 170 470 160 Q480 155 480 160" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Sahara Desert in Africa -->
      <path d="M460 180 Q480 175 500 180 Q520 185 535 195 Q545 205 540 215 Q535 225 525 220 Q515 215 505 210 Q495 205 485 200 Q475 195 465 190 Q460 185 460 180" fill="url(#desertGradient)"/>
      
      <!-- Europe - Detailed outline -->
      <path d="M450 120 Q460 110 475 115 Q490 120 505 130 Q520 140 525 155 Q530 170 525 180 Q520 190 510 185 Q500 180 490 175 Q480 170 470 165 Q460 160 450 155 Q440 150 435 140 Q430 130 435 120 Q440 110 450 120" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Asia - Massive realistic landmass -->
      <path d="M530 100 Q550 90 580 95 Q610 100 640 110 Q670 120 700 135 Q730 150 760 170 Q790 190 810 215 Q820 240 815 265 Q810 290 800 310 Q790 330 775 340 Q760 350 740 345 Q720 340 700 330 Q680 320 660 305 Q640 290 620 275 Q600 260 580 245 Q560 230 540 215 Q520 200 510 185 Q500 170 505 155 Q510 140 520 125 Q530 110 530 100" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Siberian forests -->
      <path d="M580 120 Q620 115 660 125 Q700 135 730 150 Q750 165 745 180 Q740 195 720 190 Q700 185 680 175 Q660 165 640 155 Q620 145 600 135 Q580 125 580 120" fill="#166534"/>
      
      <!-- North America - Realistic continental shape -->
      <path d="M100 130 Q120 120 145 125 Q170 130 195 140 Q220 150 240 165 Q260 180 275 200 Q290 220 295 245 Q300 270 295 295 Q290 320 280 340 Q270 360 255 370 Q240 380 220 375 Q200 370 180 360 Q160 350 145 335 Q130 320 120 300 Q110 280 105 260 Q100 240 95 220 Q90 200 95 180 Q100 160 105 145 Q110 135 100 130" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Great Lakes -->
      <path d="M180 200 Q190 195 200 200 Q210 205 215 215 Q220 225 215 235 Q210 245 200 240 Q190 235 180 230 Q170 225 165 215 Q160 205 165 195 Q170 190 180 200" fill="#1e40af"/>
      
      <!-- South America - Distinctive narrow shape -->
      <path d="M220 290 Q230 280 245 285 Q260 290 270 305 Q280 320 285 340 Q290 360 295 380 Q300 400 295 420 Q290 440 280 455 Q270 470 255 475 Q240 480 225 475 Q210 470 200 455 Q190 440 185 420 Q180 400 175 380 Q170 360 175 340 Q180 320 190 305 Q200 290 210 285 Q220 280 220 290" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Amazon rainforest -->
      <path d="M230 320 Q250 315 270 325 Q285 335 280 350 Q275 365 260 360 Q245 355 235 345 Q225 335 230 320" fill="#166534"/>
      
      <!-- Australia - Accurate island continent -->
      <path d="M720 310 Q735 305 755 310 Q775 315 790 325 Q805 335 810 350 Q815 365 810 375 Q805 385 790 380 Q775 375 755 370 Q735 365 720 360 Q705 355 700 345 Q695 335 700 325 Q705 315 720 310" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Australian Outback -->
      <path d="M740 335 Q760 330 775 340 Q785 350 780 360 Q775 370 760 365 Q745 360 740 350 Q735 340 740 335" fill="url(#desertGradient)"/>
      
      <!-- Antarctica - Full ice continent -->
      <path d="M0 440 Q128 430 256 435 Q384 440 512 435 Q640 430 768 435 Q896 440 1024 435 L1024 512 L0 512 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
      
      <!-- Greenland - Large Arctic island -->
      <path d="M280 70 Q295 60 315 65 Q335 70 350 85 Q365 100 360 120 Q355 140 345 150 Q335 160 320 155 Q305 150 290 140 Q275 130 270 115 Q265 100 270 85 Q275 70 280 70" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5"/>
      
      <!-- India - Triangular subcontinent -->
      <path d="M600 210 Q615 205 630 215 Q645 225 650 240 Q655 255 650 270 Q645 285 630 290 Q615 295 600 290 Q585 285 580 270 Q575 255 580 240 Q585 225 600 210" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Japan - Island archipelago -->
      <path d="M740 170 Q750 165 760 170 Q770 175 775 185 Q780 195 775 205 Q770 215 760 210 Q750 205 740 200 Q730 195 725 185 Q720 175 725 170 Q730 165 740 170" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- British Isles - Island nation -->
      <path d="M420 110 Q430 105 440 110 Q450 115 455 125 Q460 135 455 145 Q450 155 440 150 Q430 145 420 140 Q410 135 405 125 Q400 115 405 110 Q410 105 420 110" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Scandinavia - Nordic peninsula -->
      <path d="M480 70 Q490 65 505 70 Q520 75 530 90 Q540 105 535 120 Q530 135 520 140 Q510 145 495 140 Q480 135 475 120 Q470 105 475 90 Q480 75 480 70" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Madagascar - Large island off Africa -->
      <path d="M560 290 Q570 285 580 290 Q590 295 595 305 Q600 315 595 325 Q590 335 580 330 Q570 325 560 320 Q550 315 545 305 Q540 295 545 290 Q550 285 560 290" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- New Zealand - Twin islands -->
      <path d="M800 370 Q810 365 820 370 Q830 375 835 385 Q840 395 835 405 Q830 415 820 410 Q810 405 800 400 Q790 395 785 385 Q780 375 785 370 Q790 365 800 370" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Indonesia - Island chain -->
      <path d="M680 280 Q690 275 705 280 Q720 285 730 295 Q740 305 735 315 Q730 325 720 320 Q710 315 700 310 Q690 305 680 300 Q670 295 665 285 Q660 275 665 280 Q670 275 680 280" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
      
      <!-- Philippines - Island archipelago -->
      <path d="M720 240 Q730 235 740 240 Q750 245 755 255 Q760 265 755 275 Q750 285 740 280 Q730 275 720 270 Q710 265 705 255 Q700 245 705 240 Q710 235 720 240" fill="url(#landGradient)" stroke="#15803d" strokeWidth="0.5"/>
    </svg>
  `)}`

  return (
    <>
      {/* Main Earth sphere with realistic texture */}
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[3.5, 128, 128]} />
        <meshPhongMaterial map={useLoader(TextureLoader, earthTexture)} shininess={30} transparent={false} />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef} position={[0, 0, 0]} scale={1.02}>
        <sphereGeometry args={[3.5, 64, 64]} />
        <meshPhongMaterial color="#ffffff" transparent opacity={0.1} shininess={10} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh position={[0, 0, 0]} scale={1.08}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial color="#87ceeb" transparent opacity={0.05} />
      </mesh>

      <directionalLight position={[8, 5, 8]} intensity={1.5} color="#ffffff" />
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[-8, -5, -8]} intensity={0.3} color="#87ceeb" />
    </>
  )
}

export function ThreeDEarth() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ background: "transparent" }}>
          <EarthSphere />
        </Canvas>
      </div>
    </div>
  )
}

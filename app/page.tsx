"use client"

import { Hero3D } from "@/components/hero-3d"
import { About3D } from "@/components/about-3d"
import { Projects3D } from "@/components/projects-3d"
import { ProjectsFallback } from "@/components/projects-fallback"
import { Skills3D } from "@/components/skills-3d"
import { ScraperFeatures3D } from "@/components/scraper-features-3d"
import { Contact } from "@/components/contact"
import { useState, useEffect } from "react"

export default function WajahatPortfolio() {
  const [use3D, setUse3D] = useState(true)

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    if (!gl) {
      setUse3D(false)
    }
  }, [])

  return (
    <main className="w-full">
      <Hero3D />
      <About3D />
      {use3D ? <Projects3D /> : <ProjectsFallback />}
      <Skills3D />
      <ScraperFeatures3D />
      <Contact />
    </main>
  )
}

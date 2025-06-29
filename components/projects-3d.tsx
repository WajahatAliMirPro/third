"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Html, Environment } from "@react-three/drei"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "WhatsApp Group Scraper Bot",
    description: "Advanced Python bot for scraping Google to find WhatsApp group URLs with captcha bypass",
    tech: ["Python", "Selenium", "BeautifulSoup", "Requests", "JSON"],
    color: "#25d366",
    position: [0, 2, 0] as [number, number, number],
  },
  {
    id: 2,
    title: "Google Search Automation",
    description: "Smart search queries with site filtering and live monitoring capabilities",
    tech: ["Google Search", "Site Filtering", "Live Monitoring", "CLI"],
    color: "#4285f4",
    position: [-4, 0, 0] as [number, number, number],
  },
  {
    id: 3,
    title: "Captcha Bypass System",
    description: "Manual captcha resolution with browser automation and detection bypass",
    tech: ["Chrome Driver", "Anti-Detection", "Manual Bypass", "Automation"],
    color: "#ff6b35",
    position: [4, 0, 0] as [number, number, number],
  },
  {
    id: 4,
    title: "Data Export & Analytics",
    description: "Multiple export formats with statistics and real-time monitoring",
    tech: ["JSON Export", "TXT Export", "Statistics", "Real-time"],
    color: "#9c27b0",
    position: [-2, -2, 0] as [number, number, number],
  },
  {
    id: 5,
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio built with React Three Fiber and Next.js",
    tech: ["React Three Fiber", "Next.js", "TypeScript", "Tailwind"],
    color: "#00d4aa",
    position: [2, -2, 0] as [number, number, number],
  },
]

function ProjectCard({ project, onClick }: { project: (typeof projects)[0]; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={project.position}
        onClick={onClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        <boxGeometry args={[2.5, 3, 0.2]} />
        <meshStandardMaterial color={project.color} />

        <Html
          transform
          occlude
          position={[0, 0, 0.11]}
          style={{
            width: "200px",
            height: "240px",
            pointerEvents: "none",
          }}
        >
          <Card className="w-full h-full bg-white/90 backdrop-blur-sm">
            <CardHeader className="p-3">
              <CardTitle className="text-sm">{project.title}</CardTitle>
              <CardDescription className="text-xs">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs px-1 py-0">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="text-xs h-6 px-2">
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="text-xs h-6 px-2 bg-white">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </Html>
      </mesh>
    </Float>
  )
}

export function Projects3D() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section className="w-full h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-4">🔧 What I Build</h2>
        <p className="text-center text-gray-300 mb-8">Full-stack applications with Python frameworks</p>
        <div className="h-[600px]">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
            <Environment preset="city" />

            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3776ab" />

            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
            ))}
          </Canvas>
        </div>
      </div>
    </section>
  )
}

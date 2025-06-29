"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Sphere } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Card, CardContent } from "@/components/ui/card"

function AnimatedRings() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {[1, 2, 3].map((i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
          <torusGeometry args={[2 + i * 0.5, 0.1, 16, 100]} />
          <meshStandardMaterial
            color={i === 1 ? "#3776ab" : i === 2 ? "#ffd43b" : "#00d26a"}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

export function About3D() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">🔷 About Wajahat Ali Mir</h2>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate Python developer from Pakistan 🇵🇰, specializing in web scraping, automation, and 3D
                  web development. I create smart, real-world digital tools that solve complex problems with clean,
                  reliable code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  My latest project is an advanced WhatsApp Group Scraper Bot that uses intelligent Google search
                  automation, captcha bypass systems, and real-time monitoring. I also build immersive 3D web
                  experiences using React Three Fiber.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🌟 Interests</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <div>🧠 Technology & innovation</div>
                    <div>💼 Startups & entrepreneurship</div>
                    <div>📸 Photography & design</div>
                    <div>🌍 Travel & culture</div>
                    <div>🧩 Automation solutions</div>
                    <div>📚 Continuous learning</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">100+</div>
                    <div className="text-gray-400">WhatsApp Groups Found</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">5+</div>
                    <div className="text-gray-400">Automation Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[500px]">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <Environment preset="sunset" />

              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} />

              <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
                  <meshStandardMaterial color="#3776ab" wireframe transparent opacity={0.8} />
                </Sphere>
              </Float>

              <AnimatedRings />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

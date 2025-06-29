"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "Google Search",
    description: "Advanced search queries with site filtering",
    color: "#4285f4",
    position: [-3, 2, 0] as [number, number, number],
    icon: "🔍",
  },
  {
    name: "Captcha Bypass",
    description: "Manual captcha resolution system",
    color: "#ff6b35",
    position: [3, 2, 0] as [number, number, number],
    icon: "🤖",
  },
  {
    name: "WhatsApp Links",
    description: "Extracts chat.whatsapp.com URLs",
    color: "#25d366",
    position: [-3, -2, 0] as [number, number, number],
    icon: "📱",
  },
  {
    name: "Live Monitoring",
    description: "Real-time search monitoring",
    color: "#9c27b0",
    position: [3, -2, 0] as [number, number, number],
    icon: "📊",
  },
]

function FeatureOrb({ feature }: { feature: (typeof features)[0] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = feature.position[1] + Math.sin(state.clock.elapsedTime + feature.position[0]) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={feature.position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={feature.color}
            transparent
            opacity={0.8}
            emissive={feature.color}
            emissiveIntensity={0.3}
          />
        </mesh>

        <Text
          position={[0, 1.8, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Bold.ttf"
        >
          {feature.name}
        </Text>

        <Text
          position={[0, -1.8, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Regular.ttf"
          maxWidth={3}
          textAlign="center"
        >
          {feature.description}
        </Text>
      </group>
    </Float>
  )
}

export function ScraperFeatures3D() {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-slate-900 to-green-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-4">🤖 Bot Features</h2>
        <p className="text-center text-gray-300 mb-8">Advanced WhatsApp Group Scraper Capabilities</p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[500px]">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <Environment preset="night" />

              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#25d366" />

              {features.map((feature, index) => (
                <FeatureOrb key={index} feature={feature} />
              ))}
            </Canvas>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🚀 Key Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>✅ Smart Google search with custom queries</div>
                <div>✅ Site-specific filtering (facebook.com, reddit.com, etc.)</div>
                <div>✅ Automatic captcha detection & manual bypass</div>
                <div>✅ Real-time link extraction and validation</div>
                <div>✅ Multiple export formats (JSON, TXT)</div>
                <div>✅ Live monitoring with configurable intervals</div>
                <div>✅ Anti-detection browser automation</div>
                <div>✅ Comprehensive error handling & logging</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">📊 Usage Statistics</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">1000+</div>
                  <div className="text-gray-400 text-sm">Links Extracted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-400 text-sm">Sites Supported</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-400 text-sm">Live Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">99%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

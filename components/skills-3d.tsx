"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

const skills = [
  { name: "Python", level: 95, color: "#3776ab", position: [0, 2, 0] as [number, number, number] },
  { name: "Web Scraping", level: 92, color: "#25d366", position: [-3, 1, 0] as [number, number, number] },
  { name: "Selenium", level: 88, color: "#43b02a", position: [3, 1, 0] as [number, number, number] },
  { name: "Automation", level: 90, color: "#ff6b35", position: [-3, -1, 0] as [number, number, number] },
  { name: "React/Next.js", level: 85, color: "#61dafb", position: [3, -1, 0] as [number, number, number] },
  { name: "Three.js", level: 80, color: "#000000", position: [0, -2, 0] as [number, number, number] },
]

function SkillOrb({ skill }: { skill: (typeof skills)[0] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  const radius = (skill.level / 100) * 1.5

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <group position={skill.position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={skill.color}
            transparent
            opacity={0.8}
            emissive={skill.color}
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, radius + 0.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Regular.ttf"
        >
          {skill.name}
        </Text>
        <Text
          position={[0, radius + 0.2, 0]}
          fontSize={0.2}
          color="#ffd43b"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Regular.ttf"
        >
          {skill.level}%
        </Text>
      </group>
    </Float>
  )
}

export function Skills3D() {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-4">🐍 Python Expertise</h2>
        <p className="text-center text-gray-300 mb-8">Backend frameworks & database technologies</p>
        <div className="h-[600px]">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            <Environment preset="night" />

            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3776ab" />

            {skills.map((skill, index) => (
              <SkillOrb key={index} skill={skill} />
            ))}
          </Canvas>
        </div>
      </div>
    </section>
  )
}

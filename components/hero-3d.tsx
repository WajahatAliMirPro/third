"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { WhatsAppBot3D } from "./whatsapp-bot-3d"

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
        <Environment preset="night" />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3776ab" />

        <FloatingCube position={[4, 3, -2]} color="#00d26a" />
        <FloatingCube position={[-5, -2, -1]} color="#3776ab" />
        <FloatingCube position={[6, -1, -3]} color="#ffd43b" />

        <WhatsAppBot3D position={[3, -1, 0]} />
        <WhatsAppBot3D position={[-4, 1, -2]} />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Wajahat Ali Mir
          </h1>
          <p className="text-xl mb-2 text-gray-300">👨‍💻 Python Developer & Web Scraping Expert from Pakistan 🇵🇰</p>
          <p className="text-lg mb-8 text-blue-300 italic">"Building smart automation tools that break limits."</p>
          <div className="pointer-events-auto flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

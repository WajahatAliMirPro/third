"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Text } from "@react-three/drei"
import type * as THREE from "three"

function WhatsAppLogo({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        {/* WhatsApp green circle */}
        <mesh ref={meshRef}>
          <cylinderGeometry args={[1, 1, 0.2, 32]} />
          <meshStandardMaterial color="#25d366" />
        </mesh>

        {/* Chat bubble */}
        <mesh position={[0, 0, 0.2]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Phone icon */}
        <mesh position={[0, 0, 0.4]}>
          <boxGeometry args={[0.3, 0.5, 0.1]} />
          <meshStandardMaterial color="#25d366" />
        </mesh>
      </group>
    </Float>
  )
}

function SearchBot({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Robot body */}
      <mesh>
        <boxGeometry args={[1.2, 1.5, 0.8]} />
        <meshStandardMaterial color="#4285f4" />
      </mesh>

      {/* Robot head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#34a853" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 1.2, 0.5]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.2, 1.2, 0.5]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="#ea4335" />
      </mesh>

      {/* Antenna tip */}
      <mesh position={[0, 2.1, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#fbbc04" />
      </mesh>
    </group>
  )
}

function DataFlow({ position }: { position: [number, number, number] }) {
  const particlesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 2
        child.rotation.z = state.clock.elapsedTime * (index + 1) * 0.1
      })
    }
  })

  return (
    <group ref={particlesRef} position={position}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i * 0.5 - 1, 0, 0]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#25d366" : "#4285f4"} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

export function WhatsAppBot3D({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <SearchBot position={[0, 0, 0]} />
      <WhatsAppLogo position={[3, 0, 0]} />
      <DataFlow position={[1.5, 2, 0]} />

      <Text
        position={[0, -2.5, 0]}
        fontSize={0.3}
        color="#25d366"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Bold.ttf"
      >
        WhatsApp Scraper Bot
      </Text>
    </group>
  )
}

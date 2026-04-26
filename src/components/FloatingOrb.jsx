import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

// Animated 3D orb using Three.js
function AnimatedOrb({ color = '#6366f1', position = [0, 0, 0], speed = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  )
}

export default function FloatingOrb({ width = 300, height = 300 }) {
  return (
    <Canvas
      style={{ width, height, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 3], fov: 60 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-3, -3, -3]} intensity={0.5} color="#8b5cf6" />
      <AnimatedOrb color="#6366f1" position={[0, 0, 0]} speed={1} />
    </Canvas>
  )
}

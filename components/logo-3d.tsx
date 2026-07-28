'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, useGLTF, Bounds } from '@react-three/drei'
import type { Group } from 'three'

interface ModelProps {
  url: string
  scale?: number
}

function Model({ url, scale = 1 }: ModelProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(url)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.55
  })

  return (
    <group ref={groupRef} scale={scale}>
      <Bounds fit clip={false} observe margin={1.35}>
        <Center>
          <primitive object={scene.clone()} />
        </Center>
      </Bounds>
    </group>
  )
}

interface Logo3DProps {
  src: string
  label?: string
  className?: string
  modelScale?: number
}

export default function Logo3D({
  src,
  label = '3D',
  className = '',
  modelScale = 1,
}: Logo3DProps) {
  return (
    <div className={`flex flex-col items-center gap-0.5 sm:gap-1 ${className}`}>
      <span className="text-[8px] sm:text-[10px] md:text-xs font-heading font-bold tracking-[0.35em] text-white uppercase leading-none">
        {label}
      </span>
      {/* Small — sits tight beside N / O */}
      <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 lg:w-16 lg:h-16">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 35 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 4, 5]} intensity={2} />
          <directionalLight position={[-3, 2, -2]} intensity={0.7} />
          <Suspense fallback={null}>
            <Model url={src} scale={modelScale} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

useGLTF.preload('/Photoshop_Logo_3D_Ico.glb')
useGLTF.preload('/Ai_logo.glb')

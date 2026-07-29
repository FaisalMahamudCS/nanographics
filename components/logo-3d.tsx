'use client'

import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, useGLTF, Bounds } from '@react-three/drei'
import type { Group } from 'three'

interface ModelProps {
  url: string
  scale?: number
  interactive: boolean
  /** Normalized pointer -1..1 */
  pointer: { x: number; y: number }
  /** Extra rotation from drag */
  drag: { x: number; y: number }
}

function Model({ url, scale = 1, interactive, pointer, drag }: ModelProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(url)
  const spin = useRef(0)

  useFrame((_, delta) => {
    const g = groupRef.current
    if (!g) return

    if (interactive) {
      // Follow cursor + drag offset
      const targetX = pointer.y * 0.65 + drag.x
      const targetY = pointer.x * 0.95 + drag.y
      g.rotation.x += (targetX - g.rotation.x) * Math.min(1, delta * 10)
      g.rotation.y += (targetY - g.rotation.y) * Math.min(1, delta * 10)
    } else {
      spin.current += delta * 0.55
      g.rotation.y += (spin.current + drag.y - g.rotation.y) * Math.min(1, delta * 6)
      g.rotation.x += (drag.x - g.rotation.x) * Math.min(1, delta * 4)
    }
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
  className?: string
  modelScale?: number
}

export default function Logo3D({
  src,
  className = '',
  modelScale = 1,
}: Logo3DProps) {
  const [interactive, setInteractive] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [drag, setDrag] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    setPointer({ x, y })

    if (dragging.current) {
      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y
      last.current = { x: e.clientX, y: e.clientY }
      setDrag((d) => ({
        x: d.x + dy * 0.01,
        y: d.y + dx * 0.012,
      }))
    }
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* already released */
    }
  }

  return (
    <div
      className={`relative z-30 ${className}`}
      onPointerEnter={() => setInteractive(true)}
      onPointerLeave={() => {
        setInteractive(false)
        dragging.current = false
        setPointer({ x: 0, y: 0 })
      }}
      onPointerMove={onPointerMove}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className={`relative w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-transform duration-300 ${
          interactive ? 'scale-110 cursor-grab active:cursor-grabbing' : 'cursor-pointer'
        }`}
        style={{ touchAction: 'none' }}
      >
        <Canvas
          camera={{ position: [0, 0, 4], fov: 35 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent', pointerEvents: 'none' }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 4, 5]} intensity={2} />
          <directionalLight position={[-3, 2, -2]} intensity={0.7} />
          <Suspense fallback={null}>
            <Model
              url={src}
              scale={modelScale}
              interactive={interactive}
              pointer={pointer}
              drag={drag}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

useGLTF.preload('/Photoshop_Logo_3D_Ico.glb')
useGLTF.preload('/Ai_logo.glb')

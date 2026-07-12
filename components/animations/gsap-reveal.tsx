'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

type GsapRevealProps = {
  children: React.ReactNode
  className?: string
  selector?: string
  y?: number
  stagger?: number
  duration?: number
  start?: string
  batch?: boolean
}

export function GsapReveal({
  children,
  className,
  selector = '.gsap-reveal-item',
  y = 40,
  stagger = 0.08,
  duration = 0.7,
  start = 'top 85%',
  batch = true,
}: GsapRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !containerRef.current) return

      const items = containerRef.current.querySelectorAll(selector)
      if (!items.length) return

      gsap.set(items, { opacity: 0, y })

      if (batch) {
        ScrollTrigger.batch(items, {
          start,
          onEnter: (elements) => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration,
              stagger,
              ease: 'power3.out',
              overwrite: true,
            })
          },
        })
      } else {
        items.forEach((item) => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start,
              toggleActions: 'play none none none',
            },
          })
        })
      }
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  )

  return (
    <div ref={containerRef} className={cn(className, reducedMotion && 'opacity-100')}>
      {children}
    </div>
  )
}

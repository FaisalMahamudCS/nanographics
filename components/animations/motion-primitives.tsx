'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

type MagneticButtonProps = {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className, strength = 0.25 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn('inline-block', className)}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const offsetX = e.clientX - (rect.left + rect.width / 2)
        const offsetY = e.clientY - (rect.top + rect.height / 2)
        x.set(offsetX * strength)
        y.set(offsetY * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

type TextRevealProps = {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
}

export function TextReveal({ text, className, as: Tag = 'h1', delay = 0 }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const words = text.split(' ')

  useGSAP(
    () => {
      if (reducedMotion || !containerRef.current) return

      const tl = gsap.timeline({ delay, defaults: { ease: 'power4.out' } })
      tl.from('.text-reveal-word', {
        y: '110%',
        opacity: 0,
        duration: 0.9,
        stagger: 0.06,
      })
      tl.from(
        '.text-reveal-blur',
        { filter: 'blur(12px)', opacity: 0, duration: 0.6 },
        '-=0.5'
      )
    },
    { scope: containerRef, dependencies: [reducedMotion, text] }
  )

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
            <span className="text-reveal-word inline-block">{word}&nbsp;</span>
          </span>
        ))}
      </Tag>
    </div>
  )
}

type GsapCounterProps = {
  value: number
  suffix?: string
  className?: string
}

export function GsapCounter({ value, suffix = '', className }: GsapCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reducedMotion = useReducedMotion()
  const counter = { val: 0 }

  useGSAP(
    () => {
      if (!ref.current) return

      if (reducedMotion) {
        ref.current.textContent = `${value}${suffix}`
        return
      }

      gsap.to(counter, {
        val: value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(counter.val)}${suffix}`
          }
        },
      })
    },
    { scope: ref, dependencies: [value, suffix, reducedMotion] }
  )

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      0{suffix}
    </span>
  )
}

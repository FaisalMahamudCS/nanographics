'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils'

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const reducedMotion = useReducedMotion()

  const offsets = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { y: 0, x: 32 },
    right: { y: 0, x: -32 },
  }

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type AnimatedCounterProps = {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

/** @deprecated Prefer GsapCounter for scroll-driven counters */
export function AnimatedCounter({ value, suffix = '', duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const reducedMotion = useReducedMotion()
  const [count, setCount] = useState(reducedMotion ? value : 0)

  useEffect(() => {
    if (!isInView || reducedMotion) {
      setCount(value)
      return
    }

    let start = 0
    const step = value / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration, reducedMotion])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {count}
      {suffix}
    </span>
  )
}

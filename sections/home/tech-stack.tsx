'use client'

import { useRef } from 'react'
import { motion, useReducedMotion as useFramerReducedMotion } from 'framer-motion'
import { useGSAP, gsap } from '@/lib/gsap'
import { TECH_STACK } from '@/constants/tech-stack'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

const CATEGORY_COLORS: Record<string, string> = {
  frontend: 'text-blue-400',
  backend: 'text-emerald-400',
  mobile: 'text-violet-400',
  cloud: 'text-orange-400',
  devops: 'text-rose-400',
  data: 'text-amber-400',
  ai: 'text-cyan-400',
}

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const framerReduced = useFramerReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      gsap.from('.tech-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.tech-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      if (orbitRef.current) {
        gsap.utils.toArray<HTMLElement>('.tech-orbit-item').forEach((item, i) => {
          gsap.to(item, {
            y: '+=8',
            duration: 2 + i * 0.1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })

        gsap.from('.tech-orbit-item', {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: orbitRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tech-header">
          <SectionHeader
            eyebrow="Technology"
            title="Built with modern, battle-tested stacks"
            description="We choose the right technology for scalability, performance, and your team's long-term success."
          />
        </div>

        <div className="relative mx-auto mt-16 flex min-h-[420px] max-w-3xl items-center justify-center">
          <div className="relative z-10 flex size-28 items-center justify-center rounded-full border border-brand-blue/30 bg-card shadow-[0_0_60px_rgba(37,99,235,0.2)]">
            <span className="font-heading text-sm font-bold text-foreground">Mehvora</span>
          </div>

          <div ref={orbitRef} className="absolute inset-0 flex items-center justify-center">
            {TECH_STACK.map((tech, i) => {
              const angle = (i / TECH_STACK.length) * 360
              const radius = 160
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={tech.name}
                  className="tech-orbit-item absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: x - 40,
                    y: y - 16,
                  }}
                  whileHover={framerReduced ? undefined : { scale: 1.1, zIndex: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`rounded-lg border border-white/10 bg-card/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${CATEGORY_COLORS[tech.category] ?? 'text-foreground'}`}
                  >
                    {tech.name}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
          {TECH_STACK.map((tech) => (
            <span
              key={tech.name}
              className="rounded-lg border border-white/10 bg-card px-3 py-1.5 text-xs text-muted-foreground"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap'
import { COMPANY_STATS } from '@/constants/stats'
import { GsapCounter } from '@/components/animations/motion-primitives'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      gsap.from('.stats-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      ScrollTrigger.batch('.stats-card', {
        start: 'top 88%',
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 50, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power3.out',
              overwrite: true,
            }
          )
        },
      })
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="stats-header">
          <SectionHeader
            eyebrow="By the Numbers"
            title="Engineering excellence at scale"
            description="Measurable impact across projects, deployments, and client satisfaction."
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY_STATS.map((stat) => (
            <div
              key={stat.label}
              className="stats-card group rounded-2xl border border-white/10 bg-card p-8 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 cursor-default"
            >
              <p className="font-heading text-4xl font-bold text-foreground lg:text-5xl">
                <GsapCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

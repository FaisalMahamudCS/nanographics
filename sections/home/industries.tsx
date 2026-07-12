'use client'

import { useRef } from 'react'
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap'
import { INDUSTRIES } from '@/constants/industries'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      ScrollTrigger.batch('.industry-card', {
        start: 'top 90%',
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 30, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.55,
              stagger: 0.06,
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
    <section ref={sectionRef} className="border-y border-white/10 bg-surface/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Deep expertise across sectors"
          description="We understand the unique challenges of your industry and build solutions that meet regulatory and business requirements."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="industry-card group rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-cyan/30 hover:bg-card cursor-pointer"
            >
              <h3 className="font-heading text-sm font-semibold text-foreground">{industry.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

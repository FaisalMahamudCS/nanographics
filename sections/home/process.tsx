'use client'

import { useRef } from 'react'
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap'
import { PROCESS_STEPS } from '@/constants/services'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      const line = sectionRef.current.querySelector('.process-line')
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.process-timeline',
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 1,
            },
          }
        )
      }

      ScrollTrigger.batch('.process-step', {
        start: 'top 88%',
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
              overwrite: true,
            }
          )
        },
      })

      gsap.to('.process-dot', {
        boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)',
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut',
        stagger: 0.2,
      })
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="Simple, smooth, and efficient"
          description="A proven methodology from discovery to ongoing support — designed for transparency and predictable delivery."
        />

        <div className="process-timeline relative mt-16">
          <div className="process-line absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-transparent lg:block" />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="process-step group relative flex gap-6 rounded-2xl border border-white/10 bg-card/50 p-6 transition-all duration-300 hover:border-brand-blue/30 hover:bg-card lg:pl-16"
              >
                <div className="process-dot absolute left-6 top-8 hidden size-4 rounded-full border-2 border-brand-blue bg-background lg:block" />
                <span className="font-heading text-3xl font-bold text-brand-blue/40">{step.step}</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

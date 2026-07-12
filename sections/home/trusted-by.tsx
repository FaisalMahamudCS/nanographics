'use client'

import { useRef } from 'react'
import { useGSAP, gsap } from '@/lib/gsap'
import { CLIENT_LOGOS } from '@/constants/testimonials'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function TrustedBySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

  useGSAP(
    () => {
      if (reducedMotion || !trackRef.current) return

      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 25,
        repeat: -1,
        ease: 'none',
      })
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section ref={sectionRef} className="border-y border-white/10 bg-surface/50 py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by innovative teams worldwide
        </p>
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-16 whitespace-nowrap"
            style={reducedMotion ? { flexWrap: 'wrap', justifyContent: 'center', width: '100%', gap: '2rem' } : undefined}
          >
            {logos.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-heading text-lg font-semibold text-muted-foreground/60 transition-colors duration-200 hover:text-foreground cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

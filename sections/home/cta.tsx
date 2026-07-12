'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useGSAP, gsap } from '@/lib/gsap'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/animations/motion-primitives'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      gsap.from('.cta-card', {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-card',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to('.cta-glow', {
        opacity: 0.6,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5,
      })
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="cta-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue/20 via-card to-brand-cyan/10 p-10 text-center sm:p-16">
          <div className="cta-glow pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-brand-blue/20 blur-[80px]" />
          <div className="cta-glow pointer-events-none absolute -bottom-20 -left-20 size-60 rounded-full bg-brand-cyan/10 blur-[80px]" />

          <h2 className="relative font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ready to build something exceptional?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
            Let&apos;s create your next digital product. Book a discovery call and we&apos;ll map out your path to production.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Button
                size="lg"
                className="h-12 gap-2 rounded-xl bg-brand-blue px-8 text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90"
                render={<Link href="/contact" />}
              >
                Book Discovery Call
                <ArrowRight className="size-4" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-white/15 bg-white/5 px-8 backdrop-blur-sm hover:bg-white/10"
                render={<Link href="/portfolio" />}
              >
                View Portfolio
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion, useReducedMotion as useFramerReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useRef } from 'react'
import { useGSAP, gsap } from '@/lib/gsap'
import { COMPANY } from '@/constants/company'
import { Button } from '@/components/ui/button'
import { MagneticButton, TextReveal } from '@/components/animations/motion-primitives'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

function HeroBackground() {
  const reducedMotion = useFramerReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="hero-glow-blue absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[120px]" />
      <div className="hero-glow-cyan absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/10 blur-[100px]" />

      {[
        { x: '15%', y: '25%', delay: 0 },
        { x: '75%', y: '20%', delay: 1 },
        { x: '85%', y: '60%', delay: 2 },
        { x: '20%', y: '70%', delay: 0.5 },
        { x: '50%', y: '15%', delay: 1.5 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="hero-node absolute size-2 rounded-full bg-brand-cyan/60 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          style={{ left: node.x, top: node.y }}
          animate={
            reducedMotion
              ? { opacity: 0.7 }
              : { y: [0, -12, 0], opacity: [0.4, 1, 0.4] }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 4, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      ))}

      <div className="hero-code absolute right-8 top-1/3 hidden rounded-xl border border-white/10 bg-card/60 p-4 font-mono text-xs text-muted-foreground backdrop-blur-md lg:block">
        <pre className="leading-relaxed">
{`const agent = await createAgent({
  model: "gpt-4o",
  tools: [search, deploy],
  memory: vectorStore
})`}
        </pre>
      </div>
    </div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-subtext', { y: 24, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, '-=0.4')
        .from('.hero-stat', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.2')

      gsap.to('.hero-glow-blue', {
        scale: 1.15,
        opacity: 0.35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-grid', {
        backgroundPosition: '64px 64px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden pt-28 pb-20">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="size-2 rounded-full bg-brand-cyan" />
            Enterprise AI & Software Engineering
          </div>

          <TextReveal
            text={COMPANY.tagline}
            as="h1"
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          />

          <p className="hero-subtext mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {COMPANY.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton className="hero-cta">
              <Button
                size="lg"
                className="h-12 gap-2 rounded-xl bg-brand-blue px-8 text-base font-medium text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90"
                render={<Link href="/contact" />}
              >
                Book Discovery Call
                <ArrowRight className="size-4" />
              </Button>
            </MagneticButton>
            <MagneticButton className="hero-cta" strength={0.15}>
              <Button
                variant="outline"
                size="lg"
                className="h-12 gap-2 rounded-xl border-white/15 bg-white/5 px-8 text-base backdrop-blur-sm hover:bg-white/10"
                render={<Link href="/portfolio" />}
              >
                <Play className="size-4" />
                View Our Work
              </Button>
            </MagneticButton>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-md sm:grid-cols-4">
            {[
              { label: 'Projects', value: '50+' },
              { label: 'Engineers', value: '15+' },
              { label: 'Countries', value: '12+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.label} className="hero-stat text-center">
                <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

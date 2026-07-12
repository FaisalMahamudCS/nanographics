'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap'
import { SERVICES } from '@/constants/services'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      gsap.from('.services-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      ScrollTrigger.batch('.service-card', {
        start: 'top 90%',
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.08,
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
    <section ref={sectionRef} className="py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="services-header">
          <SectionHeader
            eyebrow="What We Do"
            title="Premium software engineering services"
            description="From AI agents to cloud infrastructure — we deliver end-to-end solutions that scale with your business."
          />
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="service-card group relative flex h-full flex-col rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 cursor-pointer"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-cyan transition-colors duration-300 group-hover:bg-brand-blue/20">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-cyan transition-colors hover:text-foreground cursor-pointer"
                >
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

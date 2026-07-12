'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap'
import { PROJECTS } from '@/constants/projects'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

const featured = PROJECTS.filter((p) => p.featured)

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      ScrollTrigger.batch('.work-card', {
        start: 'top 88%',
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 70, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
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
    <section ref={sectionRef} className="border-t border-white/10 bg-surface/20 py-24" id="work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured work with measurable impact"
          description="Enterprise-grade solutions delivered for agriculture, healthcare, education, and global markets."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="work-card group flex h-full flex-col rounded-2xl border border-white/10 bg-card overflow-hidden transition-all duration-300 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5"
            >
              <div className="border-b border-white/10 bg-gradient-to-br from-brand-blue/10 to-brand-cyan/5 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-brand-cyan">
                      {project.industry}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-bold text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <Link
                    href={`/portfolio#${project.slug}`}
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-brand-blue/40 hover:text-foreground cursor-pointer"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-heading text-lg font-bold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 flex-1 space-y-2">
                  {project.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10 cursor-pointer"
          >
            View all projects
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

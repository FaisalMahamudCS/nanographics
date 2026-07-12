'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useGSAP, gsap } from '@/lib/gsap'
import { TESTIMONIALS } from '@/constants/testimonials'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const testimonial = TESTIMONIALS[active]

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      gsap.from('.testimonial-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonial-card',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section ref={sectionRef} className="border-y border-white/10 bg-surface/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by founders and enterprises"
          description="What our clients say about working with Mehvora Labs."
        />

        <div className="testimonial-card relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reducedMotion ? false : { opacity: 0, x: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -30, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-12"
            >
              <Quote className="size-10 text-brand-blue/30" />
              <blockquote className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))}
                    className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10 cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))}
                    className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10 cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

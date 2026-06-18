'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const services = [
  {
    title: 'Branding Design',
    description: 'Strategic visual identity and brand guidelines that define your market presence',
    icon: 'M 30 60 L 100 20 L 170 60 L 170 140 L 100 180 L 30 140 Z',
  },
  {
    title: 'Packaging Design',
    description: 'Premium packaging solutions that captivate and elevate your product',
    icon: 'M 40 40 H 160 V 160 H 40 Z M 40 80 H 160',
  },
  {
    title: 'Motion Graphic',
    description: 'Dynamic animations and motion graphics for compelling storytelling',
    icon: 'M 60 40 L 160 100 L 60 160 Z',
  },
  {
    title: 'Printing Support',
    description: 'Professional printing solutions and comprehensive support',
    icon: 'M 40 160 H 160 V 80 H 40 Z M 60 40 H 140 V 80 H 60 Z',
  },
  {
    title: 'Website Development',
    description: 'Modern, responsive website design and seamless development',
    icon: 'M 20 60 H 180 V 140 H 20 Z M 20 60 L 100 100 L 180 60',
  },
  {
    title: 'Cylinder Make',
    description: '3D cylinder design and precision production',
    icon: 'M 40 60 C 40 40 160 40 160 60 V 140 C 160 160 40 160 40 140 Z M 40 60 C 40 80 160 80 160 60',
  },
]

export default function Services() {
  const containerRef = useRef(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Animate header
      tl.from(headerRef.current?.querySelector('p') || null, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, 0)

      tl.from(headerRef.current?.querySelector('h2') || null, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      }, 0.2)

      // Animate service cards with stagger
      tl.from(
        cardsRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        },
        0.4
      )

      // Add individual card hover animations
      cardsRef.current.forEach((card) => {
        if (!card) return
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen pt-32 pb-12 px-6 bg-[#050505] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-4 uppercase">
            Our Services
          </p>
          <h2 className="text-5xl lg:text-7xl font-bold leading-none mb-8 uppercase tracking-tighter">
            <span className="text-white">
              Premium Design
            </span>
            <br />
            <span className="text-cyan-400 font-bold">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive design expertise covering every aspect of brand development, from concept to final execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="group relative p-10 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-cyan-400/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 space-y-4">
                {/* Icon Container */}
                <div className="mb-8 w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                  <svg viewBox="0 0 200 200" className="w-8 h-8 fill-none stroke-current stroke-[8] stroke-linejoin-round">
                    <path d={service.icon} />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Animated accent line */}
                <div className="pt-6">
                  <div className="w-0 h-1 bg-cyan-400 group-hover:w-16 transition-all duration-500 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Color Reference - Updated to Cyan */}
        <div className="mt-20 p-12 rounded-3xl border border-white/10 bg-[#0a0a0a] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-[100px] pointer-events-none"></div>
          <p className="text-white/50 mb-8 text-sm uppercase tracking-widest font-semibold">Primary Color System</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 relative z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.4)]" />
              <div className="text-center">
                <p className="text-cyan-400 font-bold text-lg">#22D3EE</p>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mt-1">Cyan Primary</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10" />
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#0891B2] rounded-2xl shadow-lg border border-white/10" />
              <div className="text-center">
                <p className="text-[#0891B2] font-bold text-lg">#0891B2</p>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mt-1">Cyan Deep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

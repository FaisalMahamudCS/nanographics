'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    title: 'Branding Design',
    description: 'Logos, visual systems, tone of voice, and brand guidelines that give your business a clear, confident presence across every touchpoint.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    icon: 'M 30 60 L 100 20 L 170 60 L 170 140 L 100 180 L 30 140 Z',
    color: 'from-[#10b981]/20 to-[#06b6d4]/10'
  },
  {
    title: 'Packaging Design',
    description: 'Premium, tactile packaging solutions that stand out on shelves and create memorable unboxing experiences.',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop',
    icon: 'M 40 40 H 160 V 160 H 40 Z M 40 80 H 160',
    color: 'from-[#06b6d4]/20 to-[#3b82f6]/10'
  },
  {
    title: 'Motion & video',
    description: 'Dynamic animations, video editing, and motion graphics that bring your brand narrative to life in digital spaces.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    icon: 'M 60 40 L 160 100 L 60 160 Z',
    color: 'from-[#8b5cf6]/20 to-[#ec4899]/10'
  },
  {
    title: 'Printing Support',
    description: 'High-end printing solutions and technical pre-press file setup that ensure your designs print beautifully on any material.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    icon: 'M 40 160 H 160 V 80 H 40 Z M 60 40 H 140 V 80 H 60 Z',
    color: 'from-[#f59e0b]/20 to-[#ef4444]/10'
  },
  {
    title: 'Website Development',
    description: 'Modern, responsive website designs and seamless web development blending performance, interaction, and aesthetics.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    icon: 'M 20 60 H 180 V 140 H 20 Z M 20 60 L 100 100 L 180 60',
    color: 'from-[#10b981]/20 to-[#3b82f6]/10'
  },
  {
    title: 'Cylinder Make',
    description: '3D cylinder design, precision rotogravure production, and industrial modeling tailored for packaging manufacturing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    icon: 'M 40 60 C 40 40 160 40 160 60 V 140 C 160 160 40 160 40 140 Z M 40 60 C 40 80 160 80 160 60',
    color: 'from-[#3b82f6]/20 to-[#8b5cf6]/10'
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Stacking card animation: shrink/fade cards as they are covered by subsequent ones
      cardsRef.current.forEach((card, index) => {
        if (index === services.length - 1) return // skip last card
        
        const inner = card.querySelector('.card-inner')
        if (!inner) return

        gsap.to(inner, {
          scrollTrigger: {
            trigger: card,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
          scale: 0.94,
          opacity: 0.5,
          y: -15,
          ease: 'none'
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 bg-[#050507] text-white"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="text-[#06b6d4] text-xs font-semibold tracking-[0.25em] mb-4 uppercase block font-heading">
            WHAT WE DO
          </span>
          <h2 className="text-5xl lg:text-7xl font-black leading-none uppercase tracking-tighter font-heading">
            <span className="text-white">Premium Design</span>
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#06b6d4] font-extrabold">
              Solutions
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed mt-6">
            Comprehensive design expertise covering every aspect of brand development, from speculative concept to final premium execution.
          </p>
        </div>

        {/* Stacked Cards Layout */}
        <div className="flex flex-col gap-24 md:gap-0 relative">
          {services.map((service, index) => {
            // Staggered top offsets on sticky view for desktop stacking
            const topOffset = 80 + index * 24 // Stagger overlaps nicely
            
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="w-full min-h-[50vh] md:h-[70vh] md:sticky flex items-center justify-center py-4 md:py-8"
                style={{ top: `${topOffset}px`, zIndex: index + 10 }}
              >
                <div className="card-inner relative w-full h-full rounded-3xl md:rounded-[2rem] bg-[#0b0b0d] border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-stretch gap-6 md:gap-10 p-6 md:p-10 transition-colors duration-500 hover:border-cyan-500/20 group">
                  
                  {/* Subtle corner card glow */}
                  <div className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-br ${service.color} blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                  {/* Left content column */}
                  <div className="flex-1 flex flex-col justify-between z-10 py-2">
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#06b6d4] group-hover:bg-[#06b6d4] group-hover:text-black transition-all duration-300 shadow-md">
                        <svg viewBox="0 0 200 200" className="w-6 h-6 fill-none stroke-current stroke-[8] stroke-linejoin-round">
                          <path d={service.icon} />
                        </svg>
                      </div>

                      {/* Header */}
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white font-heading group-hover:text-[#06b6d4] transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed max-w-md">
                        {service.description}
                      </p>
                    </div>

                    {/* View project button */}
                    <div className="pt-8">
                      <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-[10px] uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#10b981] hover:to-[#06b6d4] hover:text-black hover:border-transparent transition-all duration-300 shadow-sm cursor-pointer active:scale-95">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Right full-bleed media column */}
                  <div className="flex-1 relative rounded-2xl md:rounded-[1.5rem] overflow-hidden min-h-[220px] md:min-h-0 bg-[#060608]">
                    <div className="absolute inset-0 bg-[#050507]/40 z-10 transition-opacity duration-500 group-hover:opacity-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-700 ease-out"
                    />
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

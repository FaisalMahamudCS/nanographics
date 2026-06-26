'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    title: 'Branding Design',
    description: 'Logos, visual systems, tone of voice, and brand guidelines that give your business a clear, confident presence across every touchpoint.',
    image: '/Banner/Banner/Branding Design.png',
    icon: 'M 30 60 L 100 20 L 170 60 L 170 140 L 100 180 L 30 140 Z',
    color: 'from-[#00ffff]/20 to-[#0088ff]/10'
  },
  {
    title: 'Packaging Design',
    description: 'Premium packaging design systems, layout configurations, and printed mockups tailored for high-quality retail presence.',
    image: '/Banner/Banner/Packaging Design.png',
    icon: 'M 40 40 H 160 V 160 H 40 Z M 40 80 H 160',
    color: 'from-[#00ffff]/25 to-[#0044ff]/10'
  },
  {
    title: 'Video Editing',
    description: 'Dynamic animations, high-end video editing, and motion graphics that bring your industrial or corporate narrative to life.',
    image: '/Banner/Banner/Video Editing.png',
    icon: 'M 60 40 L 160 100 L 60 160 Z',
    color: 'from-[#00ffff]/20 to-[#00ccff]/10'
  },
  {
    title: 'Printing Support',
    description: 'High-end printing solutions and technical pre-press setup that ensure your layouts print perfectly on raw packaging film.',
    image: '/Banner/Banner/Printing Support.png',
    icon: 'M 40 160 H 160 V 80 H 40 Z M 60 40 H 140 V 80 H 60 Z',
    color: 'from-[#00ffff]/25 to-[#0022ff]/10'
  },

  {
    title: 'Cylinder Make',
    description: 'Precision cylinder making, 3D engraving setup, and industrial rotogravure modeling for high strength print production.',
    image: '/Banner/Banner/Cylinder Make.png',
    icon: 'M 40 60 C 40 40 160 40 160 60 V 140 C 160 160 40 160 40 140 Z M 40 60 C 40 80 160 80 160 60',
    color: 'from-[#00ffff]/30 to-[#0066ff]/10'
  },
  {
    title: 'AI Powered Website &Custom Software Development ',
    description: 'Modern, responsive website designs and seamless web development blending performance, interaction, and aesthetics.',
    image: '/Banner/Banner/AI Powered Website &Custom Software Development.png',
    icon: 'M 20 60 H 180 V 140 H 20 Z M 20 60 L 100 100 L 180 60',
    color: 'from-[#00ffff]/20 to-[#0088ff]/10'
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Animation for the "Premium Design Solutions" heading lines
      const titleWords = titleRef.current?.querySelectorAll('.services-title-word')
      if (titleWords) {
        gsap.fromTo(
          titleWords,
          { y: '100%' },
          {
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            y: '0%',
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out'
          }
        )
      }

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

      // Entrance slide/fade animation for content and media in each card
      cardsRef.current.forEach((card, index) => {
        const isEven = index % 2 === 0
        const content = card.querySelector('.card-content')
        const media = card.querySelector('.card-media')

        if (content) {
          gsap.fromTo(content,
            { x: isEven ? -60 : 60, opacity: 0 },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out'
            }
          )
        }

        if (media) {
          gsap.fromTo(media,
            { x: isEven ? 60 : -60, opacity: 0 },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out'
            }
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 bg-[#050507] text-white overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="text-[#00ffff] text-xs font-semibold tracking-[0.25em] mb-4 uppercase block font-heading">
            WHAT WE DO
          </span>
          <h2 ref={titleRef} className="text-5xl lg:text-7xl font-black leading-none uppercase tracking-tighter font-heading">
            <span className="block overflow-hidden h-fit">
              <span className="inline-block text-white services-title-word">Premium Design</span>
            </span>
            <span className="block overflow-hidden h-fit mt-2">
              <span className="inline-block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#0088ff] font-extrabold services-title-word">
                Solutions
              </span>
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
                <div className={`card-inner relative w-full h-full rounded-none bg-[#0b0b0d] border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-stretch gap-6 md:gap-10 p-6 md:p-10 transition-colors duration-500 hover:border-[#00ffff]/20 group`}>

                  {/* Subtle corner card glow */}
                  <div className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-none bg-gradient-to-br ${service.color} blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                  {/* Left content column */}
                  <div className="card-content flex-1 flex flex-col justify-between z-10 py-2">
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#00ffff] group-hover:bg-[#00ffff] group-hover:text-black transition-all duration-300 shadow-md">
                        <svg viewBox="0 0 200 200" className="w-6 h-6 fill-none stroke-current stroke-[8] stroke-linejoin-round">
                          <path d={service.icon} />
                        </svg>
                      </div>

                      {/* Header */}
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white font-heading group-hover:text-[#00ffff] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed max-w-md">
                        {service.description}
                      </p>
                    </div>

                    {/* View project button */}
                    <div className="pt-8">
                      <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-[10px] uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#00ffff] hover:to-[#0088ff] hover:text-black hover:border-transparent transition-all duration-300 shadow-sm cursor-pointer active:scale-95">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Right full-bleed media column */}
                  <div className="card-media flex-1 relative rounded-none overflow-hidden min-h-[220px] md:min-h-0 bg-[#060608]">
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

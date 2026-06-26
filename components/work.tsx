'use client'

import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  {
    title: 'Food Company',
    description: 'Brand Identity & Packaging',
    scope: 'Printed flexible packaging rolls for snacks, biscuits, and beverages.',
    image: '/Banner/Banner/Food Company.jpeg',
  },
  {
    title: 'Oil Company',
    description: 'Corporate cylinders & film',
    scope: 'High strength, clarity-optimized rotogravure cylinders & film packaging.',
    image: '/Banner/Banner/Oil Company.jpeg',
  },
  {
    title: 'Poster Make',
    description: 'Industrial Print Campaigns',
    scope: 'Marketing collateral, factory process posters, and showroom branding.',
    image: '/Banner/Banner/Printing Support.png',
  },
  {
    title: 'Logo Make',
    description: 'Vector Brand Identity',
    scope: 'Precision vector logo marks, type systems, and complete branding manuals.',
    image: '/Banner/Banner/Branding Logo.png',
  }
]

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const workingWithGridRef = useRef<HTMLDivElement>(null)
  const showcaseRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // 1. Working With cards stagger animation
      const cards = workingWithGridRef.current?.querySelectorAll('.working-card')
      if (cards && cards.length > 0) {
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: workingWithGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out'
          }
        )
      }

      // 2. Showcase cards: Left and Right slide in, one after another
      const showcaseCards = showcaseRef.current?.querySelectorAll('.showcase-card')
      if (showcaseCards && showcaseCards.length === 2) {
        const leftCard = showcaseCards[0]
        const rightCard = showcaseCards[1]

        gsap.fromTo(leftCard,
          { x: -80, opacity: 0 },
          {
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out'
          }
        )

        gsap.fromTo(rightCard,
          { x: 80, opacity: 0 },
          {
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.25,
            ease: 'power3.out'
          }
        )
      }

      // 3. Products Packaging cards stagger animation
      const productCards = productsRef.current?.querySelectorAll('.product-card')
      if (productCards && productCards.length > 0) {
        gsap.fromTo(productCards,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: productsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 bg-[#050507] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[#00ffff] text-xs font-semibold tracking-[0.25em] mb-4 uppercase block font-heading">
            PORTFOLIO
          </span>
          <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-none font-heading">
            <span className="text-white">Selected</span>
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#0088ff]">
              Work
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-xl font-light leading-relaxed mt-6">
            A snapshot of brand systems, interactive websites, and motion graphic campaigns we have shaped for clients who care about craft.
          </p>
        </div>

        {/* Desktop Interactive Expanding Accordion Gallery */}
        <div className="hidden md:flex w-full items-stretch gap-4 h-[32rem] mb-28">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index
            const isAnyHovered = hoveredIndex !== null

            // Set dynamic flex width for accordion expand/contract transition
            const flexValue = isHovered ? 4.5 : (isAnyHovered ? 1 : 2.5)

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ flex: flexValue }}
                className="relative cursor-pointer overflow-hidden rounded-none bg-[#0c0c0f] border border-white/5 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out group"
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-[#050507]/45 z-10 transition-opacity duration-500 group-hover:opacity-20" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] group-hover:brightness-[0.9]"
                />

                {/* Info Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
                  <span className="text-[#00ffff] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {project.description}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00ffff] group-hover:to-[#0088ff] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Accordion expanding details */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/60 text-xs font-light leading-relaxed max-w-sm mb-4">
                      {project.scope}
                    </p>
                    <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00ffff] to-[#0088ff] text-black text-[9px] font-bold uppercase tracking-widest cursor-pointer shadow-md active:scale-95 transition-all">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[85%] aspect-[1500/1050] rounded-none overflow-hidden bg-[#0c0c0f] border border-white/5 relative"
            >
              <div className="absolute inset-0 bg-[#050507]/30 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter brightness-[0.8]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[#00ffff] text-[9px] font-bold tracking-widest uppercase mb-1">
                  {project.description}
                </span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight font-heading">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Branding Design Section (Real Projects trigger point) */}
        <div id="real-projects" className="scroll-mt-28 mt-20 pt-20 border-t border-white/5">
          {/* Client Collaboration Categories & Working With */}
          <div className="mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-tighter font-heading text-white">
              Working With
            </h3>
            <p className="text-white/50 text-xs md:text-sm font-light max-w-xl leading-relaxed">
              We collaborate with diverse industrial sectors to deliver retail-ready packaging design and precision cylinder print plates.
            </p>
          </div>

          <div ref={workingWithGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              { title: 'Export Company', desc: 'Global shipping standards & compliance', img: '/port.png' },
              { title: 'Local Company', desc: 'Regional supply chains & retail distribution', img: '/file_000000001e2c71fab1ca1db4e6b1949f.png' },
              { title: 'Oil Company', desc: 'Industrial lubricants & durability labels', img: '/Banner/Banner/Oil Company.jpeg' },

            ].map((client, idx) => (
              <div key={idx} className="working-card group relative overflow-hidden border border-white/10 hover:border-[#00ffff]/40 transition-all duration-500 bg-[#0c0c0f] min-h-[160px] flex flex-col justify-end p-6 rounded-none shadow-md">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={client.img}
                    alt={client.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/90 to-[#0c0c0f]/50" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10">
                  <div className="absolute top-[-24px] right-[-24px] w-2 h-2 border-t border-r border-transparent group-hover:border-[#00ffff] transition-all duration-300"></div>
                  <p className="text-[#00ffff] font-bold text-base uppercase mb-1.5 font-heading tracking-tight group-hover:text-white transition-colors duration-300">{client.title}</p>
                  <p className="text-white/60 text-[11px] font-light leading-snug group-hover:text-white/90 transition-colors duration-300">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Company Logo Use Showcase */}


          {/* Products Packaging Section */}
          <div className="mt-28 border-t border-white/5 pt-20">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-tighter font-heading text-white">
              Products Packaging All Work
            </h3>
            <p className="text-white/50 text-xs md:text-sm font-light max-w-xl leading-relaxed mb-12">
              Explore our core packaging production workflows, combining digital design layout with high-speed physical print support.
            </p>

            <div ref={productsRef} className="grid md:grid-cols-2 gap-8">
              <div className="product-card border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-all duration-500 group p-4 rounded-none shadow-md">
                <div className="aspect-[3117/1402] relative overflow-hidden bg-[#050507]">
                  <div className="absolute inset-0 bg-[#050507]/20 z-10 pointer-events-none" />
                  <img
                    src="/Banner/Banner/Packaging Design2.png"
                    alt="Packaging Design Film"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-all duration-700"
                  />
                </div>
                <div className="pt-6 px-2">
                  <h4 className="font-bold text-xl text-white uppercase tracking-tight mb-2 font-heading group-hover:text-[#00ffff] transition-colors">Packaging Design</h4>
                  <p className="text-white/50 text-xs font-light">Flexible film rolls, bags, and pouches designed for snacks, chips, spices, and confectionery products.</p>
                </div>
              </div>

              <div className="product-card border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-all duration-500 group p-4 rounded-none shadow-md">
                <div className="aspect-[3117/1402] relative overflow-hidden bg-[#050507]">
                  <div className="absolute inset-0 bg-[#050507]/20 z-10 pointer-events-none" />
                  <img
                    src="/Banner/Banner/Design and Print Support2.png"
                    alt="Design and Print cylinders"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-all duration-700"
                  />
                </div>
                <div className="pt-6 px-2">
                  <h4 className="font-bold text-xl text-white uppercase tracking-tight mb-2 font-heading group-hover:text-[#00ffff] transition-colors">Design and Print Support</h4>
                  <p className="text-white/50 text-xs font-light">High strength rotogravure cylinders setup, color proofing, and industrial print support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import React, { useState } from 'react'

const projects = [
  {
    title: 'Food Company',
    description: 'Brand Identity & Packaging',
    scope: 'Printed flexible packaging rolls for snacks, biscuits, and beverages.',
    image: '/docx_image3.png',
  },
  {
    title: 'Oil Company',
    description: 'Corporate cylinders & film',
    scope: 'High strength, clarity-optimized rotogravure cylinders & film packaging.',
    image: '/docx_image2.png',
  },
  {
    title: 'Poster Make',
    description: 'Industrial Print Campaigns',
    scope: 'Marketing collateral, factory process posters, and showroom branding.',
    image: '/docx_image5.png',
  },
  {
    title: 'Logo Make',
    description: 'Vector Brand Identity',
    scope: 'Precision vector logo marks, type systems, and complete branding manuals.',
    image: '/nano-graphic-logo.svg',
  }
]

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-[#050507] text-white">
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
                    <button className="px-5 py-2.5 rounded-none bg-gradient-to-r from-[#00ffff] to-[#0088ff] text-black text-[9px] font-bold uppercase tracking-widest cursor-pointer shadow-md active:scale-95 transition-all">
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
              className="snap-center shrink-0 w-[85%] aspect-[4/3] rounded-none overflow-hidden bg-[#0c0c0f] border border-white/5 relative"
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { title: 'Export Company', desc: 'Global shipping standards & compliance' },
              { title: 'Local Company', desc: 'Regional supply chains & retail distribution' },
              { title: 'Oil Company', desc: 'Industrial lubricants & durability labels' },
              { title: 'Food Company', desc: 'FDA-approved printed packaging rolls' }
            ].map((client, idx) => (
              <div key={idx} className="group border border-white/10 hover:border-[#00ffff]/40 transition-all duration-300 bg-[#0c0c0f] p-6 relative rounded-none">
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-[#00ffff] transition-all"></div>
                <p className="text-[#00ffff] font-bold text-base uppercase mb-2 font-heading tracking-tight">{client.title}</p>
                <p className="text-white/40 text-[11px] font-light leading-snug">{client.desc}</p>
              </div>
            ))}
          </div>

          {/* Company Logo Use Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="border border-white/10 bg-[#0c0c0f] p-8 hover:border-[#00ffff]/30 transition-all group rounded-none">
              <span className="text-[#00ffff] text-[10px] font-bold tracking-widest uppercase mb-2 block">
                Brand Application
              </span>
              <h4 className="text-xl font-bold text-white uppercase mb-4 font-heading">
                Oil Company Branding
              </h4>
              <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                Applying core vector logos on metal cylinders, industrial containers, and heat-resistant transport sheets with absolute color fidelity.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-[#070709]">
                  <span className="text-white font-mono text-xs">OIL</span>
                </div>
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Logo verified for industrial cylinders</span>
              </div>
            </div>

            <div className="border border-white/10 bg-[#0c0c0f] p-8 hover:border-[#00ffff]/30 transition-all group rounded-none">
              <span className="text-[#00ffff] text-[10px] font-bold tracking-widest uppercase mb-2 block">
                Retail Placement
              </span>
              <h4 className="text-xl font-bold text-white uppercase mb-4 font-heading">
                Food Company Placement
              </h4>
              <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                Optimizing brand logo display on printed packaging film rolls to ensure visibility, premium shelf presence, and barcode scanning compliance.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-[#070709]">
                  <span className="text-white font-mono text-xs">FD</span>
                </div>
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Logo verified for flexible packaging film</span>
              </div>
            </div>
          </div>

          {/* Products Packaging Section */}
          <div className="mt-28 border-t border-white/5 pt-20">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-tighter font-heading text-white">
              Products Packaging All Work
            </h3>
            <p className="text-white/50 text-xs md:text-sm font-light max-w-xl leading-relaxed mb-12">
              Explore our core packaging production workflows, combining digital design layout with high-speed physical print support.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-all duration-500 group p-4 rounded-none">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#050507]/20 z-10" />
                  <img 
                    src="/docx_image3.png" 
                    alt="Packaging Design Film" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-all duration-700" 
                  />
                </div>
                <div className="pt-6 px-2">
                  <h4 className="font-bold text-xl text-white uppercase tracking-tight mb-2 font-heading group-hover:text-[#00ffff] transition-colors">Packaging Design</h4>
                  <p className="text-white/50 text-xs font-light">Flexible film rolls, bags, and pouches designed for snacks, chips, spices, and confectionery products.</p>
                </div>
              </div>

              <div className="border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-all duration-500 group p-4 rounded-none">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#050507]/20 z-10" />
                  <img 
                    src="/docx_image2.png" 
                    alt="Design and Print cylinders" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-all duration-700" 
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

'use client'

import React, { useState } from 'react'

const projects = [
  {
    title: 'Food Company',
    description: 'Brand Identity & Packaging',
    scope: 'Brand Strategy, Label Design, Sustainable Box Packaging',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Oil Company',
    description: 'Corporate Branding',
    scope: 'Identity Redesign, Corporate Website, Guidelines Manual',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Tech Startup',
    description: 'Digital Product Design',
    scope: 'UI/UX Design System, SaaS Dashboard App, Marketing Site',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Fashion Label',
    description: 'Lookbook & Campaign',
    scope: 'Art Direction, Motion Graphics, Social Media Kit',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop',
  }
]

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-[#050507] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[#06b6d4] text-xs font-semibold tracking-[0.25em] mb-4 uppercase block font-heading">
            PORTFOLIO
          </span>
          <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-none font-heading">
            <span className="text-white">Selected</span>
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#06b6d4]">
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
                className="relative cursor-pointer overflow-hidden rounded-[2rem] bg-[#0c0c0f] border border-white/5 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out group"
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
                  <span className="text-[#06b6d4] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {project.description}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-[#06b6d4] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Accordion expanding details */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/60 text-xs font-light leading-relaxed max-w-sm mb-4">
                      {project.scope}
                    </p>
                    <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-black text-[9px] font-bold uppercase tracking-widest cursor-pointer shadow-md active:scale-95 transition-all">
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
              className="snap-center shrink-0 w-[85%] aspect-[4/3] rounded-3xl overflow-hidden bg-[#0c0c0f] border border-white/5 relative"
            >
              <div className="absolute inset-0 bg-[#050507]/30 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover filter brightness-[0.8]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[#06b6d4] text-[9px] font-bold tracking-widest uppercase mb-1">
                  {project.description}
                </span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight font-heading">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Branding Design Section */}
        <div className="mt-20 pt-20 border-t border-white/5">
          <div className="mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-tighter font-heading text-white">
              Brand Identity Systems
            </h3>
            <p className="text-white/50 text-xs md:text-sm font-light max-w-xl leading-relaxed">
              Design systems utilizing vibrant primary colors and deep contrast boundaries to build high-end visual hierarchies for luxury and corporate institutions.
            </p>
          </div>

          {/* Cyan Color Feature */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Primary Color */}
            <div className="group rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-500 bg-[#0c0c0f] p-4">
              <div className="h-40 bg-gradient-to-br from-[#10b981] to-[#06b6d4] rounded-2xl flex items-center justify-center relative shadow-lg">
                <span className="text-black text-[10px] font-bold uppercase tracking-widest">Nano Gradient</span>
              </div>
              <div className="pt-6 px-2">
                <p className="text-white font-bold text-lg uppercase mb-1 font-heading">Brand Primary</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">#10b981 to #06b6d4</p>
              </div>
            </div>

            {/* 60% Application */}
            <div className="group rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-500 bg-[#0c0c0f] p-4">
              <div className="h-40 bg-[#06b6d4]/60 rounded-2xl flex items-center justify-center relative">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest drop-shadow-md">60% Usage</span>
              </div>
              <div className="pt-6 px-2">
                <p className="text-white font-bold text-lg uppercase mb-1 font-heading">Digital Accent</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Cyan Highlight</p>
              </div>
            </div>

            {/* Accent Use */}
            <div className="group rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-500 bg-[#0c0c0f] p-4">
              <div className="h-40 bg-[#10b981]/20 rounded-2xl flex items-center justify-center relative border border-emerald-500/10">
                <span className="text-[#10b981] text-[10px] font-bold uppercase tracking-widest">30% Accent</span>
              </div>
              <div className="pt-6 px-2">
                <p className="text-white font-bold text-lg uppercase mb-1 font-heading">Tactile Accents</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Emerald Muted</p>
              </div>
            </div>
          </div>

          {/* Packaging Design */}
          <div className="mt-32">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-tighter font-heading text-white">
              Packaging & Label Systems
            </h3>
            <p className="text-white/50 text-xs md:text-sm font-light max-w-xl leading-relaxed mb-12">
              Bespoke packaging layouts crafted with detailed pre-press precision, marrying print technology requirements with luxury materials.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl border border-white/5 overflow-hidden hover:border-cyan-500/20 transition-all duration-500 bg-[#0c0c0f] group p-4">
                <div className="h-64 relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-[#050507]/20 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Package Design" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-all duration-700" 
                  />
                </div>
                <div className="pt-6 px-2">
                  <h4 className="font-bold text-xl text-white uppercase tracking-tight mb-2 font-heading group-hover:text-[#06b6d4] transition-colors">Tactile Print Finishes</h4>
                  <p className="text-white/50 text-xs font-light">Embossing, hot-foil stamping, and matte-coated paper formulations.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/5 overflow-hidden hover:border-cyan-500/20 transition-all duration-500 bg-[#0c0c0f] group p-4">
                <div className="h-64 relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-[#050507]/20 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" 
                    alt="Label Design" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-all duration-700" 
                  />
                </div>
                <div className="pt-6 px-2">
                  <h4 className="font-bold text-xl text-white uppercase tracking-tight mb-2 font-heading group-hover:text-[#06b6d4] transition-colors">Industrial Bottle labels</h4>
                  <p className="text-white/50 text-xs font-light">Premium adhesives, transparent synthetic structures, and rotogravure setup.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

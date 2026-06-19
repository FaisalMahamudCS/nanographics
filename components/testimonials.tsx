'use client'

import React from 'react'

const col1Testimonials = [
  {
    quote: "NanoGraphic rebuilt our brand from the ground up—logo, palette, and guidelines our whole team actually uses. We finally look like the company we want to be.",
    name: "Alex Rivera",
    role: "Founder, Northline Co.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4"
  },
  {
    quote: "They designed and shipped our marketing site in weeks. Clean layout, strong typography, and conversions jumped after launch.",
    name: "Sarah Chen",
    role: "Marketing Director",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf"
  },
  {
    quote: "From moodboards to final motion assets, the campaign creative felt premium and on-brand. Easy to work with and fast on revisions.",
    name: "David Kim",
    role: "Brand Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=c0aede"
  }
]

const col2Testimonials = [
  {
    quote: "Our product UI went from cluttered to confident. NanoGraphic gave us a design system our engineers could implement without guesswork.",
    name: "Emily Watson",
    role: "Product Lead, Slate App",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=d1d4f9"
  },
  {
    quote: "They think like strategists, not just pixel pushers. Every deck, page, and ad felt intentional—and our clients noticed immediately.",
    name: "Michael Chang",
    role: "Creative Director",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=ffd5dc"
  },
  {
    quote: "We needed an agency that could own brand and digital in one place. NanoGraphic delivered both with zero drama.",
    name: "Jessica Taylor",
    role: "CEO, Studio Orbit",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica&backgroundColor=ffdfbf"
  }
]

export default function Testimonials() {
  // Duplicate arrays to make scrolling animation infinite
  const column1 = [...col1Testimonials, ...col1Testimonials, ...col1Testimonials]
  const column2 = [...col2Testimonials, ...col2Testimonials, ...col2Testimonials]

  return (
    <section className="relative z-20 py-24 md:py-32 bg-[#08080a] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Description Column */}
          <div className="flex-1 text-center lg:text-left text-white max-w-xl">
            <span className="text-[#06b6d4] text-xs font-semibold tracking-[0.25em] mb-4 uppercase block font-heading">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] font-heading mb-6">
              What clients say <br className="hidden md:block"/>
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#06b6d4]">
                about our studio
              </span>
            </h2>
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
              Partners trust NanoGraphic to turn messy briefs into clear brand identities, high-conversion websites, and campaign motion systems that actually ship.
            </p>
          </div>

          {/* Right Scrolling Columns Container */}
          <div className="flex-1 flex gap-6 justify-center h-[520px] md:h-[620px] overflow-hidden mask-image-linear-vertical w-full max-w-2xl">
            
            {/* Scroll Column 1 (Moves Upwards) */}
            <div className="w-full max-w-sm overflow-hidden relative">
              <div className="flex flex-col gap-6 animate-scroll-y-1 pb-6">
                {column1.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 md:p-8 rounded-[1.75rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-xl w-full text-white hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-xs md:text-sm leading-relaxed text-white/70 font-light">
                      “{item.quote}”
                    </div>
                    <div className="flex items-center gap-3.5 mt-6">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="h-10 w-10 rounded-full object-cover border border-[#06b6d4]/40 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex flex-col text-left">
                        <div className="font-heading font-bold text-xs md:text-sm text-white group-hover:text-[#06b6d4] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[9px] text-white/40 tracking-wider font-semibold uppercase mt-0.5">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Column 2 (Moves Downwards on desktop) */}
            <div className="w-full max-w-sm overflow-hidden relative hidden md:block">
              <div className="flex flex-col gap-6 animate-scroll-y-2 pb-6">
                {column2.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 md:p-8 rounded-[1.75rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-xl w-full text-white hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-xs md:text-sm leading-relaxed text-white/70 font-light">
                      “{item.quote}”
                    </div>
                    <div className="flex items-center gap-3.5 mt-6">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="h-10 w-10 rounded-full object-cover border border-[#06b6d4]/40 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex flex-col text-left">
                        <div className="font-heading font-bold text-xs md:text-sm text-white group-hover:text-[#06b6d4] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[9px] text-white/40 tracking-wider font-semibold uppercase mt-0.5">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

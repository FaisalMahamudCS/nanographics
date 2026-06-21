'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLHeadingElement>(null)
  const heroSubtextRef = useRef<HTMLParagraphElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // 1. Text Reveal Animation for Hero Title
      const wordAnims = heroTextRef.current?.querySelectorAll('.word-anim-inner')
      if (wordAnims) {
        gsap.fromTo(
          wordAnims,
          { y: '100%' },
          {
            y: '0%',
            duration: 1.2,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.2
          }
        )
      }

      // Fade in subtext and CTA buttons
      gsap.fromTo(
        heroSubtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 0.7, duration: 1, ease: 'power3.out', delay: 0.8 }
      )

      gsap.fromTo(
        '.cta-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 1 }
      )

      // 2. Continuous Spin for Central Logo
      gsap.to(logoContainerRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'linear'
      })

      // 3. Scroll Trigger to shrink/fade central logo as user scrolls down
      gsap.to(logoContainerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        scale: 0.35,
        opacity: 0.1,
        y: 220,
      })

      // 4. About Section Animations
      // Word reveal for About Title
      const aboutTitleWords = aboutRef.current?.querySelectorAll('.about-title-inner')
      if (aboutTitleWords) {
        gsap.fromTo(
          aboutTitleWords,
          { y: '100%' },
          {
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 80%',
            },
            y: '0%',
            duration: 1,
            stagger: 0.08,
            ease: 'power3.out'
          }
        )
      }

      // Paragraph blur and slide up reveal
      const aboutText = aboutRef.current?.querySelector('.about-desc')
      if (aboutText) {
        gsap.fromTo(
          aboutText,
          { y: 40, opacity: 0, filter: 'blur(10px)' },
          {
            scrollTrigger: {
              trigger: aboutText,
              start: 'top 85%',
            },
            y: 0,
            opacity: 0.7,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out'
          }
        )
      }

      // About Images reveal
      gsap.fromTo(
        '.about-img-box',
        { y: 60, opacity: 0, filter: 'blur(10px)' },
        {
          scrollTrigger: {
            trigger: '.about-img-box',
            start: 'top 90%',
          },
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out'
        }
      )

      // 5. Team Section Card animations
      const teamCards = gsap.utils.toArray('.team-card')
      gsap.fromTo(
        teamCards,
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Logo hover scale and extra shadow glow
  const handleLogoMouseEnter = () => {
    gsap.to(logoContainerRef.current, {
      scale: 1.12,
      filter: 'drop-shadow(0 0 35px rgba(6, 182, 212, 0.7))',
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const handleLogoMouseLeave = () => {
    gsap.to(logoContainerRef.current, {
      scale: 1,
      filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 0.3))',
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="relative w-full bg-[#050507] text-white overflow-hidden">
      
      {/* Grid Overlay background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none z-0"></div>
      
      {/* Masterclass Banner Promo — right below navbar */}
      <div className="w-full pt-24 pb-0 z-20 relative">

        {/* Label bar above banner */}
        <div className="max-w-5xl mx-auto px-6 mb-3 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00ffff]/30 to-transparent"></div>
          <span className="flex items-center gap-2 text-[#00ffff] text-[10px] font-bold tracking-[0.35em] uppercase font-heading select-none">
            <span className="inline-block w-1.5 h-1.5 bg-[#00ffff] rounded-full animate-pulse"></span>
            Live Masterclass · Batch 4
            <span className="inline-block w-1.5 h-1.5 bg-[#00ffff] rounded-full animate-pulse"></span>
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00ffff]/30 to-transparent"></div>
        </div>

        {/* Banner image frame */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-[#00ffff]/25 bg-[#0c0c0f] p-1 relative overflow-hidden group shadow-[0_0_60px_rgba(0,255,255,0.06)] hover:shadow-[0_0_80px_rgba(0,255,255,0.12)] transition-all duration-500">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00ffff]/70 z-10"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00ffff]/70 z-10"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00ffff]/70 z-10"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00ffff]/70 z-10"></div>

            {/* Scanline overlay (aesthetic) */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.015)_2px,rgba(0,255,255,0.015)_4px)] pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-500"></div>

            {/* The actual banner image */}
            <div className="relative w-full overflow-hidden aspect-[16/7]">
              <img 
                src="/Banner Ai.png" 
                alt="AI-Powered Packaging Design Masterclass — Batch 4 by Mujibur Rahman, CEO NanoGraphic" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.012]"
              />
              {/* Bottom gradient fade to integrate with page */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#050507] to-transparent z-10"></div>
            </div>
          </div>
        </div>

        {/* Info strip below banner */}
        <div className="max-w-5xl mx-auto px-6 mt-0">
          <div className="border-x border-b border-[#00ffff]/15 bg-[#08080a] grid grid-cols-2 md:grid-cols-4 divide-x divide-[#ffffff07]">
            {[
              { label: 'Registration Last Date', value: '05-August-2026' },
              { label: 'Class Start', value: '09-August-2026' },
              { label: 'Live Class On', value: 'Google Meet' },
              { label: 'Mentor', value: 'Mujibur Rahman' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-3 px-4 gap-0.5">
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">{item.label}</span>
                <span className="text-xs font-bold text-[#00ffff] tracking-wide font-heading">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom neon divider line */}
        <div className="max-w-5xl mx-auto px-6 mt-0">
          <div className="h-px bg-gradient-to-r from-transparent via-[#00ffff]/40 to-transparent"></div>
        </div>

      </div>

      {/* 1. Hero Section */}
      <section className="relative z-10 w-full min-h-[85vh] flex flex-col items-center justify-center pt-16 pb-20 px-6">
        <span className="text-[#00ffff] font-semibold tracking-[0.25em] uppercase mb-8 text-xs md:text-sm tracking-[0.3em] opacity-90 font-heading">
          Brand · Digital · Campaigns
        </span>
        
        <div className="relative w-full flex flex-col items-center mb-8">
          <h1 ref={heroTextRef} className="text-[clamp(4.2rem,17vw,240px)] font-black uppercase leading-[0.82] tracking-tighter text-center mix-blend-difference z-20 font-heading select-none">
            <span className="block overflow-hidden h-fit">
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#00bcff] word-anim-inner">Nano</span>
            </span>
            <span className="block overflow-hidden h-fit">
              <span className="block text-white word-anim-inner">Graphic</span>
            </span>
          </h1>

          {/* Interlocking NG Logo in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto mix-blend-screen">
            <div 
              ref={logoContainerRef}
              onMouseEnter={handleLogoMouseEnter}
              onMouseLeave={handleLogoMouseLeave}
              className="w-36 h-36 md:w-[22rem] md:h-[22rem] rounded-none flex items-center justify-center hover:scale-105 transition-all duration-500 cursor-pointer filter drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#0088ff" />
                  </linearGradient>
                </defs>

                {/* Outer Hexagon */}
                <polygon 
                  points="100,20 170,60 170,140 100,180 30,140 30,60" 
                  fill="none" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="8" 
                  strokeLinejoin="round" 
                />

                {/* Isometric Interlocking N */}
                <path 
                  d="M 65 140 L 65 75 L 115 125 L 115 80" 
                  fill="none" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="14" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                {/* Isometric Interlocking G */}
                <path 
                  d="M 140 85 L 140 145 L 85 145 L 85 110 L 115 110" 
                  fill="none" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="14" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </div>
        </div>

        <p ref={heroSubtextRef} className="mt-14 max-w-xl text-center text-sm md:text-lg font-light text-white/60 leading-relaxed z-20">
          A design agency for bold brands—identity, digital, and campaigns crafted to feel unmistakably yours.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5 z-20">
          <button 
            onClick={scrollToWork}
            className="cta-btn px-8 py-4 rounded-none bg-gradient-to-r from-[#00ffff] to-[#0088ff] text-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            See Our Work
          </button>
          <button 
            onClick={scrollToServices}
            className="cta-btn px-8 py-4 rounded-none border border-white/10 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/5 hover:border-[#00ffff]/30 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            Our Services
          </button>
        </div>
      </section>

      {/* 2. About / Philosophy Section */}
      <section ref={aboutRef} className="relative z-10 w-full py-32 px-6 border-t border-white/5 bg-[#08080a]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#00ffff] font-semibold tracking-[0.2em] uppercase text-xs mb-6 block font-heading">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mb-8 tracking-tight font-heading leading-tight">
            <span className="block overflow-hidden h-fit">
              <span className="inline-block about-title-inner">A Legacy of Excellence,</span>
            </span>
            <span className="block overflow-hidden h-fit">
              <span className="inline-block about-title-inner">How Our Dedication Fuels</span>
            </span>
            <span className="block overflow-hidden h-fit">
              <span className="inline-block about-title-inner">Everything We Do.</span>
            </span>
          </h2>
          <p className="about-desc text-white/60 text-sm sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            From day one, our mission has been to create solutions that inspire, empower, and make a difference. With a commitment to quality and creativity, we turn ideas into functional, beautiful realities.
          </p>
        </div>

        {/* Square & Aesthetic Grid Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          <div className="flex flex-col gap-4">
            <figure 
              className="about-img-box w-full aspect-[4/3] overflow-hidden border border-white/10 bg-[#0c0c0f] p-1 shadow-2xl transition-all duration-500 hover:border-[#00ffff]/60 hover:scale-[1.01] group cursor-pointer"
            >
              <div className="w-full h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#00ffff]/5 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/docx_image5.png" 
                  alt="Factory production press machinery" 
                  className="object-cover w-full h-full transition-transform duration-700 ease-out filter brightness-75 group-hover:brightness-95 group-hover:scale-105"
                />
              </div>
            </figure>
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase">01 / MANUFACTURING</span>
              <span className="text-xs font-semibold text-white/70">Worldly Rotogravure Press</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:mt-12">
            <figure 
              className="about-img-box w-full aspect-[4/3] overflow-hidden border border-white/10 bg-[#0c0c0f] p-1 shadow-2xl transition-all duration-500 hover:border-[#00ffff]/60 hover:scale-[1.01] group cursor-pointer"
            >
              <div className="w-full h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#00ffff]/5 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/docx_image1.png" 
                  alt="Creative team board meeting" 
                  className="object-cover w-full h-full transition-transform duration-700 ease-out filter brightness-75 group-hover:brightness-95 group-hover:scale-105"
                />
              </div>
            </figure>
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase">02 / CONSULTATION</span>
              <span className="text-xs font-semibold text-white/70">Client Boardroom Collaboration</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section ref={teamRef} className="relative z-10 w-full py-32 px-6 bg-[#050507]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div>
              <span className="text-[#00ffff] font-semibold tracking-widest uppercase text-xs mb-4 block font-heading">
                THE CREATORS
              </span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-none font-heading">
                Meet<br/>The Team
              </h2>
            </div>
            <p className="mt-8 md:mt-0 text-white/50 max-w-sm text-sm md:text-base font-light leading-relaxed">
              We are a collective of designers, engineers, and strategists working together to build exceptional brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {[
              { name: "Alex Rivera", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
              { name: "Sarah Chen", role: "Lead Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
              { name: "David Kim", role: "Motion Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop" },
              { name: "Emma Watson", role: "Product Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop" }
            ].map((member, idx) => (
              <div key={idx} className="team-card group cursor-pointer text-center">
                <div 
                  className="relative w-full aspect-[4/5] overflow-hidden bg-[#111] mb-6 p-1 border border-white/5 shadow-xl transition-all duration-500 group-hover:border-[#00ffff]/40 group-hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-[#00ffff]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#00ffff] transition-colors font-heading">
                  {member.name}
                </h3>
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

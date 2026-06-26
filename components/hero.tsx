'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const departments = [
  {
    title: 'Branding Design',
    subtitle: 'Identity & Visual Systems',
    description: 'Logos, visual systems, tone of voice, and brand guidelines that give your business a clear, confident presence across every touchpoint.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    color: 'from-[#00ffff]/20 to-[#0088ff]/10'
  },
  {
    title: 'Thumbnail Design',
    subtitle: 'High CTR Visuals',
    description: 'Eye-catching thumbnails that boost click-through rates and make your content stand out in crowded feeds.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    color: 'from-[#a855f7]/20 to-[#6366f1]/10'
  },
  {
    title: 'Video Editing',
    subtitle: 'High-End Production',
    description: 'Professional video editing that transforms raw footage into polished, engaging content ready for any platform.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    color: 'from-[#f43f5e]/20 to-[#d946ef]/10'
  },
  {
    title: 'Motion Design',
    subtitle: 'Dynamic Animation',
    description: 'Dynamic animations and motion graphics that bring your brand to life and captivate your audience.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    color: 'from-[#10b981]/20 to-[#3b82f6]/10'
  }
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLHeadingElement>(null)
  const heroSubtextRef = useRef<HTMLParagraphElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const deptsRef = useRef<HTMLDivElement>(null)
  const deptCardsRef = useRef<HTMLDivElement[]>([])

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

      // 4.5 Department stacking — exact GSAP stack pattern (reference impl)
      const stackSection = deptsRef.current?.querySelector('.dept-stack-section')
      const stackCards = Array.from(
        deptsRef.current?.querySelectorAll('.dept-card') || []
      ) as HTMLElement[]

      if (stackSection && stackCards.length > 0) {
        // Initial deck state — stacked with depth offsets
        stackCards.forEach((card, i) => {
          gsap.set(card, {
            y: i * 18,
            scale: 1 - i * 0.04,
            zIndex: stackCards.length - i,
          })
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stackSection,
            start: 'top top',
            end: `+=${stackCards.length * 900}`,
            scrub: 1,
            pin: true,
          },
        })

        stackCards.forEach((card, i) => {
          if (i === stackCards.length - 1) return

          // Current card flies off
          tl.to(card, {
            y: -900,
            scale: 0.85,
            rotation: -6,
            opacity: 0,
            duration: 1,
            ease: 'none',
          })

          // Remaining cards advance one step forward
          for (let j = i + 1; j < stackCards.length; j++) {
            tl.to(
              stackCards[j],
              {
                y: (j - i - 1) * 18,
                scale: 1 - (j - i - 1) * 0.04,
                duration: 1,
                ease: 'none',
              },
              '<'
            )
          }
        })
      }

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

      {/* 1. Hero Section */}
      <section className="relative z-10 w-full min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 group">
        <div className="relative w-full max-w-5xl mx-auto mb-8 text-[#00ffff] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm tracking-[0.3em] opacity-90 font-heading">
          <span className="block mb-4">Brand · Digital · Campaigns</span>
          <div className="relative h-12 w-full overflow-visible pointer-events-none">
            {/* AI Icon — floats top → bottom */}
            <motion.img
              src="/Icon/Ai Icon.svg"
              alt="AI Icon"
              className="absolute left-[15%] top-0 h-10 w-10 md:h-14 md:w-14"
              animate={{ y: [0, 30, 0] }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            {/* Ps Icon — floats left → right */}
            <motion.img
              src="/Icon/Ps Icon.svg"
              alt="Photoshop Icon"
              className="absolute right-[15%] top-0 h-10 w-10 md:h-14 md:w-14"
              animate={{ x: [0, 30, 0] }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col items-center mb-8">
          <h1 ref={heroTextRef} className="text-[clamp(4.2rem,17vw,240px)] font-black uppercase leading-[0.82] tracking-tighter text-center mix-blend-difference z-20 font-heading select-none">
            <span className="block overflow-hidden h-fit">
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#0088ff] word-anim-inner">Nano</span>
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
                viewBox="0 0 276.89 239.96"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#0088ff" />
                  </linearGradient>
                </defs>
                <g fill="url(#logoGrad)">
                  <polygon points="185.17,65.12 185.17,114.14 184.13,113.53 171.08,105.85 171.08,73.16 170.21,72.65 157,64.87 156.36,64.49 142.91,56.57 142.5,56.34 128.82,64.46 128.69,64.55 114.86,72.75 114.74,72.68 114.74,83.29 100.65,74.99 100.65,64.81 101.01,64.6 114.74,56.45 114.83,56.4 128.66,48.18 128.82,48.28 128.82,48.09 142.47,39.98 142.91,40.24 156.33,48.14 157,48.53 170.18,56.29 171.08,56.82 184.03,64.45" />
                  <polygon points="199.55,169.9 199.25,170.07 198.07,170.77 185.17,178.44 184.24,178.98 171.08,186.8 170.43,187.18 157,195.16 156.6,195.39 142.91,203.52 142.78,203.61 128.92,195.44 128.82,195.39 115.07,187.29 114.74,187.09 101.21,179.13 100.65,178.8 100.65,102.92 114.74,111.2 114.74,170.74 115.04,170.92 128.82,179.04 128.82,179.13 128.89,179.08 142.75,187.23 142.91,187.14 156.56,179.03 157,178.78 170.39,170.82 157,162.94 157,146.26 171.04,154.06 171.08,154.08" />
                  <polygon points="213.34,81.7 213.34,163.42 211.89,162.56 199.25,155.13 198.04,154.41 185.17,146.83 184.19,146.26 171.08,138.54 170.33,138.1 157,130.25 156.48,129.95 142.91,121.95 142.62,121.79 128.82,113.66 128.82,113.6 128.76,113.63 114.92,105.48 114.74,105.37 101.06,97.32 100.65,97.08 87.21,89.17 86.57,88.79 86.57,170.51 73.51,162.82 72.48,162.21 72.48,81.54 73.36,81.02 86.57,73.17 87.18,72.81 100.65,80.73 101.03,80.96 114.74,89.03 114.74,89.21 114.89,89.11 128.74,97.27 128.82,97.31 142.59,105.42 142.91,105.61 156.45,113.58 157,113.91 170.3,121.74 171.08,122.19 184.16,129.89 185.17,130.49 198.01,138.05 199.25,138.77 199.25,73.4 211.74,80.76" />
                </g>
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
            className="cta-btn px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffff] to-[#0088ff] text-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            See Our Work
          </button>
          <button
            onClick={scrollToServices}
            className="cta-btn px-8 py-4 rounded-full border border-white/10 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/5 hover:border-[#00ffff]/30 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            Our Services
          </button>
        </div>
      </section>

      {/* Masterclass Banner Promo — now second */}
      <div className="w-full pt-0 pb-16 z-20 relative">

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
                src="/Banner/Banner/Banner Ai.png"
                alt="AI-Powered Packaging Design Masterclass — Batch 4 by Mujibur Rahman, CEO NanoGraphic"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.012]"
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

        {/* Center-aligned single layout after removing the second column */}

      </section>

      {/* 2.5 Departments Stacking Section */}
      <section ref={deptsRef} className="relative z-10 w-full bg-[#050507] text-white" id="what-we-do">

        {/* Section Header — scrolls normally before the pinned stack */}
        <div className="w-full shrink-0 flex flex-col items-center justify-center px-6 pt-20 pb-10 md:pt-28 md:pb-14 text-center">
          <span className="text-[#00ffff] text-xs font-semibold tracking-[0.25em] uppercase font-heading block">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold uppercase text-white tracking-tight font-heading">
            What we do
          </h2>
          <p className="mt-5 max-w-2xl text-sm md:text-lg font-light text-white/70 leading-relaxed">
            NanoGraphic helps brands show up with clarity—crafting identity systems, digital experiences,
            and campaign creative that feel bold, cohesive, and ready for the real world.
          </p>
        </div>

        {/* Stack section — GSAP pins this and drives all card animations */}
        <div className="dept-stack-section">
          <div className="w-full h-screen flex items-center justify-center overflow-hidden relative">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="dept-card absolute w-full max-w-5xl h-[75vh] md:h-[85vh] px-4 md:px-0"
              >
                {/* Card */}
                <div className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#0b0b0d] shadow-[0_20px_80px_rgba(0,0,0,0.85)] border border-white/[0.06]">

                  {/* Accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r ${dept.color}`} />

                  {/* Background image wrapper and image */}
                  <div className="w-full h-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
                    <img
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />

                  {/* Card counter */}
                  <div className="absolute top-6 left-7 z-20">
                    <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-white/30 font-heading">
                      {String(index + 1).padStart(2, '0')} / {String(departments.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-center z-10">
                    <p className="text-[#00ffff] text-[10px] font-bold tracking-[0.3em] uppercase font-heading mb-2">
                      {dept.subtitle}
                    </p>
                    <h3 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-3">
                      {dept.title}
                    </h3>
                    <p className="text-white/65 text-sm md:text-base font-light max-w-md mx-auto leading-relaxed mb-6">
                      {dept.description}
                    </p>
                    <button
                      onClick={() => {
                        const el = document.getElementById('contact')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="px-7 py-3.5 rounded-full bg-[#00ffff] text-black font-heading font-bold text-xs uppercase tracking-wide shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] hover:scale-105 transition-all cursor-pointer active:scale-95"
                    >
                      View Details
                    </button>
                  </div>

                </div>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {[
              {
                name: "Mujib Ur Rahman",
                role: "Graphics Designer",
                img: "/team/mujob.jpg"
              },
              {
                name: "Umar Faruq Riad",
                role: "Video Editor · Sound Compressor",
                img: "/team/omar.jpg"
              },

              {
                name: "Faisal Mahamud",
                role: "Full Stack Software Engineer",
                img: "/team/faisal.png"
              },
            ].map((member, idx) => (
              <div key={idx} className="team-card group cursor-pointer text-center">
                <div
                  className="relative w-full aspect-square overflow-hidden bg-[#111] mb-6 p-1 border border-white/5 shadow-xl transition-all duration-500 group-hover:border-[#00ffff]/40 group-hover:scale-[1.02] rounded-[10px]"
                >
                  <div className="absolute inset-0 bg-[#00ffff]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-[10px]"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 rounded-[9px]"
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

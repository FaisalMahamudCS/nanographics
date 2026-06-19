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
      
      {/* Background Squiggle Clip-Path SVG definitions */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <clipPath id="clip-squiggle" clipPathUnits="objectBoundingBox">
            <path d="M0.434125 0.00538712C0.56323 -0.00218488 0.714575 -0.000607013 0.814404 0.00302954L0.802642 0.163537C0.813884 0.167475 0.824927 0.172002 0.835358 0.177236C0.869331 0.194281 0.909224 0.225945 0.90824 0.27348C0.907177 0.324883 0.858912 0.354946 0.822651 0.36933C0.857426 0.376783 0.894591 0.387558 0.925837 0.404287C0.968002 0.426862 1.00569 0.464702 0.999287 0.515878C0.993163 0.564818 0.950731 0.597642 0.904098 0.615682C0.88204 0.624216 0.858239 0.62992 0.834803 0.633808C0.858076 0.639299 0.881603 0.646639 0.90267 0.656757C0.946271 0.677698 0.986875 0.715485 0.978905 0.768037C0.972241 0.811979 0.93615 0.843109 0.895204 0.862035C0.858032 0.879217 0.815169 0.887544 0.778534 0.892219C0.704792 0.901628 0.614366 0.901003 0.535183 0.899176C0.508115 0.898551 0.482286 0.89779 0.45773 0.897065C0.404798 0.895504 0.357781 0.894117 0.317008 0.894657C0.301552 0.894862 0.289265 0.895348 0.279749 0.895976C0.251913 0.937168 0.226467 0.980907 0.216015 1L0 0.941216C0.0140558 0.915539 0.051354 0.851547 0.0902557 0.797766C0.118421 0.758828 0.1722 0.745373 0.200402 0.740217C0.168437 0.733484 0.134299 0.723597 0.105102 0.708076C0.0614715 0.684884 0.0263696 0.64687 0.0325498 0.596965C0.0385804 0.548267 0.0803829 0.515256 0.12709 0.496909C0.146901 0.489127 0.168128 0.483643 0.189242 0.479724C0.163739 0.476035 0.137977 0.471053 0.115188 0.463936C0.0874831 0.455285 0.00855855 0.424854 0.016569 0.357817C0.0231721 0.302559 0.0838593 0.276249 0.116031 0.266164C0.149646 0.255625 0.188201 0.2505 0.221821 0.247468C0.208809 0.243824 0.195905 0.239492 0.183801 0.234287C0.152543 0.220846 0.101565 0.189547 0.105449 0.136312C0.108467 0.0949629 0.144168 0.0682612 0.171101 0.0543099C0.197578 0.0405945 0.227933 0.032236 0.25348 0.0267029C0.305656 0.0154021 0.370636 0.00911076 0.434125 0.00538712Z" />
          </clipPath>
          <clipPath id="differentone16" clipPathUnits="objectBoundingBox">
            <path d="M0.911218 0.329658C0.917139 0.29671 0.914994 0.262818 0.904967 0.23088C0.894939 0.198941 0.877327 0.169906 0.853635 0.146256C0.829944 0.122605 0.800878 0.105043 0.768923 0.0950708C0.736967 0.0850983 0.703072 0.083012 0.670134 0.0889901C0.651042 0.0615242 0.625587 0.0390856 0.595943 0.0235895C0.566299 0.00809344 0.533346 0 0.499896 0C0.466446 0 0.433493 0.00809344 0.403849 0.0235895C0.374204 0.0390856 0.34875 0.0615242 0.329658 0.0889901C0.29675 0.0830893 0.262904 0.0852337 0.231005 0.0952406C0.199106 0.105248 0.1701 0.12282 0.14646 0.14646C0.12282 0.1701 0.105248 0.199106 0.0952406 0.231005C0.0852337 0.262904 0.0830893 0.29675 0.0889901 0.329658C0.0615242 0.34875 0.0390856 0.374204 0.0235895 0.403849C0.00809344 0.433493 0 0.466446 0 0.499896C0 0.533346 0.00809344 0.566299 0.0235895 0.595943C0.0390856 0.625587 0.0615242 0.651042 0.0889901 0.670134C0.0830405 0.703077 0.0851562 0.73697 0.0951563 0.768917C0.105156 0.800864 0.122744 0.829915 0.146414 0.853586C0.170085 0.877256 0.199136 0.894844 0.231083 0.904844C0.26303 0.914844 0.296923 0.916959 0.329866 0.91101C0.348958 0.938476 0.374413 0.960914 0.404057 0.97641C0.433701 0.991907 0.466654 1 0.500104 1C0.533554 1 0.566507 0.991907 0.596151 0.97641C0.625796 0.960914 0.65125 0.938476 0.670343 0.91101C0.70327 0.916921 0.737139 0.914776 0.769057 0.904759C0.800976 0.894741 0.829997 0.877149 0.853642 0.853483C0.877287 0.829818 0.894854 0.800782 0.904844 0.768854C0.914834 0.736927 0.916949 0.703056 0.91101 0.670134C0.938476 0.651042 0.960914 0.625587 0.97641 0.595943C0.991907 0.566299 1 0.533346 1 0.499896C1 0.466446 0.991907 0.433493 0.97641 0.403849C0.960914 0.374204 0.938476 0.34875 0.91101 0.329658H0.911218Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Grid Overlay background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none z-0"></div>
      
      {/* 1. Hero Section */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-36 pb-20 px-6">
        <span className="text-[#06b6d4] font-semibold tracking-[0.25em] uppercase mb-8 text-xs md:text-sm tracking-[0.3em] opacity-90 font-heading">
          Brand · Digital · Campaigns
        </span>
        
        <div className="relative w-full flex flex-col items-center mb-8">
          <h1 ref={heroTextRef} className="text-[clamp(4.2rem,17vw,240px)] font-black uppercase leading-[0.82] tracking-tighter text-center mix-blend-difference z-20 font-heading select-none">
            <span className="block overflow-hidden h-fit">
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#06b6d4] word-anim-inner">Nano</span>
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
              className="w-36 h-36 md:w-[22rem] md:h-[22rem] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-500 cursor-pointer filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#06b6d4" />
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
            className="cta-btn px-8 py-4 rounded-full bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            See Our Work
          </button>
          <button 
            onClick={scrollToServices}
            className="cta-btn px-8 py-4 rounded-full border border-white/10 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            Our Services
          </button>
        </div>
      </section>

      {/* 2. About / Philosophy Section */}
      <section ref={aboutRef} className="relative z-10 w-full py-32 px-6 border-t border-white/5 bg-[#08080a]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#06b6d4] font-semibold tracking-[0.2em] uppercase text-xs mb-6 block font-heading">
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

        {/* Dynamic Squiggly Images Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8 pt-12 h-64 md:h-96">
          <figure 
            className="about-img-box w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] group cursor-pointer"
            style={{ clipPath: 'url(#clip-squiggle)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
              alt="Studio team" 
              className="object-cover w-full h-full rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out filter brightness-75 group-hover:brightness-100"
            />
          </figure>
          <figure 
            className="about-img-box w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] group cursor-pointer"
            style={{ clipPath: 'url(#differentone16)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" 
              alt="Creative process" 
              className="object-cover w-full h-full -rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out filter brightness-75 group-hover:brightness-100"
            />
          </figure>
        </div>
      </section>

      {/* 3. Team Section */}
      <section ref={teamRef} className="relative z-10 w-full py-32 px-6 bg-[#050507]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div>
              <span className="text-[#06b6d4] font-semibold tracking-widest uppercase text-xs mb-4 block font-heading">
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
              { name: "Alex Rivera", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop", style: 'clip-squiggle' },
              { name: "Sarah Chen", role: "Lead Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop", style: 'differentone16' },
              { name: "David Kim", role: "Motion Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop", style: 'clip-squiggle' },
              { name: "Emma Watson", role: "Product Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop", style: 'differentone16' }
            ].map((member, idx) => (
              <div key={idx} className="team-card group cursor-pointer text-center">
                <div 
                  className="relative w-full aspect-[4/5] overflow-hidden bg-[#111] mb-6 shadow-xl transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ clipPath: `url(#${member.style})` }}
                >
                  <div className="absolute inset-0 bg-[#06b6d4]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#06b6d4] transition-colors font-heading">
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

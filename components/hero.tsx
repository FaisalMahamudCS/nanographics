'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLHeadingElement>(null)
  const heroSubtextRef = useRef<HTMLParagraphElement>(null)
  const workSectionRef = useRef<HTMLElement>(null)
  const capabilitiesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(heroTextRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      })

      gsap.from(heroSubtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      })

      gsap.from('.cta-btn', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.8
      })

      // Continuous slow spin for the logo
      gsap.to(logoContainerRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear'
      })

      // Scroll animation for logo (shrinks and fades slightly as you scroll down)
      gsap.to(logoContainerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 0.5,
        opacity: 0.2,
        y: 300,
      })

      // Capabilities Section Animation
      const cards = gsap.utils.toArray('.capability-card')
      gsap.from(cards, {
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })

      // Work Section Parallax
      gsap.from('.work-image', {
        scrollTrigger: {
          trigger: workSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -100,
        scale: 1.1
      })

      // Team Section Animation
      const teamCards = gsap.utils.toArray('.team-card')
      gsap.from(teamCards, {
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full bg-background text-foreground overflow-x-hidden">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <span className="text-cyan-400 font-semibold tracking-widest uppercase mb-8 text-sm md:text-base tracking-[0.2em] opacity-80">
          Brand · Digital · Campaigns
        </span>
        
        <div className="relative w-full flex flex-col items-center mb-8">
          <h1 ref={heroTextRef} className="text-[clamp(4rem,15vw,200px)] font-bold uppercase leading-[0.85] tracking-tighter text-center mix-blend-difference z-20">
            <span className="block text-cyan-400">Nano</span>
            <span className="block text-white">Graphic</span>
          </h1>

          {/* Center Spinning Logo inspired by DesignEarth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto mix-blend-screen">
            <div 
              ref={logoContainerRef}
              className="w-32 h-32 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)] hover:scale-110 transition-transform duration-500"
            >
              <svg
                viewBox="0 0 200 240"
                className="w-full h-full filter drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                </defs>

                {/* Outer Hexagon */}
                <polygon 
                  points="100,20 170,60 170,140 100,180 30,140 30,60" 
                  fill="none" 
                  stroke="url(#cyanGrad)" 
                  strokeWidth="6" 
                  strokeLinejoin="round" 
                />

                {/* Isometric Interlocking N */}
                <path 
                  d="M 65 140 L 65 75 L 115 125 L 115 80" 
                  fill="none" 
                  stroke="url(#cyanGrad)" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                {/* Isometric Interlocking G */}
                <path 
                  d="M 140 85 L 140 145 L 85 145 L 85 110 L 115 110" 
                  fill="none" 
                  stroke="url(#cyanGrad)" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </div>
        </div>

        <p ref={heroSubtextRef} className="mt-12 max-w-2xl text-center text-lg md:text-2xl font-light text-white/70 leading-relaxed z-20 backdrop-blur-sm p-4 rounded-xl">
          A design agency for bold brands—identity, digital, and campaigns crafted to feel unmistakably yours.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 z-20">
          <button className="cta-btn px-10 py-5 rounded-full bg-cyan-400 text-black font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.7)] hover:scale-105 transition-all duration-300">
            See Our Work
          </button>
          <button className="cta-btn px-10 py-5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md">
            Our Services
          </button>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="relative z-10 w-full py-32 px-6 bg-black/50 border-t border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4 block">Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">What We Do</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Branding Design",
                desc: "Logos, visual systems, and tone of voice that give your business a clear, confident presence.",
                icon: "M 30 60 L 100 20 L 170 60 L 170 140 L 100 180 L 30 140 Z"
              },
              {
                title: "Digital Products",
                desc: "Websites and apps that balance stunning aesthetics with seamless, intuitive user experiences.",
                icon: "M 40 40 H 160 V 160 H 40 Z M 40 80 H 160"
              },
              {
                title: "Motion & Video",
                desc: "Dynamic animations and video editing that bring your brand to life and captivate your audience.",
                icon: "M 60 40 L 160 100 L 60 160 Z"
              }
            ].map((item, idx) => (
              <div key={idx} className="capability-card relative p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-400/50 transition-colors duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-8 w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20 text-cyan-400">
                  <svg viewBox="0 0 200 200" className="w-8 h-8 fill-none stroke-current stroke-[8] stroke-linejoin-round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
                <div className="mt-8 flex items-center text-cyan-400 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Explore <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="relative z-10 w-full py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div>
              <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4 block">The Creators</span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none">Meet<br/>The Team</h2>
            </div>
            <p className="mt-8 md:mt-0 text-white/60 max-w-sm text-lg font-light">
              We are a collective of designers, engineers, and strategists working together to build exceptional brands.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Alex Rivera", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
              { name: "Sarah Chen", role: "Lead Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" },
              { name: "David Kim", role: "Motion Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
              { name: "Emma Watson", role: "Product Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop" }
            ].map((member, idx) => (
              <div key={idx} className="team-card group cursor-pointer">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] mb-6">
                  <div className="absolute inset-0 bg-cyan-400/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Parallax Section */}
      <section ref={workSectionRef} className="relative z-10 w-full py-40 overflow-hidden bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div>
              <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none">Selected<br/>Work</h2>
            </div>
            <button className="mt-8 md:mt-0 text-white font-bold uppercase tracking-widest text-sm border-b border-cyan-400 pb-1 hover:text-cyan-400 transition-colors">
              View All Projects
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-10 mt-20">
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Work 1" className="work-image w-full h-[120%] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                    <div>
                      <h3 className="text-3xl font-bold text-white uppercase">Aura Brand Identity</h3>
                      <p className="text-cyan-400 mt-2 tracking-widest uppercase text-sm font-semibold">Branding / Digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop" alt="Work 2" className="work-image w-full h-[120%] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                    <div>
                      <h3 className="text-3xl font-bold text-white uppercase">Neon Future</h3>
                      <p className="text-cyan-400 mt-2 tracking-widest uppercase text-sm font-semibold">Campaign / Motion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 w-full py-40 px-6 bg-cyan-400 text-black flex flex-col items-center justify-center text-center">
        <h2 className="text-[clamp(3rem,8vw,100px)] font-bold uppercase leading-none tracking-tighter mb-10">
          Ready to build<br/>something <span className="text-white drop-shadow-md">iconic?</span>
        </h2>
        <button className="px-12 py-6 rounded-full bg-black text-cyan-400 font-bold uppercase tracking-widest text-lg shadow-2xl hover:scale-105 hover:bg-zinc-900 transition-all duration-300">
          Start Your Project
        </button>
      </section>
    </div>
  )
}

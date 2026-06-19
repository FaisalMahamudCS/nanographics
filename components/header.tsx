'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<SVGSVGElement>(null)

  const LogoIcon = ({ className = "w-8 h-8", svgRef }: { className?: string, svgRef?: React.RefObject<SVGSVGElement | null> }) => (
    <svg ref={svgRef} className={className} viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nanoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g stroke="url(#nanoGrad)" strokeWidth="16" strokeLinecap="round" filter="url(#glow)">
        <line x1="100" y1="225" x2="40" y2="190" className="logo-line" />
        <line x1="40" y1="190" x2="40" y2="130" className="logo-line" />
        <line x1="100" y1="15" x2="160" y2="50" className="logo-line" />
        <line x1="160" y1="50" x2="160" y2="110" className="logo-line" />
        <line x1="40" y1="50" x2="40" y2="110" className="logo-line" />
        <line x1="40" y1="50" x2="100" y2="15" className="logo-line" />
        <line x1="40" y1="110" x2="160" y2="130" className="logo-line" />
        <line x1="160" y1="130" x2="160" y2="190" className="logo-line" />
        <line x1="160" y1="190" x2="100" y2="225" className="logo-line" />
        <line x1="100" y1="165" x2="130" y2="165" className="logo-line" />
        <line x1="100" y1="225" x2="100" y2="165" className="logo-line" />
        <line x1="40" y1="110" x2="100" y2="145" className="logo-line" />
        <line x1="160" y1="110" x2="100" y2="145" className="logo-line" />
        <line x1="40" y1="130" x2="100" y2="95" className="logo-line" />
      </g>
    </svg>
  )

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Registration', id: 'registration' },
    { label: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    // GSAP Entrance Animation for Floating Navbar
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 }
    )

    // GSAP Logo Animation - draw lines effect
    gsap.fromTo(
      '.logo-line',
      { strokeDasharray: 200, strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 2.5, ease: 'power3.inOut', stagger: 0.05, delay: 1 }
    )
    
    // GSAP floating animation for logo
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        y: -3,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // offset for floating navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <div 
        ref={navRef} 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        style={{ opacity: 0 }}
      >
        <nav className="flex items-center overflow-hidden rounded-full border border-white/10 bg-[#09090b]/80 text-white shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-xl h-14 px-3 py-1.5 transition-all duration-300 hover:border-cyan-500/30">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center pr-4 border-r border-white/10 gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center justify-center relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/40 transition-colors duration-500"></div>
              <LogoIcon svgRef={logoRef} className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white uppercase font-heading">
              NanoGraphic
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 pl-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Sticky Navbar */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#09090b]/90 shadow-xl backdrop-blur-md h-14 pl-5 pr-2.5 transition-all duration-300">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center justify-center relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full"></div>
              <LogoIcon className="w-7 h-7 relative z-10" />
            </div>
            <span className="text-xs font-semibold tracking-wider text-white uppercase font-heading">
              NanoGraphic
            </span>
          </div>
          <button 
            aria-label="Open menu" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-white active:scale-95 transition-all cursor-pointer hover:bg-white/10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 rounded-3xl border border-white/10 bg-[#09090b]/95 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-center text-sm font-semibold uppercase tracking-widest py-3.5 rounded-xl transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-black font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

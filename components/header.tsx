'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<SVGSVGElement>(null)

  const LogoIcon = ({ className = "w-8 h-8", svgRef }: { className?: string, svgRef?: React.RefObject<SVGSVGElement | null> }) => (
    <svg ref={svgRef} className={className} viewBox="0 0 276.89 239.96" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nanoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#00cccc" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="url(#nanoGrad)" filter="url(#glow)">
        <polygon className="logo-poly" points="185.17,65.12 185.17,114.14 184.13,113.53 171.08,105.85 171.08,73.16 170.21,72.65 157,64.87 156.36,64.49 142.91,56.57 142.5,56.34 128.82,64.46 128.69,64.55 114.86,72.75 114.74,72.68 114.74,83.29 100.65,74.99 100.65,64.81 101.01,64.6 114.74,56.45 114.83,56.4 128.66,48.18 128.82,48.28 128.82,48.09 142.47,39.98 142.91,40.24 156.33,48.14 157,48.53 170.18,56.29 171.08,56.82 184.03,64.45" />
        <polygon className="logo-poly" points="199.55,169.9 199.25,170.07 198.07,170.77 185.17,178.44 184.24,178.98 171.08,186.8 170.43,187.18 157,195.16 156.6,195.39 142.91,203.52 142.78,203.61 128.92,195.44 128.82,195.39 115.07,187.29 114.74,187.09 101.21,179.13 100.65,178.8 100.65,102.92 114.74,111.2 114.74,170.74 115.04,170.92 128.82,179.04 128.82,179.13 128.89,179.08 142.75,187.23 142.91,187.14 156.56,179.03 157,178.78 170.39,170.82 157,162.94 157,146.26 171.04,154.06 171.08,154.08" />
        <polygon className="logo-poly" points="213.34,81.7 213.34,163.42 211.89,162.56 199.25,155.13 198.04,154.41 185.17,146.83 184.19,146.26 171.08,138.54 170.33,138.1 157,130.25 156.48,129.95 142.91,121.95 142.62,121.79 128.82,113.66 128.82,113.6 128.76,113.63 114.92,105.48 114.74,105.37 101.06,97.32 100.65,97.08 87.21,89.17 86.57,88.79 86.57,170.51 73.51,162.82 72.48,162.21 72.48,81.54 73.36,81.02 86.57,73.17 87.18,72.81 100.65,80.73 101.03,80.96 114.74,89.03 114.74,89.21 114.89,89.11 128.74,97.27 128.82,97.31 142.59,105.42 142.91,105.61 156.45,113.58 157,113.91 170.3,121.74 171.08,122.19 184.16,129.89 185.17,130.49 198.01,138.05 199.25,138.77 199.25,73.4 211.74,80.76" />
      </g>
    </svg>
  )

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    // GSAP Entrance Animation for Floating Navbar
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 }
    )

    // GSAP Logo Animation - scale and fade in polygons
    gsap.fromTo(
      '.logo-poly',
      { scale: 0.7, opacity: 0, transformOrigin: 'center' },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power4.out', stagger: 0.15, delay: 1 }
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
        <nav className="flex items-center overflow-hidden rounded-full border border-white/10 bg-[#09090b]/80 text-white shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-xl h-14 px-3 py-1.5 transition-all duration-300 hover:border-[#00ffff]/30">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center pr-4 border-r border-white/10 gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#00ffff]/20 blur-xl rounded-full group-hover:bg-[#00ffff]/40 transition-colors duration-500"></div>
              <LogoIcon svgRef={logoRef} className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white uppercase font-heading">
              NanoGraphic
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 pl-3">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${activeSection === item.id
                    ? 'bg-[#00ffff] text-black shadow-[0_0_15px_rgba(0,255,255,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
            {/* Package Course — special highlighted link */}
            <Link
              href="/package-course"
              className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00ffff]/60 text-[#00ffff] hover:bg-[#00ffff] hover:text-black shadow-[0_0_12px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 ml-1 whitespace-nowrap"
            >
              Course Details
            </Link>
            <Link
              href="/package-course#registration"
              className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00ffff]/60 text-[#00ffff] hover:bg-[#00ffff] hover:text-black shadow-[0_0_12px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 ml-1 whitespace-nowrap"
            >
              Registration
            </Link>
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${activeSection === item.id
                    ? 'bg-[#00ffff] text-black shadow-[0_0_15px_rgba(0,255,255,0.4)]'
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
              <div className="absolute inset-0 bg-[#00ffff]/20 blur-md rounded-full"></div>
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
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-center text-sm font-semibold uppercase tracking-widest py-3.5 rounded-full transition-all cursor-pointer ${activeSection === item.id
                    ? 'bg-[#00ffff] text-black font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/package-course"
              className="w-full text-center text-sm font-bold uppercase tracking-widest py-3.5 rounded-full border border-[#00ffff]/60 text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all cursor-pointer"
            >
              📦 Package Course
            </Link>
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-center text-sm font-semibold uppercase tracking-widest py-3.5 rounded-full transition-all cursor-pointer ${activeSection === item.id
                    ? 'bg-[#00ffff] text-black font-bold'
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

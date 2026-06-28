'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import { LocalLogoCarousel } from '@/components/LocalLogoCarousel'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Work from '@/components/work'
import Contact from '@/components/contact'
import Testimonials from '@/components/testimonials'

export default function Page() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'work', 'real-projects', 'services', 'registration']
    
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Map 'registration' scroll state to either 'registration' or 'contact' based on ID
              setActiveSection(id)
            }
          })
        },
        { 
          threshold: 0.2, 
          // Offset to trigger when section enters the middle part of viewport
          rootMargin: '-20% 0px -50% 0px' 
        }
      )

      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs?.observer && obs.el) {
          obs.observer.unobserve(obs.el)
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-x-hidden selection:bg-[#06b6d4] selection:text-black">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10 w-full">
        {/* Sections rendered in a single scrollable document */}
        <LocalLogoCarousel />
        <div id="home" className="scroll-mt-20">
          <Hero />
        </div>
        
        <div id="work" className="scroll-mt-20">
          <Work />
        </div>
        
        <div id="services" className="scroll-mt-20">
          <Services />
        </div>
        
        <Testimonials />
        
        <div id="registration" className="scroll-mt-20">
          <div id="contact" className="scroll-mt-20">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}

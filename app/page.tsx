'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Work from '@/components/work'
import Contact from '@/components/contact'

export default function Page() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Hero />}
      {activeSection === 'work' && <Work />}
      {activeSection === 'real-projects' && <Work />}
      {activeSection === 'services' && <Services />}
      {activeSection === 'registration' && <Contact />}
      {activeSection === 'contact' && <Contact />}
    </div>
  )
}

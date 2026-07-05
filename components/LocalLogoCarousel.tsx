import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// List of logo image paths dynamically generated from public directories
const localLogos = Array.from({ length: 35 }, (_, i) => `/Local Logo/Local Company logo-${String(i + 1).padStart(2, '0')}.svg`)
const exportLogos = Array.from({ length: 34 }, (_, i) => `/Export logo/Export Logo-${String(i + 1).padStart(2, '0')}.svg`)
const desktopLogos = Array.from({ length: 4 }, (_, i) => `/Desktop/logo-${String(i + 1).padStart(2, '0')}.svg`)

const logos = [...localLogos, ...exportLogos, ...desktopLogos]

// Duplicate the array so the scroll can loop seamlessly
const duplicatedLogos = [...logos, ...logos]

export const LocalLogoCarousel: React.FC = () => {
  const controls = useAnimationControls()

  const scrollAnimation = {
    x: ['0%', '-50%'], // Move half the width (because we duplicated)
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 120, // Adjusted duration for smooth scrolling of the larger list
        ease: 'linear',
      },
    },
  }

  useEffect(() => {
    controls.start(scrollAnimation)
  }, [controls])

  return (
    <section className="my-16 overflow-hidden py-8 bg-[#090909]">
      <h2 className="text-center text-2xl font-bold text-[#00ffff] mb-6">Our Partners</h2>
      <motion.div
        className="flex gap-8 items-center"
        style={{ width: 'max-content' }}
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => controls.start(scrollAnimation)}
      >
        {duplicatedLogos.map((file, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 w-48 h-48 flex items-center justify-center rounded-full bg-[#111] shadow-[0_0_20px_rgba(0,255,255,0.5)]"
          >
            <img
              src={file}
              alt={`Partner Logo ${i + 1}`}
              className="w-32 h-32 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}



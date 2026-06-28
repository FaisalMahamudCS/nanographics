import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// List of logo image filenames in public/Local Logo folder
const logos = [
  'Local Company logo-01.svg',
  'Local Company logo-02.svg',
  'Local Company logo-03.svg',
  'Local Company logo-04.svg',
  'Local Company logo-05.svg',
  'Local Company logo-06.svg',
  'Local Company logo-07.svg',
  'Local Company logo-08.svg',
  'Local Company logo-09.svg',
  'Local Company logo-10.svg',
  'Local Company logo-11.svg',
  'Local Company logo-12.svg',
  'Local Company logo-13.svg',
  'Local Company logo-14.svg',
  'Local Company logo-15.svg',
  'Local Company logo-16.svg',
  'Local Company logo-17.svg',
  'Local Company logo-18.svg',
  'Local Company logo-19.svg',
  'Local Company logo-20.svg',
  'Local Company logo-21.svg',
  'Local Company logo-22.svg',
  'Local Company logo-23.svg',
  'Local Company logo-24.svg',
  'Local Company logo-25.svg',
  'Local Company logo-26.svg',
  'Local Company logo-27.svg',
  'Local Company logo-28.svg',
  'Local Company logo-29.svg',
  'Local Company logo-30.svg',
  'Local Company logo-31.svg',
  'Local Company logo-32.svg',
  'Local Company logo-33.svg',
  'Local Company logo-34.svg',
  'Local Company logo-35.svg',
  'Brand Logo.svg',
]

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
        duration: 60,
        ease: 'linear',
      },
    },
  }

  useEffect(() => {
    controls.start(scrollAnimation)
  }, [controls])

  return (
    <section className="my-16 overflow-hidden py-8 bg-[#090909]">
      <h2 className="text-center text-2xl font-bold text-[#00ffff] mb-6">Our Local Partners</h2>
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
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex-shrink-0 w-48 h-48 flex items-center justify-center rounded-full bg-[#111] shadow-[0_0_20px_rgba(0,255,255,0.5)]"
          >
            <img
              src={`/Local Logo/${file}`}
              alt={file}
              className="w-32 h-32 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}



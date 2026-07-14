import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const localLogos = Array.from({ length: 35 }, (_, i) => `/Local Logo/Local Company logo-${String(i + 1).padStart(2, '0')}.svg`)
const exportLogos = Array.from({ length: 34 }, (_, i) => `/Export logo/Export Logo-${String(i + 1).padStart(2, '0')}.svg`)
const desktopLogos = Array.from({ length: 4 }, (_, i) => `/Desktop/logo-${String(i + 1).padStart(2, '0')}.svg`)

const logos = [...localLogos, ...exportLogos, ...desktopLogos]
const duplicatedLogos = [...logos, ...logos]

interface LocalLogoCarouselProps {
  embedded?: boolean
}

export const LocalLogoCarousel: React.FC<LocalLogoCarouselProps> = ({ embedded = false }) => {
  const controls = useAnimationControls()

  const scrollAnimation = {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: 120,
        ease: 'linear' as const,
      },
    },
  }

  useEffect(() => {
    controls.start(scrollAnimation)
  }, [controls])

  return (
    <section className={`overflow-hidden py-8 ${embedded ? 'my-0 bg-transparent' : 'my-16 bg-[#090909]'}`}>
      {!embedded && (
        <h2 className="text-center text-2xl font-bold text-[#00ffff] mb-6">Our Partners</h2>
      )}
      <motion.div
        className="flex gap-8 items-center"
        style={{ width: 'max-content' }}
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => controls.start(scrollAnimation)}
      >
        {duplicatedLogos.map((file, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center rounded-full bg-[#111] border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 ease-out hover:scale-110 hover:border-[#00ffff]/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] cursor-pointer"
          >
            <img
              src={file}
              alt={`Partner Logo ${i + 1}`}
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}

import React, { useEffect } from 'react'
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion'

const localLogos = Array.from({ length: 35 }, (_, i) => `/Local Logo/Local Company logo-${String(i + 1).padStart(2, '0')}.svg`)
const exportLogos = Array.from({ length: 34 }, (_, i) => `/Export logo/Export Logo-${String(i + 1).padStart(2, '0')}.svg`)
const desktopLogos = Array.from({ length: 4 }, (_, i) => `/Desktop/logo-${String(i + 1).padStart(2, '0')}.svg`)

const logos = [...localLogos, ...exportLogos, ...desktopLogos]
const duplicatedLogos = [...logos, ...logos]

interface LocalLogoCarouselProps {
  embedded?: boolean
}

/**
 * Hand-drawn "scribble" rings that rotate around each brand — inspired by the
 * Olympic "Our Brands" section. Two SVG layers spin in opposite directions;
 * broken stroke-dasharrays give the sketchy, hand-drawn look.
 */
const ScribbleRings = () => (
  <>
    <svg
      viewBox="0 0 100 100"
      className="brand-ring absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="34 10 20 8 46 12 26 9" />
      <circle cx="50" cy="50" r="43.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="14 8 30 10 22 7" />
    </svg>
    <svg
      viewBox="0 0 100 100"
      className="brand-ring-rev absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48.5" fill="none" stroke="rgba(0,255,255,0.7)" strokeWidth="1" strokeLinecap="round" strokeDasharray="8 12 40 14 28 10 18 9" />
      <circle cx="50" cy="50" r="45.5" fill="none" stroke="rgba(0,255,255,0.35)" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="24 10 16 12 34 8" />
    </svg>
  </>
)

export const LocalLogoCarousel: React.FC<LocalLogoCarouselProps> = ({ embedded = false }) => {
  const controls = useAnimationControls()
  const prefersReducedMotion = useReducedMotion()

  const scrollAnimation = {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: 90,
        ease: 'linear' as const,
      },
    },
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.set({ x: '0%' })
      return
    }
    controls.start(scrollAnimation)
  }, [controls, prefersReducedMotion])

  return (
    <section
      aria-label="Our partner brands"
      className={`relative overflow-hidden py-10 ${embedded ? 'my-0 bg-transparent' : 'my-16 bg-[#090909]'}`}
    >
      {!embedded && (
        <h2 className="section-title text-center text-[#00ffff] mb-6">Our Partners</h2>
      )}

      {/* Edge fades — logos glide in/out softly like the reference marquee */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[#050507] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[#050507] to-transparent" />

      <motion.div
        className="flex gap-8 sm:gap-12 items-center py-3"
        style={{ width: 'max-content' }}
        animate={controls}
        onHoverStart={() => !prefersReducedMotion && controls.stop()}
        onHoverEnd={() => !prefersReducedMotion && controls.start(scrollAnimation)}
      >
        {duplicatedLogos.map((file, i) => (
          <div
            key={i}
            className="brand-disc group relative flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-105"
          >
            {/* Animated hand-drawn scribble rings */}
            <ScribbleRings />

            {/* Inner disc holding the logo */}
            <div className="absolute inset-[10%] rounded-full bg-[#0f0f12] border border-white/10 shadow-[0_0_22px_rgba(0,255,255,0.15)] group-hover:shadow-[0_0_34px_rgba(0,255,255,0.45)] transition-shadow duration-300 flex items-center justify-center overflow-hidden">
              {/* Soft light disc so dark/low-contrast logos stay visible */}
              <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)] transition-colors duration-300" />
              {/* Generous padding keeps every logo fully inside — never cropped */}
              <img
                src={file}
                alt={`Partner logo ${(i % logos.length) + 1}`}
                loading="lazy"
                className="relative z-10 w-[62%] h-[62%] object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

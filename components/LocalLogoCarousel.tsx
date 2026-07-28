'use client'

import React, { useEffect, useRef, useState } from 'react'

const localLogos = Array.from({ length: 35 }, (_, i) => `/Local Logo/Local Company logo-${String(i + 1).padStart(2, '0')}.svg`)
const exportLogos = Array.from({ length: 34 }, (_, i) => `/Export logo/Export Logo-${String(i + 1).padStart(2, '0')}.svg`)
const desktopLogos = Array.from({ length: 4 }, (_, i) => `/Desktop/logo-${String(i + 1).padStart(2, '0')}.svg`)

const logos = [...localLogos, ...exportLogos, ...desktopLogos]
const duplicatedLogos = [...logos, ...logos]

/** Pixels per second — fast continuous marquee */
const AUTO_SCROLL_SPEED = 140

interface LocalLogoCarouselProps {
  embedded?: boolean
}

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
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let raf = 0
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      if (!pausedRef.current && !draggingRef.current) {
        el.scrollLeft += AUTO_SCROLL_SPEED * dt
        const half = el.scrollWidth / 2
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    const onWheelNative = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      if (delta === 0) return
      e.preventDefault()
      el.scrollLeft += delta
      const half = el.scrollWidth / 2
      if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half
      if (el.scrollLeft < 0) el.scrollLeft += half
      pausedRef.current = true
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = setTimeout(() => {
        if (!draggingRef.current) pausedRef.current = false
      }, 900)
    }

    el.addEventListener('wheel', onWheelNative, { passive: false })

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('wheel', onWheelNative)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [])

  const clearResumeTimer = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }

  const pause = () => {
    pausedRef.current = true
  }

  const resume = () => {
    if (!draggingRef.current) pausedRef.current = false
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current
    if (!el) return
    draggingRef.current = true
    pausedRef.current = true
    clearResumeTimer()
    setIsDragging(true)
    dragStartX.current = e.clientX
    dragScrollLeft.current = el.scrollLeft
    el.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || !scrollerRef.current) return
    const dx = e.clientX - dragStartX.current
    scrollerRef.current.scrollLeft = dragScrollLeft.current - dx
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current
    draggingRef.current = false
    setIsDragging(false)
    pausedRef.current = false
    el?.releasePointerCapture(e.pointerId)
  }

  return (
    <section
      aria-label="Our partner brands"
      className={`relative overflow-hidden py-8 ${embedded ? 'my-0 bg-transparent' : 'my-16 bg-[#090909]'}`}
    >
      {!embedded && (
        <h2 className="section-title text-center text-[#00ffff] mb-6">Our Partners</h2>
      )}

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-[#050507] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-[#050507] to-transparent" />

      <div
        ref={scrollerRef}
        className={`flex gap-5 sm:gap-7 items-center py-2 overflow-x-auto overscroll-x-contain select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ touchAction: 'pan-x' }}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {duplicatedLogos.map((file, i) => (
          <div
            key={i}
            className="brand-disc group relative flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-105"
          >
            <ScribbleRings />

            <div className="absolute inset-[10%] rounded-full bg-[#0f0f12] border border-white/10 shadow-[0_0_18px_rgba(0,255,255,0.12)] group-hover:shadow-[0_0_28px_rgba(0,255,255,0.4)] transition-shadow duration-300 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-2.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)] transition-colors duration-300" />
              <img
                src={file}
                alt={`Partner logo ${(i % logos.length) + 1}`}
                loading="lazy"
                draggable={false}
                className="relative z-10 w-[62%] h-[62%] object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.35)] pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

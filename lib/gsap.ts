'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export { gsap, ScrollTrigger, useGSAP }

export const GSAP_EASE = {
  enter: 'power3.out',
  exit: 'power2.in',
  smooth: 'power2.inOut',
} as const

export const GSAP_DURATION = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
} as const

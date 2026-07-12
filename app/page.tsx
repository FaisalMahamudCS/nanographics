import { HeroSection } from '@/sections/home/hero'
import { TrustedBySection } from '@/sections/home/trusted-by'
import { StatsSection } from '@/sections/home/stats'
import { ServicesSection } from '@/sections/home/services'
import { IndustriesSection } from '@/sections/home/industries'
import { TechStackSection } from '@/sections/home/tech-stack'
import { FeaturedWorkSection } from '@/sections/home/featured-work'
import { ProcessSection } from '@/sections/home/process'
import { TestimonialsSection } from '@/sections/home/testimonials'
import { CtaSection } from '@/sections/home/cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <TechStackSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

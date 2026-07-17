'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import {
  Bot,
  Code2,
  Cloud,
  ShoppingCart,
  Smartphone,
  Cpu,
  Zap,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  ArrowRight,
} from 'lucide-react'
import type { AiWebsiteData } from '@/lib/ai-website'
import { encodePublicAssetPath } from '@/lib/portfolio-page'

const serviceIcons = [Bot, Code2, Cpu, ShoppingCart, Smartphone, Cloud]
const featureIcons = [Zap, ShieldCheck, BadgeCheck, Headphones]

interface AiWebsitePageProps {
  data: AiWebsiteData
}

export default function AiWebsitePage({ data }: AiWebsitePageProps) {
  const [activeSection, setActiveSection] = useState('services')
  const { topBanner, company, services, features, contactInfo } = data
  const bannerImage = encodePublicAssetPath(topBanner.image)

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-x-hidden selection:bg-[#06b6d4] selection:text-black">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10 w-full pt-28 sm:pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 pb-10">
          <div className="border border-white/10 bg-[#0c0c0f] p-3 sm:p-4 rounded-[10px] shadow-md">
            <div className="relative w-full overflow-hidden bg-[#050507] rounded-[6px] aspect-[1499/1049]">
              <img
                src={bannerImage}
                alt={topBanner.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#00ffff] text-xs font-semibold tracking-wide mb-3 uppercase block font-heading">
              {company}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-normal font-heading text-white mb-4 max-w-4xl mx-auto">
              {topBanner.title}
            </h1>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
              {topBanner.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00ffff]/40 to-transparent" />
            <h2 className="text-[#00ffff] text-sm sm:text-base font-bold tracking-wide uppercase font-heading shrink-0">
              Our Services
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00ffff]/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
            {services.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length]
              return (
                <article
                  key={item.id}
                  className="border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-all duration-500 rounded-[10px] p-6 group"
                >
                  <div className="w-12 h-12 rounded-none border border-[#00ffff]/40 bg-[#00ffff]/10 flex items-center justify-center mb-4 text-[#00ffff] group-hover:bg-[#00ffff] group-hover:text-black transition-colors">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-bold text-white uppercase tracking-tight font-heading mb-2 group-hover:text-[#00ffff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length]
              return (
                <div
                  key={feature}
                  className="border border-white/10 bg-[#0a0a0a] rounded-[10px] px-4 py-5 flex flex-col items-center text-center gap-3"
                >
                  <Icon className="size-6 text-[#00ffff]" />
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wide text-white/80">
                    {feature}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="border border-white/10 bg-[#0c0c0f] rounded-[10px] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight font-heading text-white mb-3">
                Let&apos;s Build Something Amazing
              </h3>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-white/55">
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.website}</p>
                <p>{contactInfo.location}</p>
              </div>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00ffff] text-black font-bold text-xs uppercase tracking-wide hover:bg-[#33ffff] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

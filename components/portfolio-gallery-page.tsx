'use client'

import { useState } from 'react'
import Header from '@/components/header'
import { motion } from 'framer-motion'
import {
  encodePublicAssetPath,
  getGalleryCategories,
  type PortfolioPageData,
} from '@/lib/portfolio-page'

interface PortfolioGalleryPageProps {
  data: PortfolioPageData
}

export default function PortfolioGalleryPage({ data }: PortfolioGalleryPageProps) {
  const [activeSection, setActiveSection] = useState('work')
  const { topBanner, gallery } = data
  const categories = getGalleryCategories(gallery)
  const bannerImage = encodePublicAssetPath(topBanner.image)

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-x-hidden selection:bg-[#06b6d4] selection:text-black">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10 w-full pt-28 sm:pt-32">
        <section className="max-w-7xl mx-auto px-6 pb-8">
          <div className="product-card border border-white/10 bg-[#0c0c0f] p-4 rounded-[10px] shadow-md">
            <div className="aspect-[3117/1402] relative overflow-hidden bg-[#050507] rounded-[6px]">
              <img
                src={bannerImage}
                alt={topBanner.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="pt-6 px-2">
              <span className="text-[#00ffff] text-xs font-semibold tracking-[0.25em] mb-3 uppercase block font-heading">
                Portfolio
              </span>
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-3 font-heading">
                {topBanner.title}
              </h1>
              <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
                {topBanner.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00ffff] mb-3 font-heading">
              Product Categories
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 rounded-full border border-[#00ffff]/30 bg-[#00ffff]/10 text-[#00ffff] text-xs font-semibold uppercase tracking-wide"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.06 * (index % 6), ease: 'easeOut' }}
                className="product-card border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-all duration-500 group p-4 rounded-[10px] shadow-md"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-[#050507] rounded-[6px]">
                  <img
                    src={encodePublicAssetPath(item.image)}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-6 px-2">
                  <p className="text-[#00ffff] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-bold text-lg sm:text-xl text-white uppercase tracking-tight font-heading group-hover:text-[#00ffff] transition-colors">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

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

function aspectStyle(aspect?: string, fallback = '16 / 9') {
  return { aspectRatio: aspect?.includes('/') ? aspect.replace('/', ' / ') : fallback }
}

const columnClasses: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
}

export default function PortfolioGalleryPage({ data }: PortfolioGalleryPageProps) {
  const [activeSection, setActiveSection] = useState('work')
  const { topBanner, gallery, bannerAspect, galleryAspect, galleryColumns = 3 } = data
  const categories = getGalleryCategories(gallery)
  const bannerImage = encodePublicAssetPath(topBanner.image)
  const gridCols = columnClasses[galleryColumns] ?? columnClasses[3]

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-x-hidden selection:bg-[#06b6d4] selection:text-black">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10 w-full pt-28 sm:pt-32">
        <section className="max-w-7xl mx-auto px-6 pb-8">
          <div className="product-card border border-white/10 bg-[#0c0c0f] p-4 rounded-[10px] shadow-md">
            <div
              className="relative w-full overflow-hidden bg-[#050507] rounded-[6px]"
              style={aspectStyle(bannerAspect, '16 / 9')}
            >
              <img
                src={bannerImage}
                alt={topBanner.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="pt-6 px-2">
              <span className="text-[#00ffff] text-xs font-semibold tracking-wide mb-3 uppercase block font-heading">
                Portfolio
              </span>
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-normal mb-3 font-heading">
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
            <p className="text-xs font-semibold uppercase tracking-wide text-[#00ffff] mb-3 font-heading">
              Product Categories
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 rounded-full border border-[#00ffff]/30 bg-[#00ffff]/10 text-[#00ffff] text-xs font-semibold uppercase tracking-normal"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className={`grid ${gridCols} gap-3 sm:gap-4`}>
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.06 * (index % galleryColumns), ease: 'easeOut' }}
                className="product-card border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-all duration-500 group overflow-hidden rounded-[10px] shadow-md"
              >
                <div
                  className="relative w-full overflow-hidden bg-[#050507]"
                  style={aspectStyle(galleryAspect, '1499 / 1049')}
                >
                  <img
                    src={encodePublicAssetPath(item.image)}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

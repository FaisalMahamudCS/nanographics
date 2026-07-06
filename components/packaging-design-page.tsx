'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import {
  encodePublicAssetPath,
  getGalleryCategories,
  type PackagingDesignData,
} from '@/lib/packaging-design'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

interface PackagingDesignPageProps {
  data: PackagingDesignData
}

export default function PackagingDesignPage({ data }: PackagingDesignPageProps) {
  const { topBanner, company, gallery } = data
  const categories = getGalleryCategories(gallery)
  const bannerImage = encodePublicAssetPath(topBanner.image)

  return (
    <div className={`${montserrat.className} flex flex-col min-h-full w-full overflow-x-hidden bg-[#050507] text-white`}>
      <header className="sticky top-0 z-50 bg-[#050507]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between">
          <Link href="/" className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-white hover:text-[#00ffff] transition-colors">
            {company}
          </Link>
          <Link
            href="/#real-projects"
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60 hover:text-[#00ffff] transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="grow">
        <section className="w-full bg-[#050507] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0c0f] shadow-md">
              <div className="aspect-[3117/1402] relative w-full bg-[#050507]">
                <img
                  src={bannerImage}
                  alt={topBanner.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="mb-10">
            <span className="text-[#00ffff] text-xs font-semibold tracking-[0.25em] mb-3 uppercase block">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-3">
              {topBanner.title}
            </h1>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-2xl">
              {topBanner.subtitle}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00ffff] mb-3">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 * (index % 4), ease: 'easeOut' }}
                className="group block"
              >
                <div className="relative flex flex-col justify-end items-start aspect-[2.07/1] min-h-[170px] sm:min-h-[210px] md:min-h-[250px] w-full overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0c0f] hover:border-[#00ffff]/40 transition-colors duration-500">
                  <div
                    className="absolute inset-0 w-full h-full z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(5, 5, 7, 0) 45%, rgba(5, 5, 7, 0.85) 100%), url("${encodePublicAssetPath(item.image)}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <div className="relative z-20 pb-6 px-6 md:pb-8 md:px-8 flex justify-between w-full items-end gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#00ffff] mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-bold text-white text-lg md:text-xl lg:text-2xl leading-none tracking-tight group-hover:text-[#00ffff] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <div className="font-semibold flex items-center gap-2 text-[#00ffff] text-sm opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 shrink-0">
                      <span>View</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

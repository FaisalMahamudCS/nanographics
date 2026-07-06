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

const alignmentClasses = {
  left: 'items-start justify-center text-left sm:ml-[clamp(1rem,10vw,12vw)]',
  center: 'items-center justify-center text-center',
  right: 'items-end justify-center text-right mr-auto',
}

interface PackagingDesignPageProps {
  data: PackagingDesignData
}

export default function PackagingDesignPage({ data }: PackagingDesignPageProps) {
  const { topBanner, company, contactInfo, gallery } = data
  const categories = getGalleryCategories(gallery)
  const bannerImage = encodePublicAssetPath(topBanner.image)
  const alignment = alignmentClasses[topBanner.textAlignment] ?? alignmentClasses.left

  return (
    <div className={`${montserrat.className} flex flex-col min-h-full w-full overflow-x-hidden bg-white text-[#1a1a1a]`}>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
        <div className="container mx-auto px-4 h-[74px] flex items-center justify-between">
          <Link href="/" className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-[#050507] hover:text-[#00a8cc] transition-colors">
            {company}
          </Link>
          <Link
            href="/#real-projects"
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#050507]/70 hover:text-[#00a8cc] transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative w-full h-72 sm:min-h-[calc(100vh-74px)] flex items-center justify-start overflow-hidden">
          <img
            src={bannerImage}
            alt={topBanner.title}
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none -z-10"
          />
          <div className="absolute inset-0 bg-black/35 -z-10" />
          <div className={`relative z-10 h-full flex flex-col flex-1 px-4 py-8 sm:py-16 md:py-20 ${alignment}`}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ color: topBanner.titleColor }}
              className="font-extrabold leading-[36px] sm:leading-[46px] tracking-[0.02em] text-[30px] sm:text-[40px] mb-2 max-w-3xl"
            >
              {topBanner.title}
            </motion.h1>
            {topBanner.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                style={{ color: topBanner.subtitleColor }}
                className="text-base sm:text-lg max-w-2xl font-medium"
              >
                {topBanner.subtitle}
              </motion.p>
            )}
          </div>
        </section>

        <div className="flex justify-center">
          <section className="w-full min-h-screen bg-[#e3f1ff] flex items-center justify-center py-0">
            <div className="w-full overflow-hidden bg-white">
              <div className="px-4 sm:px-8 py-8 sm:py-10 border-b border-[#e3f1ff]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a8cc] mb-2">
                  Product Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 rounded-full bg-[#e3f1ff] text-[#0b4f78] text-xs font-semibold uppercase tracking-wide"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {gallery.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 * (index % 4), ease: 'easeOut' }}
                    className="group block"
                  >
                    <div
                      className="relative flex flex-col justify-end items-start aspect-[2.07/1] min-h-[170px] sm:min-h-[210px] md:min-h-[250px] lg:min-h-[246px] w-full overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 w-full h-full z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%), url("${encodePublicAssetPath(item.image)}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      />
                      <div className="absolute inset-0 transition-all duration-700 ease-in-out bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_100%)] group-hover:bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_100%)]" />
                      <div className="relative z-20 pb-6 px-8 md:pb-8 md:px-10 flex justify-between w-full items-end gap-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/80 mb-1">
                            {item.category}
                          </p>
                          <h3 className="font-semibold sm:font-bold text-white drop-shadow-lg text-xl md:text-2xl lg:text-[25px] leading-none tracking-tight">
                            {item.name}
                          </h3>
                        </div>
                        <div className="font-semibold flex items-center gap-2 text-white text-sm md:text-base opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 shrink-0">
                          <span>Read More</span>
                          <ArrowRight className="size-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="w-full relative mt-12 sm:mt-0">
        <svg viewBox="0 0 1440 220" className="w-full rotate-180 overflow-visible" aria-hidden="true">
          <path fill="#050507" d="M0,40 C360,120 1080,-40 1440,60 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <footer className="relative w-full bg-[#050507] -mt-1 py-8">
        <div className="container mx-auto px-4">
          <p className="text-[24px] leading-[30px] sm:text-[30px] sm:leading-[36px] text-white uppercase font-bold mb-6">
            {company}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white/80 text-sm">
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.website}</p>
            <p>{contactInfo.location}</p>
          </div>
          <div className="w-full h-px bg-white/30 my-6" />
          <p className="text-[13px] text-white/70">
            © {new Date().getFullYear()} {company}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

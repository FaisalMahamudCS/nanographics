import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/constants/services'
import { INDUSTRIES } from '@/constants/industries'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'
import { FadeIn } from '@/components/animations/fade-in'

export const metadata = createMetadata({
  title: 'Solutions',
  description: 'Tailored AI and software solutions for healthcare, finance, education, and enterprise markets.',
  path: '/solutions',
})

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Purpose-built for your industry"
        description="We combine domain expertise with engineering excellence to deliver solutions that meet regulatory, performance, and business requirements."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry, i) => (
              <FadeIn key={industry.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-card p-6">
                  <h3 className="font-heading text-lg font-semibold">{industry.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-20">
            <h2 className="font-heading text-2xl font-bold">Core Capabilities</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SERVICES.slice(0, 6).map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-card/50 px-5 py-4"
                >
                  <span className="text-sm font-medium">{service.title}</span>
                  <Link href={`/services#${service.id}`} className="text-brand-cyan cursor-pointer">
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

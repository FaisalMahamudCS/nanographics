import { INDUSTRIES } from '@/constants/industries'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'
import { FadeIn } from '@/components/animations/fade-in'

export const metadata = createMetadata({
  title: 'Industries',
  description: 'Mehvora Labs serves healthcare, finance, education, government, retail, and more with tailored software solutions.',
  path: '/industries',
})

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain expertise that matters"
        description="We understand the regulatory, operational, and technical challenges unique to your sector."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((industry, i) => (
              <FadeIn key={industry.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-card p-8">
                  <h2 className="font-heading text-xl font-bold">{industry.name}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{industry.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

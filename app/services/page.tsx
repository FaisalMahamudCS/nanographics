import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'
import { FadeIn } from '@/components/animations/fade-in'

export const metadata = createMetadata({
  title: 'Services',
  description: 'AI development, web applications, cloud infrastructure, and dedicated engineering teams from Mehvora Labs.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end software engineering"
        description="From AI agents to cloud infrastructure — comprehensive services designed for enterprise scale and startup velocity."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {SERVICE_CATEGORIES.map((category) => {
            const Icon = category.icon
            const items = SERVICES.filter((s) => s.category === category.id)
            return (
              <div key={category.id} id={category.id} className="mb-20 scroll-mt-28">
                <FadeIn>
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-cyan">
                      <Icon className="size-5" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold">{category.label}</h2>
                  </div>
                </FadeIn>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, i) => {
                    const ServiceIcon = service.icon
                    return (
                      <FadeIn key={service.id} delay={i * 0.05}>
                        <article
                          id={service.id}
                          className="rounded-2xl border border-white/10 bg-card p-6 scroll-mt-28"
                        >
                          <ServiceIcon className="size-6 text-brand-cyan" />
                          <h3 className="mt-4 font-heading text-lg font-semibold">{service.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {service.description}
                          </p>
                        </article>
                      </FadeIn>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

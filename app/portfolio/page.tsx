import { PROJECTS } from '@/constants/projects'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'
import { FadeIn } from '@/components/animations/fade-in'

export const metadata = createMetadata({
  title: 'Portfolio',
  description: 'Explore Mehvora Labs portfolio — enterprise software, AI platforms, and scalable digital products.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects that drive real impact"
        description="A selection of production systems we've designed, built, and deployed for clients worldwide."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.05}>
                <article
                  id={project.slug}
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-card overflow-hidden"
                >
                  <div className="border-b border-white/10 p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-md bg-brand-blue/10 px-2 py-0.5 text-xs font-medium text-brand-cyan">
                        {project.industry}
                      </span>
                      {project.featured && (
                        <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="mt-4 font-heading text-2xl font-bold">{project.title}</h2>
                    <p className="mt-3 max-w-3xl text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="grid gap-8 p-8 lg:grid-cols-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Metrics
                      </h3>
                      <dl className="mt-4 space-y-3">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <dt className="text-xs text-muted-foreground">{m.label}</dt>
                            <dd className="font-heading text-lg font-bold">{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Impact
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {project.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Tech Stack
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

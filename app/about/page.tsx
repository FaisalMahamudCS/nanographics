import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { COMPANY } from '@/constants/company'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'
import { FadeIn } from '@/components/animations/fade-in'

export const metadata = createMetadata({
  title: 'About',
  description: 'Learn about Mehvora Labs — a premium AI and software engineering company building enterprise-grade digital products.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering intelligence for the real world"
        description="Mehvora Labs combines deep technical expertise with product thinking to deliver software that scales, performs, and drives measurable business outcomes."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We partner with startups and enterprises to design, build, and deploy AI-powered software
                that solves real business problems. From distributed systems serving millions of users to
                HIPAA-compliant healthcare platforms, we own production systems end-to-end.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our team brings 4+ years of experience in Node.js microservices, React, event-driven
                architectures, cloud-native deployments on AWS, and AI/ML integration with LangChain and
                modern LLM providers.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-8">
                <h3 className="font-heading text-lg font-semibold">Key Achievements</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    '40% AWS cloud cost reduction through infrastructure optimization',
                    '20% release time improvement via automated CI/CD pipelines',
                    'Production systems serving millions of active users',
                    'HIPAA-compliant healthcare platform delivery',
                    'AI-driven inventory forecasting reducing stock-outs by 25%',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90 cursor-pointer"
            >
              Work with {COMPANY.name}
              <ArrowUpRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

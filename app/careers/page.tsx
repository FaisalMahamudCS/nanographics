import Link from 'next/link'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'

const OPEN_ROLES = [
  {
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time',
    location: 'Dhaka / Remote',
    department: 'Engineering',
  },
  {
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'AI',
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Dhaka / Remote',
    department: 'Infrastructure',
  },
]

export const metadata = createMetadata({
  title: 'Careers',
  description: 'Join Mehvora Labs and build enterprise-grade AI software with a world-class engineering team.',
  path: '/careers',
})

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future with us"
        description="We're looking for exceptional engineers who care about craft, performance, and real-world impact."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded-2xl border border-white/10 bg-card p-8">
            <h2 className="font-heading text-xl font-bold">Why Mehvora Labs?</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'Work on production systems at scale',
                'Cutting-edge AI and cloud projects',
                'Remote-friendly culture',
                'Continuous learning and growth',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-brand-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold">Open Positions</h2>
          <div className="mt-8 space-y-4">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-heading font-semibold">{role.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.department} · {role.type} · {role.location}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90 cursor-pointer"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

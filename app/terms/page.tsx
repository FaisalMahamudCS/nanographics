import { COMPANY } from '@/constants/company'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for Mehvora Labs website and software engineering services.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-muted-foreground">Last updated: July 2026</p>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>
              By accessing and using the {COMPANY.name} website and services, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">Services</h2>
            <p>
              {COMPANY.name} provides software engineering, AI development, and consulting services.
              Specific terms for client engagements are defined in individual service agreements.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of {COMPANY.name}
              unless otherwise stated.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions about these terms? Reach us at{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-brand-cyan hover:underline cursor-pointer">
                {COMPANY.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

import { COMPANY } from '@/constants/company'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'Mehvora Labs privacy policy — how we collect, use, and protect your data.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-16">
        <div className="prose prose-invert mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-muted-foreground">Last updated: July 2026</p>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>
              {COMPANY.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This policy describes how we collect, use, and safeguard information when you visit our website or use our services.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              We may collect personal information you provide directly, such as your name, email address, company name,
              and message content when you contact us through our website forms.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">How We Use Information</h2>
            <p>
              We use collected information to respond to inquiries, provide services, improve our website,
              and communicate with you about our offerings.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
            <p>
              For privacy-related questions, contact us at{' '}
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

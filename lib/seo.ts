import type { Metadata } from 'next'
import { COMPANY } from '@/constants/company'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mehvoralabs.com'

export function createMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
}: {
  title?: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const pageTitle = title ? `${title} | ${COMPANY.name}` : `${COMPANY.name} — AI & Software Engineering`
  const pageDescription = description ?? COMPANY.description
  const url = `${siteUrl}${path}`

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: COMPANY.name,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: COMPANY.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: siteUrl,
    logo: `${siteUrl}/mehvora-labs-logo.svg`,
    description: COMPANY.description,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressCountry: 'BD',
    },
    sameAs: Object.values(COMPANY.social),
  }
}

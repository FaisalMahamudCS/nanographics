import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nanographicit.com'
const title = 'Packaging Design Masterclass – Batch 4 | NanoGraphic'
const description =
  'প্যাকেজিং ডিজাইন মাস্টারক্লাস ব্যাচ ৪। RGB/CMYK, ডাইলেন, প্রেস-রেডি আউটপুট শিখুন। ফি মাত্র ২০০০৳। রেজিস্ট্রেশন চলছে।'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Packaging Design Course',
    'প্যাকেজিং ডিজাইন কোর্স',
    'NanoGraphic',
    'Batch 4',
    'Photoshop',
    'Illustrator',
    'CMYK',
    'Dieline',
  ],
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    url: '/package-course',
    siteName: 'NanoGraphic',
    title,
    description,
    images: [
      {
        url: '/Banner Ai.png',
        width: 1672,
        height: 941,
        alt: 'Packaging Design Masterclass Batch 4 – NanoGraphic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/Banner Ai.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/package-course',
  },
}

export default function PackageCourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

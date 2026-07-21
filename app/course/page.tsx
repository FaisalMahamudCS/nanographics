import type { Metadata } from 'next'
import PackageCoursePage from '@/components/package-course-page'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nanographicit.com'
const title = 'Packaging Design Masterclass – Batch 4 | NanoGraphic'
const description =
  'প্যাকেজিং ডিজাইন মাস্টারক্লাস ব্যাচ ৪। RGB/CMYK, ডাইলেন, প্রেস-রেডি আউটপুট শিখুন। ফি মাত্র ২০০০৳। রেজিস্ট্রেশন চলছে।'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    url: '/course',
    siteName: 'NanoGraphic',
    title,
    description,
    images: [
      {
        url: '/Nano web cove.jpg.jpeg',
        width: 3000,
        height: 1500,
        alt: 'Packaging Design Masterclass Batch 4 – NanoGraphic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/Nano web cove.jpg.jpeg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/course' },
}

/** Short Facebook-ad URL — same landing page as /package-course */
export default function CourseLandingPage() {
  return <PackageCoursePage />
}

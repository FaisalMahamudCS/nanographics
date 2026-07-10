import type { Metadata } from 'next'
import PortfolioGalleryPage from '@/components/portfolio-gallery-page'
import { getDesignPrintData } from '@/lib/design-print'

const data = getDesignPrintData()

export const metadata: Metadata = {
  title: `${data.title} | ${data.company}`,
  description: data.description,
}

export default function DesignPrintRoutePage() {
  return <PortfolioGalleryPage data={data} />
}

import designPrintData from '@/data/design-print.json'
import type { PortfolioPageData } from '@/lib/portfolio-page'
import { getPortfolioPath } from '@/lib/portfolio-page'

export function getDesignPrintData(): PortfolioPageData {
  return designPrintData as PortfolioPageData
}

export function getDesignPrintPath(): string {
  return getPortfolioPath(designPrintData.slug)
}

export { encodePublicAssetPath, getGalleryCategories } from '@/lib/portfolio-page'

import packagingDesignData from '@/data/packaging-design.json'
import type { PortfolioPageData } from '@/lib/portfolio-page'
import { getPortfolioPath } from '@/lib/portfolio-page'

export function getPackagingDesignData(): PortfolioPageData {
  return packagingDesignData as PortfolioPageData
}

export function getPackagingDesignPath(): string {
  return getPortfolioPath(packagingDesignData.slug)
}

export type {
  PortfolioGalleryItem as PackagingGalleryItem,
  PortfolioPageData as PackagingDesignData,
} from '@/lib/portfolio-page'

export { encodePublicAssetPath, getGalleryCategories } from '@/lib/portfolio-page'

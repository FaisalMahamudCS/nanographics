export interface PortfolioGalleryItem {
  id: string
  name: string
  image: string
  category: string
}

export interface PortfolioContactInfo {
  phone: string
  email: string
  website: string
  location: string
}

export interface PortfolioTopBanner {
  title: string
  subtitle: string
  titleColor: string
  subtitleColor: string
  image: string
  textAlignment: 'left' | 'center' | 'right'
}

export interface PortfolioPageData {
  id: string
  slug: string
  title: string
  description: string
  bannerImage: string
  topBanner: PortfolioTopBanner
  company: string
  published: boolean
  contactInfo: PortfolioContactInfo
  gallery: PortfolioGalleryItem[]
}

export function getPortfolioPath(slug: string): string {
  return `/${slug}`
}

export function encodePublicAssetPath(path: string): string {
  return path.split('/').map((segment) => encodeURIComponent(segment)).join('/')
}

export function getGalleryCategories(gallery: PortfolioGalleryItem[]): string[] {
  return [...new Set(gallery.map((item) => item.category))].sort()
}

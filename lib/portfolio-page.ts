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
  bannerAspect?: string
  galleryAspect?: string
  galleryColumns?: number
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

/** Display helper — Title Case for English ALL CAPS headings from CMS/JSON */
export function toTitleCase(text: string): string {
  if (!text) return text
  if (/[\u0980-\u09FF]/.test(text) && !/[A-Za-z]{3,}/.test(text)) return text
  return text.replace(/[A-Za-z][A-Za-z']*/g, (word) => {
    if (word.length <= 2 && word === word.toUpperCase()) return word // AI, UI
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
}

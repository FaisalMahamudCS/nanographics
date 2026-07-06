import packagingDesignData from '@/data/packaging-design.json'

export interface PackagingGalleryItem {
  id: string
  name: string
  image: string
  category: string
}

export interface PackagingContactInfo {
  phone: string
  email: string
  website: string
  location: string
}

export interface PackagingTopBanner {
  title: string
  subtitle: string
  titleColor: string
  subtitleColor: string
  image: string
  textAlignment: 'left' | 'center' | 'right'
}

export interface PackagingDesignData {
  id: string
  slug: string
  title: string
  description: string
  bannerImage: string
  topBanner: PackagingTopBanner
  company: string
  published: boolean
  contactInfo: PackagingContactInfo
  gallery: PackagingGalleryItem[]
}

export function getPackagingDesignData(): PackagingDesignData {
  return packagingDesignData as PackagingDesignData
}

export function getPackagingDesignPath(slug?: string): string {
  return `/${slug ?? packagingDesignData.slug}`
}

export function encodePublicAssetPath(path: string): string {
  return path.split('/').map((segment) => encodeURIComponent(segment)).join('/')
}

export function getGalleryCategories(gallery: PackagingGalleryItem[]): string[] {
  return [...new Set(gallery.map((item) => item.category))].sort()
}

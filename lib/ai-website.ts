import aiWebsiteData from '@/data/ai-website.json'

export interface AiWebsiteServiceItem {
  id: string
  title: string
  description: string
}

export interface AiWebsiteData {
  id: string
  slug: string
  title: string
  description: string
  bannerImage: string
  company: string
  published: boolean
  topBanner: {
    title: string
    subtitle: string
    titleColor: string
    subtitleColor: string
    image: string
    textAlignment: string
  }
  services: AiWebsiteServiceItem[]
  features: string[]
  contactInfo: {
    phone: string
    email: string
    website: string
    location: string
  }
}

export function getAiWebsiteData(): AiWebsiteData {
  return aiWebsiteData as AiWebsiteData
}

export function getAiWebsitePath(): string {
  return `/${aiWebsiteData.slug}`
}

import type { Metadata } from 'next'
import AiWebsitePage from '@/components/ai-website-page'
import { getAiWebsiteData } from '@/lib/ai-website'

const data = getAiWebsiteData()

export const metadata: Metadata = {
  title: `${data.title} | ${data.company}`,
  description: data.description,
}

export default function AiWebsiteRoutePage() {
  return <AiWebsitePage data={data} />
}

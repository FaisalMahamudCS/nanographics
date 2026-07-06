import type { Metadata } from 'next'
import PackagingDesignPage from '@/components/packaging-design-page'
import { getPackagingDesignData } from '@/lib/packaging-design'

const data = getPackagingDesignData()

export const metadata: Metadata = {
  title: `${data.title} | ${data.company}`,
  description: data.description,
}

export default function PackagingDesignRoutePage() {
  return <PackagingDesignPage data={data} />
}

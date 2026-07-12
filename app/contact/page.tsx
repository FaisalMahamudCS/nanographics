import { createMetadata } from '@/lib/seo'
import { ContactPageContent } from '@/features/contact/contact-page'

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with Mehvora Labs. Book a discovery call or send us a message about your next project.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactPageContent />
}

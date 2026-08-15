import type { Metadata } from 'next'
import CertificateVerifyPage from '@/components/certificate-verify-page'

export const metadata: Metadata = {
  title: 'Verify Certificate | NanoGraphic',
  description: 'Search a NanoGraphic course certificate ID to view student name, course, and batch.',
}

export default function CertificateRoutePage() {
  return <CertificateVerifyPage />
}

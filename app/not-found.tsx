import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-cyan">404</p>
      <h1 className="mt-4 font-heading text-4xl font-bold">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90 cursor-pointer"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>
    </div>
  )
}

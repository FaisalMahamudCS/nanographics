import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'

const BLOG_POSTS = [
  {
    slug: 'postgresql-optimization',
    title: 'PostgreSQL Optimization for Scale',
    excerpt: 'Best practices for optimizing PostgreSQL schemas in high-traffic SaaS applications.',
    date: '2026-06-15',
    author: 'Faisal Mahamud',
  },
  {
    slug: 'pern-stack-development',
    title: 'Building Scalable Platforms with PERN',
    excerpt: 'Architecture patterns for building scalable technology platforms with PostgreSQL, Express, React, and Node.js.',
    date: '2026-05-20',
    author: 'Faisal Mahamud',
  },
  {
    slug: 'aws-deployment',
    title: 'AWS Deployment with Docker & CI/CD',
    excerpt: 'Deploying production applications on AWS with Docker, Kubernetes, and automated pipelines.',
    date: '2026-04-10',
    author: 'Faisal Mahamud',
  },
]

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Engineering insights on AI, cloud infrastructure, and software architecture from Mehvora Labs.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Engineering insights"
        description="Technical articles on AI, distributed systems, cloud optimization, and product engineering."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-white/10 bg-card p-6 transition-all hover:border-brand-blue/30"
              >
                <time className="text-xs text-muted-foreground">{post.date}</time>
                <h2 className="mt-3 font-heading text-lg font-semibold group-hover:text-brand-cyan transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">By {post.author}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-cyan cursor-pointer"
                >
                  Read more <ArrowUpRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import { COMPANY } from '@/constants/company'
import { FOOTER_LINKS } from '@/constants/navigation'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <Image src="/mehvora-labs-logo.svg" alt={COMPANY.name} width={40} height={40} />
              <span className="font-heading text-xl font-semibold">{COMPANY.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {COMPANY.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Share2, href: COMPANY.social.linkedin, label: 'LinkedIn' },
                { icon: Globe, href: COMPANY.social.github, label: 'GitHub' },
                { icon: Share2, href: COMPANY.social.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-card text-muted-foreground transition-colors duration-200 hover:border-brand-blue/40 hover:text-brand-cyan cursor-pointer"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-foreground transition-colors cursor-pointer">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
                  <a href={`tel:${COMPANY.phone}`} className="hover:text-foreground transition-colors cursor-pointer">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
                  <span>{COMPANY.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Insights on AI, engineering, and product development.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email for newsletter"
                className="flex-1 rounded-xl border border-white/10 bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-brand-blue/50"
              />
              <button
                type="submit"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white transition-colors hover:bg-brand-blue/90 cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

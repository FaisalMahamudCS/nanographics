import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Space_Grotesk, Hind_Siliguri, Bebas_Neue } from 'next/font/google';
import localFont from 'next/font/local';
import SiteFooter from '@/components/site-footer'
import MetaPixel from '@/components/meta-pixel'
import './globals.css'

const neuePower = localFont({
  src: './fonts/NeuePower-Ultra.ttf',
  variable: '--font-neue-power',
  weight: '900',
  display: 'swap',
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '600', '700'],
  variable: '--font-hind-siliguri',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NanoGraphic | Design & Branding Agency',
  description: 'Professional design agency offering branding, packaging, and web development services',
  verification: {
    other: {
      'facebook-domain-verification':
        process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION ??
        'kjmfnsfdduxu68bwneahjtakujyrrm',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${hindSiliguri.variable} ${spaceGrotesk.variable} ${neuePower.variable} ${bebasNeue.variable} dark scroll-smooth overflow-x-hidden`}>
      <body className="font-sans antialiased bg-[#050507] text-foreground overflow-x-hidden max-w-[100vw]">
        {children}
        <SiteFooter />
        <MetaPixel />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

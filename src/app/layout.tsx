import type { Metadata, Viewport } from 'next'
import './globals.css'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://kavyashah.dev'),
  title: {
    default: 'Kavya Shah — Data Science & AI Portfolio',
    template: '%s | Kavya Shah',
  },
  description: 'Second-year BSc Data Science student at Ca\' Foscari University of Venice. Exploring the intersection of Data, Intelligence & Technology. Data Science intern at Digitattva Technolabs. Founder of VitaVerse.',
  keywords: ['Data Science', 'Artificial Intelligence', 'Machine Learning', 'Python', 'SQL', 'Data Analysis', 'Healthcare Technology', 'Portfolio', 'Ca\' Foscari University', 'Venice'],
  authors: [{ name: 'Kavya Shah' }],
  creator: 'Kavya Shah',
  publisher: 'Kavya Shah',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kavyashah.dev',
    title: 'Kavya Shah — Data Science & AI Portfolio',
    description: 'Second-year BSc Data Science student at Ca\' Foscari University of Venice. Exploring the intersection of Data, Intelligence & Technology.',
    siteName: 'Kavya Shah Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Kavya Shah — Data Science & AI Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavya Shah — Data Science & AI Portfolio',
    description: 'Second-year BSc Data Science student at Ca\' Foscari University of Venice. Exploring the intersection of Data, Intelligence & Technology.',
    images: ['/og-image.svg'],
    creator: '@kavyashah',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F9FF' },
    { media: '(prefers-color-scheme: dark)', color: '#0C1D2E' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        {children}
      </body>
    </html>
  )
}
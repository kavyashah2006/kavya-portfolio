'use client'

import * as React from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
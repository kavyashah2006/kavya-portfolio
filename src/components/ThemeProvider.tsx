'use client'

import * as React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // DIAGNOSTIC: Log when ThemeProvider renders during SSR/prerendering
  if (typeof window === 'undefined') {
    console.log('[THEME DEBUG] ThemeProvider rendering on server (prerender/SSR), mounted:', mounted)
  }

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = stored || (prefersDark ? 'dark' : 'light')
    setThemeState(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    // DIAGNOSTIC: Log when returning children without Provider
    if (typeof window === 'undefined') {
      console.log('[THEME DEBUG] ThemeProvider returning children WITHOUT Provider (mounted=false)')
    }
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  // DIAGNOSTIC: Log which context is being used during prerendering
  if (typeof window === 'undefined') {
    const isUndefined = context === undefined
    console.log('[THEME DEBUG] useTheme called during prerender:',
      isUndefined ? 'UNDEFINED CONTEXT (no provider)' : 'PROVIDER CONTEXT',
      '| stack:', new Error().stack?.split('\n').slice(1, 4).join(' | ')
    )
  }
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
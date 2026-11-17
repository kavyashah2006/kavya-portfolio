'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Search, ChevronDown, Download } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { CommandPalette } from '@/components/CommandPalette'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Lab', href: '/lab' },
  { name: 'Writing', href: '/writing' },
  { name: 'Contact', href: '/contact' },
] as const

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [showWhatsNew, setShowWhatsNew] = React.useState(false)
  const { theme, toggleTheme } = useTheme()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showWhatsNew && !(e.target as HTMLElement).closest('.whats-new-dropdown')) {
        setShowWhatsNew(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showWhatsNew])

  return (
    <>
      <CommandPalette />
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-base ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md border-b'
            : 'bg-transparent'
        }`}
        style={{
          borderColor: 'var(--glass-border)',
          backgroundColor: scrolled ? 'var(--bg-glass)' : 'transparent',
        }}
        role="banner"
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex h-14 lg:h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="font-display font-medium text-h4 text-fg hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
              aria-label="Kavya Shah - Home"
            >
              KS
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 rounded-lg text-body-sm font-medium text-fg/70 hover:text-fg hover:bg-bg-elevated/50 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {item.name}
                </Link>
              ))}

              {/* What's New Dropdown */}
              <div className="relative whats-new-dropdown ml-2">
                <button
                  onClick={() => setShowWhatsNew(!showWhatsNew)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-body-sm font-medium text-fg/70 hover:text-fg hover:bg-bg-elevated/50 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  aria-expanded={showWhatsNew}
                  aria-haspopup="true"
                  aria-label="What's new"
                >
                  <span>What's New</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showWhatsNew ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {showWhatsNew && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 top-full mt-2 w-56 rounded-xl border bg-bg-elevated/95 backdrop-blur-md shadow-glass py-2"
                    style={{
                      borderColor: 'var(--glass-border)',
                      boxShadow: 'var(--glass-shadow)',
                    }}
                    role="menu"
                  >
                    <Link
                      href="/writing"
                      className="block px-4 py-2 text-body-sm text-fg/80 hover:text-fg hover:bg-accent/10 transition-colors"
                      role="menuitem"
                      onClick={() => setShowWhatsNew(false)}
                    >
                      Latest Writing
                    </Link>
                    <Link
                      href="/lab"
                      className="block px-4 py-2 text-body-sm text-fg/80 hover:text-fg hover:bg-accent/10 transition-colors"
                      role="menuitem"
                      onClick={() => setShowWhatsNew(false)}
                    >
                      Lab Experiments
                    </Link>
                    <Link
                      href="/work"
                      className="block px-4 py-2 text-body-sm text-fg/80 hover:text-fg hover:bg-accent/10 transition-colors"
                      role="menuitem"
                      onClick={() => setShowWhatsNew(false)}
                    >
                      New Projects
                    </Link>
                    <div className="border-t my-2" style={{ borderColor: 'var(--border)' }} />
                    <Link
                      href="https://github.com/kavyashah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-body-sm text-fg/80 hover:text-fg hover:bg-accent/10 transition-colors"
                      role="menuitem"
                    >
                      GitHub Activity
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              {/* Command Palette Trigger */}
              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-body-sm font-medium text-fg/70 hover:text-fg hover:bg-bg-elevated/50 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label="Open command palette (⌘K)"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <kbd className="hidden sm:inline-flex px-1.5 py-0.5 text-caption text-fg-subtle bg-bg/50 rounded border font-accent tabular-nums" style={{ borderColor: 'var(--border)' }}>
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-fg/70 hover:text-fg hover:bg-bg-elevated/50 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* CV Download */}
              <Link
                href="/cv.pdf"
                download="Kavya_Shah_CV.pdf"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-body-sm font-medium text-bg bg-accent hover:bg-accent/90 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                CV
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-fg/70 hover:text-fg hover:bg-bg-elevated/50 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-base ease-out overflow-hidden ${
              mobileMenuOpen ? 'max-h-96 opacity-100 pb-4 visible' : 'max-h-0 opacity-0 invisible'
            }`}
            role="navigation"
            aria-label="Mobile navigation"
            style={{
              backgroundColor: 'var(--bg-glass)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--glass-border)',
            }}
          >
            <div className="p-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-body font-medium text-fg/80 hover:text-fg hover:bg-bg-elevated/50 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg border border-transparent hover:border-accent/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-body font-medium text-fg/80 hover:text-fg hover:bg-bg-elevated/50 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg border border-transparent hover:border-accent/20"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
                <Link
                  href="/cv.pdf"
                  download="Kavya_Shah_CV.pdf"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-body font-medium text-bg bg-accent hover:bg-accent/90 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
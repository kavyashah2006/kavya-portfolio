'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download, Linkedin, Github, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/ThemeProvider'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#vitaverse', label: 'VitaVerse' },
  { href: '#education', label: 'Education' },
  { href: '#career-interests', label: 'Interests' },
  { href: '#currently-learning', label: 'Learning' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { theme, toggleTheme } = useTheme()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleCVDownload = () => {
    const link = document.createElement('a')
    link.href = personalInfo.cvUrl
    link.download = 'Kavya_Shah_CV.pdf'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[var(--z-sticky)] transition-all duration-normal ${scrolled ? 'glass-strong shadow-glass' : 'bg-transparent'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 text-h4 font-heading font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="Kavya Shah - Home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
            >
              <span className="text-primary">KS</span>
              <span className="hidden sm:inline">Kavya Shah</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-fast hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleCVDownload} className="gap-2">
                <Download className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">CV</span>
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[calc(var(--z-sticky)-1)] lg:hidden glass-strong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <motion.nav
              className="container-custom h-full flex flex-col items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className="text-h3 font-heading font-medium text-foreground hover:text-accent transition-colors duration-fast"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="flex flex-col gap-4 pt-4 border-t border-border/30 w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full justify-center gap-2"
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center gap-2"
                  onClick={handleCVDownload}
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Download CV
                </Button>
                <div className="flex items-center justify-center gap-6">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors duration-fast"><Linkedin className="h-6 w-6" /></a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors duration-fast"><Github className="h-6 w-6" /></a>
                  <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors duration-fast"><Mail className="h-6 w-6" /></a>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button
        className="fixed bottom-6 right-6 lg:hidden z-[calc(var(--z-sticky)+1)] glass-strong p-3 rounded-full shadow-glass-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <AnimatePresence mode="wait">
          {mobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  )
}

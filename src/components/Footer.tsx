'use client'

import * as React from 'react'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'
import { Linkedin, Github, Mail, Heart, Sun, Moon, ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/ThemeProvider'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'VitaVerse', href: '#vitaverse' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const footerLinks = [
  { label: 'Legal', items: [{ name: 'Privacy Policy', href: '#' }, { name: 'Terms of Use', href: '#' }] },
  { label: 'Resources', items: [{ name: 'Design System', href: '#' }, { name: 'Component Library', href: '#' }] },
]

export function Footer() {
  const { theme, toggleTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border bg-gradient-to-b from-background via-muted/30 to-background" role="contentinfo">
      <div className="container-custom py-16 lg:py-20">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Brand - Editorial */}
          <div className="lg:col-span-1 relative">
            <div className="mb-8">
              <Link
                href="#"
                className="font-heading font-medium text-h2 text-foreground hover:opacity-80 transition-opacity inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="Kavya Shah - Home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#')
                }}
              >
                KS
              </Link>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-6 max-w-xs">
                BSc Data Science student at Ca' Foscari University of Venice.
                Exploring the intersection of Data, Intelligence & Technology.
              </p>
            </div>

            {/* Social Links - Editorial */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-normal group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-normal group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-normal group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
            </div>

            {/* Tagline */}
            <p className="mt-8 text-sm text-muted-foreground/80 italic max-w-xs">
              "Building intelligence that serves humanity"
            </p>
          </div>

          {/* Navigation - Editorial */}
          <nav className="lg:col-span-1" aria-label="Footer navigation">
            <h4 className="text-xs font-medium text-foreground uppercase tracking-widest font-heading mb-6">
              Navigate
            </h4>
            <ul className="space-y-3" role="list">
              {navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-body text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-fast" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal & Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-medium text-foreground uppercase tracking-widest font-heading mb-6">
              Legal & Resources
            </h4>
            <div className="space-y-6">
              {footerLinks.map((section) => (
                <div key={section.label}>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-heading mb-3">
                    {section.label}
                  </p>
                  <ul className="space-y-2" role="list">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-accent transition-colors duration-fast"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Connect & CV - Editorial Card */}
          <div className="lg:col-span-1">
            <div className="card-editorial p-6 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
              <div className="relative z-10">
                <header className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="text-h4 font-heading font-medium tracking-tight text-foreground">
                      Connect
                    </h4>
                  </div>
                </header>

                <div className="space-y-4 mb-6">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-body text-muted-foreground hover:text-accent transition-colors duration-fast group p-3 rounded-xl hover:bg-accent/5 hover:border-accent/10 border border-transparent"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0" aria-hidden="true">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <span className="group-hover:text-foreground transition-colors">{personalInfo.email}</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body text-muted-foreground hover:text-accent transition-colors duration-fast group p-3 rounded-xl hover:bg-accent/5 hover:border-accent/10 border border-transparent"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0" aria-hidden="true">
                      <Linkedin className="h-4 w-4 text-accent" />
                    </div>
                    <span className="group-hover:text-foreground transition-colors">LinkedIn Profile</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body text-muted-foreground hover:text-accent transition-colors duration-fast group p-3 rounded-xl hover:bg-accent/5 hover:border-accent/10 border border-transparent"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0" aria-hidden="true">
                      <Github className="h-4 w-4 text-accent" />
                    </div>
                    <span className="group-hover:text-foreground transition-colors">GitHub Profile</span>
                  </a>
                </div>

                <Button
                  variant="secondary"
                  className="w-full"
                >
                  <a href="/cv.pdf" download="Kavya_Shah_CV.pdf" className="flex items-center justify-center gap-2 w-full">
                    <Download className="h-5 w-5" aria-hidden="true" />
                    <span>Download CV</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Editorial */}
        <div className="pt-8 lg:pt-12 border-t border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              © {currentYear} Kavya Shah. Built with Next.js, TypeScript & Tailwind CSS.
            </p>

            {/* Theme Toggle - Editorial */}
            <div className="flex items-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Theme:</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="px-4 py-2"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" aria-hidden="true" />
                    Light
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" aria-hidden="true" />
                    Dark
                  </>
                )}
              </Button>
            </div>

            {/* Made with love - Editorial */}
            <div className="flex items-center justify-center lg:justify-end gap-2 text-xs text-muted-foreground">
              Made with
              <Heart className="h-3.5 w-3.5 text-red-500 animate-pulse" aria-hidden="true" />
              in Venice, Italy
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

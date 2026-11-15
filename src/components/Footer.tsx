'use client'

import * as React from 'react'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'
import { Linkedin, Github, Mail, Heart, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/ThemeProvider'

export function Footer() {
  const { theme, toggleTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="#"
              className="font-heading font-medium text-h3 text-foreground hover:opacity-80 transition-opacity inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="Kavya Shah - Home"
            >
              KS
            </Link>
            <p className="text-body text-muted-foreground leading-relaxed mb-6 max-w-xs">
              BSc Data Science student at Ca' Foscari University of Venice.
              Exploring the intersection of Data, Intelligence & Technology.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm p-2"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm p-2"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-1" aria-label="Footer navigation">
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3" role="list">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'VitaVerse', href: '#vitaverse' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-body text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & CV */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-body text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm p-2"
              >
                <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm p-2"
              >
                <Linkedin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm p-2"
              >
                <Github className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>GitHub Profile</span>
              </a>
              <Button
                variant="ghost"
                className="w-full justify-start mt-2"
              >
                <a href="/cv.pdf" download="Kavya_Shah_CV.pdf" className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kavya Shah. Built with Next.js, TypeScript & Tailwind CSS.
            </p>

            <div className="flex items-center gap-4">
              <p className="text-xs text-muted-foreground">Theme:</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="px-3 py-1.5"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-4 w-4 mr-1.5" aria-hidden="true" />
                    Light
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                    Dark
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              Made with <Heart className="h-3.5 w-3.5 text-red-500" aria-hidden="true" /> in Venice, Italy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Linkedin, Github, Mail, ArrowRight, Brain, Code, Sparkles, HeartPulse } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { AnimatedOrbs } from '@/components/AnimatedOrbs'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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

  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const focusAreas = [
    { icon: Brain, label: 'AI & Machine Learning', color: 'accent' },
    { icon: Code, label: 'Data Science & Analytics', color: 'accent' },
    { icon: HeartPulse, label: 'Healthcare Technology', color: 'accent' },
    { icon: Sparkles, label: 'Building VitaVerse', color: 'accent' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background - Animated orbs */}
      <AnimatedOrbs />

      {/* Floating decorative elements with icons - reduced motion aware */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <motion.div
            className="absolute top-20 left-10 glass px-3 py-2 rounded-lg"
            variants={floatVariants}
            style={{ transitionDelay: '0ms' }}
          >
            <Sparkles className="h-4 w-4 text-accent" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-12 glass px-3 py-2 rounded-lg"
            variants={floatVariants}
            style={{ transitionDelay: '1000ms' }}
          >
            <Brain className="h-4 w-4 text-accent" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-14 glass px-3 py-2 rounded-lg"
            variants={floatVariants}
            style={{ transitionDelay: '2000ms' }}
          >
            <Code className="h-4 w-4 text-accent" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-16 glass px-3 py-2 rounded-lg"
            variants={floatVariants}
            style={{ transitionDelay: '3000ms' }}
          >
            <Sparkles className="h-4 w-4 text-accent" />
          </motion.div>
        </div>
      )}

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top badge - Editorial style */}
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 bg-background/60 backdrop-blur-md mb-10 shadow-glass"
            variants={itemVariants}
            style={{ transitionDelay: '0ms' }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--accent)' }}
              animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-heading">
              BSc Data Science Student
            </span>
            <span className="w-px h-4 bg-border/50" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-heading">
              Ca&apos; Foscari University of Venice
            </span>
            <span className="w-px h-4 bg-border/50" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-heading">
              Venice, Italy
            </span>
          </motion.div>

          {/* Name - Editorial display */}
          <motion.h1
            id="hero-title"
            className="text-display font-heading font-semibold tracking-tight text-foreground mb-6 text-balance leading-[1.05]"
            variants={itemVariants}
          >
            Kavya Shah
          </motion.h1>

          {/* Headline - Editorial sub-headline */}
          <motion.p
            className="text-h3 font-body font-normal text-foreground/85 mb-8 max-w-2xl text-balance leading-relaxed"
            variants={itemVariants}
          >
            Exploring the intersection of <span className="font-medium text-foreground">Data</span>, <span className="font-medium text-accent">Intelligence</span> & <span className="font-medium text-accent">Technology</span>.
          </motion.p>

          {/* Description - Lead paragraph */}
          <motion.p
            className="text-body-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Second-year BSc Data Science student at Ca&apos; Foscari University of Venice.
            Building expertise in Python, SQL, data analysis, and AI &mdash; with a focus on
            healthcare technology and digital innovation.
          </motion.p>

          {/* Key Focus Areas - Editorial cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl"
            variants={itemVariants}
          >
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass px-4 py-3 rounded-xl border border-border/50 group hover:border-accent/30 hover:shadow-xl transition-all duration-normal"
                variants={itemVariants}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-accent/10 text-accent`}
                    aria-hidden="true"
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground font-heading">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-14"
            variants={itemVariants}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#work')}
              className="group btn-primary px-8 py-3.5"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary px-8 py-3.5"
            >
              Contact Me
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleCVDownload}
              className="btn-ghost px-6 py-3.5"
            >
              <Download className="h-5 w-5 mr-2" aria-hidden="true" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links - Editorial style */}
          <motion.div
            className="flex items-center gap-6"
            variants={itemVariants}
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-2.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </motion.div>

          {/* Scroll indicator - Editorial */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
            variants={itemVariants}
            animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transitionDelay: '2s' }}
            aria-hidden="true"
          >
            <span className="text-xs uppercase tracking-widest font-heading">Scroll</span>
            <motion.svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={prefersReducedMotion ? {} : { pathLength: [0, 1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                pathLength={1}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

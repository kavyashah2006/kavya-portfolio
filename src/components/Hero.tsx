'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Linkedin, Github, Mail, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/50 rounded-full" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8"
            variants={itemVariants}
            style={{ transitionDelay: '0ms' }}
          >
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              BSc Data Science Student
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Ca' Foscari University of Venice
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Venice, Italy
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            id="hero-title"
            className="text-display font-heading font-semibold tracking-tight text-foreground mb-6 text-balance"
            variants={itemVariants}
          >
            Kavya Shah
          </motion.h1>

          {/* Headline */}
          <motion.p
            className="text-h3 font-body font-normal text-foreground/80 mb-8 max-w-2xl text-balance leading-relaxed"
            variants={itemVariants}
          >
            Exploring the intersection of Data, Intelligence & Technology.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-body-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Second-year BSc Data Science student at Ca' Foscari University of Venice.
            Building expertise in Python, SQL, data analysis, and AI — with a focus on
            healthcare technology and digital innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            variants={itemVariants}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              Explore My Work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleCVDownload}
            >
              <Download className="h-5 w-5 mr-2" aria-hidden="true" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6"
            variants={itemVariants}
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-fast focus-visible:outlinenone focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transitionDelay: '1.5s' }}
            aria-hidden="true"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
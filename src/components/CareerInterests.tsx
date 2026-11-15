'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { careerInterests } from '@/lib/data'
import { Brain, BarChart2, HeartPulse, Globe, Users, Rocket, CheckCircle } from 'lucide-react'

const interestIcons = {
  Brain,
  BarChart2,
  HeartPulse,
  Globe,
  Users,
  Rocket,
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function CareerInterests() {
  return (
    <section
      id="career-interests"
      className="section bg-muted/30"
      aria-labelledby="career-title"
    >
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-4"
            variants={itemVariants}
          >
            Career Focus
          </motion.span>
          <motion.h2
            id="career-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Where I want to make an impact
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Targeting roles at the intersection of data science, AI, healthcare technology,
            and global innovation — with organizations that share my values.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {careerInterests.map((interest, index) => {
            const Icon = interestIcons[interest.icon as keyof typeof interestIcons] || Brain

            return (
              <motion.article
                key={interest.title}
                className="card-hover p-6 h-full"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>

                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                  {interest.title}
                </h3>

                <p className="text-body text-muted-foreground leading-relaxed mb-5">
                  {interest.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-accent font-medium">
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Actively exploring opportunities</span>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-h2 font-heading font-medium tracking-tight text-foreground mb-4">
              Open to Opportunities
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed mb-6">
              Currently seeking paid internships, research positions, and professional opportunities
              in Data Science, AI, and Healthcare Technology — globally.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get in Touch
              </a>
              <a
                href="/cv.pdf"
                download="Kavya_Shah_CV.pdf"
                className="btn-secondary"
              >
                Download CV
              </a>
              <a
                href="https://linkedin.com/in/kavyashah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
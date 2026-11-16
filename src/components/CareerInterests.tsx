'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { careerInterests } from '@/lib/data'
import { Brain, BarChart2, HeartPulse, Globe, Users, Rocket, Target, Mail, Download, Linkedin } from 'lucide-react'

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

const interestConfig = {
  'AI & Machine Learning': { icon: Brain, color: 'primary', description: 'Building intelligent systems that learn, reason, and adapt — from classical ML to modern deep learning architectures' },
  'Data Science & Analytics': { icon: BarChart2, color: 'accent', description: 'Transforming raw data into actionable insights through statistical analysis, visualization, and predictive modeling' },
  'Healthcare Technology': { icon: HeartPulse, color: 'secondary', description: 'Applying data science and AI to improve patient outcomes, clinical workflows, and health system efficiency' },
  'Global Innovation': { icon: Globe, color: 'primary', description: 'Working on solutions with international impact — cross-cultural collaboration and scalable technology for diverse markets' },
  'Human-Centered AI': { icon: Users, color: 'accent', description: 'Designing AI systems that augment human capabilities, respect privacy, and operate transparently and ethically' },
  'Entrepreneurial Ventures': { icon: Rocket, color: 'secondary', description: 'Building products from concept to launch — validating ideas, iterating rapidly, and scaling what works' },
}

export function CareerInterests() {
  return (
    <section
      id="career-interests"
      className="section bg-gradient-to-b from-background via-muted/30 to-background"
      aria-labelledby="career-title"
    >
      <div className="container-custom">
        {/* Section Header - Editorial */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
            variants={itemVariants}
          >
            Chapter Seven
          </motion.span>
          <motion.h2
            id="career-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Where I want to <span className="text-primary">make an impact</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Targeting roles at the intersection of data science, AI, healthcare technology,
            and global innovation — with organizations that share my values.
          </motion.p>
        </motion.div>

        {/* Interest Cards - Editorial Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {careerInterests.map((interest, index) => {
            const config = interestConfig[interest.title as keyof typeof interestConfig] || { icon: Brain, color: 'primary' }
            const Icon = config.icon
            const colorClasses = {
              primary: 'bg-primary/10 text-primary border-primary/20',
              accent: 'bg-accent/10 text-accent border-accent/20',
              secondary: 'bg-secondary/10 text-secondary border-secondary/20',
            }[config.color]

            return (
              <motion.article
                key={interest.title}
                className={`card-hover p-6 h-full flex flex-col relative group overflow-hidden ${colorClasses} border`}
                variants={itemVariants}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" aria-hidden="true" />

                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses}`} aria-hidden="true">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                  {interest.title}
                </h3>

                <p className="text-body text-muted-foreground leading-relaxed mb-6 flex-1">
                  {config.description}
                </p>

                {/* Active exploration indicator */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-accent">Actively exploring opportunities</span>
                </div>

                {/* Hover reveal - more detail */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-normal bg-gradient-to-t from-background/95 via-background/80 to-transparent backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Open to internships, research roles, and full-time positions globally.
                    <br />
                    <span className="font-medium text-foreground">Let's connect →</span>
                  </p>
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Call to Action - Editorial Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="card-editorial p-8 lg:p-12 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-medium font-heading uppercase tracking-wider mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Target className="h-4 w-4" aria-hidden="true" />
                Open to Opportunities
              </motion.div>

              <motion.h3
                className="text-h2 font-heading font-medium tracking-tight text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Currently seeking <span className="text-accent">paid internships</span>, research positions, and professional opportunities
              </motion.h3>

              <motion.p
                className="text-body-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                In Data Science, AI, and Healthcare Technology — globally. Remote-friendly, visa sponsorship open to discussion.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                  Get in Touch
                </button>
                <a
                  href="/cv.pdf"
                  download="Kavya_Shah_CV.pdf"
                  className="btn-secondary"
                >
                  <Download className="h-5 w-5 mr-2" aria-hidden="true" />
                  Download CV
                </a>
                <a
                  href="https://linkedin.com/in/kavyashah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Linkedin className="h-5 w-5 mr-2" aria-hidden="true" />
                  LinkedIn
                </a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="mt-12 pt-8 border-t border-border/30 grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div>
                  <p className="text-2xl font-heading font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading mt-1">Focus Areas</p>
                </div>
                <div className="border-x border-border/30">
                  <p className="text-2xl font-heading font-bold text-foreground">Global</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading mt-1">Opportunities</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-foreground">24h</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading mt-1">Response Time</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Seven</span>
        </div>
      </div>
    </section>
  )
}

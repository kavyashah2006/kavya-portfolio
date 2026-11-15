'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { professionalJourney } from '@/lib/data'
import { GraduationCap, Briefcase, Building2, Award } from 'lucide-react'

const categoryIcons = {
  education: GraduationCap,
  experience: Briefcase,
}

const categoryColors = {
  education: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  experience: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
}

const categoryLabels = {
  education: 'Education',
  experience: 'Experience',
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function ProfessionalJourney() {
  return (
    <section
      id="professional-journey"
      className="section bg-muted/30"
      aria-labelledby="professional-journey-title"
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
            Professional Journey
          </motion.span>
          <motion.h2
            id="professional-journey-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            My path from foundations to frontiers
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            A timeline of academic milestones, hands-on experience, and entrepreneurial ventures
            that have shaped my trajectory in data science and technology.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

          <div className="space-y-10" role="list" aria-label="Professional timeline">
            {professionalJourney.map((item, index) => {
              const Icon = categoryIcons[item.category as keyof typeof categoryIcons] || GraduationCap
              const colorClass = categoryColors[item.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'
              const label = categoryLabels[item.category as keyof typeof categoryLabels] || item.category

              return (
                <motion.div
                  key={item.year}
                  className="relative pl-16"
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  role="listitem"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2">
                    <div className={`w-8 h-8 rounded-full border-4 border-background flex items-center justify-center ${colorClass} relative z-10 shadow-lg`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    {/* Connecting line handled by vertical line */}
                  </div>

                  {/* Year badge */}
                  <div className="absolute -left-16 top-2 w-14 text-right">
                    <span className="text-xs font-mono font-medium text-muted-foreground">
                      {item.year}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-base">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                        {label}
                      </span>
                      {index === professionalJourney.length - 1 && (
                        <motion.span
                          className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent animate-pulse"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                        >
                          Current
                        </motion.span>
                      )}
                    </div>
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { label: 'Years of Education', value: '6+', icon: GraduationCap, color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
            { label: 'Internships Completed', value: '1', icon: Briefcase, color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
            { label: 'Projects Built', value: '4+', icon: Award, color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
            { label: 'Technologies Learned', value: '15+', icon: Building2, color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 rounded-2xl border border-border bg-card text-center hover:border-accent/30 transition-all duration-base"
              variants={itemVariants}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-body text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
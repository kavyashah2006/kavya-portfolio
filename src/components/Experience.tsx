'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import { Building2, Calendar, Clock, MapPin, CheckCircle, TrendingUp, Rocket, Brain, Database, Code, Globe } from 'lucide-react'
import { formatDate } from '@/lib/utils'

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

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Data Analyst': Database,
  'Data Science Intern': Brain,
  'Founder': Rocket,
  'Founder & CEO': Rocket,
  'Operations Lead': TrendingUp,
  'Research Assistant': Brain,
  'Software Engineer': Code,
  'Product Manager': Globe,
}

export function Experience() {
  return (
    <section
      id="experience"
      className="section bg-muted/30"
      aria-labelledby="experience-title"
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
            Chapter Three
          </motion.span>
          <motion.h2
            id="experience-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Professional journey & <span className="text-accent">entrepreneurial</span> ventures
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Building real-world experience in data analysis, operations, and entrepreneurship while pursuing my degree at Ca&apos; Foscari.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line - more editorial */}
          <div className="absolute left-6 lg:left-[calc(50%-1px)] top-0 bottom-0 w-px bg-border/50" aria-hidden="true" />

          <div className="space-y-10 lg:space-y-12">
            {experience.map((job, index) => {
              const Icon = roleIcons[job.role] || Building2
              const isEven = index % 2 === 1

              return (
                <motion.article
                  key={job.id}
                  className={`relative ${isEven ? 'lg:pl-[calc(50%+3rem)] lg:pr-0' : 'lg:pr-[calc(50%+3rem)] lg:pl-0'} lg:w-1/2`}
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot with connector */}
                  <div className="absolute lg:left-[calc(50%-1.5rem)] top-4 w-3 h-3 flex items-center justify-center z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-4 relative z-10 ${
                        job.current
                          ? 'bg-accent border-accent'
                          : 'bg-card border-border'
                      }`}
                      aria-hidden="true"
                    />
                    {job.current && (
                      <div
                        className="absolute w-3 h-3 rounded-full bg-accent/30 animate-pulse"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Job Card - Editorial Glassmorphism */}
                  <div className="card-hover p-6 lg:p-8 relative">
                    {/* Role badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          job.current ? 'bg-accent/10 text-accent border-accent/20 border' : 'bg-primary/10 text-primary border-primary/20 border'
                        }`}
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      {job.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium font-heading bg-accent/10 text-accent border border-accent/20">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Role & Company */}
                    <div className="mb-4">
                      <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-1">
                        {job.role}
                      </h3>
                      <p className="text-body font-medium text-accent">
                        {job.company}
                      </p>
                    </div>

                    {/* Meta info - Editorial style */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 pb-4 border-b border-border/30">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>
                          {formatDate(job.startDate)}
                          {' '}
                          {job.current ? (
                            <span className="text-foreground font-medium">â€“ Present</span>
                          ) : (
                            <>
                              <span aria-hidden="true">â€“</span>{' '}
                              {formatDate(job.endDate || '')}
                            </>
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        <span>{job.location}</span>
                      </div>
                      {job.department && (
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Building2 className="h-4 w-4" aria-hidden="true" />
                          <span>{job.department}</span>
                        </div>
                      )}
                      {job.hoursPerWeek && (
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" aria-hidden="true" />
                          <span>{job.hoursPerWeek} hrs/week</span>
                          {job.totalHours && <span className="text-muted-foreground/50">â€¢ {job.totalHours} hrs total</span>}
                        </div>
                      )}
                    </div>

                    {/* Key Achievement / Summary */}
                    {job.responsibilities.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3">
                          Key Contributions
                        </p>
                        <ul className="space-y-3" role="list">
                          {job.responsibilities.slice(0, 4).map((resp, respIndex) => (
                            <motion.li
                              key={respIndex}
                              className="flex items-start gap-3 text-body text-muted-foreground leading-relaxed group"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + respIndex * 0.08 }}
                            >
                              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                                <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />
                              </div>
                              <span className="group-hover:text-foreground transition-colors duration-fast">
                                {resp}
                              </span>
                            </motion.li>
                          ))}
                          {job.responsibilities.length > 4 && (
                            <motion.li
                              className="flex items-center gap-3 text-sm text-accent font-medium"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 + 4 * 0.08 }}
                            >
                              <TrendingUp className="h-4 w-4" aria-hidden="true" />
                              <span>+{job.responsibilities.length - 4} more contributions</span>
                            </motion.li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {job.technologies && job.technologies.length > 0 && (
                      <div className="pt-4 border-t border-border/30">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3">
                          Stack & Tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.slice(0, 8).map((tech) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {job.technologies.length > 8 && (
                            <motion.span
                              className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              +{job.technologies.length - 8} more
                            </motion.span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Current indicator */}
                    {job.current && (
                      <motion.div
                        className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                        <span className="text-accent font-medium">Currently in this role</span>
                        <span className="text-muted-foreground/50">â€¢</span>
                        <span className="text-muted-foreground text-xs">
                          {job.startDate && `Since ${formatDate(job.startDate)}`}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Side accent for desktop */}
                  <div className="hidden lg:block absolute lg:left-[calc(50%-0.5rem)] top-4 w-1 h-20 bg-gradient-to-b from-transparent via-accent/30 to-transparent" aria-hidden="true" />
                </motion.article>
              )
            })}
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Three</span>
        </div>
      </div>
    </section>
  )
}

'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import { Building2, Calendar, Clock, MapPin, CheckCircle, Circle } from 'lucide-react'
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

export function Experience() {
  return (
    <section
      id="experience"
      className="section bg-muted/30"
      aria-labelledby="experience-title"
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
            Experience
          </motion.span>
          <motion.h2
            id="experience-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Professional journey & internships
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Building real-world experience in data analysis, operations, and
            entrepreneurship while pursuing my degree.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12 pl-20">
            {experience.map((job, index) => (
              <motion.article
                key={job.id}
                className="relative group"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-2 w-12 h-12 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 $
                      job.current
                        ? 'bg-accent border-accent'
                        : 'bg-card border-border'
                    } relative z-10`}
                    aria-hidden="true"
                  />
                  {job.current && (
                    <div
                      className="absolute w-4 h-4 rounded-full bg-accent/30 animate-pulse"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Job Card */}
                <div className="card-hover p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-body font-medium text-accent mt-1">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {formatDate(job.startDate)}
                        {' '}
                        {job.current ? (
                          <>
                            <span aria-hidden="true">–</span> Present
                          </>
                        ) : (
                          <>
                            <span aria-hidden="true">–</span> {formatDate(job.endDate || '')}
                          </>
                        )}
                      </span>
                      <span className="<span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {job.department && (
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                      <Building2 className="h-4 w-4" aria-hidden="true" />
                      {job.department}
                    </p>
                  )}

                  {job.hoursPerWeek && (
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {job.hoursPerWeek} hrs/week
                      {job.totalHours && ` • {job.totalHours} hours total`}
                    </p>
                  )}

                  {/* Responsibilities */}
                  <ul className="space-y-3" role="list">
                    {job.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        className="flex items-start gap-3 text-body text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + respIndex * 0.05 }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {job.technologies && job.technologies.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Technologies & Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full border border-border bg-card text-xs font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Current badge */}
                  {job.current && (
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <Circle className="h-2 w-2 text-accent animate-pulse" aria-hidden="true" />
                      <span className="text-accent font-medium">Currently in this role</span>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
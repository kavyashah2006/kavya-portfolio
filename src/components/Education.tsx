'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { education } from '@/lib/data'
import { GraduationCap, Award, MapPin, Calendar, CheckCircle, BookOpen, Brain, Database, Code2, Zap, Globe } from 'lucide-react'
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

// Academic subject areas for BSc Data Science - presented as learning focus areas
const academicAreas = [
  { name: 'Data Science Fundamentals', icon: Brain, description: 'Core concepts in data science methodology, data lifecycle, and analytical thinking' },
  { name: 'Programming & Computational Problem-Solving', icon: Code2, description: 'Algorithmic thinking, software design principles, and computational approaches to data problems' },
  { name: 'Python & Programming Concepts', icon: Code2, description: 'Python programming, libraries for data manipulation (Pandas, NumPy), and scripting for automation' },
  { name: 'SQL & Database Management', icon: Database, description: 'Relational databases, query optimization, data modeling, and database administration fundamentals' },
  { name: 'Mathematics & Statistical Analysis', icon: BookOpen, description: 'Calculus, discrete mathematics, and mathematical foundations for data science' },
  { name: 'Probability & Statistics', icon: BookOpen, description: 'Probability theory, statistical inference, hypothesis testing, and regression analysis' },
  { name: 'Linear Algebra', icon: BookOpen, description: 'Vector spaces, matrix operations, eigenvalues, and applications in machine learning' },
  { name: 'Artificial Intelligence & Machine Learning', icon: Brain, description: 'ML algorithms, supervised/unsupervised learning, model evaluation, and AI ethics' },
  { name: 'Data Analysis & Data Processing', icon: Database, description: 'Exploratory data analysis, data cleaning, feature engineering, and data pipeline design' },
  { name: 'Software Development & System Administration', icon: Globe, description: 'Version control, testing, deployment, Linux fundamentals, and DevOps basics' },
]

export function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-4"
            variants={itemVariants}
          >
            Education
          </motion.span>
          <motion.h2
            id="education-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Academic background & certifications
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Formal education in data science, AI, and software development
            with a focus on healthcare applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-10 pl-20">
            {education.map((edu, index) => (
              <motion.article
                key={edu.id}
                className="relative group"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-2 w-12 h-12 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 $
                      edu.current
                        ? 'bg-accent border-accent'
                        : 'bg-card border-border'
                    } relative z-10`}
                    aria-hidden="true"
                  />
                  {edu.current && (
                    <div
                      className="absolute w-4 h-4 rounded-full bg-accent/30 animate-pulse"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Education Card */}
                <div className="card-hover p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 $
                        edu.current ? 'bg-accent/10' : 'bg-muted'
                      }"}
                      >
                        <GraduationCap className={`h-6 w-6 ${edu.current ? 'text-accent' : 'text-muted-foreground'}`} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-body font-medium text-accent mt-1">{edu.institution}</p>
                        {edu.fieldOfStudy && (
                          <p className="text-sm text-muted-foreground mt-1">{edu.fieldOfStudy}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {formatDate(edu.startDate)}
                        {' '}
                        {edu.current ? (
                          <>
                            <span aria-hidden="true">–</span> Present
                          </>
                        ) : (
                          <>
                            <span aria-hidden="true">–</span> {formatDate(edu.endDate || '')}
                          </>
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {edu.level && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Award className="h-4 w-4" aria-hidden="true" />
                      <span>{edu.level}</span>
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-body text-muted-foreground leading-relaxed mb-6">{edu.description}</p>
                  )}

                  {/* Expanded academic areas for current degree */}
                  {edu.current && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
                        <span>Academic Focus Areas & Learning Objectives</span>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {academicAreas.map((area, aIndex) => (
                          <motion.div
                            key={area.name}
                            className="p-4 rounded-lg border border-border bg-card/50 hover:border-accent/30 hover:bg-card transition-all duration-base group"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + aIndex * 0.05 }}
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                              <area.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                            </div>
                            <h4 className="text-sm font-medium text-foreground mb-1">{area.name}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.current && (
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                      <span className="text-accent font-medium">Currently enrolled — Second Year</span>
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
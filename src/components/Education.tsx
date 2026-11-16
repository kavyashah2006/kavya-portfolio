'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { education } from '@/lib/data'
import { GraduationCap, Award, MapPin, Calendar, BookOpen, Brain, Database, Code2, Globe, Medal } from 'lucide-react'
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

const certifications = [
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Google / Coursera', year: '2024', icon: Award },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM / Coursera', year: '2024', icon: Code2 },
  { name: 'SQL for Data Science', issuer: 'UC Davis / Coursera', year: '2024', icon: Database },
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI / Coursera', year: '2023', icon: Brain },
  { name: 'IELTS Academic C1', issuer: 'British Council / IDP', year: '2023', icon: Globe },
]

export function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
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
            Chapter Six
          </motion.span>
          <motion.h2
            id="education-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Academic foundation & <span className="text-primary">continuous learning</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Formal education in data science, AI, and software development at Ca' Foscari University of Venice, complemented by industry certifications.
          </motion.p>
        </motion.div>

        {/* Education Timeline - Editorial */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line */}
          <div className="absolute left-6 lg:left-[calc(50%-1px)] top-0 bottom-0 w-px bg-border/50" aria-hidden="true" />

          <div className="space-y-10 lg:space-y-12">
            {education.map((edu, index) => {
              const isEven = index % 2 === 1

              return (
                <motion.article
                  key={edu.id}
                  className={`relative ${isEven ? 'lg:pl-[calc(50%+3rem)] lg:pr-0' : 'lg:pr-[calc(50%+3rem)] lg:pl-0'} lg:w-1/2`}
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute lg:left-[calc(50%-1.5rem)] top-4 w-3 h-3 flex items-center justify-center z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-4 relative z-10 ${
                        edu.current
                          ? 'bg-accent border-accent'
                          : 'bg-card border-border'
                      }`}
                      aria-hidden="true"
                    />
                    {edu.current && (
                      <div
                        className="absolute w-3 h-3 rounded-full bg-accent/30 animate-pulse"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Education Card - Editorial Glassmorphism */}
                  <div className="card-hover p-6 lg:p-8 relative">
                    {/* Degree badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          edu.current ? 'bg-accent/10 text-accent border-accent/20 border' : 'bg-primary/10 text-primary border-primary/20 border'
                        }`}
                        aria-hidden="true"
                      >
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      {edu.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium font-heading bg-accent/10 text-accent border border-accent/20">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Degree & Institution */}
                    <div className="mb-4">
                      <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-body font-medium text-accent">
                        {edu.institution}
                      </p>
                      {edu.fieldOfStudy && (
                        <p className="text-sm text-muted-foreground mt-1">{edu.fieldOfStudy}</p>
                      )}
                    </div>

                    {/* Meta info - Editorial style */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 pb-4 border-b border-border/30">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>
                          {formatDate(edu.startDate)}
                          {' '}
                          {edu.current ? (
                            <span className="text-foreground font-medium">— Present</span>
                          ) : (
                            <>
                              <span aria-hidden="true">—</span>{' '}
                              {formatDate(edu.endDate || '')}
                            </>
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.level && (
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Medal className="h-4 w-4" aria-hidden="true" />
                          <span>{edu.level}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <div className="mb-6">
                        <p className="text-body text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    )}

                    {/* Academic Focus Areas for current degree */}
                    {edu.current && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                          <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
                          <span>Academic Focus Areas & Learning Objectives</span>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {academicAreas.map((area, aIndex) => (
                            <motion.div
                              key={area.name}
                              className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-lg transition-all duration-normal group"
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

                    {/* Current indicator */}
                    {edu.current && (
                      <motion.div
                        className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                        <span className="text-accent font-medium">Currently enrolled — Second Year</span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-muted-foreground text-xs">
                          {edu.startDate && `Since ${formatDate(edu.startDate)}`}
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

        {/* Certifications - Editorial Grid */}
        <motion.div
          className="mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
              variants={itemVariants}
            >
              Certifications
            </motion.span>
            <motion.h3
              className="text-h2 font-heading font-medium tracking-tight text-foreground"
              variants={itemVariants}
            >
              Industry-recognized <span className="text-accent">credentials</span>
            </motion.h3>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.name}
                className="group relative p-5 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-normal"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-normal">
                  <cert.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-foreground text-center mb-1 leading-snug">{cert.name}</p>
                <p className="text-xs text-muted-foreground text-center mb-2">{cert.issuer}</p>
                <div className="px-2 py-1 rounded-full bg-muted text-xs font-medium font-heading text-muted-foreground text-center w-fit mx-auto">
                  {cert.year}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Six</span>
        </div>
      </div>
    </section>
  )
}

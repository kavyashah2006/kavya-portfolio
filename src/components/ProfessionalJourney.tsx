'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { professionalJourney } from '@/lib/data'
import { GraduationCap, Briefcase, Building2, Award, Calendar, CheckCircle, Target, Sparkles, ArrowRight } from 'lucide-react'

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

const categoryConfig = {
  education: { icon: GraduationCap, color: 'primary', label: 'Education', accent: 'bg-primary/10 text-primary border-primary/20' },
  experience: { icon: Briefcase, color: 'accent', label: 'Experience', accent: 'bg-accent/10 text-accent border-accent/20' },
  venture: { icon: Building2, color: 'secondary', label: 'Venture', accent: 'bg-secondary/10 text-secondary border-secondary/20' },
}

export function ProfessionalJourney() {
  return (
    <section
      id="professional-journey"
      className="section bg-gradient-to-b from-background via-muted/30 to-background"
      aria-labelledby="professional-journey-title"
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
            Chapter Nine
          </motion.span>
          <motion.h2
            id="professional-journey-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            My path from <span className="text-primary">foundations</span> to <span className="text-accent">frontiers</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A timeline of academic milestones, hands-on experience, and entrepreneurial ventures
            that have shaped my trajectory in data science and technology.
          </motion.p>
        </motion.div>

        {/* Timeline - Editorial Alternating Layout */}
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
            {professionalJourney.map((item, index) => {
              const config = categoryConfig[item.category as keyof typeof categoryConfig] || categoryConfig.education
              const Icon = config.icon
              const accentClass = config.accent
              const isEven = index % 2 === 1

              return (
                <motion.article
                  key={item.year}
                  className={`relative ${isEven ? 'lg:pl-[calc(50%+3rem)] lg:pr-0' : 'lg:pr-[calc(50%+3rem)] lg:pl-0'} lg:w-1/2`}
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  role="listitem"
                >
                  {/* Timeline dot */}
                  <div className="absolute lg:left-[calc(50%-1.5rem)] top-4 w-3 h-3 flex items-center justify-center z-10">
                    <div className={`w-3 h-3 rounded-full border-4 relative z-10 ${accentClass.replace('text-', '').replace('border-', 'border-')} border`} aria-hidden="true">
                      <Icon className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Journey Card - Editorial Glassmorphism */}
                  <div className={`card-hover p-6 lg:p-8 relative ${accentClass} border`}>
                    {/* Category badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accentClass}`} aria-hidden="true">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${accentClass}`}>
                        {config.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                      {item.title}
                    </h3>

                    {/* Year */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 pb-4 border-b border-border/30">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{item.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-body text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights for experience items */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3">
                          Key Highlights
                        </p>
                        <ul className="space-y-2.5" role="list">
                          {item.highlights.slice(0, 3).map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              className="flex items-start gap-3 text-body text-muted-foreground leading-relaxed group"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + hIndex * 0.08 }}
                            >
                              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                                <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />
                              </div>
                              <span className="group-hover:text-foreground transition-colors duration-fast">{highlight}</span>
                            </motion.li>
                          ))}
                          {item.highlights.length > 3 && (
                            <motion.li
                              className="flex items-center gap-3 text-sm text-accent font-medium"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 + 3 * 0.08 }}
                            >
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                              <span>+{item.highlights.length - 3} more achievements</span>
                            </motion.li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Technologies for experience items */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-border/30">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3">
                          Stack & Tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 8).map((tech) => (
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
                          {item.technologies.length > 8 && (
                            <motion.span
                              className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              +{item.technologies.length - 8} more
                            </motion.span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Side accent for desktop */}
                  <div className="hidden lg:block absolute lg:left-[calc(50%-0.5rem)] top-4 w-1 h-20 bg-gradient-to-b from-transparent via-accent/30 to-transparent" aria-hidden="true" />
                </motion.article>
              )
            })}
          </div>
        </motion.div>

        {/* Summary Stats - Editorial Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { label: 'Years of Education', value: '6+', icon: GraduationCap, color: 'primary' },
            { label: 'Internships Completed', value: '1', icon: Briefcase, color: 'accent' },
            { label: 'Projects Built', value: '4+', icon: Award, color: 'secondary' },
            { label: 'Technologies Learned', value: '15+', icon: Building2, color: 'primary' },
          ].map((stat, index) => {
            const colorClasses = {
              primary: 'bg-primary/10 text-primary border-primary/20',
              accent: 'bg-accent/10 text-accent border-accent/20',
              secondary: 'bg-secondary/10 text-secondary border-secondary/20',
            }[stat.color]

            return (
              <motion.div
                key={stat.label}
                className={`p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm text-center hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-normal card-hover ${colorClasses}`}
                variants={itemVariants}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${colorClasses}`} aria-hidden="true">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-body text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Narrative Summary - Editorial Article */}
        <motion.article
          className="card-editorial p-6 lg:p-8 max-w-4xl mx-auto relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
                <Sparkles className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                  The Narrative So Far
                </h3>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  From rigorous academic foundations at Ca&apos; Foscari University to hands-on data analysis at Vicomtech,
                  and entrepreneurial exploration with VitaVerse — each chapter has been driven by curiosity about
                  how data and intelligence can solve real human problems, especially in healthcare.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border/30">
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                The next chapter: contributing to world-class AI and data science teams building products
                that matter — with a focus on healthcare technology, responsible AI, and global impact.
              </p>
              <div className="flex items-center gap-4">
                <Target className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-accent">Actively seeking opportunities aligned with this vision</span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Nine</span>
        </div>
      </div>
    </section>
  )
}

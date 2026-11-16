'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { Terminal, Database, BarChart2, Briefcase, FileText, Palette, Zap, Brain, GitBranch, Cloud } from 'lucide-react'

const categoryIcons = {
  Programming: Terminal,
  Database: Database,
  Analytics: BarChart2,
  Business: Briefcase,
  Tools: FileText,
  Design: Palette,
  'Machine Learning': Brain,
  'Cloud & DevOps': Cloud,
  'Version Control': GitBranch,
}

const categoryColors = {
  Programming: 'bg-primary/10 text-primary border-primary/20',
  Database: 'bg-accent/10 text-accent border-accent/20',
  Analytics: 'bg-secondary/10 text-secondary border-secondary/20',
  Business: 'bg-amber/10 text-amber-600 border-amber-200/50',
  Tools: 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20',
  Design: 'bg-pink-500/10 text-pink-600 border-pink-200/50',
  'Machine Learning': 'bg-violet-500/10 text-violet-600 border-violet-200/50',
  'Cloud & DevOps': 'bg-cyan-500/10 text-cyan-600 border-cyan-200/50',
  'Version Control': 'bg-orange-500/10 text-orange-600 border-orange-200/50',
}

const categoryOrder = [
  'Programming',
  'Machine Learning',
  'Analytics',
  'Database',
  'Cloud & DevOps',
  'Tools',
  'Version Control',
  'Design',
  'Business',
]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function Skills() {
  const technicalByCategory = skills.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills.technical>)

  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-title"
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
            Chapter Two
          </motion.span>
          <motion.h2
            id="skills-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Technical toolkit for <span className="text-primary">data science</span>, <span className="text-accent">AI</span> & <span className="text-secondary">engineering</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Hands-on experience across the modern data stack — from Python and SQL to cloud deployment and ML model development.
          </motion.p>
        </motion.div>

        {/* Technical Skills by Category - Editorial Grid */}
        <motion.div
          className="space-y-10 lg:space-y-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categoryOrder.map((category, catIndex) => {
            const categorySkills = technicalByCategory[category]
            if (!categorySkills || categorySkills.length === 0) return null

            const Icon = categoryIcons[category as keyof typeof categoryIcons] || Zap
            const colorClass = categoryColors[category as keyof typeof categoryColors] || 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20'

            return (
              <motion.article
                key={category}
                className="card-editorial"
                variants={itemVariants}
                style={{ transitionDelay: `${catIndex * 80}ms` }}
              >
                <header className="flex items-center gap-4 mb-6 pb-4 border-b border-border/30">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                      {category}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {categorySkills.length} {categorySkills.length === 1 ? 'technology' : 'technologies'}
                    </p>
                  </div>
                </header>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      className="group relative px-4 py-2.5 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-body font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg transition-all duration-normal cursor-default"
                      variants={itemVariants}
                      style={{ transitionDelay: `${skillIndex * 40}ms` }}
                    >
                      <span className="flex items-center gap-2">
                        {skill.name}
                        <span
                          className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium font-heading ${
                            skill.level === 'proficient'
                              ? 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50 border'
                              : skill.level === 'advanced'
                              ? 'bg-primary/10 text-primary border-primary/20 border'
                              : 'bg-amber-500/10 text-amber-600 border-amber-200/50 border'
                          }`}
                        >
                          {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                        </span>
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Soft Skills - Editorial Cards */}
        <motion.div
          className="mt-20 pt-16 border-t border-border/50"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
            >
              Soft Skills
            </motion.span>
            <motion.h3
              className="text-h2 font-heading font-medium tracking-tight text-foreground"
            >
              How I <span className="text-accent">work</span> & <span className="text-primary">collaborate</span>
            </motion.h3>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {skills.soft.map((skill, index) => (
              <motion.article
                key={skill}
                className="group relative p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm text-center hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-normal"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-normal">
                  <Zap className="h-7 w-7 text-accent" aria-hidden="true" />
                </div>
                <p className="text-body font-medium text-foreground mb-2">
                  {skill}
                </p>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Two</span>
        </div>
      </div>
    </section>
  )
}

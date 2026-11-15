'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { Terminal, Database, BarChart2, Briefcase, Code, FileText, Palette, Zap } from 'lucide-react'

const categoryIcons = {
  Programming: Terminal,
  Database: Database,
  Analytics: BarChart2,
  Business: Briefcase,
  Tools: FileText,
  Design: Palette,
}

const categoryColors = {
  Programming: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Database: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Analytics: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Business: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  Tools: 'bg-gray-100 text-gray-700 dark:bg-gray-700/30 dark:text-gray-400',
  Design: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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

  const categoryOrder = ['Programming', 'Database', 'Analytics', 'Business', 'Tools', 'Design']

  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-title"
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
            Technical Skills
          </motion.span>
          <motion.h2
            id="skills-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Tools & technologies I work with
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Proficient in data science fundamentals with hands-on experience in
            Python, SQL, and data analysis workflows.
          </motion.p>
        </motion.div>

        {/* Technical Skills by Category */}
        <motion.div
          className="space-y-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categoryOrder.map((category, catIndex) => {
            const categorySkills = technicalByCategory[category]
            if (!categorySkills || categorySkills.length === 0) return null

            const Icon = categoryIcons[category as keyof typeof categoryIcons] || Zap
            const colorClass = categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'

            return (
              <motion.div
                key={category}
                variants={itemVariants}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      className="px-4 py-2 rounded-lg border border-border bg-card text-body font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-base cursor-default"
                      variants={itemVariants}
                      style={{ transitionDelay: `${skillIndex * 30}ms` }}
                    >
                      {skill.name}
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium $
                        skill.level === 'proficient'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                          : skill.level === 'advanced'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>
                        {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="mt-16 pt-16 border-t border-border"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="max-w-3xl mx-auto text-center mb-10"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-4"
            >
              Soft Skills
            </motion.span>
            <motion.h3
              className="text-h2 font-heading font-medium tracking-tight text-foreground"
            >
              How I work & collaborate
            </motion.h3>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {skills.soft.map((skill, index) => (
              <motion.div
                key={skill}
                className="p-5 rounded-xl border border-border bg-card text-center hover:border-accent/30 hover:shadow-lg transition-all duration-base group"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <p className="text-body font-medium text-foreground">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
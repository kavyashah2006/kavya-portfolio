'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { currentlyLearning } from '@/lib/data'
import { Brain, Cpu, Database, FileCode, Server, BarChart3, HeartPulse, Cloud } from 'lucide-react'

const learningIcons = {
  'Artificial Intelligence': Brain,
  'Machine Learning': Cpu,
  'Data Engineering': Database,
  'Advanced Python': FileCode,
  'Database Management': Database,
  'Cloud Computing': Cloud,
  'Data Visualization': BarChart3,
  'Healthcare Technology': HeartPulse,
}

const learningColors = {
  'Artificial Intelligence': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Machine Learning': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Data Engineering': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Advanced Python': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Database Management': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  'Cloud Computing': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
  'Data Visualization': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  'Healthcare Technology': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

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

export function CurrentlyLearning() {
  return (
    <section
      id="currently-learning"
      className="section"
      aria-labelledby="currently-learning-title"
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
            Currently Learning
          </motion.span>
          <motion.h2
            id="currently-learning-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Expanding my knowledge & skills
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Actively deepening expertise across the data science and AI spectrum — from
            foundational ML concepts to cutting-edge healthcare technology applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {currentlyLearning.map((item, index) => {
            const Icon = learningIcons[item.title as keyof typeof learningIcons] || Brain
            const colorClass = learningColors[item.title as keyof typeof learningColors] || 'bg-gray-100 text-gray-700'

            return (
              <motion.div
                key={item.title}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-base"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${colorClass} group-hover:scale-110 transition-transform duration-base`}>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Continuous Learning Note */}
        <motion.div
          className="mt-16 p-8 rounded-2xl border border-border bg-muted/30 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center"
            variants={itemVariants}
          >
            <Brain className="h-7 w-7 text-accent" aria-hidden="true" />
          </motion.div>
          <motion.h3
            className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3"
            variants={itemVariants}
          >
            Lifelong Learning Mindset
          </motion.h3>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I believe the best technologists are perpetual students. My approach combines
            structured coursework with hands-on projects, open-source exploration, and
            real-world problem solving — ensuring every concept I learn translates into
            practical capability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
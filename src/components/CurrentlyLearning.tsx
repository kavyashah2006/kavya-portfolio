'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { currentlyLearning } from '@/lib/data'
import { Brain, Cpu, Database, FileCode, Server, BarChart3, HeartPulse, Cloud, Sparkles, Target, BookOpen, Zap, CheckCircle } from 'lucide-react'

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

const learningConfig = {
  'Artificial Intelligence': { icon: Brain, color: 'primary', accent: 'bg-primary/10 text-primary border-primary/20' },
  'Machine Learning': { icon: Cpu, color: 'accent', accent: 'bg-accent/10 text-accent border-accent/20' },
  'Data Engineering': { icon: Database, color: 'secondary', accent: 'bg-secondary/10 text-secondary border-secondary/20' },
  'Advanced Python': { icon: FileCode, color: 'primary', accent: 'bg-primary/10 text-primary border-primary/20' },
  'Database Management': { icon: Server, color: 'accent', accent: 'bg-accent/10 text-accent border-accent/20' },
  'Cloud Computing': { icon: Cloud, color: 'secondary', accent: 'bg-secondary/10 text-secondary border-secondary/20' },
  'Data Visualization': { icon: BarChart3, color: 'primary', accent: 'bg-primary/10 text-primary border-primary/20' },
  'Healthcare Technology': { icon: HeartPulse, color: 'secondary', accent: 'bg-secondary/10 text-secondary border-secondary/20' },
}

export function CurrentlyLearning() {
  return (
    <section
      id="currently-learning"
      className="section"
      aria-labelledby="currently-learning-title"
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
            Chapter Eight
          </motion.span>
          <motion.h2
            id="currently-learning-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Expanding my <span className="text-primary">knowledge</span> & <span className="text-accent">skills</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Actively deepening expertise across the data science and AI spectrum — from
            foundational ML concepts to cutting-edge healthcare technology applications.
          </motion.p>
        </motion.div>

        {/* Learning Cards - Editorial Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {currentlyLearning.map((item, index) => {
            const config = learningConfig[item.title as keyof typeof learningConfig] || { icon: Brain, accent: 'bg-primary/10 text-primary border-primary/20' }
            const Icon = config.icon
            const accentClass = config.accent

            return (
              <motion.article
                key={item.title}
                className={`group relative p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-normal card-hover flex flex-col ${accentClass}`}
                variants={itemVariants}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-normal ${accentClass}`} aria-hidden="true">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-body text-muted-foreground leading-relaxed flex-1 mb-5">
                  {item.description}
                </p>

                {/* Progress indicator */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-muted-foreground uppercase tracking-wider font-heading">Progress</span>
                    <span className="text-accent font-medium">In Progress</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Learning Philosophy - Editorial Article */}
        <motion.article
          className="card-editorial p-6 lg:p-8 max-w-4xl mx-auto mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
              <Sparkles className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                Lifelong Learning Mindset
              </h3>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                I believe the best technologists are perpetual students. My approach combines
                structured coursework with hands-on projects, open-source exploration, and
                real-world problem solving — ensuring every concept I learn translates into
                practical capability.
              </p>
            </div>
          </div>

          {/* Learning methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-border/30">
            {[
              { icon: BookOpen, label: 'Structured Courses', desc: 'Coursera, edX, DeepLearning.AI specializations' },
              { icon: Zap, label: 'Hands-on Projects', desc: 'Building end-to-end applications & pipelines' },
              { icon: Target, label: 'Open Source', desc: 'Contributing to & learning from community code' },
              { icon: CheckCircle, label: 'Real Problems', desc: 'Applying skills to healthcare & social impact' },
            ].map((method, mIndex) => (
              <motion.div
                key={method.label}
                className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-normal text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + mIndex * 0.08 }}
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center">
                  <method.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{method.label}</p>
                <p className="text-xs text-muted-foreground">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.article>

        {/* Currently Focusing - Editorial Callout */}
        <motion.div
          className="card-editorial p-6 lg:p-8 max-w-4xl mx-auto relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-xs font-medium text-accent uppercase tracking-widest font-heading">Current Focus</p>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">Deepening ML Engineering & Production Systems</h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              [
                'MLOps & Model Deployment',
                'Distributed Training Systems',
                'Feature Stores & Data Pipelines',
                'Model Monitoring & Observability',
                'Kubernetes for ML Workloads',
                'LLM Fine-tuning & RAG Systems',
              ].map((focus, fIndex) => (
                <motion.div
                  key={focus}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + fIndex * 0.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-fast flex-shrink-0" aria-hidden="true">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{focus}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Eight</span>
        </div>
      </div>
    </section>
  )
}

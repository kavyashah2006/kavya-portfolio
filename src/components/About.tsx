'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { about, languages, hobbies } from '@/lib/data'
import { Brain, HeartPulse, Globe, Rocket, Users, BarChart, Code, Database, BarChart2, Zap, BookOpen, Target, Lightbulb, Compass, Sparkles } from 'lucide-react'

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

const interestIcons = {
  'Data Science': BarChart,
  'Artificial Intelligence': Brain,
  'Machine Learning': Brain,
  'Software Development': Code,
  'Database Management': Database,
  'Data Analytics': BarChart2,
  'Healthcare Technology': HeartPulse,
  'Digital Innovation': Zap,
  'Entrepreneurship': Rocket,
}


export function About() {
  return (
    <section
      id="about"
      className="section bg-muted/30"
      aria-labelledby="about-title"
    >
      <div className="container-custom">
        {/* Section Header - Editorial style */}
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
            Chapter One
          </motion.span>
          <motion.h2
            id="about-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Curious mind at the intersection of <span className="text-primary">data</span>, <span className="text-accent">intelligence</span> & <span className="text-secondary">technology</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Second-year BSc Data Science student at Ca&apos; Foscari University of Venice, building expertise in Python, SQL, data analysis, and AI.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-8 lg:gap-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column - Editorial content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Introduction with drop cap */}
            <motion.article
              className="card-editorial space-y-6"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                  Introduction
                </h3>
              </header>
              <div className="drop-cap prose">
                <p className="text-body text-muted-foreground leading-relaxed mb-4">
                  {about.introduction}
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {about.approach}
                </p>
              </div>
              {/* Pull quote */}
              <blockquote className="pull-quote my-8">
                &ldquo;Data is not just numbersâ€”it&rsquo;s the language of understanding our world. Intelligence is how we interpret it. Technology is how we scale that understanding.&rdquo;
              </blockquote>
            </motion.article>

            {/* Technical Interests - Editorial cards */}
            <motion.article
              className="card-editorial space-y-6"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                  Technical Interests
                </h3>
                <p className="text-body text-muted-foreground mt-2">
                  Areas where curiosity meets capability
                </p>
              </header>
              <ul className="grid gap-4 sm:grid-cols-2" role="list">
                {about.interests.map((interest, index) => {
                  const Icon = interestIcons[interest as keyof typeof interestIcons] || Sparkles
                  const colorClasses = [
                    'bg-primary/10 text-primary border-primary/20',
                    'bg-accent/10 text-accent border-accent/20',
                    'bg-secondary/10 text-secondary border-secondary/20',
                    'bg-primary/10 text-primary border-primary/20',
                    'bg-accent/10 text-accent border-accent/20',
                    'bg-secondary/10 text-secondary border-secondary/20',
                    'bg-primary/10 text-primary border-primary/20',
                    'bg-accent/10 text-accent border-accent/20',
                    'bg-secondary/10 text-secondary border-secondary/20',
                  ][index % 9]
                  return (
                    <motion.li
                      key={interest}
                      className={`group relative p-5 rounded-xl border transition-all duration-normal hover:shadow-lg hover:-translate-y-1 ${colorClasses}`}
                      variants={itemVariants}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses.replace('border-', '').replace('/20', '')}`}
                          aria-hidden="true"
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-body font-medium text-foreground font-heading block">
                            {interest}
                          </span>
                          <span className="text-sm text-muted-foreground mt-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-fast">
                            Explore â†’
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.article>

            {/* Career Ambitions */}
            <motion.article
              className="card-editorial space-y-6"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                  Career Ambitions
                </h3>
              </header>
              <div className="prose">
                <p className="text-body text-muted-foreground leading-relaxed">
                  {about.ambitions}
                </p>
              </div>
              {/* Ambition highlights */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                {[
                  { label: 'Data Science & Analytics', icon: BarChart, color: 'primary' },
                  { label: 'AI & Machine Learning', icon: Brain, color: 'accent' },
                  { label: 'Healthcare Technology', icon: HeartPulse, color: 'secondary' },
                  { label: 'Research & Innovation', icon: BookOpen, color: 'primary' },
                  { label: 'Global Impact', icon: Globe, color: 'accent' },
                  { label: 'Product Building', icon: Lightbulb, color: 'secondary' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="glass px-4 py-3 rounded-xl border border-border/50 group hover:border-accent/30 hover:shadow-xl transition-all duration-normal"
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-lg ${item.color === 'primary' ? 'bg-primary/10 text-primary' : item.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-secondary/10 text-secondary'}`}
                        aria-hidden="true"
                      >
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground font-heading">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          </div>

          {/* Right Column - Quick Facts & Meta */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Facts - Editorial card */}
            <motion.article
              className="card-editorial space-y-6 h-full"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                  Quick Facts
                </h3>
                <p className="text-body text-muted-foreground mt-2">
                  At a glance
                </p>
              </header>
              <dl className="space-y-4" role="list">
                {[
                  { label: 'Current Role', value: 'BSc Data Science Student (2nd Year)', icon: BookOpen },
                  { label: 'University', value: "Ca&apos; Foscari University of Venice", icon: Globe },
                  { label: 'Location', value: 'Venice, Italy', icon: Compass },
                  { label: 'Internship', value: 'Digitattva Technolabs (Data Analyst)', icon: Target },
                  { label: 'Startup', value: 'Founder, VitaVerse', icon: Lightbulb },
                  { label: 'English', value: 'IELTS C1 (Proficient User)', icon: Users },
                ].map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-accent/30 transition-all duration-normal"
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-1 flex items-center gap-2">
                      <fact.icon className="h-4 w-4" aria-hidden="true" />
                      {fact.label}
                    </dt>
                    <dd className="text-body font-medium text-foreground ml-6">
                      {fact.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.article>

            {/* Languages */}
            <motion.article
              className="card-editorial space-y-6"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                  Languages
                </h3>
              </header>
              <ul className="space-y-3" role="list">
                {(languages || []).map((lang) => (
                  <motion.li
                    key={lang.language}
                    className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-accent/30 transition-all duration-normal"
                    variants={itemVariants}
                  >
                    <span className="text-body font-medium text-foreground">
                      {lang.language}
                    </span>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                      {lang.proficiency}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>

            {/* Hobbies & Interests */}
            <motion.article
              className="card-editorial space-y-6"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                  Beyond Code
                </h3>
                <p className="text-body text-muted-foreground mt-2">
                  What fuels the curiosity
                </p>
              </header>
              <div className="flex flex-wrap gap-2.5">
                {(hobbies || []).map((hobby) => (
                  <motion.span
                    key={hobby}
                    className="px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-body text-foreground font-medium font-heading hover:border-accent/50 hover:bg-accent/10 transition-all duration-fast cursor-default"
                    variants={itemVariants}
                  >
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter One</span>
        </div>
      </div>
    </section>
  )
}

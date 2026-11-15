'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Code, Database, Brain, HeartPulse, Globe, ArrowRight, ImageIcon } from 'lucide-react'

const projectIcons = {
  'Healthcare Technology': HeartPulse,
  'Data Science': Database,
  'AI/ML': Brain,
  'Web Development': Globe,
}

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

export function Projects() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-title"
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
            Featured Projects
          </motion.span>
          <motion.h2
            id="projects-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Selected work & implementations
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Real projects demonstrating practical data science, AI concepts,
            and healthcare technology applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => {
            const Icon = projectIcons[project.category as keyof typeof projectIcons] || Code

            return (
              <motion.article
                key={project.id}
                className="relative"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card variant="interactive" className="h-full flex flex-col overflow-hidden">
                  {/* Project Image Preview */}
                  {project.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5" aria-hidden="true" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-accent/30" aria-hidden="true" />
                      </div>
                    </div>
                  )}

                  {/* Project Header */}
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-accent uppercase tracking-wider">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium $
                        project.status === 'In Development'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <CardTitle className="text-h3">{project.name}</CardTitle>
                    <CardDescription className="text-body text-muted-foreground mt-2">
                      {project.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-body text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Problem & Solution */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg border border-border bg-muted/50">
                          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Brain className="h-3.5 w-3.5" aria-hidden="true" />
                            Problem
                          </h4>
                          <p className="text-sm text-foreground leading-relaxed">{project.problem}</p>
                        </div>
                        <div className="p-4 rounded-lg border border-border bg-muted/50">
                          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            Solution
                          </h4>
                          <p className="text-sm text-foreground leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2" role="list">
                          {project.highlights.map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + hIndex * 0.05 }}
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" aria-hidden="true" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full border border-border bg-card text-xs font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {project.githubUrl && (
                        <Button variant="ghost" size="sm" className="gap-1.5">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <Github className="h-4 w-4" aria-hidden="true" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="sm" className="gap-1.5">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Additional Projects Note */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-body text-muted-foreground mb-4">
            More projects and experiments available on GitHub
          </p>
          <Button variant="ghost" className="gap-2">
            <a
              href="https://github.com/kavyashah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Repositories
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
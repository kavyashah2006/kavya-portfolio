'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, ArrowRight, HeartPulse, Database, Brain, Globe, Star } from 'lucide-react'

const projectIcons = {
  'Healthcare Technology': HeartPulse,
  'Data Science': Database,
  'AI/ML': Brain,
  'Web Development': Globe,
  'Machine Learning': Brain,
  'Data Analytics': Database,
  'Software Engineering': Globe,
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

export function WorkPreview() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section
      id="work"
      className="section"
      aria-labelledby="work-title"
    >
      <div className="container-custom">
        {/* Section Header - Editorial */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
            variants={itemVariants}
          >
            Chapter Four
          </motion.span>
          <motion.h2
            id="work-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Selected work & <span className="text-primary">implementations</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Real projects demonstrating practical data science, AI concepts, and healthcare technology applications.
          </motion.p>
        </motion.div>

        {/* Featured Projects - Editorial Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredProjects.map((project, index) => {
            const Icon = projectIcons[project.category as keyof typeof projectIcons] || Globe

            return (
              <motion.article
                key={project.id}
                className="card-editorial h-full flex flex-col overflow-hidden group"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${
                      project.status === 'In Development'
                        ? 'bg-primary/10 text-primary border-primary/20 border'
                        : 'bg-accent/10 text-accent border-accent/20 border'
                    }`}
                  >
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      <span className="text-xs font-medium font-heading">Featured</span>
                    </div>
                  )}
                </div>

                {/* Project Image/Visual */}
                <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                  {project.image ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" aria-hidden="true" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
                      <div className="w-24 h-24 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center border border-border/30">
                        <Icon className="h-12 w-12 text-primary/50" aria-hidden="true" />
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex items-center justify-center gap-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        aria-label="View code on GitHub"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Live Demo
                      </motion.a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <div className="glass px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <span>Private</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          project.category === 'Healthcare Technology' ? 'bg-accent/10 text-accent border-accent/20 border' :
                          project.category === 'AI/ML' || project.category === 'Machine Learning' ? 'bg-primary/10 text-primary border-primary/20 border' :
                          project.category === 'Data Science' || project.category === 'Data Analytics' ? 'bg-secondary/10 text-secondary border-secondary/20 border' :
                          'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20 border'
                        }`}
                        aria-hidden="true"
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-2 line-clamp-2">
                      {project.name}
                    </h3>

                    <p className="text-body text-muted-foreground leading-relaxed line-clamp-3">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-body text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights - limited for preview */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <ul className="space-y-2" role="list">
                        {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + hIndex * 0.06 }}
                          >
                            <div className="flex-shrink-0 w-4 h-4 mt-0.5">
                              <div className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                            </div>
                            <span className="group-hover:text-foreground transition-colors duration-fast">{highlight}</span>
                          </motion.li>
                        ))}
                        {project.highlights.length > 3 && (
                          <motion.li
                            className="flex items-center gap-1.5 text-sm text-accent font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 + 3 * 0.06 }}
                          >
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>+{project.highlights.length - 3} more</span>
                          </motion.li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="pt-2 border-t border-border/30">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 6 && (
                        <motion.span
                          className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          +{project.technologies.length - 6} more
                        </motion.span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Button variant="secondary" className="gap-2" size="lg">
            <a
              href="https://github.com/kavyashah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Repositories
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-12 lg:mt-16" aria-hidden="true">
          <span>End of Chapter Four</span>
        </div>
      </div>
    </section>
  )
}

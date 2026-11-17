'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Code, Database, Brain, HeartPulse, Globe, ArrowRight, Lock, Star, X, ChevronLeft, ChevronRight, Download, Terminal, BarChart, Zap, Layers, FileCode, Server, Cpu, Share2 } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const projectIcons = {
  'Healthcare Technology': HeartPulse,
  'Data Science': Database,
  'AI/ML': Brain,
  'Web Development': Globe,
  'Machine Learning': Brain,
  'Data Analytics': Database,
  'Software Engineering': Code,
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.25,
      ease: [0.7, 0, 0.84, 0],
    },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

interface ProjectModalProps {
  project: typeof projects[0]
  isOpen: boolean
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
  hasPrev: boolean
  hasNext: boolean
}

function ProjectModal({ project, isOpen, onClose, onNavigate, hasPrev, hasNext }: ProjectModalProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeImageIndex, setActiveImageIndex] = React.useState(0)

  // Generate placeholder images for the gallery based on project
  const projectImages = React.useMemo(() => {
    const baseImages = [
      { src: project.image || null, alt: `${project.name} - Main view`, type: 'main' as const },
      { src: null, alt: `${project.name} - Architecture diagram`, type: 'architecture' as const },
      { src: null, alt: `${project.name} - Code structure`, type: 'code' as const },
      { src: null, alt: `${project.name} - Database schema`, type: 'database' as const },
    ]
    return baseImages.filter(img => img.src || img.type !== 'main')
  }, [project])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && hasPrev) onNavigate('prev')
    if (e.key === 'ArrowRight' && hasNext) onNavigate('next')
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, hasPrev, hasNext, onClose, onNavigate])

  if (!isOpen) return null

  const Icon = projectIcons[project.category as keyof typeof projectIcons] || Code

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[600] flex items-center justify-center p-4 lg:p-8"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          variants={overlayVariants}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden glass-strong rounded-2xl"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-6 border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
            <div className="flex-1 pr-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  project.category === 'Healthcare Technology' ? 'bg-accent/10 text-accent border-accent/20 border' :
                  project.category === 'AI/ML' || project.category === 'Machine Learning' ? 'bg-primary/10 text-primary border-primary/20 border' :
                  project.category === 'Data Science' || project.category === 'Data Analytics' ? 'bg-secondary/10 text-secondary border-secondary/20 border' :
                  'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20 border'
                }`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${
                    project.status === 'In Development' || project.status === 'Concept / In Development'
                      ? 'bg-primary/10 text-primary border-primary/20 border'
                      : 'bg-accent/10 text-accent border-accent/20 border'
                  }`}>
                    {project.status}
                  </span>
                  {project.featured && (
                    <span className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      <span className="text-xs font-medium font-heading">Featured</span>
                    </span>
                  )}
                </div>
              </div>
              <h2 id="modal-title" className="text-h2 font-heading font-semibold tracking-tight text-foreground">
                {project.name}
              </h2>
              <p id="modal-description" className="text-body text-muted-foreground mt-1">{project.tagline}</p>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="glass p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-fast flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Modal Content */}
          <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Visual Gallery */}
              <div className="lg:col-span-2 space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
                    {projectImages[activeImageIndex].src ? (
                      <img
                        src={projectImages[activeImageIndex].src}
                        alt={projectImages[activeImageIndex].alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center border border-border/30">
                          <Icon className="h-12 w-12 text-primary/50" aria-hidden="true" />
                        </div>
                      </div>
                    )}

                    {/* Gallery Navigation - Desktop */}
                    {projectImages.length > 1 && (
                      <>
                        <motion.button
                          onClick={() => setActiveImageIndex(prev => (prev - 1 + projectImages.length) % projectImages.length)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 glass p-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all hidden lg:flex"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                          onClick={() => setActiveImageIndex(prev => (prev + 1) % projectImages.length)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 glass p-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all hidden lg:flex"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </motion.button>
                      </>
                    )}

                    {/* Gallery Indicators */}
                    {projectImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {projectImages.map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === activeImageIndex ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`View image ${idx + 1}`}
                            whileTap={{ scale: 1.2 }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Gallery Navigation - Mobile */}
                  {projectImages.length > 1 && (
                    <div className="lg:hidden flex items-center justify-between mt-4">
                      <motion.button
                        onClick={() => setActiveImageIndex(prev => (prev - 1 + projectImages.length) % projectImages.length)}
                        className="glass px-4 py-2 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </motion.button>
                      <span className="text-sm font-mono text-muted-foreground">
                        {activeImageIndex + 1} / {projectImages.length}
                      </span>
                      <motion.button
                        onClick={() => setActiveImageIndex(prev => (prev + 1) % projectImages.length)}
                        className="glass px-4 py-2 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground">Overview</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Problem & Solution */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3 flex items-center gap-1.5">
                      <Brain className="h-3.5 w-3.5" aria-hidden="true" />
                      Challenge
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3 flex items-center gap-1.5">
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      Approach
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Technical Approach */}
                {project.technicalApproach && (
                  <div className="space-y-4">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground">Technical Approach</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">{project.technicalApproach}</p>
                  </div>
                )}

                {/* Database Design */}
                {project.databaseDesign && (
                  <div className="space-y-4">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground flex items-center gap-2">
                      <Database className="h-5 w-5 text-accent" aria-hidden="true" />
                      Database Design
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">{project.databaseDesign}</p>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground">Key Highlights</h3>
                    <ul className="space-y-3" role="list">
                      {project.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          className="flex items-start gap-3 text-body text-muted-foreground leading-relaxed group p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + hIndex * 0.05 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                          </div>
                          <span className="group-hover:text-foreground transition-colors duration-fast">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-warning" aria-hidden="true" />
                      Challenges Overcome
                    </h3>
                    <ul className="space-y-2" role="list">
                      {project.challenges.map((challenge, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 text-sm text-muted-foreground p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.04 }}
                        >
                          <div className="w-5 h-5 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
                          </div>
                          <span>{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Learning Outcomes */}
                {project.learningOutcomes && project.learningOutcomes.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-success" aria-hidden="true" />
                      Learning Outcomes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.learningOutcomes.map((outcome, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + idx * 0.04 }}
                        >
                          {outcome}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Tech Stack */}
                <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm sticky top-24">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-4 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-accent" aria-hidden="true" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Meta */}
                <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm sticky top-24">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-4 flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-accent" aria-hidden="true" />
                    Details
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Role</dt>
                      <dd className="text-foreground font-medium">{project.role}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="text-foreground font-medium">{project.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="text-foreground font-medium">{project.status}</dd>
                    </div>
                  </dl>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 sticky top-24">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="View source code on GitHub"
                    >
                      <Github className="h-5 w-5" aria-hidden="true" />
                      View Source Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                      Live Demo
                    </motion.a>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <div className="btn-ghost w-full justify-center gap-2 text-muted-foreground">
                      <Lock className="h-5 w-5" aria-hidden="true" />
                      Private Repository
                    </div>
                  )}
                  <motion.button
                    className="btn-outline w-full justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigator.share?.({ title: project.name, text: project.tagline, url: window.location.href })}
                  >
                    <Share2 className="h-5 w-5" aria-hidden="true" />
                    Share Project
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Navigation */}
          {(hasPrev || hasNext) && (
            <div className="flex items-center justify-between p-6 border-t border-border/30 bg-background/50 backdrop-blur-sm">
              <motion.button
                onClick={() => hasPrev && onNavigate('prev')}
                disabled={!hasPrev}
                className="btn-secondary gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous Project
              </motion.button>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <kbd className="px-2 py-1 rounded bg-background border border-border/50 font-mono">←</kbd>
                <span>Navigate</span>
                <kbd className="px-2 py-1 rounded bg-background border border-border/50 font-mono">→</kbd>
              </div>
              <motion.button
                onClick={() => hasNext && onNavigate('next')}
                disabled={!hasNext}
                className="btn-secondary gap-2 ml-auto disabled:opacity-30 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Next project"
              >
                Next Project
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Work() {
  const prefersReducedMotion = useReducedMotion()
  const [openProject, setOpenProject] = React.useState<typeof projects[0] | null>(null)
  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0)

  const featuredProjects = projects.filter(p => p.featured)
  const allProjects = projects

  const handleOpenModal = (project: typeof projects[0], index: number) => {
    setCurrentProjectIndex(index)
    setOpenProject(project)
  }

  const handleCloseModal = () => {
    setOpenProject(null)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    const projectList = openProject?.featured ? featuredProjects : allProjects
    const currentIndex = projectList.findIndex(p => p.id === openProject?.id)
    if (currentIndex === -1) return

    let newIndex: number
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projectList.length - 1
    } else {
      newIndex = currentIndex < projectList.length - 1 ? currentIndex + 1 : 0
    }

    setCurrentProjectIndex(newIndex)
    setOpenProject(projectList[newIndex])
  }

  const hasPrev = allProjects.length > 1
  const hasNext = allProjects.length > 1

  return (
    <>
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
              Real projects demonstrating practical data science, AI concepts, and healthcare technology applications — from research to production.
            </motion.p>
          </motion.div>

          {/* Asymmetric Editorial Grid */}
          <motion.div
            className="grid-asymmetric"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {allProjects.map((project, index) => {
              const Icon = projectIcons[project.category as keyof typeof projectIcons] || Code
              const isEven = index % 2 === 1

              return (
                <motion.article
                  key={project.id}
                  className={`relative ${isEven ? 'lg:order-2' : ''}`}
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Glassmorphism Project Card */}
                  <div className="card-editorial h-full flex flex-col overflow-hidden relative group cursor-pointer" onClick={() => handleOpenModal(project, index)}>
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${
                          project.status === 'In Development' || project.status === 'Concept / In Development'
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
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex items-center justify-center gap-4">
                        <motion.div
                          className="glass px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          aria-label="View project details"
                        >
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          View Details
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 flex flex-col space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              project.category === 'Healthcare Technology' ? 'bg-accent/10 text-accent border-accent/20 border' :
                              project.category === 'AI/ML' || project.category === 'Machine Learning' ? 'bg-primary/10 text-primary border-primary/20 border' :
                              project.category === 'Data Science' || project.category === 'Data Analytics' ? 'bg-secondary/10 text-secondary border-secondary/20 border' :
                              'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20 border'
                            }`}
                            aria-hidden="true"
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                          {project.name}
                        </h3>

                        <p className="text-body text-muted-foreground leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-body text-muted-foreground leading-relaxed line-clamp-4">
                          {project.description}
                        </p>
                      </div>

                      {/* Highlights - limited for card view */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div>
                          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3">
                            Highlights
                          </h4>
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
                                <span className="group-hover:text-foreground transition-colors duration-fast line-clamp-1">{highlight}</span>
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
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 8).map((tech) => (
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
                          {project.technologies.length > 8 && (
                            <motion.span
                              className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              +{project.technologies.length - 8} more
                            </motion.span>
                          )}
                        </div>
                      </div>

                      {/* View Details CTA at bottom of card */}
                      <motion.div
                        className="pt-4 border-t border-border/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between text-sm font-medium text-accent group-hover:gap-2 transition-gap">
                          <span>View Case Study</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          {/* Section Divider */}
          <div className="section-divider mt-12 lg:mt-16" aria-hidden="true">
            <span>End of Chapter Four</span>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={openProject!}
        isOpen={!!openProject}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </>
  )
}
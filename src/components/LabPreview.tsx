'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal, Zap, FlaskConical, Globe, Cpu, Activity, Code2, Brain, Rocket, ArrowRight, ExternalLink, Github, HeartPulse } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Lab experiments data - derived from existing content
const labExperiments = [
  {
    id: 'vitaverse-prototype',
    title: 'VitaVerse Prototype',
    description: 'Interactive prototype of the digital health ecosystem with health vault, AI insights, and QR emergency access.',
    category: 'Healthcare Technology',
    status: 'In Development',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Firebase', 'OpenAI API'],
    githubUrl: 'https://github.com/kavyashah/vitaverse',
    liveUrl: null,
    icon: HeartPulse,
    color: 'accent',
  },
  {
    id: 'data-viz-playground',
    title: 'Data Visualization Playground',
    description: 'Interactive charts and dashboards built with D3.js and Recharts for exploring statistical distributions and ML model outputs.',
    category: 'Data Visualization',
    status: 'Experiment',
    technologies: ['D3.js', 'Recharts', 'React', 'TypeScript', 'Statistical Analysis'],
    githubUrl: null,
    liveUrl: null,
    icon: Activity,
    color: 'primary',
  },
  {
    id: 'ml-model-explorer',
    title: 'ML Model Explorer',
    description: 'Interactive tool for visualizing decision boundaries, feature importance, and model performance across different algorithms.',
    category: 'Machine Learning',
    status: 'Experiment',
    technologies: ['Python', 'scikit-learn', 'TensorFlow.js', 'React', 'WebGL'],
    githubUrl: null,
    liveUrl: null,
    icon: Brain,
    color: 'secondary',
  },
  {
    id: 'algo-visualizer',
    title: 'Algorithm Visualizer',
    description: 'Step-by-step visualization of sorting, pathfinding, and graph algorithms with interactive controls and complexity analysis.',
    category: 'Computer Science',
    status: 'Completed',
    technologies: ['C++', 'JavaScript', 'Canvas API', 'Data Structures'],
    githubUrl: null,
    liveUrl: null,
    icon: Code2,
    color: 'accent',
  },
  {
    id: 'health-data-simulator',
    title: 'Health Data Simulator',
    description: 'Synthetic health data generator for testing FHIR-compliant systems, privacy-preserving analytics, and ML pipelines.',
    category: 'Healthcare Technology',
    status: 'In Development',
    technologies: ['Python', 'FHIR R4', 'Faker.js', 'PostgreSQL', 'Privacy Tools'],
    githubUrl: null,
    liveUrl: null,
    icon: FlaskConical,
    color: 'primary',
  },
  {
    id: 'portfolio-lab',
    title: 'This Portfolio Lab',
    description: 'The experimental codebase powering this site - editorial design system, Framer Motion animations, glassmorphism, and theme engine.',
    category: 'Web Development',
    status: 'Live',
    technologies: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    githubUrl: 'https://github.com/kavyashah/kavyashah.dev',
    liveUrl: 'https://kavyashah.dev',
    icon: Rocket,
    color: 'secondary',
  },
]

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

const categoryColors = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
}

const statusColors = {
  'Live': 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50',
  'In Development': 'bg-primary/10 text-primary border-primary/20 border',
  'Experiment': 'bg-amber-500/10 text-amber-600 border-amber-200/50',
  'Completed': 'bg-secondary/10 text-secondary border-secondary/20 border',
}

export function LabPreview() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="lab"
      className="section bg-muted/30"
      aria-labelledby="lab-title"
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
            Chapter Five
          </motion.span>
          <motion.h2
            id="lab-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Lab & <span className="text-accent">experiments</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Interactive prototypes, visualizations, and experimental projects exploring the boundaries of data science, AI, and healthcare technology.
          </motion.p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          className="flex justify-center mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="glass px-2 py-2 rounded-xl flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent/10 transition-colors">
              Grid
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              List
            </button>
          </div>
        </motion.div>

        {/* Experiments Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {labExperiments.slice(0, 6).map((experiment, index) => {
            const Icon = experiment.icon
            const colorClass = categoryColors[experiment.color as keyof typeof categoryColors] || categoryColors.primary
            const statusColor = statusColors[experiment.status as keyof typeof statusColors] || statusColors['Experiment']

            return (
              <motion.article
                key={experiment.id}
                className="card-editorial h-full flex flex-col overflow-hidden group"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${statusColor}`}>
                    {experiment.status}
                  </div>
                </div>

                {/* Experiment Visual */}
                <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: `var(--${experiment.color}-glow)` }}>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${colorClass} border border-${experiment.color}/30 group-hover:scale-110 transition-transform duration-normal`} aria-hidden="true">
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>

                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-normal"
                    aria-hidden="true"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath stroke='currentColor' strokeWidth='0.3' d='M0 0h40v40H0zM20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '40px 40px',
                      color: `var(--${experiment.color})`,
                    }}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex items-center justify-center gap-3 p-4">
                    {experiment.githubUrl && (
                      <motion.a
                        href={experiment.githubUrl}
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
                    {experiment.liveUrl && (
                      <motion.a
                        href={experiment.liveUrl}
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
                    {!experiment.githubUrl && !experiment.liveUrl && (
                      <div className="glass px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <span>Private</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Experiment Content */}
                <div className="flex-1 flex flex-col space-y-4">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading ${colorClass}`}>
                      {experiment.category}
                    </span>
                  </div>

                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-2 line-clamp-2">
                    {experiment.title}
                  </h3>

                  <p className="text-body text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {experiment.description}
                  </p>

                  {/* Technologies */}
                  <div className="pt-2 border-t border-border/30">
                    <div className="flex flex-wrap gap-1.5">
                      {experiment.technologies.slice(0, 5).map((tech) => (
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
                      {experiment.technologies.length > 5 && (
                        <motion.span
                          className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          +{experiment.technologies.length - 5} more
                        </motion.span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* More Experiments CTA */}
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
              View All Experiments
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-12 lg:mt-16" aria-hidden="true">
          <span>End of Chapter Five</span>
        </div>
      </div>
    </section>
  )
}
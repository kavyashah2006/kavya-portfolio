'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal, Zap, FlaskConical, Globe, Cpu, Activity, Code2, Brain, Rocket, ArrowRight, ExternalLink, Github, HeartPulse, LayoutGrid, List, Search, ChevronLeft, ChevronRight, X, Share2, Eye, Code, Download, Clock, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PresenceIndicator } from '@/components/PresenceIndicator'

// Lab experiments data - derived from existing content and projects
const labExperiments = [
  {
    id: 'vitaverse-prototype',
    title: 'VitaVerse Prototype',
    description: 'Interactive prototype of the digital health ecosystem with health vault, AI insights, and QR emergency access. Built as a comprehensive Next.js application demonstrating healthcare technology concepts.',
    longDescription: 'VitaVerse is a digital health platform prototype exploring how modern web technologies can improve personal health management. The prototype includes a secure health vault for storing medical records, AI-powered health insights using OpenAI integration, and QR-code-based emergency access for first responders. The system demonstrates FHIR-compliant data structures, role-based access control, and offline-first architecture.',
    category: 'Healthcare Technology',
    status: 'In Development',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Firebase', 'OpenAI API', 'FHIR R4', 'Zustand'],
    githubUrl: 'https://github.com/kavyashah/vitaverse',
    liveUrl: null,
    icon: HeartPulse,
    color: 'accent',
    featured: true,
    startDate: '2024-01',
    lastUpdated: '2024-11',
    complexity: 'High',
    learnings: ['FHIR data modeling', 'Healthcare data privacy', 'AI integration patterns', 'Offline-first architecture'],
    demoSteps: [
      'Create a health profile with conditions and medications',
      'Generate AI health insights from stored data',
      'Create emergency QR code for first responders',
      'Test offline synchronization'
    ],
  },
  {
    id: 'data-viz-playground',
    title: 'Data Visualization Playground',
    description: 'Interactive charts and dashboards built with D3.js and Recharts for exploring statistical distributions and ML model outputs. Features real-time parameter adjustment and export capabilities.',
    longDescription: 'A comprehensive visualization toolkit for data scientists and analysts. Includes interactive implementations of statistical distributions (normal, binomial, poisson, exponential), ML model evaluation charts (ROC curves, precision-recall, confusion matrices), and custom chart components. Built with D3.js for custom visualizations and Recharts for standard charts, demonstrating when to use each approach.',
    category: 'Data Visualization',
    status: 'Experiment',
    technologies: ['D3.js v7', 'Recharts', 'React', 'TypeScript', 'Statistical Analysis', 'Web Workers'],
    githubUrl: 'https://github.com/kavyashah/data-viz-playground',
    liveUrl: 'https://dataviz-playground.vercel.app',
    icon: Activity,
    color: 'primary',
    featured: true,
    startDate: '2023-09',
    lastUpdated: '2024-06',
    complexity: 'Medium',
    learnings: ['D3.js enter/update/exit patterns', 'Web Workers for computation', 'Chart accessibility', 'Responsive SVG'],
    demoSteps: [
      'Select a statistical distribution and adjust parameters',
      'Compare multiple distributions simultaneously',
      'Explore ML model evaluation visualizations',
      'Export charts as SVG/PNG/CSV'
    ],
  },
  {
    id: 'ml-model-explorer',
    title: 'ML Model Explorer',
    description: 'Interactive tool for visualizing decision boundaries, feature importance, and model performance across different algorithms. Supports scikit-learn models exported via ONNX and TensorFlow.js models running in-browser.',
    longDescription: 'An educational tool for understanding machine learning model behavior. Visualizes decision boundaries for 2D datasets across multiple algorithms (Logistic Regression, SVM, Random Forest, Neural Networks). Shows feature importance rankings, permutation importance, and SHAP values. Includes interactive hyperparameter tuning with real-time model retraining using TensorFlow.js.',
    category: 'Machine Learning',
    status: 'Experiment',
    technologies: ['Python', 'scikit-learn', 'TensorFlow.js', 'React', 'WebGL', 'ONNX.js', 'SHAP'],
    githubUrl: 'https://github.com/kavyashah/ml-model-explorer',
    liveUrl: null,
    icon: Brain,
    color: 'secondary',
    featured: false,
    startDate: '2023-11',
    lastUpdated: '2024-03',
    complexity: 'High',
    learnings: ['TensorFlow.js in-browser training', 'ONNX model conversion', 'SHAP value computation', 'WebGL shaders for visualization'],
    demoSteps: [
      'Select a dataset (moons, circles, blobs, custom)',
      'Choose algorithm and adjust hyperparameters',
      'Watch decision boundary update in real-time',
      'Explore feature importance and SHAP values'
    ],
  },
  {
    id: 'algo-visualizer',
    title: 'Algorithm Visualizer',
    description: 'Step-by-step visualization of sorting, pathfinding, and graph algorithms with interactive controls and complexity analysis. Built as a learning resource for computer science students.',
    longDescription: 'Comprehensive algorithm visualization platform covering sorting (bubble, quick, merge, heap, radix), pathfinding (BFS, DFS, Dijkstra, A*), and graph algorithms (MST, topological sort, SCC). Each algorithm includes animated step-through, pseudocode display, time/space complexity analysis, and interactive controls (speed, pause, step). Built with Canvas API for performance.',
    category: 'Computer Science',
    status: 'Completed',
    technologies: ['C++', 'JavaScript', 'Canvas API', 'Data Structures', 'WebAssembly', 'TypeScript'],
    githubUrl: 'https://github.com/kavyashah/algo-visualizer',
    liveUrl: 'https://algo-viz.kavyashah.dev',
    icon: Code2,
    color: 'accent',
    featured: true,
    startDate: '2023-06',
    lastUpdated: '2024-01',
    complexity: 'Medium',
    learnings: ['Canvas animation optimization', 'WebAssembly integration', 'Algorithm step generation', 'Educational UX patterns'],
    demoSteps: [
      'Select algorithm category and specific algorithm',
      'Adjust input size and data distribution',
      'Step through execution with pseudocode',
      'Analyze time/space complexity charts'
    ],
  },
  {
    id: 'health-data-simulator',
    title: 'Health Data Simulator',
    description: 'Synthetic health data generator for testing FHIR-compliant systems, privacy-preserving analytics, and ML pipelines. Generates realistic patient populations with configurable demographics, conditions, and temporal patterns.',
    longDescription: 'A synthetic data generation engine for healthcare research and development. Generates FHIR R4 compliant patient bundles with realistic demographics, conditions (ICD-10), medications (RxNorm), observations (LOINC), and encounters. Supports temporal patterns (chronic conditions, acute episodes, seasonal variations), privacy-preserving frameworks (differential privacy, synthetic data validation), and export to multiple formats (JSON, CSV, Parquet, FHIR Bundles).',
    category: 'Healthcare Technology',
    status: 'In Development',
    technologies: ['Python', 'FHIR R4', 'Faker.js', 'PostgreSQL', 'Privacy Tools', 'Apache Spark', 'Differential Privacy'],
    githubUrl: 'https://github.com/kavyashah/health-data-simulator',
    liveUrl: null,
    icon: FlaskConical,
    color: 'primary',
    featured: false,
    startDate: '2024-03',
    lastUpdated: '2024-10',
    complexity: 'High',
    learnings: ['FHIR resource modeling', 'Clinical terminology systems', 'Differential privacy', 'Synthetic data validation'],
    demoSteps: [
      'Configure population demographics and size',
      'Select condition prevalence and comorbidity rules',
      'Apply privacy-preserving transformations',
      'Export as FHIR bundles or tabular data'
    ],
  },
  {
    id: 'portfolio-lab',
    title: 'This Portfolio Lab',
    description: 'The experimental codebase powering this site - editorial design system, Framer Motion animations, glassmorphism, and theme engine. A living laboratory for web design and interaction patterns.',
    longDescription: 'The meta-experiment: this portfolio itself as a laboratory for editorial web design. Features a complete design system built on CSS variables with dark-first theming, Framer Motion scroll-triggered animations with reduced-motion support, glassmorphism utilities with backdrop-filter, asymmetric editorial grids, and a command palette (⌘K) for navigation. Demonstrates Next.js 14 App Router with static export, Tailwind CSS with custom design tokens, and TypeScript strict mode.',
    category: 'Web Development',
    status: 'Live',
    technologies: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'CSS Variables', 'Static Export'],
    githubUrl: 'https://github.com/kavyashah/kavyashah.dev',
    liveUrl: 'https://kavyashah.dev',
    icon: Rocket,
    color: 'secondary',
    featured: true,
    startDate: '2024-08',
    lastUpdated: '2024-11',
    complexity: 'Medium',
    learnings: ['Design system architecture', 'Framer Motion best practices', 'Static export constraints', 'Accessibility in animations'],
    demoSteps: [
      'Press ⌘K to open command palette',
      'Toggle theme with the sun/moon button',
      'Scroll to trigger staggered animations',
      'Resize to see responsive editorial grids'
    ],
  },
  {
    id: 'realtime-collab-editor',
    title: 'Real-time Collaborative Editor',
    description: 'Operational Transformation-based collaborative text editor with conflict resolution, presence indicators, and cursor synchronization. Built to understand CRDTs and OT algorithms.',
    longDescription: 'Implementation of a real-time collaborative editing system using Operational Transformation (OT) with a centralized server approach. Features character-level operations, cursor position broadcasting, user presence with colored cursors, offline support with conflict resolution, and document version history. Includes a custom WebSocket protocol for operation transmission and a React-based editor component with remote cursor rendering.',
    category: 'Web Development',
    status: 'Experiment',
    technologies: ['TypeScript', 'WebSocket', 'Operational Transformation', 'React', 'Node.js', 'Yjs', 'IndexedDB'],
    githubUrl: 'https://github.com/kavyashah/collab-editor',
    liveUrl: null,
    icon: Code,
    color: 'accent',
    featured: false,
    startDate: '2024-05',
    lastUpdated: '2024-08',
    complexity: 'High',
    learnings: ['OT algorithm implementation', 'WebSocket state management', 'Conflict resolution strategies', 'Offline-first patterns'],
    demoSteps: [
      'Open in multiple browser tabs',
      'Type simultaneously to see conflict resolution',
      'Observe remote cursors with user colors',
      'Disconnect/reconnect to test offline sync'
    ],
  },
  {
    id: 'stream-processing-demo',
    title: 'Stream Processing Demo',
    description: 'Apache Flink-inspired stream processing engine implemented in TypeScript for educational purposes. Demonstrates event-time processing, windowing, watermarks, and exactly-once semantics.',
    longDescription: 'A from-scratch implementation of core stream processing concepts in TypeScript. Implements event-time semantics with watermark generation, tumbling/sliding/session windows, stateful operators with keyed state, checkpointing for fault tolerance, and exactly-once processing guarantees. Includes a visual debugger showing event flow through the operator graph, watermark progression, and window firing.',
    category: 'Data Engineering',
    status: 'Experiment',
    technologies: ['TypeScript', 'RxJS', 'Event-Time Processing', 'Watermarks', 'Windowing', 'Checkpointing', 'Web Workers'],
    githubUrl: 'https://github.com/kavyashah/stream-processing-demo',
    liveUrl: 'https://stream-demo.kavyashah.dev',
    icon: Zap,
    color: 'primary',
    featured: false,
    startDate: '2024-07',
    lastUpdated: '2024-09',
    complexity: 'High',
    learnings: ['Event-time vs processing-time', 'Watermark strategies', 'Window semantics', 'Distributed snapshots'],
    demoSteps: [
      'Configure event stream with timestamps and delays',
      'Define windowing strategy and watermark policy',
      'Watch events flow through operator graph',
      'Inspect window results and late arrivals'
    ],
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

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
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

const categoryColors = {
  primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', glow: 'primary' },
  accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20', glow: 'accent' },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20', glow: 'secondary' },
}

const statusColors = {
  'Live': { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-200/50', icon: CheckCircle },
  'In Development': { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', icon: Code },
  'Experiment': { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-200/50', icon: FlaskConical },
  'Completed': { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20', icon: CheckCircle },
}

const complexityColors = {
  'Low': { text: 'text-success', bg: 'bg-success/10' },
  'Medium': { text: 'text-amber-600', bg: 'bg-amber-500/10' },
  'High': { text: 'text-warning', bg: 'bg-warning/10' },
}

interface ExperimentModalProps {
  experiment: typeof labExperiments[0]
  isOpen: boolean
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
  hasPrev: boolean
  hasNext: boolean
}

function ExperimentModal({ experiment, isOpen, onClose, onNavigate, hasPrev, hasNext }: ExperimentModalProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeStep, setActiveStep] = React.useState(0)

  const StatusIcon = statusColors[experiment.status as keyof typeof statusColors]?.icon || FlaskConical
  const colorScheme = categoryColors[experiment.color as keyof typeof categoryColors] || categoryColors.primary
  const statusScheme = statusColors[experiment.status as keyof typeof statusColors] || statusColors['Experiment']
  const complexityScheme = complexityColors[experiment.complexity as keyof typeof complexityColors] || complexityColors['Medium']

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
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          variants={overlayVariants}
        />

        <motion.div
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden glass-strong rounded-2xl"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-6 border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
            <div className="flex-1 pr-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border`} aria-hidden="true">
                  <experiment.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${statusScheme.bg} ${statusScheme.text} ${statusScheme.border} border flex items-center gap-1.5`}>
                    <StatusIcon className="h-3 w-3" aria-hidden="true" />
                    {experiment.status}
                  </span>
                  {experiment.featured && (
                    <span className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                      <Info className="h-3 w-3" aria-hidden="true" />
                      <span className="text-xs font-medium font-heading">Featured</span>
                    </span>
                  )}
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium font-heading ${complexityScheme.bg} ${complexityScheme.text}`}>
                  {experiment.complexity} Complexity
                </span>
              </div>
              <h2 id="modal-title" className="text-h2 font-heading font-semibold tracking-tight text-foreground">
                {experiment.title}
              </h2>
              <p id="modal-description" className="text-body text-muted-foreground mt-1">{experiment.description}</p>
            </div>

            <motion.button
              onClick={onClose}
              className="glass p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-fast flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close experiment details"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Modal Content */}
          <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground">About This Experiment</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">{experiment.longDescription}</p>
                </div>

                {/* Demo Steps */}
                {experiment.demoSteps && experiment.demoSteps.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground flex items-center gap-2">
                      <Eye className="h-5 w-5 text-accent" aria-hidden="true" />
                      Try It Yourself
                    </h3>
                    <ol className="space-y-3" role="list">
                      {experiment.demoSteps.map((step, idx) => (
                        <motion.li
                          key={idx}
                          className={`flex items-start gap-3 text-body text-muted-foreground leading-relaxed p-4 rounded-xl border ${
                            idx === activeStep ? 'border-accent/30 bg-accent/5' : 'border-border/50 bg-background/50'
                          } backdrop-blur-sm`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono font-medium ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border`}>
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <span className={idx === activeStep ? 'text-foreground font-medium' : ''}>{step}</span>
                          </div>
                          <motion.button
                            onClick={() => setActiveStep(idx)}
                            className={`p-1 rounded-lg transition-colors ${
                              idx === activeStep ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                            }`}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Focus on step ${idx + 1}`}
                          >
                            <Eye className="h-4 w-4" aria-hidden="true" />
                          </motion.button>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Learnings */}
                {experiment.learnings && experiment.learnings.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" aria-hidden="true" />
                      Key Learnings
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experiment.learnings.map((learning, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + idx * 0.04 }}
                        >
                          {learning}
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
                    <LayoutGrid className="h-5 w-5 text-accent" aria-hidden="true" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experiment.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experiment Meta */}
                <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm sticky top-24">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-accent" aria-hidden="true" />
                    Details
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="text-foreground font-medium">{experiment.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="text-foreground font-medium flex items-center gap-1.5">
                        <StatusIcon className={`h-3.5 w-3.5 ${statusScheme.text}`} aria-hidden="true" />
                        {experiment.status}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Complexity</dt>
                      <dd className="text-foreground font-medium">
                        <span className={`px-2 py-0.5 rounded text-xs ${complexityScheme.bg} ${complexityScheme.text}`}>
                          {experiment.complexity}
                        </span>
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Started</dt>
                      <dd className="text-foreground font-medium">{experiment.startDate}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Last Updated</dt>
                      <dd className="text-foreground font-medium">{experiment.lastUpdated}</dd>
                    </div>
                  </dl>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 sticky top-24">
                  {experiment.githubUrl && (
                    <motion.a
                      href={experiment.githubUrl}
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
                  {experiment.liveUrl && (
                    <motion.a
                      href={experiment.liveUrl}
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
                  {!experiment.githubUrl && !experiment.liveUrl && (
                    <div className="btn-ghost w-full justify-center gap-2 text-muted-foreground">
                      <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                      Private Repository
                    </div>
                  )}
                  <motion.button
                    className="btn-outline w-full justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigator.share?.({ title: experiment.title, text: experiment.description, url: window.location.href })}
                  >
                    <Share2 className="h-5 w-5" aria-hidden="true" />
                    Share Experiment
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
                aria-label="Previous experiment"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous Experiment
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
                aria-label="Next experiment"
              >
                Next Experiment
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Lab() {
  const prefersReducedMotion = useReducedMotion()
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
  const [openExperiment, setOpenExperiment] = React.useState<typeof labExperiments[0] | null>(null)
  const [currentExperimentIndex, setCurrentExperimentIndex] = React.useState(0)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [filterStatus, setFilterStatus] = React.useState<string>('all')
  const [filterCategory, setFilterCategory] = React.useState<string>('all')

  const featuredExperiments = labExperiments.filter(e => e.featured)
  const allExperiments = labExperiments

  // Filter experiments
  const filteredExperiments = allExperiments.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exp.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesStatus = filterStatus === 'all' || exp.status === filterStatus
    const matchesCategory = filterCategory === 'all' || exp.category === filterCategory
    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = [...new Set(allExperiments.map(e => e.category))].sort()
  const statuses = [...new Set(allExperiments.map(e => e.status))].sort()

  const handleOpenModal = (experiment: typeof labExperiments[0], index: number) => {
    setCurrentExperimentIndex(index)
    setOpenExperiment(experiment)
  }

  const handleCloseModal = () => {
    setOpenExperiment(null)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    const currentIndex = filteredExperiments.findIndex(e => e.id === openExperiment?.id)
    if (currentIndex === -1) return

    let newIndex: number
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredExperiments.length - 1
    } else {
      newIndex = currentIndex < filteredExperiments.length - 1 ? currentIndex + 1 : 0
    }

    setCurrentExperimentIndex(newIndex)
    setOpenExperiment(filteredExperiments[newIndex])
  }

  const hasPrev = filteredExperiments.length > 1
  const hasNext = filteredExperiments.length > 1

  // Get unique status and category for filter dropdowns
  const statusColorMap = statusColors

  return (
    <>
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

          {/* Controls - Search, Filters, View Mode */}
          <motion.div
            className="mb-10"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="glass p-4 rounded-2xl space-y-4">
              {/* Search */}
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search experiments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-3 pr-4 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all"
                  aria-label="Search experiments"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="appearance-none px-4 py-2.5 pr-10 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all cursor-pointer"
                    aria-label="Filter by status"
                  >
                    <option value="all">All Statuses</option>
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                </div>
                <div className="relative">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="appearance-none px-4 py-2.5 pr-10 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all cursor-pointer"
                    aria-label="Filter by category"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-center">
                <div className="glass px-2 py-2 rounded-xl flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === 'grid' ? 'text-foreground bg-accent/10' : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                    }`}
                    aria-pressed={viewMode === 'grid'}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === 'list' ? 'text-foreground bg-accent/10' : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                    }`}
                    aria-pressed={viewMode === 'list'}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">List</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experiments Grid */}
          {viewMode === 'grid' && (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {filteredExperiments.map((experiment, index) => {
                const Icon = experiment.icon
                const colorScheme = categoryColors[experiment.color as keyof typeof categoryColors] || categoryColors.primary
                const statusScheme = statusColors[experiment.status as keyof typeof statusColors] || statusColors['Experiment']
                const StatusIcon = statusScheme.icon

                return (
                  <motion.article
                    key={experiment.id}
                    className="card-editorial h-full flex flex-col overflow-hidden group cursor-pointer"
                    onClick={() => handleOpenModal(experiment, index)}
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {/* Status badge */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium font-heading flex items-center gap-1.5 ${statusScheme.bg} ${statusScheme.text} ${statusScheme.border} border`}>
                        <StatusIcon className="h-3 w-3" aria-hidden="true" />
                        {experiment.status}
                      </div>
                    </div>

                    {/* Experiment Visual */}
                    <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: `var(--${experiment.color}-glow)` }}>
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border group-hover:scale-110 transition-transform duration-normal`} aria-hidden="true">
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
                            onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
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
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border`}>
                          {experiment.category}
                        </span>
                        {experiment.featured && (
                          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                            <Info className="h-3 w-3" aria-hidden="true" />
                            <span className="text-xs font-medium font-heading">Featured</span>
                          </span>
                        )}
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

                      {/* View Details CTA */}
                      <motion.div
                        className="pt-4 border-t border-border/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between text-sm font-medium text-accent group-hover:gap-2 transition-gap">
                          <span>View Experiment</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          )}

          {/* Experiments List */}
          {viewMode === 'list' && (
            <motion.div
              className="space-y-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {filteredExperiments.map((experiment, index) => {
                const Icon = experiment.icon
                const colorScheme = categoryColors[experiment.color as keyof typeof categoryColors] || categoryColors.primary
                const statusScheme = statusColors[experiment.status as keyof typeof statusColors] || statusColors['Experiment']
                const StatusIcon = statusScheme.icon

                return (
                  <motion.article
                    key={experiment.id}
                    className="card-editorial flex flex-row gap-6 p-6 group cursor-pointer overflow-hidden"
                    onClick={() => handleOpenModal(experiment, index)}
                    variants={listItemVariants}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    {/* Visual */}
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: `var(--${experiment.color}-glow)` }}>
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border group-hover:scale-110 transition-transform duration-normal`} aria-hidden="true">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border`}>
                            {experiment.category}
                          </span>
                          <div className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading flex items-center gap-1.5 ${statusScheme.bg} ${statusScheme.text} ${statusScheme.border} border`}>
                            <StatusIcon className="h-3 w-3" aria-hidden="true" />
                            {experiment.status}
                          </div>
                          {experiment.featured && (
                            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                              <Info className="h-3 w-3" aria-hidden="true" />
                              <span className="text-xs font-medium font-heading">Featured</span>
                            </span>
                          )}
                          <span className={`ml-auto px-2.5 py-1 rounded-full text-xs font-medium font-heading ${complexityColors[experiment.complexity as keyof typeof complexityColors]?.bg || complexityColors.Medium.bg} ${complexityColors[experiment.complexity as keyof typeof complexityColors]?.text || complexityColors.Medium.text}`}>
                            {experiment.complexity}
                          </span>
                        </div>

                        <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-2">
                          {experiment.title}
                        </h3>

                        <p className="text-body text-muted-foreground leading-relaxed line-clamp-2">
                          {experiment.description}
                        </p>
                      </div>

                      {/* Technologies + Actions */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border/30">
                        <div className="flex flex-wrap gap-1.5">
                          {experiment.technologies.slice(0, 6).map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast">
                              {tech}
                            </span>
                          ))}
                          {experiment.technologies.length > 6 && (
                            <span className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground">
                              +{experiment.technologies.length - 6} more
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {experiment.githubUrl && (
                            <motion.a
                              href={experiment.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                              whileHover={{ scale: 1.02 }}
                              onClick={(e) => e.stopPropagation()}
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
                              onClick={(e) => e.stopPropagation()}
                              aria-label="View live demo"
                            >
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              Live Demo
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          )}

          {/* Empty State */}
          {filteredExperiments.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" aria-hidden="true" />
              <h3 className="text-h3 font-heading font-medium text-foreground mb-2">No experiments found</h3>
              <p className="text-body text-muted-foreground">Try adjusting your search or filters</p>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            className="mt-8 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Showing {filteredExperiments.length} of {allExperiments.length} experiments
          </motion.div>

          {/* Section Divider */}
          <div className="section-divider mt-12 lg:mt-16" aria-hidden="true">
            <span>End of Chapter Five</span>
          </div>
        </div>
      </section>

      {/* Experiment Modal */}
      <ExperimentModal
        experiment={openExperiment!}
        isOpen={!!openExperiment}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </>
  )
}
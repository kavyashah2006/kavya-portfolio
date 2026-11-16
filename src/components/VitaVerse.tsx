'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { HeartPulse, Shield, QrCode, Smartphone, Cloud, Zap, ArrowRight, CheckCircle, Github, Sparkles, Brain, Lock, Globe, Database, Code, Users } from 'lucide-react'

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

const features = [
  {
    id: 'health-vault',
    title: 'Health Vault',
    description: 'Secure, patient-owned personal health record storage with end-to-end encryption. Consolidate medical history, lab results, prescriptions, and immunizations in one place — fully under your control.',
    icon: Shield,
    color: 'primary',
    highlights: ['End-to-end encryption', 'FHIR-compliant data model', 'Patient-controlled access', 'Audit trail & consent management'],
  },
  {
    id: 'ai-insights',
    title: 'AI Health Insights',
    description: 'Personalized health analytics powered by machine learning. Trend detection, anomaly alerts, medication adherence tracking, and predictive insights — all processed locally for privacy.',
    icon: Brain,
    color: 'accent',
    highlights: ['Local-first ML processing', 'Trend & anomaly detection', 'Medication adherence', 'Predictive risk scoring'],
  },
  {
    id: 'qr-sharing',
    title: 'QR Health Sharing',
    description: 'Instant emergency access via dynamic QR codes. First responders scan to view critical health data — allergies, conditions, medications, emergency contacts — without login or app installation.',
    icon: QrCode,
    color: 'secondary',
    highlights: ['No app required for access', 'Configurable data visibility', 'Time-limited emergency tokens', 'Offline-capable QR codes'],
  },
  {
    id: 'wearable-integration',
    title: 'Wearable Integration',
    description: 'Real-time health monitoring through seamless wearable device connectivity. Sync heart rate, sleep, activity, SpO2, and more — feeding the Health Vault and powering AI insights.',
    icon: Smartphone,
    color: 'primary',
    highlights: ['Apple HealthKit / Google Fit', 'Continuous glucose monitors', 'ECG & SpO2 devices', 'Background sync & battery optimization'],
  },
  {
    id: 'ecosystem',
    title: 'Digital Healthcare Ecosystem',
    description: 'Interoperable platform connecting patients, providers, and researchers. Secure data exchange with consent, clinical trial matching, and population health analytics — all privacy-preserving.',
    icon: Globe,
    color: 'accent',
    highlights: ['Provider portal & API', 'Research data marketplace', 'Consent-driven sharing', 'Regulatory compliance (GDPR, HIPAA)'],
  },
  {
    id: 'privacy-first',
    title: 'Privacy-First Architecture',
    description: 'Built on zero-knowledge principles. Your health data never leaves your control — encrypted at rest, encrypted in transit, processed locally. No surveillance, no data monetization, ever.',
    icon: Lock,
    color: 'secondary',
    highlights: ['Zero-knowledge encryption', 'Local-first computation', 'No third-party data access', 'Open-source core components'],
  },
]

const techStack = [
  { name: 'Next.js 14', category: 'Frontend', icon: Code },
  { name: 'TypeScript', category: 'Language', icon: Code },
  { name: 'Tailwind CSS', category: 'Styling', icon: Sparkles },
  { name: 'Supabase/Firebase', category: 'Backend', icon: Cloud },
  { name: 'PostgreSQL', category: 'Database', icon: Database },
  { name: 'Prisma ORM', category: 'Database', icon: Database },
  { name: 'OpenAI API', category: 'AI/ML', icon: Brain },
  { name: 'TensorFlow.js', category: 'AI/ML', icon: Brain },
  { name: 'FHIR R4', category: 'Standards', icon: Users },
  { name: 'HealthKit/Google Fit', category: 'Integrations', icon: Smartphone },
  { name: 'Web Crypto API', category: 'Security', icon: Lock },
  { name: 'PWA', category: 'Platform', icon: Globe },
]

const roadmap = [
  { phase: 'Phase 1', title: 'Core Health Vault', desc: 'Secure record storage, FHIR data model, encryption, consent management' },
  { phase: 'Phase 2', title: 'QR Emergency Access', desc: 'Dynamic QR codes, offline capability, configurable visibility' },
  { phase: 'Phase 3', title: 'Wearable Integration', desc: 'HealthKit/Google Fit sync, background updates, battery optimization' },
  { phase: 'Phase 4', title: 'AI Insights Engine', desc: 'Local ML models, trend detection, anomaly alerts, privacy-preserving' },
  { phase: 'Phase 5', title: 'Ecosystem & API', desc: 'Provider portal, researcher access, clinical trial matching, compliance' },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return 'bg-primary/10 text-primary border-primary/20'
    case 'accent':
      return 'bg-accent/10 text-accent border-accent/20'
    case 'secondary':
      return 'bg-secondary/10 text-secondary border-secondary/20'
    default:
      return 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20'
  }
}

const getIcon = (color: string) => {
  switch (color) {
    case 'primary':
      return 'text-primary'
    case 'accent':
      return 'text-accent'
    case 'secondary':
      return 'text-secondary'
    default:
      return 'text-muted-foreground'
  }
}

export function VitaVerse() {
  return (
    <section
      id="vitaverse"
      className="section bg-gradient-to-b from-background via-muted/30 to-background"
      aria-labelledby="vitaverse-title"
    >
      <div className="container-custom">
        {/* Hero Header - Editorial Spotlight */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20 lg:mb-24 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Chapter label */}
          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-6 font-heading"
            variants={itemVariants}
          >
            Chapter Five — Spotlight
          </motion.span>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 bg-background/60 backdrop-blur-md mb-8 shadow-glass"
            variants={itemVariants}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--color-accent)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-heading">
              Startup Concept
            </span>
            <span className="w-px h-4 bg-border/50" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-heading">
              In Development
            </span>
            <span className="w-px h-4 bg-border/50" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-heading">
              Not a Registered Company
            </span>
          </motion.div>

          {/* Name & Tagline */}
          <motion.h2
            id="vitaverse-title"
            className="text-display font-heading font-semibold tracking-tight text-foreground mb-6 text-balance leading-[1.05]"
            variants={itemVariants}
          >
            VitaVerse
          </motion.h2>

          <motion.p
            className="text-h3 font-body font-medium text-accent mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Your Life. Your Health. One Ecosystem.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            A comprehensive digital health platform concept combining personal health record management,
            AI-powered health insights, QR-based emergency health sharing, and wearable technology integration.
          </motion.p>

          <motion.p
            className="text-sm text-muted-foreground/80 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Currently in early-stage development — exploring product strategy, data architecture, and technical feasibility.
            <br />
            <span className="text-accent font-medium">No medical validation claimed.</span>
          </motion.p>
        </motion.div>

        {/* Features Grid - Editorial Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color)
            const iconColor = getIcon(feature.color)
            return (
              <motion.article
                key={feature.id}
                className={`card-editorial h-full flex flex-col group ${colorClasses} border`}
                variants={itemVariants}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorClasses.replace('border', '')}`}
                  aria-hidden="true"
                >
                  <feature.icon className={`h-6 w-6 ${iconColor}`} />
                </div>

                <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-body text-muted-foreground leading-relaxed mb-5 flex-1">
                  {feature.description}
                </p>

                <ul className="space-y-2.5" role="list">
                  {feature.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + hIndex * 0.05 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <CheckCircle className="h-5 w-5" style={{ color: `var(--color-${feature.color})` }} aria-hidden="true" />
                      </div>
                      <span className="group-hover:text-foreground transition-colors duration-fast">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Technical Architecture - Editorial Grid */}
        <motion.div
          className="mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
              variants={itemVariants}
            >
              Technical Architecture
            </motion.span>
            <motion.h3
              className="text-h2 font-heading font-medium tracking-tight text-foreground"
              variants={itemVariants}
            >
              Planned technology stack & <span className="text-primary">standards</span>
            </motion.h3>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            {techStack.map((tech, index) => (
              <motion.article
                key={tech.name}
                className="group relative p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-center hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-normal"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-normal">
                  <tech.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <p className="text-body font-medium text-foreground">{tech.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-heading mt-0.5">{tech.category}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Vision & Roadmap - Editorial Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Vision - Editorial Article */}
          <motion.article
            className="card-editorial p-6 lg:p-8"
            variants={itemVariants}
          >
            <header className="mb-6">
              <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground flex items-center gap-3">
                <HeartPulse className="h-6 w-6 text-accent" aria-hidden="true" />
                Vision
              </h3>
            </header>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed prose">
              <p>
                VitaVerse envisions a world where every individual owns and controls their complete health narrative —
                seamlessly portable, intelligently analyzed, and securely shareable on their terms.
              </p>
              <p>
                By combining patient-owned data vaults with local-first AI and universal emergency access,
                we aim to bridge the gap between fragmented healthcare systems and empowered patients.
              </p>
              <p className="text-accent font-medium">
                This is a concept under active exploration — not a launched product or medically validated system.
              </p>
            </div>
          </motion.article>

          {/* Roadmap - Editorial Timeline */}
          <motion.article
            className="card-editorial p-6 lg:p-8"
            variants={itemVariants}
          >
            <header className="mb-6">
              <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground flex items-center gap-3">
                <Zap className="h-6 w-6 text-accent" aria-hidden="true" />
                Development Roadmap
              </h3>
            </header>
            <ol className="space-y-5" role="list">
              {roadmap.map((item, index) => (
                <motion.li
                  key={item.phase}
                  className="flex gap-4"
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-medium font-heading text-sm border border-accent/20">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-medium text-accent uppercase tracking-widest font-heading">{item.phase}</span>
                      <span className="text-body font-medium text-foreground">{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-12">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.article>
        </motion.div>

        {/* CTA - Editorial */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="card-editorial max-w-xl mx-auto">
            <div className="text-center py-4 lg:py-6">
              <p className="text-body text-muted-foreground mb-6">
                Interested in collaborating, providing feedback, or learning more?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/kavyashah/vitaverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github className="h-5 w-5 mr-2" aria-hidden="true" />
                  View Repository
                </a>
                <a
                  href="#contact"
                  className="btn-secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get in Touch
                  <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Five</span>
        </div>
      </div>
    </section>
  )
}

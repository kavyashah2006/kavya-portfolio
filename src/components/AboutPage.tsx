'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { about, languages, hobbies, careerInterests, certifications, volunteering, personalInfo } from '@/lib/data'
import { Brain, HeartPulse, Globe, Rocket, Users, BarChart, Code, Database, BarChart2, Zap, BookOpen, Target, Lightbulb, Compass, Sparkles, Award, Shield, MessageSquare, MapPin, Mail, Linkedin, Github, Download, Calendar, GraduationCap, Briefcase, Star, TrendingUp, Clock, MapPin as MapPinIcon } from 'lucide-react'

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

const interestDescriptions = {
  'Data Science': 'Transforming raw data into actionable insights through statistical analysis and visualization',
  'Artificial Intelligence': 'Building intelligent systems that learn from data and augment human decision-making',
  'Machine Learning': 'Advanced ML algorithms, model optimization, and production deployment patterns',
  'Software Development': 'Clean architecture, modern tooling, and scalable system design',
  'Database Management': 'Relational and NoSQL databases, query optimization, and data modeling',
  'Data Analytics': 'Exploratory analysis, statistical inference, and business intelligence',
  'Healthcare Technology': 'Digital health solutions, FHIR standards, and medical AI applications',
  'Digital Innovation': 'Emerging technologies, rapid prototyping, and product strategy',
  'Entrepreneurship': 'Building and scaling ventures from ideation to execution',
}

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section relative overflow-hidden" aria-labelledby="about-hero-title">
        <div className="container-custom">
          <motion.div
            className="max-w-5xl mx-auto text-center py-20 lg:py-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Chapter One — About
            </motion.span>
            <motion.h1
              id="about-hero-title"
              className="text-h1 lg:text-display font-heading font-semibold tracking-tight text-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Curious mind at the intersection of
              <br />
              <span className="text-primary">data</span>,
              <span className="text-accent">intelligence</span> &
              <span className="text-secondary">technology</span>
            </motion.h1>
            <motion.p
              className="text-body-lg lg:text-h3 text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Second-year BSc Data Science student at Ca&apos; Foscari University of Venice,
              building expertise in Python, SQL, data analysis, and AI — with a focus on
              healthcare technology and digital innovation.
            </motion.p>

            {/* Quick Stats Bar */}
            <motion.div
              className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold text-foreground">2nd Year</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-heading mt-1">BSc Data Science</p>
              </div>
              <div className="w-px h-12 bg-border/50 lg:h-16" aria-hidden="true" />
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold text-foreground">Venice</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-heading mt-1">Ca&apos; Foscari University</p>
              </div>
              <div className="w-px h-12 bg-border/50 lg:h-16" aria-hidden="true" />
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold text-foreground">200+ hrs</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-heading mt-1">Data Analysis Internship</p>
              </div>
              <div className="w-px h-12 bg-border/50 lg:h-16" aria-hidden="true" />
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-heading mt-1">Languages Spoken</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-muted/30" aria-labelledby="about-content-title">
        <div className="container-custom">
          <motion.div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
          >
            {/* Left Column - Editorial Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Introduction */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h2 className="text-h2 font-heading font-medium tracking-tight text-foreground">
                    Introduction
                  </h2>
                </header>
                <div className="drop-cap prose">
                  <p className="text-body text-muted-foreground leading-relaxed mb-6">
                    {about.introduction}
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {about.approach}
                  </p>
                </div>
                {/* Pull quote */}
                <blockquote className="pull-quote my-8 relative">
                  <span className="absolute -top-8 left-0 text-6xl font-heading text-primary/20" aria-hidden="true">&ldquo;</span>
                  <p className="relative text-h3 font-heading font-medium text-foreground leading-tight italic">
                    &ldquo;Data is not just numbers&mdash;it&rsquo;s the language of understanding our world.
                    Intelligence is how we interpret it. Technology is how we scale that understanding.&rdquo;
                  </p>
                </blockquote>
              </motion.article>

              {/* Technical Interests - Enhanced cards */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h2 className="text-h2 font-heading font-medium tracking-tight text-foreground">
                    Technical Interests
                  </h2>
                  <p className="text-body text-muted-foreground mt-2">
                    Areas where curiosity meets capability
                  </p>
                </header>
                <ul className="grid gap-4 sm:grid-cols-2" role="list">
                  {about.interests.map((interest, index) => {
                    const Icon = interestIcons[interest as keyof typeof interestIcons] || Sparkles
                    const colorClasses = [
                      { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
                      { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
                      { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20' },
                      { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
                      { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
                      { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20' },
                      { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
                      { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
                      { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20' },
                    ][index % 9]
                    const description = interestDescriptions[interest as keyof typeof interestDescriptions] || ''

                    return (
                      <motion.li
                        key={interest}
                        className={`group relative p-6 rounded-xl border transition-all duration-normal hover:shadow-xl hover:-translate-y-1 ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border}`}
                        variants={itemVariants}
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border}`}
                            aria-hidden="true"
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-body font-medium text-foreground font-heading">
                              {interest}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-fast line-clamp-2">
                              {description}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-2 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-fast">
                              Explore
                              <span aria-hidden="true">&rarr;</span>
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
                  <h2 className="text-h2 font-heading font-medium tracking-tight text-foreground">
                    Career Ambitions
                  </h2>
                </header>
                <div className="prose">
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {about.ambitions}
                  </p>
                </div>
                {/* Ambition highlights */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                  {[
                    { label: 'Data Science & Analytics', icon: BarChart, color: 'primary', description: 'Statistical modeling, visualization, and insight generation' },
                    { label: 'AI & Machine Learning', icon: Brain, color: 'accent', description: 'Deep learning, NLP, and production ML systems' },
                    { label: 'Healthcare Technology', icon: HeartPulse, color: 'secondary', description: 'Digital health, FHIR standards, and medical AI' },
                    { label: 'Research & Innovation', icon: BookOpen, color: 'primary', description: 'Academic research, publications, and novel algorithms' },
                    { label: 'Global Impact', icon: Globe, color: 'accent', description: 'International organizations, UN initiatives, and cross-border tech' },
                    { label: 'Product Building', icon: Lightbulb, color: 'secondary', description: 'End-to-end product development and startup operations' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="glass px-5 py-4 rounded-xl border border-border/50 group hover:border-accent/30 hover:shadow-xl transition-all duration-normal"
                      variants={itemVariants}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 p-2.5 rounded-lg ${item.color === 'primary' ? 'bg-primary/10 text-primary' : item.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-secondary/10 text-secondary'}`}
                          aria-hidden="true"
                        >
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-foreground font-heading">
                            {item.label}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.article>

              {/* Career Interests from data */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h2 className="text-h2 font-heading font-medium tracking-tight text-foreground">
                    Focus Areas
                  </h2>
                  <p className="text-body text-muted-foreground mt-2">
                    Deepening expertise in these domains
                  </p>
                </header>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {careerInterests.map((interest, index) => {
                    const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                      Brain: Brain,
                      BarChart: BarChart,
                      HeartPulse: HeartPulse,
                      Globe: Globe,
                      Users: Users,
                      Rocket: Rocket,
                    }
                    const Icon = IconMap[interest.icon] || Sparkles

                    return (
                      <motion.div
                        key={interest.title}
                        className="glass p-5 rounded-xl border border-border/50 group hover:border-accent/30 hover:shadow-lg transition-all duration-normal"
                        variants={itemVariants}
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-fast" aria-hidden="true">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-foreground font-heading">
                              {interest.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">{interest.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.article>
            </div>

            {/* Right Column - Quick Facts & Meta */}
            <div className="lg:col-span-5 space-y-8">
              {/* Profile Card */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <div className="text-center space-y-4">
                  <div className="relative w-28 h-28 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" aria-hidden="true" />
                    <div className="relative w-full h-full rounded-full border-4 border-accent/30 bg-gradient-to-br from-background to-muted/50 flex items-center justify-center">
                      <GraduationCap className="h-12 w-12 text-accent" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-h3 font-heading font-semibold text-foreground">{personalInfo.name}</h3>
                    <p className="text-body text-accent font-medium">{personalInfo.title}</p>
                    <p className="text-sm text-muted-foreground">{personalInfo.university}</p>
                  </div>
                </div>
              </motion.article>

              {/* Quick Facts */}
              <motion.article
                className="card-editorial space-y-6"
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
                    { label: 'Current Role', value: 'BSc Data Science Student (2nd Year)', icon: GraduationCap },
                    { label: 'University', value: "Ca&apos; Foscari University of Venice", icon: Globe },
                    { label: 'Location', value: 'Venice, Italy', icon: MapPinIcon },
                    { label: 'Internship', value: 'Digitattva Technolabs (Data Analyst)', icon: Briefcase },
                    { label: 'Startup', value: 'Founder, VitaVerse', icon: Lightbulb },
                    { label: 'English Proficiency', value: 'IELTS C1 (Proficient User)', icon: Award },
                    { label: 'Availability', value: 'Open to Internships & Roles', icon: TrendingUp },
                    { label: 'Work Style', value: 'Remote-Friendly, Global', icon: Clock },
                  ].map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-accent/30 transition-all duration-normal"
                      variants={itemVariants}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <dt className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-2 flex items-center gap-2">
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

              {/* Certifications */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    Certifications
                  </h3>
                </header>
                <ul className="space-y-3" role="list">
                  {(certifications || []).map((cert) => (
                    <motion.li
                      key={cert.id}
                      className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-accent/30 transition-all duration-normal"
                      variants={itemVariants}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center" aria-hidden="true">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground font-heading">{cert.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{cert.issuer} &middot; {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                          <p className="text-xs text-accent mt-1 font-medium">{cert.level}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>

              {/* Volunteering */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    Volunteering
                  </h3>
                </header>
                <ul className="space-y-3" role="list">
                  {(volunteering || []).map((vol) => (
                    <motion.li
                      key={vol.organization}
                      className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-accent/30 transition-all duration-normal"
                      variants={itemVariants}
                    >
                      <h4 className="text-sm font-medium text-foreground font-heading">{vol.role} at {vol.organization}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{vol.location} &middot; {new Date(vol.startDate).getFullYear()}&ndash;{vol.endDate ? new Date(vol.endDate).getFullYear() : 'Present'}</p>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{vol.description}</p>
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

              {/* Contact Links */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    Connect
                  </h3>
                </header>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
                    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, value: 'linkedin.com/in/kavyashah', external: true },
                    { icon: Github, label: 'GitHub', href: personalInfo.github, value: 'github.com/kavyashah', external: true },
                    { icon: Download, label: 'Download CV', href: personalInfo.cvUrl, value: 'CV.pdf', download: true },
                  ].map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.external ? '_blank' : undefined}
                      rel={contact.external ? 'noopener noreferrer' : undefined}
                      download={contact.download}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-accent/30 hover:bg-accent/5 transition-all duration-normal"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-fast" aria-hidden="true">
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{contact.label}</p>
                        <p className="text-sm text-foreground truncate group-hover:text-accent transition-colors">{contact.value}</p>
                      </div>
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">&rarr;</span>
                    </a>
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
    </>
  )
}
'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Linkedin, Github, MapPin, Phone, Download, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

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

export function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormState('submitting')

    // Simulate form submission (replace with actual endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, send to your backend/Formspree/EmailJS/etc.
    console.log('Form submitted:', formData)

    setFormState('success')
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset to idle after 5 seconds
    setTimeout(() => setFormState('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-title"
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
            Contact
          </motion.span>
          <motion.h2
            id="contact-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Let's work together
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Currently seeking paid internships and professional opportunities in Data Science,
            AI, and Healthcare Technology. Open to remote and international roles.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, an internship opportunity, or just want to connect —
                I'd love to hear from you. I typically respond within 24-48 hours.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, copyable: true },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kavyashah', href: personalInfo.linkedin, external: true },
                  { icon: Github, label: 'GitHub', value: 'github.com/kavyashah', href: personalInfo.github, external: true },
                  { icon: MapPin, label: 'Location', value: 'Venice, Italy', copyable: false },
                  { icon: Phone, label: 'Phone (IT)', value: '+39 393 457 5246', href: 'tel:+393934575246', copyable: true },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/30 transition-all duration-base"
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.external ? '_blank' : undefined}
                          rel={contact.external ? 'noopener noreferrer' : undefined}
                          className="text-body text-foreground hover:text-accent transition-colors duration-fast truncate block"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-body text-foreground">{contact.value}</p>
                      )}
                    </div>
                    {contact.copyable && (
                      <button
                        className="p-2 rounded-lg bg-muted hover:bg-muted-foreground/10 transition-colors text-muted-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => navigator.clipboard.writeText(contact.value)}
                        aria-label={`Copy ${contact.label.toLowerCase()}`}
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CV Download */}
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Download className="h-7 w-7 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                      Download CV
                    </h4>
                    <p className="text-body text-muted-foreground mt-1">
                      Full resume with detailed experience, education, and skills
                    </p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="mt-4 w-full sm:w-auto"
                >
                  <a href="/cv.pdf" download="Kavya_Shah_CV.pdf" className="flex items-center gap-2">
                    <Download className="h-5 w-5" aria-hidden="true" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="card p-6 lg:p-8">
              <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-6">
                Send a Message
              </h3>

              {formState === 'success' && (
                <motion.div
                  className="flex items-center gap-3 p-4 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">I'll get back to you within 24-48 hours.</p>
                  </div>
                </motion.div>
              )}

              {formState === 'error' && (
                <motion.div
                  className="flex items-center gap-3 p-4 rounded-lg bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Failed to send message</p>
                    <p className="text-sm">Please try again or email me directly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    name="name"
                    label="Full Name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    autoComplete="name"
                  />
                  <Input
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    autoComplete="email"
                  />
                </div>

                <Input
                  name="subject"
                  label="Subject"
                  placeholder="Internship opportunity / Collaboration / Question"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                />

                <Textarea
                  name="message"
                  label="Message"
                  placeholder="Tell me about your project, role, or question... (minimum 20 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={5}
                />

                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  loading={formState === 'submitting'}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to your data being processed in accordance with my
                  <a href="#" className="underline hover:text-accent">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
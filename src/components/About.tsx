'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { about, personalInfo, languages } from '@/lib/data'
import { Brain, HeartPulse, Globe, Rocket, Users, BarChart } from 'lucide-react'

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
  'Artificial Intelligence & Machine Learning': Brain,
  'Data Science & Analytics': BarChart,
  'Healthcare Technology & Digital Health': HeartPulse,
  'Software Development': Brain,
  'Entrepreneurship & Startup Operations': Rocket,
  'Technology for Social Impact': Users,
}

export function About() {
  return React.createElement(
    'section',
    {
      id: "about",
      className: "section bg-muted/30",
      "aria-labelledby": "about-title"
    },
    React.createElement(
      'div',
      { className: "container-custom" },
      React.createElement(
        motion.div,
        {
          className: "max-w-4xl mx-auto text-center mb-16",
          variants: sectionVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: '-100px' }
        },
        React.createElement(
          motion.span,
          {
            className: "inline-block text-xs font-medium text-accent uppercase tracking-wider mb-4",
            variants: itemVariants
          },
          "About Me"
        ),
        React.createElement(
          motion.h2,
          {
            id: "about-title",
            className: "text-h1 font-heading font-semibold tracking-tight text-foreground mb-6",
            variants: itemVariants
          },
          "Curious mind at the intersection of data, intelligence & technology"
        ),
        React.createElement(
          motion.p,
          {
            className: "text-body-lg text-muted-foreground leading-relaxed",
            variants: itemVariants
          },
          "Second-year BSc Data Science student at Ca' Foscari University of Venice,",
          " ",
          React.createElement('br', null),
          "building expertise in Python, SQL, data analysis, and AI."
        )
      ),
      React.createElement(
        motion.div,
        {
          className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start",
          variants: sectionVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: '-100px' }
        },
        React.createElement(
          'div',
          { className: "space-y-8" },
          React.createElement(
            motion.div,
            { variants: itemVariants },
            React.createElement(
              'h3',
              { className: "text-h3 font-heading font-medium tracking-tight text-foreground mb-4" },
              "Introduction"
            ),
            React.createElement(
              'p',
              { className: "text-body text-muted-foreground leading-relaxed mb-6" },
              about.introduction
            ),
            React.createElement(
              'p',
              { className: "text-body text-muted-foreground leading-relaxed" },
              about.approach
            )
          ),
          React.createElement(
            motion.div,
            { variants: itemVariants },
            React.createElement(
              'h3',
              { className: "text-h3 font-heading font-medium tracking-tight text-foreground mb-4" },
              "Technical Interests"
            ),
            React.createElement(
              'ul',
              { className: "space-y-3", role: "list" },
              about.interests.map((interest, index) =>
                React.createElement(
                  motion.li,
                  {
                    key: interest,
                    className: "flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/30 transition-all duration-base",
                    variants: itemVariants,
                    style: { transitionDelay: `${index * 50}ms` }
                  },
                  React.createElement(
                    'div',
                    { className: "flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center" },
                    React.createElement(interestIcons[interest as keyof typeof interestIcons], { className: "h-5 w-5 text-accent", "aria-hidden": "true" })
                  ),
                  React.createElement(
                    'span',
                    { className: "text-body text-foreground font-medium mt-1" },
                    interest
                  )
                )
              )
            )
          ),
          React.createElement(
            motion.div,
            { variants: itemVariants },
            React.createElement(
              'h3',
              { className: "text-h3 font-heading font-medium tracking-tight text-foreground mb-4" },
              "Career Ambitions"
            ),
            React.createElement(
              'p',
              { className: "text-body text-muted-foreground leading-relaxed" },
              about.ambitions
            )
          )
        ),
        React.createElement(
          'div',
          { className: "space-y-8" },
          React.createElement(
            motion.div,
            { variants: itemVariants },
            React.createElement(
              'h3',
              { className: "text-h3 font-heading font-medium tracking-tight text-foreground mb-4" },
              "Quick Facts"
            ),
            React.createElement(
              'dl',
              { className: "space-y-4", role: "list" },
              React.createElement(
                'div',
                { className: "grid grid-cols-2 gap-4" },
                React.createElement(
                  'div',
                  { className: "p-4 rounded-lg border border-border bg-card" },
                  React.createElement(
                    'dt',
                    { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1" },
                    "Current Role"
                  ),
                  React.createElement(
                    'dd',
                    { className: "text-body font-medium text-foreground" },
                    "BSc Data Science Student (2nd Year)"
                  )
                ),
                React.createElement(
                  'div',
                  { className: "p-4 rounded-lg border border-border bg-card" },
                  React.createElement(
                    'dt',
                    { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1" },
                    "University"
                  ),
                  React.createElement(
                    'dd',
                    { className: "text-body font-medium text-foreground" },
                    "Ca' Foscari University of Venice"
                  )
                )
              ),
              React.createElement(
                'div',
                { className: "grid grid-cols-2 gap-4" },
                React.createElement(
                  'div',
                  { className: "p-4 rounded-lg border border-border bg-card" },
                  React.createElement(
                    'dt',
                    { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1" },
                    "Location"
                  ),
                  React.createElement(
                    'dd',
                    { className: "text-body font-medium text-foreground" },
                    "Venice, Italy"
                  )
                ),
                React.createElement(
                  'div',
                  { className: "p-4 rounded-lg border border-border bg-card" },
                  React.createElement(
                    'dt',
                    { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1" },
                    "Internship"
                  ),
                  React.createElement(
                    'dd',
                    { className: "text-body font-medium text-foreground" },
                    "Digitattva Technolabs (Data Analyst)"
                  )
                )
              ),
              React.createElement(
                'div',
                { className: "grid grid-cols-2 gap-4" },
                React.createElement(
                  'div',
                  { className: "p-4 rounded-lg border border-border bg-card" },
                  React.createElement(
                    'dt',
                    { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1" },
                    "Startup"
                  ),
                  React.createElement(
                    'dd',
                    { className: "text-body font-medium text-foreground" },
                    "Founder, VitaVerse"
                  )
                ),
                React.createElement(
                  'div',
                  { className: "p-4 rounded-lg border border-border bg-card" },
                  React.createElement(
                    'dt',
                    { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1" },
                    "English Proficiency"
                  ),
                  React.createElement(
                    'dd',
                    { className: "text-body font-medium text-foreground" },
                    "IELTS C1 (Proficient User)"
                  )
                )
              )
            )
          ),
          React.createElement(
            motion.div,
            { variants: itemVariants },
            React.createElement(
              'h3',
              { className: "text-h3 font-heading font-medium tracking-tight text-foreground mb-4" },
              "Languages"
            ),
            React.createElement(
              'ul',
              { className: "space-y-3", role: "list" },
              (languages || []).map((lang) =>
                React.createElement(
                  'li',
                  {
                    key: lang.language,
                    className: "flex items-center justify-between p-4 rounded-lg border border-border bg-card"
                  },
                  React.createElement(
                    'span',
                    { className: "text-body font-medium text-foreground" },
                    lang.language
                  ),
                  React.createElement(
                    'span',
                    { className: "text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full" },
                    lang.proficiency
                  )
                )
              )
            )
          ),
          React.createElement(
            motion.div,
            { variants: itemVariants },
            React.createElement(
              'h3',
              { className: "text-h3 font-heading font-medium tracking-tight text-foreground mb-4" },
              "Hobbies & Interests"
            ),
            React.createElement(
              'div',
              { className: "flex flex-wrap gap-2" },
              (personalInfo.hobbies || []).map((hobby) =>
                React.createElement(
                  'span',
                  {
                    key: hobby,
                    className: "px-4 py-2 rounded-full border border-border bg-card text-body text-foreground font-medium"
                  },
                  hobby
                )
              )
            )
          )
        )
      )
    )
  )
}
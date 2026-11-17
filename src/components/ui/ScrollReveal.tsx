'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  once?: boolean
  margin?: string
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
  margin = '-100px',
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerChildren?: number
  delayChildren?: number
  once?: boolean
  margin?: string
}

export function StaggerContainer({
  children,
  className = '',
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  margin = '-100px',
}: StaggerContainerProps) {
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              variants: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              },
            } as any)
          : child
      )}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  delay?: number
  index?: number
}

export function StaggerItem({
  children,
  className = '',
  delay = 0,
  index = 0,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + index * 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
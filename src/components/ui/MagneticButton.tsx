'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  strength?: number
  className?: string
  magnetic?: boolean
}

export function MagneticButton({
  children,
  strength = 0.3,
  className = '',
  magnetic = true,
  style,
  onMouseEnter,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion()
  const ref = React.useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (reducedMotion || !magnetic) return

      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      x.set((e.clientX - centerX) * strength)
      y.set((e.clientY - centerY) * strength)
    },
    [strength, magnetic, reducedMotion]
  )

  const handleMouseLeave = React.useCallback(() => {
    if (reducedMotion || !magnetic) return
    x.set(0)
    y.set(0)
  }, [magnetic, reducedMotion])

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const transformX = useTransform(springX, [-100, 100], ['-20%', '20%'])
  const transformY = useTransform(springY, [-100, 100], ['-20%', '20%'])

  return (
    <motion.button
      ref={ref}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      style={{
        ...style,
        transform: magnetic && !reducedMotion
          ? { x: transformX, y: transformY }
          : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onMouseEnter}
      onMouseLeaveCapture={onMouseLeave}
      whileHover={!reducedMotion && !magnetic ? { scale: 1.02 } : undefined}
      whileTap={!reducedMotion ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </motion.button>
  )
}

interface MagneticCardProps {
  children: React.ReactNode
  className?: string
  strength?: number
  magnetic?: boolean
}

export function MagneticCard({
  children,
  className = '',
  strength = 0.15,
  magnetic = true,
}: MagneticCardProps) {
  const reducedMotion = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !magnetic) return

      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)

      x.set(deltaX * 20 * strength)
      y.set(deltaY * 20 * strength)
      rotateX.set(-deltaY * 5 * strength)
      rotateY.set(deltaX * 5 * strength)
    },
    [strength, magnetic, reducedMotion]
  )

  const handleMouseLeave = React.useCallback(() => {
    if (reducedMotion || !magnetic) return
    x.set(0)
    y.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }, [magnetic, reducedMotion])

  const springX = useSpring(x, { stiffness: 200, damping: 25 })
  const springY = useSpring(y, { stiffness: 200, damping: 25 })
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 25 })

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        transform: magnetic && !reducedMotion
          ? { x: springX, y: springY, rotateX: springRotateX, rotateY: springRotateY, perspective: 1000 }
          : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={!reducedMotion && !magnetic ? { y: -8, boxShadow: 'var(--shadow-xl)' } : undefined}
    >
      {children}
    </motion.div>
  )
}
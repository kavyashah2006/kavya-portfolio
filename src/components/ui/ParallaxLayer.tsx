'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxLayerProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'vertical' | 'horizontal'
  offset?: number
}

export function ParallaxLayer({
  children,
  className = '',
  speed = 0.3,
  direction = 'vertical',
  offset = 0,
}: ParallaxLayerProps) {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollY, scrollX } = useScroll({ target: ref, layoutEffect: true })

  const y = useTransform(scrollY, [0, 1000], [0, -speed * 1000])
  const x = useTransform(scrollX, [0, 1000], [0, -speed * 1000])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          transform: direction === 'vertical'
            ? { y: y.add(offset) }
            : { x: x.add(offset) },
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  layers: Array<{
    children: React.ReactNode
    speed: number
    className?: string
    offset?: number
  }>
}

export function ParallaxSection({
  children,
  className = '',
  layers = [],
}: ParallaxSectionProps) {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollY } = useScroll({ target: ref, layoutEffect: true })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className={layer.className}
          style={{
            transform: useTransform(scrollY, [0, 1000], [0, -layer.speed * 1000]).add(layer.offset || 0),
          }}
        >
          {layer.children}
        </motion.div>
      ))}
      {children}
    </div>
  )
}

interface ScrollProgressProps {
  children: (progress: number) => React.ReactNode
  className?: string
  offset?: number[]
}

export function ScrollProgress({
  children,
  className = '',
  offset = [0, 1],
}: ScrollProgressProps) {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: true })

  const progress = useTransform(scrollYProgress, offset, [0, 1])

  return (
    <div ref={ref} className={className}>
      {children(progress.get() as unknown as number)}
    </div>
  )
}

interface ScrollLinkedAnimationProps {
  children: React.ReactNode
  className?: string
  animation: {
    from: number
    to: number
    output: [number, number]
  }[]
}

export function ScrollLinkedAnimation({
  children,
  className = '',
  animation = [],
}: ScrollLinkedAnimationProps) {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: true })

  const transforms = animation.map((anim) =>
    useTransform(scrollYProgress, [anim.from, anim.to], anim.output)
  )

  return (
    <div ref={ref} className={className}>
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            style: {
              ...(children.props.style || {}),
              transform: transforms
                .map((t, i) => {
                  const anim = animation[i]
                  if (anim.from === 0 && anim.to === 1 && anim.output[0] === 0 && anim.output[1] === 0) return ''
                  return ''
                })
                .join(' '),
            },
          } as any)
        : children}
    </div>
  )
}
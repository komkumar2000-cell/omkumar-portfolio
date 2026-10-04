'use client'

import { useState } from 'react'
import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Section } from './section'
import { Reveal } from './reveal'

export function Education() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <Section id="education" index="05" eyebrow="Education" title="Education" intro="A Bachelor of Technology in Computer Science and Engineering, preceded by Intermediate (MPC) and secondary schooling in Hyderabad.">
      <ol className="relative grid gap-4 md:grid-cols-3 md:gap-6">
        <span
          aria-hidden="true"
          className="absolute top-5 right-0 left-0 hidden h-px bg-border md:block"
        />
        {education.map((item, i) => {
          const isLatest = i === 0
          return (
            <Reveal as="li" key={item.institution} delay={i * 90} className="relative">
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex h-full flex-col gap-4 md:gap-5"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'relative z-10 hidden size-10 items-center justify-center rounded-full border bg-card transition-all duration-300 md:inline-flex',
                    isLatest || hovered === i ? 'border-primary text-primary' : 'border-border text-muted-foreground',
                    hovered === i && 'scale-110',
                  )}
                >
                  <GraduationCap className="size-4" />
                </span>
                <article
                  className={cn(
                    'flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300',
                    hovered === i ? '-translate-y-1 border-primary/35 shadow-[0_18px_36px_-26px_oklch(0.21_0.025_260/0.35)]' : 'border-border',
                  )}
                >
                  <p className="font-mono text-xs tracking-wide text-primary">{item.period}</p>
                  <h3 className="mt-3 text-pretty text-lg font-semibold leading-snug tracking-tight">
                    {item.qualification}
                  </h3>
                  <p className="mt-2 text-pretty text-foreground/80">{item.institution}</p>
                  <p className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {item.location}
                  </p>
                </article>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}

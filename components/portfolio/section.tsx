import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type SectionProps = {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-end md:gap-12">
          <div>
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              <span>{index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-primary/40" />
              <span>{eyebrow}</span>
            </p>
            <h2 id={`${id}-title`} className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
          </div>
          {intro ? <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

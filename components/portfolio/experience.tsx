'use client'

import { useId, useState } from 'react'
import { Briefcase, ChevronDown, MapPin } from 'lucide-react'
import { experience, type Experience as ExperienceItem } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Section } from './section'
import { Reveal } from './reveal'

const PREVIEW_COUNT = 4

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const preview = item.responsibilities.slice(0, PREVIEW_COUNT)
  const rest = item.responsibilities.slice(PREVIEW_COUNT)

  return (
    <li className="relative pl-10 md:pl-14">
      <span
        aria-hidden="true"
        className="absolute top-1 left-0 grid size-8 place-items-center rounded-full border border-primary/30 bg-card text-primary md:size-10"
      >
        <Briefcase className="size-4" />
      </span>

      <article className="rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_18px_36px_-26px_oklch(0.21_0.025_260/0.35)]">
        <header className="flex flex-col gap-4 border-b border-border p-6 md:flex-row md:items-start md:justify-between md:p-8">
          <div className="min-w-0">
            <p className="text-sm font-medium text-primary">{item.company}</p>
            <h3 className="mt-1 text-pretty text-xl font-semibold tracking-tight md:text-2xl">{item.role}</h3>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" />
              {item.location}
            </p>
          </div>
          <p className="shrink-0 self-start rounded-full bg-muted px-3 py-1 font-mono text-xs tracking-wide text-muted-foreground">
            <time>{item.start}</time> – <time>{item.end}</time>
          </p>
        </header>

        <div className="p-6 md:p-8">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tools and areas">
            {item.highlights.map((h) => (
              <li key={h} className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
                {h}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 mb-3 text-sm font-medium">Responsibilities</h4>
          <ul className="grid gap-3">
            {preview.map((r) => (
              <Responsibility key={r} text={r} />
            ))}
          </ul>

          {rest.length > 0 ? (
            <>
              <div
                id={panelId}
                className={cn(
                  'grid transition-[grid-template-rows,opacity] duration-500 ease-out',
                  expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
                aria-hidden={!expanded}
                inert={!expanded}
              >
                <div className="overflow-hidden">
                  <ul className="grid gap-3 pt-3">
                    {rest.map((r) => (
                      <Responsibility key={r} text={r} />
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setExpanded((v) => !v)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-all hover:border-primary/40 hover:text-primary active:scale-[0.98]"
              >
                {expanded ? 'Show less' : `Show all ${item.responsibilities.length} responsibilities`}
                <ChevronDown
                  className={cn('size-4 transition-transform duration-300', expanded && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
            </>
          ) : null}
        </div>
      </article>
    </li>
  )
}

function Responsibility({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-pretty leading-relaxed text-foreground/85">
      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
      <span>{text}</span>
    </li>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Professional experience"
      intro="Hands-on work across prompt writing, AI output evaluation, content optimization, SEO and website content management."
      className="bg-muted/50"
    >
      <Reveal>
        <ol className="relative grid gap-8 before:absolute before:top-2 before:bottom-2 before:left-4 before:w-px before:bg-border md:before:left-5">
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}

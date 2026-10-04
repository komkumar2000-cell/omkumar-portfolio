'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { Braces, Database, Layers, Sparkles, Wrench, type LucideIcon } from 'lucide-react'
import { skillCategories } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Section } from './section'
import { Reveal } from './reveal'

const icons: Record<string, LucideIcon> = {
  'ai-digital': Sparkles,
  programming: Braces,
  frameworks: Layers,
  databases: Database,
  tools: Wrench,
}

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]
  const ActiveIcon = icons[active.id]

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const index = skillCategories.findIndex((c) => c.id === activeId)
    let next = index
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (index + 1) % skillCategories.length
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp')
      next = (index - 1 + skillCategories.length) % skillCategories.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = skillCategories.length - 1
    else return
    e.preventDefault()
    setActiveId(skillCategories[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title="Skills & tools"
      intro="AI and digital content skills from my current role, alongside the programming, framework and database skills from my Computer Science background."
    >
      <Reveal className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-8">
        <div
          role="tablist"
          aria-label="Skill categories"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.id]
            const selected = cat.id === activeId
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                role="tab"
                type="button"
                id={`tab-${cat.id}`}
                aria-selected={selected}
                aria-controls={`panel-${cat.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  'group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 lg:w-full',
                  selected
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-card text-foreground hover:border-foreground/25',
                )}
              >
                <Icon
                  className={cn('size-4 shrink-0', selected ? 'text-background' : 'text-primary')}
                  aria-hidden="true"
                />
                <span className="font-medium whitespace-nowrap">{cat.label}</span>
                <span
                  className={cn(
                    'ml-auto rounded-full px-2 py-0.5 font-mono text-xs',
                    selected ? 'bg-background/15 text-background' : 'bg-muted text-muted-foreground',
                  )}
                >
                  {cat.skills.length}
                </span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
          className="min-h-72 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div key={active.id} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
            <div className="mb-6 flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ActiveIcon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{active.label}</h3>
                <p className="mt-1 text-pretty text-muted-foreground">{active.description}</p>
              </div>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {active.skills.map((skill, i) => (
                <li
                  key={skill}
                  className="animate-in fade-in slide-in-from-bottom-1 fill-mode-both flex items-center gap-3 rounded-lg border border-border bg-background px-3.5 py-3 text-sm transition-colors duration-200 hover:border-primary/40 hover:bg-accent/50"
                  style={{ animationDelay: `${i * 25}ms` }}
                >
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

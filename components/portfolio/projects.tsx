'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ScanSearch, ShieldCheck, X, type LucideIcon } from 'lucide-react'
import { projects, type Project } from '@/lib/portfolio-data'
import { Section } from './section'
import { Reveal } from './reveal'

const projectIcons: Record<string, LucideIcon> = {
  'fake-image-detection': ScanSearch,
  'sql-injection-detection': ShieldCheck,
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const Icon = projectIcons[project.id]
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_48px_-28px_oklch(0.21_0.025_260/0.4)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:translate-y-0"
    >
      <div className="relative flex items-center justify-between border-b border-border bg-muted/60 px-6 py-5 md:px-8">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-card text-primary shadow-sm ring-1 ring-border transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="relative font-mono text-sm text-muted-foreground">
          {project.index} / {project.domain}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-pretty text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.short}</p>

        <ul className="mt-5 grid gap-2" aria-label="Key details">
          {project.details.slice(1, 3).map((d) => (
            <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
              <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
              {d}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies and approaches">
          {project.approaches.map((a) => (
            <li key={a} className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
              {a}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-primary">
          View project details
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </button>
  )
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  const handleClose = () => {
    document.body.style.overflow = ''
    onClose()
  }

  const Icon = project ? projectIcons[project.id] : null

  return (
    <dialog
      ref={ref}
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close()
      }}
      aria-labelledby="project-dialog-title"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl border border-border bg-card p-0 text-foreground shadow-2xl open:animate-in open:fade-in open:zoom-in-95 open:duration-300"
    >
      {project && Icon ? (
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
          <header className="relative flex items-start gap-4 border-b border-border bg-muted/60 p-6 md:p-8">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
            <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm ring-1 ring-border">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <div className="relative min-w-0 flex-1 pr-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Project {project.index} · {project.domain}
              </p>
              <h3 id="project-dialog-title" className="mt-2 text-pretty text-xl font-semibold tracking-tight md:text-2xl">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close project details"
              className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </header>

          <div className="overflow-y-auto p-6 md:p-8">
            <p className="text-pretty text-lg leading-relaxed">{project.short}</p>

            <h4 className="mt-8 mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Technologies & approaches
            </h4>
            <ul className="flex flex-wrap gap-1.5">
              {project.approaches.map((a) => (
                <li key={a} className="rounded-md bg-accent px-2.5 py-1 text-sm font-medium text-accent-foreground">
                  {a}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Project details
            </h4>
            <ol className="grid gap-4">
              {project.details.map((d, i) => (
                <li key={d} className="flex gap-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border font-mono text-xs text-primary">
                    {i + 1}
                  </span>
                  <span className="text-pretty leading-relaxed text-foreground/85">{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Projects"
      title="Selected projects"
      intro="Two machine learning projects focused on detection problems: identifying manipulated images and preventing SQL injection attacks. Select a project to read the full details."
      className="bg-muted/50"
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.id} delay={i * 100}>
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </Reveal>
        ))}
      </ul>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}

import { Download, Eye, FileText } from 'lucide-react'
import { profile, experience, education } from '@/lib/portfolio-data'
import { Section } from './section'
import { Reveal } from './reveal'

export function ResumeSection() {
  return (
    <Section
      id="resume"
      index="06"
      eyebrow="Resume"
      title="Resume"
      intro="View the full resume in your browser or download a PDF copy for your records."
      className="bg-muted/50"
    >
      <Reveal>
        <div className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="relative flex items-center justify-center border-b border-border bg-muted/60 p-8 md:border-r md:border-b-0 md:p-10">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
            <div
              aria-hidden="true"
              className="relative w-full max-w-60 -rotate-2 rounded-lg border border-border bg-card p-5 shadow-[0_24px_48px_-28px_oklch(0.21_0.025_260/0.45)] transition-transform duration-500 hover:rotate-0"
            >
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">{experience[0].role}</p>
              <div className="mt-4 grid gap-1.5">
                <span className="h-1.5 w-full rounded bg-muted" />
                <span className="h-1.5 w-11/12 rounded bg-muted" />
                <span className="h-1.5 w-4/5 rounded bg-muted" />
              </div>
              <p className="mt-4 text-[9px] font-semibold uppercase tracking-wider text-primary">Experience</p>
              <div className="mt-1.5 grid gap-1.5">
                <span className="h-1.5 w-full rounded bg-muted" />
                <span className="h-1.5 w-3/4 rounded bg-muted" />
                <span className="h-1.5 w-5/6 rounded bg-muted" />
              </div>
              <p className="mt-4 text-[9px] font-semibold uppercase tracking-wider text-primary">Projects</p>
              <div className="mt-1.5 grid gap-1.5">
                <span className="h-1.5 w-full rounded bg-muted" />
                <span className="h-1.5 w-2/3 rounded bg-muted" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 md:p-10">
            <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <FileText className="size-5" aria-hidden="true" />
            </span>
            <h3 className="text-2xl font-semibold tracking-tight">{profile.name} — Resume</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Includes professional experience at {experience[0].company}, AI & digital and technical skills, two
              machine learning projects, and education from {education[0].institution}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                <Eye className="size-4" aria-hidden="true" />
                View Resume
              </a>
              <a
                href="/api/resume"
                download="K-Om-Kumar-Resume.pdf"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/25 active:translate-y-0"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
                <span className="font-mono text-xs text-muted-foreground">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

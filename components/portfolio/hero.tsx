import { ArrowRight, FileText, Mail, MapPin } from 'lucide-react'
import { profile, experience, education } from '@/lib/portfolio-data'
import { LinkedInIcon } from './linkedin-icon'

const aiTools = ['ChatGPT', 'Claude', 'Google Gemini']
const focus = ['Prompt Writing', 'AI Output Evaluation', 'SEO', 'WordPress']

export function Hero() {
  const current = experience[0]
  const degree = education[0]

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 fill-mode-both">
          <p className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <span className="text-pretty">{current.role}</span>
          </p>

          <h1 id="hero-title" className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-xl leading-snug text-foreground/85 md:text-2xl">
            Computer Science graduate working in{' '}
            <span className="text-primary">AI-assisted content creation</span>, prompt writing, SEO and WordPress.
          </p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I use ChatGPT, Claude and Google Gemini to generate, refine and evaluate content against specific
            requirements, backed by a technical foundation in Java, Python, JavaScript, HTML, CSS and SQL.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
  <a
  href="#experience"
  className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
  >
  View Work Experience
  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
  </a>
  <a
  href="#projects"
  className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
  >
  Projects
  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
  </a>
  <a
  href="/resume"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/25 active:translate-y-0"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <a
              href={profile.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        <aside
          aria-label="Profile at a glance"
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_0_var(--border),0_20px_40px_-24px_oklch(0.21_0.025_260/0.25)] md:p-7"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">At a glance</p>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Profile
            </span>
          </div>

          <dl className="divide-y divide-border">
            <div className="grid gap-1 py-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Role</dt>
              <dd className="font-medium">{current.role}</dd>
              <dd className="text-sm text-muted-foreground">{current.company}</dd>
            </div>
            <div className="grid gap-2 py-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">AI tools</dt>
              <dd className="flex flex-wrap gap-1.5">
                {aiTools.map((t) => (
                  <span key={t} className="rounded-md bg-accent px-2 py-1 text-sm text-accent-foreground">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
            <div className="grid gap-2 py-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Focus</dt>
              <dd className="flex flex-wrap gap-1.5">
                {focus.map((t) => (
                  <span key={t} className="rounded-md border border-border px-2 py-1 text-sm">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
            <div className="grid gap-1 pt-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Education</dt>
              <dd className="font-medium">B.Tech, Computer Science and Engineering</dd>
              <dd className="text-sm text-muted-foreground">
                {degree.institution} · {degree.period}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

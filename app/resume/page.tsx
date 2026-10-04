import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { education, experience, profile, projects, skillCategories } from '@/lib/portfolio-data'
import { PrintButton } from '@/components/portfolio/print-button'

export const metadata: Metadata = {
  title: 'Resume — K Om Kumar',
  description: 'Resume of K Om Kumar, Process Associate – Content Creation AI.',
}

const technical = skillCategories.filter((c) => c.id !== 'ai-digital')
const aiSkills = skillCategories.find((c) => c.id === 'ai-digital')

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-border pb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </h2>
  )
}

export default function ResumePage() {
  return (
    <div className="min-h-dvh bg-muted/60 py-6 print:bg-white print:py-0 md:py-10">
      <div className="no-print mx-auto mb-6 flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 px-5">
        <Link
          href="/#resume"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
        <div className="flex gap-2">
          <PrintButton />
          <a
            href="/api/resume"
            download="K-Om-Kumar-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-4" aria-hidden="true" />
            Download PDF
          </a>
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl px-5 print:max-w-none print:px-0">
        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none sm:p-10">
          <header className="border-b border-border pb-6">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{profile.name}</h1>
            <p className="mt-1 text-lg text-muted-foreground">{experience[0].role}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <li>
                <a className="hover:text-primary" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>
                <a className="break-all hover:text-primary" href={profile.linkedinHref} target="_blank" rel="noopener noreferrer">
                  {profile.linkedin}
                </a>
              </li>
            </ul>
          </header>

          <section className="mt-6">
            <Heading>Professional Summary</Heading>
            <p className="text-pretty leading-relaxed text-foreground/85">{profile.summary}</p>
          </section>

          <section className="mt-7">
            <Heading>Professional Experience</Heading>
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-semibold">{job.company}</h3>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <p className="italic text-foreground/85">{job.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.start} – {job.end}
                  </p>
                </div>
                <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-sm leading-relaxed text-foreground/85 marker:text-primary">
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {aiSkills ? (
            <section className="mt-7">
              <Heading>AI & Digital Skills</Heading>
              <p className="text-sm leading-relaxed text-foreground/85">{aiSkills.skills.join(' · ')}</p>
            </section>
          ) : null}

          <section className="mt-7">
            <Heading>Technical Skills</Heading>
            <dl className="grid gap-1.5 text-sm">
              {technical.map((c) => (
                <div key={c.id} className="grid gap-x-4 sm:grid-cols-[9rem_minmax(0,1fr)]">
                  <dt className="font-medium">{c.label}</dt>
                  <dd className="text-foreground/85">{c.skills.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-7">
            <Heading>Projects</Heading>
            <div className="grid gap-5">
              {projects.map((p, i) => (
                <div key={p.id}>
                  <h3 className="font-semibold">
                    {i + 1}. {p.title}
                  </h3>
                  <ul className="mt-2 grid list-disc gap-1.5 pl-5 text-sm leading-relaxed text-foreground/85 marker:text-primary">
                    {p.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <Heading>Education</Heading>
            <div className="grid gap-4">
              {education.map((e) => (
                <div key={e.institution} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="font-semibold">
                      {e.institution}, {e.location}
                    </h3>
                    <p className="text-sm text-foreground/85">{e.qualification}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.period}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}

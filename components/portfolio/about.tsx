import { Code2, PenLine, Sparkles } from 'lucide-react'
import { strengths } from '@/lib/portfolio-data'
import { Section } from './section'
import { Reveal } from './reveal'

const pillars = [
  {
    icon: Sparkles,
    title: 'AI-assisted content',
    body: 'Writing and refining prompts for ChatGPT, Claude and Google Gemini, then evaluating outputs for relevance, accuracy, structure, tone and formatting.',
  },
  {
    icon: PenLine,
    title: 'Content, SEO & WordPress',
    body: 'Creating, reviewing and optimizing digital content, applying SEO principles, and managing website content in WordPress and other CMSs.',
  },
  {
    icon: Code2,
    title: 'Technical foundation',
    body: 'A Computer Science graduate familiar with Java, Python, JavaScript, HTML, CSS and SQL, plus Spring, Spring Boot and Hibernate.',
  },
]

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Where content quality meets a technical background."
      intro="Computer Science graduate with professional experience in AI-assisted content creation, prompt writing, content optimization, SEO and WordPress."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_36px_-24px_oklch(0.21_0.025_260/0.3)]">
              <span className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-105">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-6 flex flex-col gap-3 rounded-2xl border border-dashed border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">Core strengths</p>
        <ul className="flex flex-wrap gap-2">
          {strengths.map((s) => (
            <li key={s} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

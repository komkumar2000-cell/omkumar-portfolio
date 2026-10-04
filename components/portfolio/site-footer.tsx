import { ArrowUp } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 transition-colors hover:text-foreground"
        >
          Back to top
          <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

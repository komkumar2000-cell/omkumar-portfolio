'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
          setActive(top.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))

    const hero = document.getElementById('top')
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive('')
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    if (hero) heroObserver.observe(hero)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={cn(
        'no-print fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-border/80 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-md font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-foreground font-mono text-xs text-background transition-transform duration-300 group-hover:-rotate-6"
          >
            OK
          </span>
          <span>{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm transition-colors',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border/80 bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4 md:px-8">
          <ul className="grid gap-1">
            {navItems.map((item, i) => (
              <li
                key={item.id}
                className="animate-in fade-in slide-in-from-top-1 fill-mode-both"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-3 py-3 text-base transition-colors hover:bg-muted',
                    active === item.id ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {item.label}
                  {active === item.id ? <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" /> : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

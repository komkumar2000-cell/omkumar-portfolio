'use client'

import { useState, type ComponentType, type SVGProps } from 'react'
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Section } from './section'
import { Reveal } from './reveal'
import { LinkedInIcon } from './linkedin-icon'

type Channel = {
  label: string
  value: string
  href: string
  copy: string
  external?: boolean
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const channels: Channel[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, copy: profile.phone, icon: Phone },
  {
    label: 'LinkedIn',
    value: profile.linkedin.replace('www.', ''),
    href: profile.linkedinHref,
    copy: profile.linkedinHref,
    external: true,
    icon: LinkedInIcon,
  },
]

function ContactCard({ channel }: { channel: Channel }) {
  const [copied, setCopied] = useState(false)
  const Icon = channel.icon

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(channel.copy)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-background/15 bg-background/[0.04] p-6 transition-colors duration-300 hover:border-background/30 hover:bg-background/[0.07]">
      <div className="flex items-center justify-between">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-background/10 text-background">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? `${channel.label} copied` : `Copy ${channel.label}`}
          className="relative z-10 inline-flex size-9 items-center justify-center rounded-full text-background/60 transition-colors hover:bg-background/10 hover:text-background"
        >
          {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        </button>
      </div>
      <p className="mt-6 text-sm text-background/60">{channel.label}</p>
      <a
        href={channel.href}
        target={channel.external ? '_blank' : undefined}
        rel={channel.external ? 'noopener noreferrer' : undefined}
        className="mt-1 inline-flex items-start gap-1.5 break-all font-medium text-background after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
      >
        {channel.value}
        <ArrowUpRight
          className="mt-0.5 size-4 shrink-0 text-background/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
          aria-hidden="true"
        />
        {channel.external ? <span className="sr-only">(opens in a new tab)</span> : null}
      </a>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? `${channel.label} copied to clipboard` : ''}
      </span>
    </div>
  )
}

export function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Let's talk."
      intro="Reach out by email, phone or LinkedIn. Use the copy button on any card to grab the details quickly."
    >
      <Reveal>
        <div className="rounded-3xl bg-foreground p-6 text-background md:p-10">
          <div className="mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
            <p className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">{profile.name}</p>
            <p className="text-background/60">{profile.location}</p>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {channels.map((c) => (
              <li key={c.label}>
                <ContactCard channel={c} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

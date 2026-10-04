'use client'

import { Printer } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
    >
      <Printer className="size-4" aria-hidden="true" />
      Print
    </button>
  )
}

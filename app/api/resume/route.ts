import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib'
import { education, experience, profile, projects, skillCategories } from '@/lib/portfolio-data'

export const dynamic = 'force-static'

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const MARGIN = 48
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

const ink = rgb(0.12, 0.14, 0.19)
const muted = rgb(0.4, 0.43, 0.5)
const accent = rgb(0.1, 0.42, 0.4)
const rule = rgb(0.86, 0.86, 0.84)

function wrap(text: string, font: PDFFont, size: number, width: number) {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let line = ''
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(candidate, size) > width && line) {
      lines.push(line)
      line = word
    } else {
      line = candidate
    }
  }
  if (line) lines.push(line)
  return lines
}

export async function GET() {
  const doc = await PDFDocument.create()
  doc.setTitle(`${profile.name} — Resume`)
  doc.setAuthor(profile.name)

  const regular = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique)

  let page: PDFPage = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
  let y = PAGE_HEIGHT - MARGIN

  const ensure = (needed: number) => {
    if (y - needed < MARGIN) {
      page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
      y = PAGE_HEIGHT - MARGIN
    }
  }

  const text = (
    value: string,
    opts: { font?: PDFFont; size?: number; color?: ReturnType<typeof rgb>; x?: number; width?: number; gap?: number } = {},
  ) => {
    const font = opts.font ?? regular
    const size = opts.size ?? 10
    const x = opts.x ?? MARGIN
    const width = opts.width ?? CONTENT_WIDTH - (x - MARGIN)
    const lineHeight = size * 1.4
    for (const line of wrap(value, font, size, width)) {
      ensure(lineHeight)
      page.drawText(line, { x, y: y - size, size, font, color: opts.color ?? ink })
      y -= lineHeight
    }
    y -= opts.gap ?? 0
  }

  const rightText = (value: string, size = 9.5, font = regular, color = muted) => {
    const w = font.widthOfTextAtSize(value, size)
    page.drawText(value, { x: PAGE_WIDTH - MARGIN - w, y: y - size, size, font, color })
  }

  const heading = (label: string) => {
    ensure(40)
    y -= 12
    page.drawText(label.toUpperCase(), { x: MARGIN, y: y - 9, size: 9, font: bold, color: accent })
    y -= 15
    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_WIDTH - MARGIN, y }, thickness: 0.6, color: rule })
    y -= 8
  }

  const bullet = (value: string) => {
    const size = 9.5
    ensure(size * 1.4)
    page.drawCircle({ x: MARGIN + 4, y: y - size * 0.62, size: 1.3, color: accent })
    text(value, { size, x: MARGIN + 12, gap: 1.5 })
  }

  text(profile.name, { font: bold, size: 22, gap: 2 })
  text(experience[0].role, { size: 11.5, color: muted, gap: 6 })
  text(`${profile.phone}   |   ${profile.email}   |   ${profile.linkedin}`, { size: 9.5, color: ink, gap: 4 })

  heading('Professional Summary')
  text(profile.summary, { size: 9.5 })

  heading('Professional Experience')
  for (const job of experience) {
    ensure(30)
    rightText(job.location)
    text(job.company, { font: bold, size: 11 })
    rightText(`${job.start} – ${job.end}`)
    text(job.role, { font: italic, size: 10, gap: 4 })
    job.responsibilities.forEach(bullet)
  }

  const ai = skillCategories.find((c) => c.id === 'ai-digital')
  if (ai) {
    heading('AI & Digital Skills')
    text(ai.skills.join(' · '), { size: 9.5 })
  }

  heading('Technical Skills')
  for (const c of skillCategories.filter((c) => c.id !== 'ai-digital')) {
    ensure(14)
    page.drawText(`${c.label}:`, { x: MARGIN, y: y - 9.5, size: 9.5, font: bold, color: ink })
    text(c.skills.join(', '), { size: 9.5, x: MARGIN + 100, gap: 1 })
  }

  heading('Projects')
  projects.forEach((p, i) => {
    ensure(30)
    text(`${i + 1}. ${p.title}`, { font: bold, size: 10.5, gap: 3 })
    p.details.forEach(bullet)
    y -= 5
  })

  heading('Education')
  for (const e of education) {
    ensure(30)
    rightText(e.period)
    text(`${e.institution}, ${e.location}`, { font: bold, size: 10.5 })
    text(e.qualification, { size: 9.5, gap: 6 })
  }

  const bytes = await doc.save()
  return new Response(Buffer.from(bytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="K-Om-Kumar-Resume.pdf"',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

import { useRef, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { HeroImage, TimelineEntry } from '../data/siteContent'
import { contact, heroImages } from '../data/siteContent'

type HomeCasebookProps = {
  timelineEntries: TimelineEntry[]
  onReplayIntro?: () => void
}

export function HomeCasebook({
  timelineEntries,
  onReplayIntro,
}: HomeCasebookProps) {
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [showCopyToast, setShowCopyToast] = useState(false)
  const copyToastTimer = useRef<number | null>(null)
  const trackRecord = timelineEntries.filter((entry) =>
    ['Pitalia Capital', 'Bank of America', 'Futures First'].includes(entry.organisation),
  )

  const copyEmail = () => {
    if (copyToastTimer.current) {
      window.clearTimeout(copyToastTimer.current)
    }
    navigator.clipboard?.writeText(contact.email).then(
      () => setShowCopyToast(true),
      () => setShowCopyToast(true),
    )
    copyToastTimer.current = window.setTimeout(() => setShowCopyToast(false), 1800)
  }

  return (
    <>
      <section id="home" className="section-fade casebook-hero border-b border-border">
        <div className="report-shell py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_410px] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="section-label">Akshay Singh Casebook</p>
                {onReplayIntro ? (
                  <button type="button" onClick={onReplayIntro} className="text-xs font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold">
                    Replay Intro
                  </button>
                ) : null}
              </div>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted">
                <span>Markets Profile Note</span>
                <span className="text-gold">|</span>
                <span>Risk Analytics</span>
                <span className="text-gold">|</span>
                <span>Portfolio Intelligence</span>
                <span className="text-gold">|</span>
                <span>Updated 2026</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {contact.phone ? (
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 rounded border border-border bg-white/80 px-3 py-1.5 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold"
                  >
                    <span aria-hidden="true">📞</span>
                    <span>{contact.phone}</span>
                  </a>
                ) : null}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded border border-border bg-white/80 text-navy transition hover:border-gold hover:text-gold"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm-1.34 2h2.67V19H5.6v-8.5Zm4.36 0h2.56v1.17h.04c.36-.67 1.24-1.37 2.56-1.37 2.73 0 3.24 1.8 3.24 4.13V19H15.7v-3.99c0-.95-.02-2.18-1.33-2.18-1.33 0-1.54 1.04-1.54 2.11V19H9.96v-8.5Z" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-9 w-9 items-center justify-center rounded border border-border bg-white/80 text-navy transition hover:border-gold hover:text-gold"
                  aria-label="Copy work email"
                  title="Copy email"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </button>
                {showCopyToast ? <p className="copy-toast">Work email copied to clipboard</p> : null}
              </div>
              <h1 className="casebook-title mt-6 max-w-3xl text-[4.4rem] leading-[0.9] text-navy md:text-[6.8rem]">
                Akshay Singh Casebook
              </h1>
              <p className="mt-4 text-lg text-gold md:text-xl">
                Risk Analytics · Trading Intelligence · Finance Automation
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink">
                Capital markets professional with 6+ years of experience across market risk,
                portfolio analytics, derivatives, trading, capital markets, financial markets,
                AI & automation, business analysis and advisory. I bridge quantitative risk,
                trading intelligence and automation to solve complex financial problems, from
                market and credit risk to portfolio analytics, financing optimization and workflow
                design.
              </p>
              <div className="analyst-focus mt-6">
                <p className="mini-label">Analyst Focus</p>
                <p className="mt-2 text-sm leading-6 text-body">
                  Translating desk activity, exposures and market context into decision-ready
                  analysis across risk, reporting and automated workflow design.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#experience" className="primary-button">
                  View Experience
                </a>
                <a href="#projects" className="secondary-button">
                  View Projects
                </a>
                <a href={contact.cvPath} className="secondary-button">
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3">
              <MediaTile image={heroImages[1]} className="col-span-8 h-44 md:h-52" imgClassName="object-contain bg-section p-3" failedImages={failedImages} setFailedImages={setFailedImages} />
              <MediaTile image={heroImages[0]} className="col-span-4 h-44 md:h-52" failedImages={failedImages} setFailedImages={setFailedImages} />
              <div className="coverage-panel col-span-12">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <p className="section-label">Coverage Panel</p>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
                    Desk analyst view
                  </span>
                </div>
                {[
                  ['Asset Classes', 'Rates, FX, commodities, derivatives'],
                  ['Risk Lens', 'VaR, SVaR, stress, RWA, limits'],
                  ['Systems Lens', 'Python, VBA, AI workflows, dashboards'],
                  ['Output Type', 'Commentary, controls, reporting, automation'],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[120px_1fr] border-b border-border px-4 py-3 last:border-b-0">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-gold">{label}</p>
                    <p className="text-sm font-semibold text-navy">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="navy-quote mt-10">
            <p>
              "I work at the intersection of markets, risk and systems, translating trading
              activity, exposures and portfolio data into decision-ready analysis."
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-page">
        <div className="report-shell py-10">
          <div className="ornament-heading">
            <span />
            <p>Institutional Track Record</p>
            <span />
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {trackRecord.map((entry) => (
              <article key={entry.organisation} className="report-card p-6 text-center">
                <p className="font-serif text-2xl font-semibold text-navy">{entry.organisation}</p>
                <p className="mt-3 text-sm leading-6 text-body">{entry.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <a href="#experience" className="secondary-button">
              View full track record
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-8 text-white">
        <div className="mx-auto grid max-w-[1180px] gap-6 border border-gold/70 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <p className="max-w-3xl font-serif text-2xl leading-snug md:text-3xl">
            Open to roles across market risk, trading analytics, portfolio analytics, capital
            markets consulting and finance automation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={contact.cvPath} className="dark-button">
              Download CV
            </a>
            <a href="#contact" className="dark-button">
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

type MediaTileProps = {
  image: HeroImage
  className: string
  imgClassName?: string
  failedImages: string[]
  setFailedImages: Dispatch<SetStateAction<string[]>>
}

function MediaTile({ image, className, imgClassName, failedImages, setFailedImages }: MediaTileProps) {
  const failed = failedImages.includes(image.src)

  if (failed) {
    return <div className={`hero-fallback ${className}`} />
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      onError={() => setFailedImages((items) => [...items, image.src])}
      className={`w-full rounded border border-border object-cover ${imgClassName ?? ''} ${className}`}
    />
  )
}

import { useState } from 'react'
import type { TimelineEntry } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

type ExperienceTimelineProps = {
  entries: TimelineEntry[]
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="section-fade min-h-[calc(100vh-72px)] border-b border-border bg-page">
      <div className="report-shell py-10 md:py-14">
        <SectionHeading
          label="Institutional Track Record"
          title="Experience, education and strategic project timeline"
          description="A complete journey across institutional roles, MBA consulting exposure, education and market-focused analytical development."
        />
        <div className="relative mt-10 space-y-5">
          <span className="timeline-thread absolute left-[56px] top-2 hidden h-[calc(100%-16px)] w-[6px] lg:block" />
          {entries.map((entry, index) => (
            <article
              key={`${entry.organisation}-${entry.title}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`timeline-card report-card grid gap-0 overflow-hidden transition lg:grid-cols-[120px_190px_1fr] ${
                activeIndex === index ? 'border-gold shadow-lift' : ''
              }`}
            >
              <div className="chronology-rail relative border-b border-border bg-page p-6 lg:border-b-0 lg:border-r">
                <span className={`absolute left-[52px] top-[32px] hidden h-5 w-5 -translate-x-1/2 rounded-full border-2 lg:block ${activeIndex === index ? 'border-gold bg-gold/30' : 'border-navy bg-white'}`} />
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">Sequence</p>
                <p className={`font-serif text-4xl font-semibold ${activeIndex === index ? 'text-gold' : 'text-navy'}`}>
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>
              <div className="border-b border-border p-6 lg:border-b-0 lg:border-r">
                <p className="mini-label">Desk / Programme</p>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">
                  {entry.dateRange}
                </p>
                {entry.location ? <p className="mt-2 text-sm text-muted">{entry.location}</p> : null}
                {entry.logo ? (
                  <div className="mt-3 flex h-14 items-center rounded border border-border bg-white px-3">
                    <img
                      src={entry.logo}
                      alt={entry.organisation}
                      className={`max-h-10 w-full object-contain ${entry.logoClassName ?? ''}`}
                    />
                  </div>
                ) : null}
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                  {entry.organisation}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-navy">{entry.title}</h3>
                <p className="mt-3 text-base leading-7 text-body">{entry.summary}</p>
                <p className="mini-label mt-5">Outputs</p>
                <ul className="mt-4 space-y-2 text-base leading-7 text-body">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="border-l-2 border-border pl-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
                {entry.tags ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    <p className="mini-label w-full">Coverage</p>
                    {entry.tags.map((tag) => (
                      <span key={tag} className="report-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                {entry.subSections?.length ? (
                  <div className="mt-5 border-t border-border pt-4">
                    <div className="space-y-4">
                      {entry.subSections.map((section) => (
                        <details key={section.title} className="rounded border border-border bg-page p-3" open>
                          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                            {section.title}
                          </summary>
                          <div className="mt-3 space-y-3">
                            {section.items.map((item) => (
                              <article key={item.title} className="rounded border border-border bg-white p-3">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                  <p className="text-sm font-semibold text-navy">{item.title}</p>
                                  {item.year ? (
                                    <span className="rounded border border-border px-2 py-0.5 text-[0.7rem] font-semibold text-muted">
                                      {item.year}
                                    </span>
                                  ) : null}
                                  {item.logo ? (
                                    <div className="ml-auto flex h-10 w-24 items-center justify-center rounded border border-border bg-page px-2">
                                      <img
                                        src={item.logo}
                                        alt={item.title}
                                        className="max-h-7 w-full object-contain"
                                        loading="lazy"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                                <p className="mt-2 text-sm leading-6 text-body">{item.summary}</p>
                                <ul className="mt-2 space-y-1.5 text-sm leading-6 text-body">
                                  {item.outputs.map((output) => (
                                    <li key={output} className="border-l-2 border-border pl-3">
                                      {output}
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {item.coverage.map((tag) => (
                                    <span key={tag} className="report-chip">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </article>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

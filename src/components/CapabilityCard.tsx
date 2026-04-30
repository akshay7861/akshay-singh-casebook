import type { Capability } from '../data/siteContent'

type CapabilityCardProps = {
  capability: Capability
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <article className="report-card report-card-hover border-t-4 border-t-gold p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue text-sm font-bold text-navy">
          {capability.initials}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            {capability.label}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{capability.title}</h3>
        </div>
      </div>
      <p className="mt-3 text-base leading-7 text-body">{capability.description}</p>
    </article>
  )
}

import { marketRoomProcess } from '../data/siteContent'
import { ProcessDiagram } from './ProcessDiagram'

type MarketRoomSectionProps = {
  features: string[]
}

export function MarketRoomSection({ features }: MarketRoomSectionProps) {
  return (
    <section id="market-room" className="border-b border-border bg-navy text-white">
      <div className="report-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              07 / Market Room
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Market Room</h2>
            <p className="mt-4 text-xl font-semibold text-white/90">
              AI market intelligence platform built for structured market commentary.
            </p>
            <p className="mt-6 text-base leading-7 text-white/75">
              Market Room is designed to simulate a structured market desk. Specialist agents
              across macro, rates, FX, commodities, equities and risk sentiment monitor live data,
              headlines and memory to generate commentary, debate catalysts and track evolving
              theses.
            </p>
          </div>
          <div>
            <ProcessDiagram steps={marketRoomProcess} variant="dark" />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="border border-white/15 bg-white/5 p-4 text-base font-semibold text-white/90"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { capabilityMixData } from '../data/chartData'

const tearSheetRows = [
  ['Coverage', 'Rates | FX | Commodities | Derivatives'],
  ['Core Strength', 'Risk, analytics, reporting and automation across trading portfolios'],
  ['Tools', 'Python | VBA | Bloomberg | React | AI'],
  ['Track Record', 'Market risk, portfolio attribution, financing cost analysis and T+1 controls'],
]

export function TearSheetCard() {
  return (
    <aside className="report-card border-t-4 border-t-gold p-6 md:p-7">
      <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="section-label">Analyst Profile</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">Tear Sheet</h2>
        </div>
        <span className="border border-border bg-blue px-3 py-1 text-xs font-semibold text-navy">
          Profile View
        </span>
      </div>

      <dl className="mt-2 divide-y divide-border">
        {tearSheetRows.map(([label, value]) => (
          <div key={label} className="grid gap-2 py-4 sm:grid-cols-[130px_1fr]">
            <dt className="text-sm font-semibold text-muted">{label}</dt>
            <dd className="text-sm font-semibold leading-6 text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 border border-border bg-page p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          Capability Mix
        </p>
        <div className="mt-4 space-y-3">
          {capabilityMixData.map((item) => (
            <div key={item.name}>
              <div className="mb-1 flex justify-between gap-3 text-xs font-semibold text-body">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2 bg-border">
                <div className="h-2 bg-navy" style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

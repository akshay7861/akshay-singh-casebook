import type { CompanyWordmark } from '../data/siteContent'

type CredibilityStripProps = {
  companies: CompanyWordmark[]
}

export function CredibilityStrip({ companies }: CredibilityStripProps) {
  return (
    <section className="section-fade border-b border-border bg-page">
      <div className="report-shell py-8">
        <div className="report-card research-panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <p className="section-label">Institutions Covered</p>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
              Trusted Experience | Institutional Standards
            </p>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            {companies.map((company) => (
              <div key={company.name} className="institution-card border border-border bg-white px-4 py-4 transition hover:border-gold hover:shadow-card">
                {company.logo ? (
                  <div className="flex h-16 items-center justify-center border-b border-border pb-3">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={`max-h-12 w-full object-contain ${company.logoClassName ?? ''}`}
                    />
                  </div>
                ) : null}
                <p className="mt-3 font-serif text-lg font-semibold leading-tight text-ink">{company.name}</p>
                <p className="mt-1 text-sm text-muted">{company.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

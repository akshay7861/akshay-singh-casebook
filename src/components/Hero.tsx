import { TearSheetCard } from './TearSheetCard'

type HeroProps = {
  cvHref: string
}

export function Hero({ cvHref }: HeroProps) {
  return (
    <section id="markets" className="border-b border-border bg-page">
      <div className="report-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
          <div>
            <div className="mb-8 inline-flex border-y border-border py-3 pr-6 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              Capital Markets Portfolio · Risk Analytics · Trading Intelligence
            </div>
            <p className="section-label">01 / Profile Note</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.98] text-ink md:text-7xl">
              Akshay Singh
            </h1>
            <p className="mt-4 text-xl font-semibold text-navy">
              Capital Markets | Risk Analytics | Trading Intelligence
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-body">
              Capital markets professional with around 6 years of experience across market risk,
              derivatives, trading analytics, portfolio reporting and finance automation, with
              experience across Bank of America, Pitalia Capital and Futures First.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              A focused portfolio of work across market risk, derivatives analytics, portfolio
              reporting and finance automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="primary-button">
                View Projects
              </a>
              <a href={cvHref} className="secondary-button">
                Download CV
              </a>
              <a href="#contact" className="secondary-button">
                Contact
              </a>
            </div>
          </div>
          <TearSheetCard />
        </div>
      </div>
    </section>
  )
}

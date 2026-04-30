import { ReportPanel } from './ReportPanel'
import { SectionHeading } from './SectionHeading'

export function FeaturedRiskReport() {
  return (
    <section className="border-b border-border bg-section">
      <div className="report-shell grid gap-10 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <SectionHeading
            label="06 / Featured Case Study"
            title="Featured Work - Portfolio Risk Report Excerpt"
            description="A portfolio review-style excerpt showing how risk and portfolio reporting can be structured for decision-useful management commentary."
          />
          <div className="report-card mt-8 border-l-4 border-l-gold p-6">
            <p className="text-base leading-7 text-body">
              This illustrative report excerpt shows how portfolio data can be translated into
              management-ready analysis. The focus is not on presenting confidential trading data,
              but on demonstrating the structure of risk commentary: attribution, exposure
              composition, financing impact and decision-useful reporting.
            </p>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Reporting emphasis
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-body">
              <li>Attribution by portfolio driver and explanatory source.</li>
              <li>Exposure composition across asset classes and risk themes.</li>
              <li>Clear commentary that connects numbers to portfolio decisions.</li>
            </ul>
          </div>
        </div>
        <ReportPanel />
      </div>
    </section>
  )
}

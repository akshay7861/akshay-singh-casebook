type CoverageStripProps = {
  items: string[]
}

export function CoverageStrip({ items }: CoverageStripProps) {
  return (
    <section className="border-b border-border bg-page">
      <div className="report-shell py-8">
        <div className="report-card p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="section-label">02 / Coverage Universe</p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="report-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

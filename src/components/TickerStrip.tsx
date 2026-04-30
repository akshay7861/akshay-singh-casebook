type TickerStripProps = {
  tags: string[]
}

export function TickerStrip({ tags }: TickerStripProps) {
  return (
    <section aria-label="Market capability tags" className="border-b border-amber/60 bg-shell">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-1 px-3 py-1.5 md:px-4">
        <span className="rounded-sm bg-amber px-2 py-1 font-mono text-[11px] font-semibold uppercase text-navy">
          STATIC PROFILE MONITOR
        </span>
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-amber/50 bg-chrome px-2 py-1 font-mono text-[11px] uppercase text-paper"
          >
            {tag}
          </span>
        ))}
        <span className="rounded-sm border border-cyan/60 px-2 py-1 font-mono text-[11px] uppercase text-cyan">
          NOT LIVE DATA
        </span>
      </div>
    </section>
  )
}

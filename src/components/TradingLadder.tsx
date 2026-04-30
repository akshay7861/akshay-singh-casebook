import { ladderRows } from '../data/tradingIntroData'

type TradingLadderProps = {
  currentPrice: number
  highlightedPrice: number
  disabled: boolean
  onTrade: (side: 'buy' | 'sell') => void
}

export function TradingLadder({
  currentPrice,
  highlightedPrice,
  disabled,
  onTrade,
}: TradingLadderProps) {
  return (
    <div className="rounded border border-border bg-white p-3">
      <div className="mb-3 flex items-center justify-between text-xs text-body">
        <p className="font-semibold text-navy">DOM Ladder</p>
        <p className="rounded border border-border px-2 py-0.5">Simulated</p>
      </div>
      <div className="grid grid-cols-3 border border-border text-xs uppercase tracking-[0.08em] text-muted">
        <p className="border-r border-border px-2 py-1">Bid Size</p>
        <p className="border-r border-border px-2 py-1 text-center">Price</p>
        <p className="px-2 py-1 text-right">Ask Size</p>
      </div>
      <div className="max-h-[272px] overflow-hidden border-x border-b border-border">
        {ladderRows.map((row) => {
          const active = Math.abs(row.price - Number(highlightedPrice.toFixed(2))) < 0.001
          return (
            <div
              key={row.price}
              className={`grid grid-cols-3 border-b border-navy-soft/50 text-sm ${
                active ? 'bg-slate-300 text-navy' : 'text-ink'
              }`}
            >
              <p className="border-r border-border px-2 py-1">{row.bidSize > 0 ? row.bidSize : ''}</p>
              <p className="border-r border-border px-2 py-1 text-center font-semibold">{row.price.toFixed(2)}</p>
              <p className="px-2 py-1 text-right">{row.askSize > 0 ? row.askSize : ''}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-3 rounded border border-border bg-page px-3 py-2 text-xs text-body">
        Last traded: <span className="font-semibold text-navy">{currentPrice.toFixed(2)}</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          disabled={disabled}
          onClick={() => onTrade('buy')}
          className="border border-emerald-700/80 bg-emerald-500/35 px-3 py-2 text-sm font-semibold uppercase text-black transition hover:bg-emerald-500/45 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Home
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={() => onTrade('sell')}
          className="border border-rose-700/80 bg-rose-500/35 px-3 py-2 text-sm font-semibold uppercase text-black transition hover:bg-rose-500/45 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-rose-400"
        >
          Experience
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.08em] text-muted">
        <p>Home → Price Up</p>
        <p>Experience → Price Down</p>
      </div>
    </div>
  )
}

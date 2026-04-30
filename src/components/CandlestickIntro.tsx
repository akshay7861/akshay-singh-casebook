import { introInstrumentName, type Candle, type TradeSide } from '../data/tradingIntroData'

type CandlestickIntroProps = {
  candles: Candle[]
  side: TradeSide | null
  currentPrice: number
}

export function CandlestickIntro({ candles, side, currentPrice }: CandlestickIntroProps) {
  const highs = candles.map((candle) => candle.high)
  const lows = candles.map((candle) => candle.low)
  const maxPrice = Math.max(...highs) + 0.03
  const minPrice = Math.min(...lows) - 0.03
  const range = maxPrice - minPrice
  const width = 760
  const height = 300
  const candleWidth = Math.max(4, width / (candles.length * 1.45))
  const gap = width / candles.length

  const yForPrice = (price: number) => {
    const normalized = (maxPrice - price) / range
    return Math.max(0, Math.min(height, normalized * height))
  }

  return (
    <div className="overflow-hidden rounded border border-border bg-white p-3">
      <div className="mb-2 flex items-center justify-between text-xs text-body">
        <p className="font-semibold text-navy">{introInstrumentName}</p>
        <p>{side === null ? 'Awaiting entry' : 'Position active'}</p>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[220px] w-full md:h-[300px]">
        {[...Array(6)].map((_, index) => {
          const y = ((index + 1) / 7) * height
          return (
            <line
              key={`h-grid-${index}`}
              x1="0"
              x2={String(width)}
              y1={String(y)}
              y2={String(y)}
              stroke="#d7dee7"
              strokeWidth="1"
            />
          )
        })}
        {[...Array(11)].map((_, index) => {
          const x = ((index + 1) / 12) * width
          return (
            <line
              key={`v-grid-${index}`}
              x1={String(x)}
              x2={String(x)}
              y1="0"
              y2={String(height)}
              stroke="#e7ebf0"
              strokeWidth="1"
            />
          )
        })}
        <line
          x1="0"
          x2={String(width)}
          y1={String(yForPrice(currentPrice))}
          y2={String(yForPrice(currentPrice))}
          stroke="#4b5563"
          strokeWidth="1.8"
          strokeDasharray="5 4"
        />

        {candles.map((candle, index) => {
          const x = index * gap + gap * 0.5
          const openY = yForPrice(candle.open)
          const closeY = yForPrice(candle.close)
          const highY = yForPrice(candle.high)
          const lowY = yForPrice(candle.low)
          const up = candle.close >= candle.open
          const color = up ? '#22c55e' : '#ef4444'
          const top = Math.min(openY, closeY)
          const bodyHeight = Math.max(2, Math.abs(openY - closeY))

          return (
            <g key={`${candle.open}-${candle.close}-${index}`}>
              <line x1={String(x)} x2={String(x)} y1={String(highY)} y2={String(lowY)} stroke={color} strokeWidth="1.4" />
              <rect
                x={String(x - candleWidth / 2)}
                y={String(top)}
                width={String(candleWidth)}
                height={String(bodyHeight)}
                rx="0.8"
                fill={color}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

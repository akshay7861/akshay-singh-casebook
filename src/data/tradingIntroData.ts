export type TradeSide = 'buy' | 'sell'

export type Candle = {
  open: number
  high: number
  low: number
  close: number
}

export type LadderRow = {
  price: number
  bidSize: number
  askSize: number
}

export type WatchlistItem = {
  symbol: string
  name: string
  last: string
  change: string
}

export const introInstrumentName = 'Rates and Oil Derivatives'

export const INTRO_SESSION_KEY = 'aks-trading-intro-complete'

export const watchlist: WatchlistItem[] = [
  { symbol: 'AAPL', name: 'Apple', last: '188.37', change: '+1.24' },
  { symbol: 'MSFT', name: 'Microsoft', last: '415.92', change: '+2.88' },
  { symbol: 'GOOGL', name: 'Alphabet', last: '177.26', change: '+1.92' },
  { symbol: 'AMZN', name: 'Amazon', last: '182.51', change: '+1.75' },
  { symbol: 'TSLA', name: 'Tesla', last: '176.32', change: '-1.06' },
  { symbol: 'NVDA', name: 'NVIDIA', last: '924.18', change: '+12.30' },
  { symbol: 'META', name: 'Meta', last: '482.40', change: '+4.08' },
  { symbol: 'JPM', name: 'JPMorgan', last: '198.32', change: '+0.84' },
  { symbol: 'XOM', name: 'Exxon Mobil', last: '118.12', change: '-0.44' },
  { symbol: 'CVX', name: 'Chevron', last: '159.44', change: '-0.37' },
  { symbol: 'BRN', name: 'Brent Crude', last: '83.14', change: '-0.31' },
  { symbol: 'WTI', name: 'WTI Crude', last: '78.42', change: '-0.28' },
  { symbol: 'EURUSD', name: 'EUR/USD', last: '1.0832', change: '+0.0011' },
  { symbol: 'GBPUSD', name: 'GBP/USD', last: '1.2719', change: '+0.0009' },
  { symbol: 'NFLX', name: 'Netflix', last: '631.42', change: '+5.17' },
  { symbol: 'AMD', name: 'AMD', last: '168.75', change: '+2.21' },
  { symbol: 'ORCL', name: 'Oracle', last: '124.39', change: '+1.04' },
  { symbol: 'KO', name: 'Coca-Cola', last: '63.18', change: '+0.22' },
  { symbol: 'BAC', name: 'Bank of America', last: '39.66', change: '+0.19' },
]

export const basePrice = 104.25

export const baseCandles: Candle[] = [
  { open: 104.2, high: 104.26, low: 104.16, close: 104.18 },
  { open: 104.18, high: 104.22, low: 104.1, close: 104.13 },
  { open: 104.13, high: 104.18, low: 104.08, close: 104.11 },
  { open: 104.11, high: 104.21, low: 104.09, close: 104.19 },
  { open: 104.19, high: 104.25, low: 104.15, close: 104.24 },
  { open: 104.24, high: 104.28, low: 104.17, close: 104.19 },
  { open: 104.19, high: 104.23, low: 104.12, close: 104.14 },
  { open: 104.14, high: 104.2, low: 104.08, close: 104.18 },
  { open: 104.18, high: 104.27, low: 104.15, close: 104.23 },
  { open: 104.23, high: 104.3, low: 104.21, close: 104.27 },
  { open: 104.27, high: 104.29, low: 104.2, close: 104.22 },
  { open: 104.22, high: 104.24, low: 104.14, close: 104.16 },
  { open: 104.16, high: 104.2, low: 104.11, close: 104.12 },
  { open: 104.12, high: 104.17, low: 104.09, close: 104.15 },
  { open: 104.15, high: 104.21, low: 104.12, close: 104.2 },
  { open: 104.2, high: 104.26, low: 104.18, close: 104.24 },
  { open: 104.24, high: 104.31, low: 104.2, close: 104.29 },
  { open: 104.29, high: 104.33, low: 104.24, close: 104.26 },
  { open: 104.26, high: 104.3, low: 104.2, close: 104.22 },
  { open: 104.22, high: 104.25, low: 104.17, close: 104.18 },
  { open: 104.18, high: 104.22, low: 104.11, close: 104.14 },
  { open: 104.14, high: 104.19, low: 104.1, close: 104.12 },
  { open: 104.12, high: 104.2, low: 104.08, close: 104.18 },
  { open: 104.18, high: 104.24, low: 104.16, close: 104.22 },
  { open: 104.22, high: 104.28, low: 104.2, close: 104.25 },
  { open: 104.25, high: 104.31, low: 104.21, close: 104.29 },
  { open: 104.29, high: 104.35, low: 104.26, close: 104.32 },
  { open: 104.32, high: 104.34, low: 104.27, close: 104.3 },
  { open: 104.3, high: 104.31, low: 104.22, close: 104.25 },
  { open: 104.25, high: 104.26, low: 104.18, close: 104.2 },
  { open: 104.2, high: 104.23, low: 104.15, close: 104.17 },
  { open: 104.17, high: 104.22, low: 104.13, close: 104.2 },
  { open: 104.2, high: 104.27, low: 104.18, close: 104.24 },
  { open: 104.24, high: 104.28, low: 104.2, close: 104.23 },
  { open: 104.23, high: 104.26, low: 104.18, close: 104.21 },
  { open: 104.21, high: 104.25, low: 104.18, close: 104.22 },
  { open: 104.22, high: 104.26, low: 104.2, close: 104.24 },
  { open: 104.24, high: 104.29, low: 104.22, close: 104.25 },
  { open: 104.25, high: 104.3, low: 104.23, close: 104.26 },
  { open: 104.26, high: 104.28, low: 104.22, close: 104.25 },
]

export const buyCandles: Candle[] = [
  { open: 104.25, high: 104.3, low: 104.24, close: 104.28 },
  { open: 104.28, high: 104.32, low: 104.27, close: 104.3 },
  { open: 104.3, high: 104.35, low: 104.29, close: 104.33 },
  { open: 104.33, high: 104.37, low: 104.32, close: 104.35 },
]

export const sellCandles: Candle[] = [
  { open: 104.25, high: 104.26, low: 104.2, close: 104.22 },
  { open: 104.22, high: 104.24, low: 104.18, close: 104.2 },
  { open: 104.2, high: 104.21, low: 104.15, close: 104.17 },
  { open: 104.17, high: 104.18, low: 104.13, close: 104.14 },
]

export const buyPnlProgress = [250, 475, 760, 1000, 1250]
export const sellPnlProgress = [220, 430, 700, 980, 1240]

export const ladderRows: LadderRow[] = [
  { bidSize: 38, price: 104.37, askSize: 0 },
  { bidSize: 34, price: 104.36, askSize: 0 },
  { bidSize: 30, price: 104.35, askSize: 0 },
  { bidSize: 27, price: 104.34, askSize: 0 },
  { bidSize: 25, price: 104.33, askSize: 0 },
  { bidSize: 22, price: 104.32, askSize: 0 },
  { bidSize: 20, price: 104.31, askSize: 0 },
  { bidSize: 18, price: 104.3, askSize: 0 },
  { bidSize: 16, price: 104.29, askSize: 0 },
  { bidSize: 14, price: 104.28, askSize: 0 },
  { bidSize: 12, price: 104.27, askSize: 0 },
  { bidSize: 10, price: 104.26, askSize: 0 },
  { bidSize: 8, price: 104.25, askSize: 8 },
  { bidSize: 0, price: 104.24, askSize: 10 },
  { bidSize: 0, price: 104.23, askSize: 12 },
  { bidSize: 0, price: 104.22, askSize: 14 },
  { bidSize: 0, price: 104.21, askSize: 16 },
  { bidSize: 0, price: 104.2, askSize: 18 },
  { bidSize: 0, price: 104.19, askSize: 20 },
  { bidSize: 0, price: 104.18, askSize: 22 },
  { bidSize: 0, price: 104.17, askSize: 24 },
  { bidSize: 0, price: 104.16, askSize: 27 },
  { bidSize: 0, price: 104.15, askSize: 30 },
  { bidSize: 0, price: 104.14, askSize: 33 },
  { bidSize: 0, price: 104.13, askSize: 36 },
]

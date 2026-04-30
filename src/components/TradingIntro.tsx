import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  baseCandles,
  basePrice,
  buyCandles,
  buyPnlProgress,
  introInstrumentName,
  INTRO_SESSION_KEY,
  sellCandles,
  sellPnlProgress,
  watchlist,
  type Candle,
  type TradeSide,
} from '../data/tradingIntroData'
import { CandlestickIntro } from './CandlestickIntro'
import { IntroDisclaimer } from './IntroDisclaimer'
import { OrderStatusPanel } from './OrderStatusPanel'
import { TradingLadder } from './TradingLadder'

export type IntroPhase = 'opening' | 'ready' | 'filled' | 'moving' | 'transitioning' | 'complete'

type TradingIntroProps = {
  onComplete: (target: '#home' | '#experience') => void
  onSkip: () => void
}

type NewsCard = {
  title: string
  source: string
  url: string
}

const FRAME_DELAY_MS = 520
const END_DELAY_MS = 820

export function TradingIntro({ onComplete, onSkip }: TradingIntroProps) {
  const reducedMotion = useReducedMotion()
  const [introPhase, setIntroPhase] = useState<IntroPhase>('opening')
  const [selectedSide, setSelectedSide] = useState<TradeSide | null>(null)
  const [orderStatus, setOrderStatus] = useState<'Waiting' | 'Filled'>('Waiting')
  const [position, setPosition] = useState('Flat')
  const [currentPrice, setCurrentPrice] = useState(basePrice)
  const [pnl, setPnl] = useState(0)
  const [highlightedPrice, setHighlightedPrice] = useState(basePrice)
  const [displayedCandles, setDisplayedCandles] = useState<Candle[]>(baseCandles)
  const [message, setMessage] = useState('Take a position to enter the portfolio.')
  const [newsCards, setNewsCards] = useState<NewsCard[]>([])
  const [failedNewsImages, setFailedNewsImages] = useState<number[]>([])
  const timers = useRef<number[]>([])

  const canTrade = introPhase === 'ready'
  const watchlistRows = useMemo(() => watchlist.slice(0, 15), [])

  useEffect(() => {
    const delay = reducedMotion ? 120 : 450
    const readyTimer = window.setTimeout(() => setIntroPhase('ready'), delay)
    timers.current.push(readyTimer)
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer))
      timers.current = []
    }
  }, [reducedMotion])

  useEffect(() => {
    const fallbackNews: NewsCard[] = [
      {
        title: 'Oil steadies as supply guidance and demand outlook stay in focus.',
        source: 'Market Briefing',
        url: '#',
      },
      {
        title: 'US rates traders reassess policy path after mixed macro signals.',
        source: 'Rates Desk',
        url: '#',
      },
      {
        title: 'Mega-cap equities lead broad risk sentiment into month-end.',
        source: 'Equity Pulse',
        url: '#',
      },
    ]

    const loadNews = async () => {
      try {
        const response = await fetch(
          'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&limit=3&apikey=demo',
        )
        const data = await response.json()
        const feed = Array.isArray(data?.feed) ? data.feed : []
        const parsed = feed.slice(0, 3).map((item: Record<string, unknown>) => ({
          title: String(item.title ?? 'Financial markets update'),
          source: String(item.source ?? 'Financial News'),
          url: String(item.url ?? '#'),
        }))

        setNewsCards(parsed.length > 0 ? parsed : fallbackNews)
      } catch {
        setNewsCards(fallbackNews)
      }
    }

    void loadNews()
  }, [])

  const startTrade = (side: TradeSide) => {
    if (!canTrade) return

    setSelectedSide(side)
    setOrderStatus('Filled')
    setPosition(side === 'buy' ? 'Home route active' : 'Experience route active')
    setIntroPhase('filled')
    setMessage(
      side === 'buy'
        ? 'Home selected. Market moves higher.'
        : 'Experience selected. Market moves lower.',
    )

    const openTimer = window.setTimeout(() => {
      setIntroPhase('moving')
      runCandleSequence(side)
    }, reducedMotion ? 100 : 260)
    timers.current.push(openTimer)
  }

  const runCandleSequence = (side: TradeSide) => {
    const continuationCandles = side === 'buy' ? buyCandles : sellCandles
    const pnlProgress = side === 'buy' ? buyPnlProgress : sellPnlProgress
    const candlesToPrint = continuationCandles.slice(0, reducedMotion ? 3 : 4)
    candlesToPrint.forEach((candle, index) => {
      const timer = window.setTimeout(
        () => {
          setDisplayedCandles((current) => [...current.slice(-44), candle])
          setCurrentPrice(candle.close)
          setHighlightedPrice(candle.close)
          setPnl(pnlProgress[Math.min(index, pnlProgress.length - 1)])
        },
        (reducedMotion ? 140 : FRAME_DELAY_MS) * (index + 1),
      )
      timers.current.push(timer)
    })

    const finishedTimer = window.setTimeout(
      () => {
        setIntroPhase('transitioning')
        setMessage('Now view the portfolio behind the trade.')
        const endTimer = window.setTimeout(
          () => {
            setIntroPhase('complete')
            onComplete(side === 'buy' ? '#home' : '#experience')
          },
          reducedMotion ? 180 : END_DELAY_MS,
        )
        timers.current.push(endTimer)
      },
      (reducedMotion ? 140 : FRAME_DELAY_MS) * candlesToPrint.length + (reducedMotion ? 120 : 260),
    )
    timers.current.push(finishedTimer)
  }

  return (
    <AnimatePresence>
      {introPhase !== 'complete' ? (
        <motion.section
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-page px-3 py-3 text-ink md:px-5 md:py-5"
        >
          <div className="mx-auto max-w-[1300px]">
            <div className="rounded border border-border bg-page shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-navy">{introInstrumentName}</p>
                  <span className="rounded border border-emerald-500/60 bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
                    Simulation
                  </span>
                  <span className="rounded border border-border px-2 py-0.5 text-xs text-muted">
                    Portfolio Entry Demo
                  </span>
                </div>
                <p className="font-serif text-base font-bold tracking-wide text-navy md:text-lg">
                  Welcome to Akshay Singh&apos;s portfolio intro
                </p>
                <button
                  type="button"
                  onClick={onSkip}
                  className="rounded border border-border px-3 py-1 text-xs text-body transition hover:border-gold hover:text-navy focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  Skip Intro
                </button>
              </div>

              <div className="grid gap-3 p-3 md:p-4 lg:grid-cols-[250px_minmax(0,1fr)_290px]">
                <aside className="hidden rounded border border-border bg-page lg:block">
                  <div className="flex items-center justify-between border-b border-border px-3 py-2 text-xs text-body">
                    <p className="font-semibold text-navy">Instruments</p>
                    <span className="rounded border border-border px-2 py-0.5">Simulated</span>
                  </div>
                  <div className="max-h-[272px] overflow-auto px-2 py-2 text-sm">
                    {watchlistRows.map((item) => (
                      <div key={item.symbol} className="grid grid-cols-[60px_1fr_auto_auto] gap-2 border-b border-border px-2 py-1.5">
                        <p className="font-semibold text-navy">{item.symbol}</p>
                        <p className="truncate text-body">{item.name}</p>
                        <p className="text-ink">{item.last}</p>
                        <p className={item.change.startsWith('-') ? 'text-negative' : 'text-positive'}>
                          {item.change}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy">Financial News</p>
                    <div className="mt-2 space-y-2">
                      {newsCards.map((item, index) => (
                        <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="block rounded border border-border bg-white px-2 py-2 transition hover:border-gold">
                          {failedNewsImages.includes(index) ? (
                            <div className="h-16 rounded bg-section" />
                          ) : (
                            <img
                              src={`https://source.unsplash.com/420x220/?financial,markets,trading&sig=${toImageSeed(item.title, index)}`}
                              alt="Financial news visual"
                              onError={() =>
                                setFailedNewsImages((current) => [...new Set([...current, index])])
                              }
                              className="h-16 w-full rounded object-cover grayscale"
                            />
                          )}
                          <p className="line-clamp-2 text-xs font-semibold text-ink">{item.title}</p>
                          <p className="mt-1 text-[11px] text-muted">{item.source}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </aside>

                <div className="space-y-3">
                  <IntroDisclaimer />
                  <p className="text-sm text-body">Markets move on conviction. Portfolios are built on process.</p>
                  <CandlestickIntro
                    candles={displayedCandles}
                    side={selectedSide}
                    currentPrice={currentPrice}
                  />
                  <div className="space-y-3">
                    <OrderStatusPanel
                      orderStatus={orderStatus}
                      position={position}
                      currentPrice={currentPrice}
                      pnl={pnl}
                      message={message}
                    />
                    <div className="lg:hidden">
                      <TradingLadder
                        currentPrice={currentPrice}
                        highlightedPrice={highlightedPrice}
                        disabled={!canTrade}
                        onTrade={startTrade}
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden space-y-3 lg:block">
                  <TradingLadder
                    currentPrice={currentPrice}
                    highlightedPrice={highlightedPrice}
                    disabled={!canTrade}
                    onTrade={startTrade}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  )
}

export { INTRO_SESSION_KEY }

function toImageSeed(text: string, index: number): number {
  let hash = 0
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash) + index + 1
}

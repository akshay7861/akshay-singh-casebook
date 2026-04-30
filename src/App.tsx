import { useEffect } from 'react'
import { PortfolioPage } from './components/PortfolioPage'

function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section-fade'))
    if (sections.length === 0) return

    sections.forEach((section, index) => {
      section.style.setProperty('--stagger-delay', `${index * 35}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <PortfolioPage />
}

export default App

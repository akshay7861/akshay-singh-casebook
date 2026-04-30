import { ContactPage } from './ContactPage'
import { CredibilityStrip } from './CredibilityStrip'
import { CVPage } from './CVPage'
import { ExperienceTimeline } from './ExperienceTimeline'
import { Footer } from './Footer'
import { Header } from './Header'
import { HomeCasebook } from './HomeCasebook'
import { ImpactMetrics } from './ImpactMetrics'
import { ProfileSummary } from './ProfileSummary'
import { ProjectsPage } from './ProjectsPage'
import {
  companyWordmarks,
  contact,
  metrics,
  navItems,
  profileSummaryBlocks,
  projects,
  timelineEntries,
} from '../data/siteContent'

type PortfolioPageProps = {
  onReplayIntro?: () => void
}

export function PortfolioPage({ onReplayIntro }: PortfolioPageProps) {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Header items={navItems} />
      <main>
        <HomeCasebook timelineEntries={timelineEntries} onReplayIntro={onReplayIntro} />
        <CredibilityStrip companies={companyWordmarks} />
        <ImpactMetrics metrics={metrics} />
        <ProfileSummary blocks={profileSummaryBlocks} />
        <ExperienceTimeline entries={timelineEntries} />
        <ProjectsPage projects={projects} />
        <CVPage cvHref={contact.cvPath} />
        <ContactPage
          cvHref={contact.cvPath}
          email={contact.email}
          phone={contact.phone}
          linkedinHref={contact.linkedin}
        />
      </main>
      <Footer />
    </div>
  )
}

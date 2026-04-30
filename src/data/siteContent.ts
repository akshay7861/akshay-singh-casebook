export type NavItem = {
  label: string
  href: string
}

export type Metric = {
  value: string
  label: string
}

export type Capability = {
  initials: string
  label: string
  title: string
  description: string
}

export type Experience = {
  company: string
  role: string
  coverageTags: string[]
  bullets: string[]
}

export type Project = {
  category: string
  title: string
  thesis: string
  problem: string
  approach: string
  output: string
  tools: string[]
  href: string
  ctaLabel?: string
  external?: boolean
  visualIcon?: string
}

export type AnalyticalStackGroup = {
  title: string
  items: string[]
}

export type CompanyWordmark = {
  name: string
  sublabel: string
  logo?: string
  logoClassName?: string
}

export type HeroImage = {
  src: string
  alt: string
}

export type ProfileSummaryBlock = {
  title: string
  items: string[]
  iconPng?: string
  iconAlt?: string
}

export type TimelineEntry = {
  title: string
  organisation: string
  dateRange: string
  location?: string
  summary: string
  bullets: string[]
  tags?: string[]
  editable?: boolean
  logo?: string
  logoClassName?: string
  subSections?: Array<{
    title: string
    items: Array<{
      title: string
      year?: string
      logo?: string
      summary: string
      outputs: string[]
      coverage: string[]
    }>
  }>
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
]

export const profileSnapshot = {
  experience: '~6 years',
  coverage: 'Rates | FX | Commodities | Derivatives',
  strengths: 'Risk | Analytics | Automation',
  tools: 'Python | VBA | Bloomberg | React | AI',
  focus: 'Trading analytics + finance automation',
}

export const coverageUniverse = [
  'Market Risk',
  'Derivatives',
  'Rates',
  'FX',
  'Commodities',
  'Portfolio Analytics',
  'Trading Support',
  'Python Automation',
  'AI Market Intelligence',
]

export const metrics: Metric[] = [
  { value: '6+ Years', label: 'Experience' },
  { value: '$70Bn+', label: 'RWA exposure reviewed' },
  { value: '£2.4m', label: 'Portfolio attribution analysed' },
  { value: '£500k', label: 'Financing drag identified' },
  { value: '3,400+', label: 'Transaction checks supported' },
  { value: '1,500+', label: 'Instruments monitored' },
]

export const capabilities: Capability[] = [
  {
    initials: 'RG',
    label: 'RISK GOVERNANCE',
    title: 'Risk & Governance',
    description:
      'VaR, SVaR, stress metrics, exposure monitoring, RWA commentary and risk limit governance.',
  },
  {
    initials: 'TA',
    label: 'TRADING ANALYTICS',
    title: 'Trading & Derivatives Analytics',
    description:
      'Rates, commodities, futures, options, curve structure, DV01 and macro event analysis.',
  },
  {
    initials: 'PI',
    label: 'PORTFOLIO INTELLIGENCE',
    title: 'Portfolio Intelligence',
    description:
      'P&L attribution, exposure dashboards, financing cost monitoring and portfolio performance reporting.',
  },
  {
    initials: 'AI',
    label: 'AUTOMATION',
    title: 'Automation & AI Tools',
    description:
      'Python, VBA, scraping workflows, dashboards and AI-enabled market intelligence tools.',
  },
]

export const experiences: Experience[] = [
  {
    company: 'Pitalia Capital',
    role: 'Derivatives Research, Trade Support & Portfolio Analytics',
    coverageTags: ['Portfolio Analytics', 'Derivatives', 'Financing Cost', 'T+1 Controls'],
    bullets: [
      'Built portfolio reporting across P&L, exposures, financing costs and risk metrics.',
      'Analysed multi-asset derivatives performance and attribution.',
      'Supported T+1 trade, cash and position checks across thousands of transactions.',
    ],
  },
  {
    company: 'Bank of America',
    role: 'Market Risk & Portfolio Management',
    coverageTags: ['Market Risk', 'RWA', 'VaR/SVaR', 'Limits', 'Stakeholder Reporting'],
    bullets: [
      'Supported market risk reporting across a multi-asset trading business.',
      'Worked on RWA, VaR/SVaR, stress, sensitivities and exposure commentary.',
      'Improved reporting workflows using Excel, VBA and Python.',
    ],
  },
  {
    company: 'Futures First',
    role: 'Rates Trading & Market Analysis',
    coverageTags: ['Rates', 'Futures', 'DV01', 'Curve Analytics', 'Macro Events'],
    bullets: [
      'Analysed listed interest-rate derivatives and macro event impact.',
      'Monitored curve structure, DV01, position exposure and P&L drivers.',
      'Built rate-market trackers and supported execution discipline across futures markets.',
    ],
  },
]

export const projects: Project[] = [
  {
    category: 'AI MARKET INTELLIGENCE',
    title: 'Market Room',
    thesis: 'AI Market Intelligence Platform',
    problem:
      'Fragmented news, market data and analyst views make it hard to turn catalysts into structured market commentary.',
    approach:
      'Built specialist agents across macro, rates, FX, commodities, equities and risk sentiment to classify, debate and summarise market information.',
    output:
      'Structured commentary, market debate, thesis tracking and Ask Market Q&A workflows.',
    tools: ['React', 'Cloudflare', 'D1', 'OpenAI', 'Market Data APIs'],
    href: 'https://www.marketroom.uk/',
    ctaLabel: 'View project',
    external: true,
    visualIcon: 'https://img.icons8.com/fluency/96/bullish.png',
  },
  {
    category: 'RISK REPORTING',
    title: 'Portfolio Risk Report Generator',
    thesis: 'Risk Reporting and Exposure Commentary Workflow',
    problem:
      'Manual reporting can leave P&L, exposure and commentary fragmented across spreadsheets and desk packs.',
    approach:
      'Ingested desk-level P&L and exposure data to produce risk metrics, attribution views and report-ready charts.',
    output:
      'Illustrative risk report with attribution, exposure concentration and management-ready commentary.',
    tools: ['Python', 'Excel', 'pandas', 'openpyxl', 'matplotlib'],
    href: '/wip/portfolio-risk-report.html',
    ctaLabel: 'Work in progress',
    visualIcon: 'https://img.icons8.com/fluency/96/combo-chart.png',
  },
  {
    category: 'MARKET ANALYSIS POST',
    title: 'US Tariff Impact and Analysis',
    thesis: 'Macro impact framework published as a practical market analysis project.',
    problem:
      'Tariff announcements can quickly reshape commodity pricing, risk sentiment and cross-asset positioning.',
    approach:
      'Built a structured view on sector impact, rates implications and scenario-driven portfolio effects for decision support.',
    output:
      'Published project post outlining market transmission channels and practical risk monitoring takeaways.',
    tools: ['Macro Analysis', 'Portfolio Risk Framing', 'Scenario Mapping', 'LinkedIn Publication'],
    href: 'https://www.linkedin.com/posts/akshaysingh7861_us-tariff-impact-and-analysis-ugcPost-7434075527117713408-8zOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hC8sB5e5BVRfoQ55AyJyGpRJC5WX2mmI',
    ctaLabel: 'View project post',
    external: true,
    visualIcon: 'https://img.icons8.com/fluency/96/bullish.png',
  },
  {
    category: 'MARKET TECHNICAL FACTSHEET',
    title: 'Bitcoin Factsheet - 16 December',
    thesis: 'Technical market capability showcase through a structured Bitcoin factsheet post.',
    problem:
      'Technical market context is often scattered, making fast interpretation difficult for decision support.',
    approach:
      'Compiled key technical levels, price structure and contextual market cues into a concise factsheet format.',
    output:
      'Published market post demonstrating technical analysis workflow, chart communication and structured commentary.',
    tools: ['Technical Analysis', 'Market Structure', 'Chart Annotation', 'LinkedIn Publication'],
    href: 'https://www.linkedin.com/posts/akshaysingh7861_bitcoin-factsheet-16th-december-ugcPost-7424485807354347520-O1-s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hC8sB5e5BVRfoQ55AyJyGpRJC5WX2mmI',
    ctaLabel: 'View factsheet post',
    external: true,
    visualIcon: 'https://img.icons8.com/fluency/96/bitcoin.png',
  },
]

export const marketRoomFeatures = [
  'Specialist market agents',
  'Headline grounding',
  'Thesis tracking',
  'Forecast outcomes',
  'Ask Market Q&A',
  'Admin knowledge pipeline',
]

export const marketRoomProcess = [
  'Data + Headlines',
  'Specialist Agents',
  'Market Debate',
  'Thesis Tracking',
  'Commentary Output',
]

export const analyticalStack: AnalyticalStackGroup[] = [
  {
    title: 'Markets',
    items: ['Rates', 'FX', 'Commodities', 'Derivatives', 'Macro Catalysts'],
  },
  {
    title: 'Risk',
    items: ['VaR', 'SVaR', 'Stress', 'RWA', 'Limits', 'Sensitivities', 'T+1 Controls'],
  },
  {
    title: 'Systems',
    items: ['Python', 'VBA', 'React', 'Cloudflare', 'D1', 'Automation', 'AI Workflows'],
  },
  {
    title: 'Reporting',
    items: ['P&L Attribution', 'Exposure Dashboards', 'Financing Cost', 'Stakeholder Commentary'],
  },
]

export const companyWordmarks: CompanyWordmark[] = [
  {
    name: 'Pitalia Capital',
    sublabel: 'Portfolio risk, RWA and reporting analytics.',
    logo: '/logos/pitalia-capital.png',
    logoClassName: 'logo-pitalia',
  },
  {
    name: 'Bank of America',
    sublabel: 'Markets risk and regulatory reporting.',
    logo: '/logos/bank-of-america.png',
  },
  {
    name: 'Futures First',
    sublabel: 'Rates trading, surveillance and analytics.',
    logo: '/logos/futures-first.png',
  },
  {
    name: 'Alliance Manchester Business School',
    sublabel: 'MBA',
    logo: '/logos/ambs.gif',
  },
  {
    name: 'Birla Institute of Technology, Mesra',
    sublabel: 'Engineering',
    logo: '/logos/bit-mesra.png',
  },
]

export const heroImages: HeroImage[] = [
  {
    src: '/canary-wharf-cityline.jpg',
    alt: 'Canary Wharf city skyline in London',
  },
  {
    src: '/photos-trading-desk.png',
    alt: 'Trading desk and market analytics workstation',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    alt: 'Workspace with structured visual lines',
  },
]

export const profileSummaryBlocks: ProfileSummaryBlock[] = [
  {
    title: 'Markets',
    items: ['Equities', 'Commodities', 'Rates', 'FX', 'Derivatives', 'Financial Markets'],
    iconPng: 'https://img.icons8.com/ios-filled/100/1e3a5f/combo-chart--v1.png',
    iconAlt: 'Markets chart icon',
  },
  {
    title: 'Risk',
    items: ['Market Risk', 'Portfolio Analytics', 'VaR / SVaR', 'Stress', 'RWA', 'Controls'],
    iconPng: 'https://img.icons8.com/ios-filled/100/b91c1c/us-dollar-circled--v1.png',
    iconAlt: 'Risk dollar icon',
  },
  {
    title: 'Systems',
    items: ['Python', 'VBA', 'AI & Automation', 'Business Analysis', 'Advisory', 'Product / Workflow Thinking'],
    iconPng: 'https://img.icons8.com/ios-filled/100/1e3a5f/automation.png',
    iconAlt: 'Automation icon',
  },
]

export const timelineEntries: TimelineEntry[] = [
  {
    title: 'Derivatives Research, Trade Support & Portfolio Analytics',
    organisation: 'Pitalia Capital',
    dateRange: 'Jul 2025 - Dec 2025',
    summary:
      'Supported portfolio analytics, derivatives reporting, financing cost visibility and T+1 controls for a leveraged multi-asset portfolio.',
    bullets: experiences[0].bullets,
    tags: experiences[0].coverageTags,
    logo: '/logos/pitalia-capital.png',
    logoClassName: 'logo-pitalia',
  },
  {
    title: 'MBA',
    organisation: 'Alliance Manchester Business School',
    dateRange: 'Sep 2024 - Jul 2026',
    location: 'Manchester, UK',
    summary:
      'MBA focused on capital markets consultancy, market risk advisory, trading-led problem solving and financial markets exposure.',
    bullets: [
      'Delivered finance-led consulting work across market entry, commercial strategy, venture analysis and transformation projects.',
      'Applied capital markets thinking, analytical framing and stakeholder communication across client-facing MBA project work.',
      'Strengthened advisory-style problem solving through applied work spanning market risk, financial markets, business development and investment analysis.',
    ],
    tags: [
      'MBA',
      'Capital Markets Consultancy',
      'Market Risk Advisory',
      'Trading-Led Problem Solving',
      'Financial Markets',
      'Strategic Finance',
      'Consulting',
      'Business Development',
      'Market Entry',
      'Stakeholder Communication',
    ],
    logo: '/logos/ambs.gif',
    subSections: [
      {
        title: 'Consulting Projects',
        items: [
          {
            title: 'Vestergaard - U.S. Market Entry Strategy',
            logo: '/logos/vestergaard.png',
            summary:
              'Finance-led market-entry project assessing U.S. commercial viability, revenue potential and go-to-market pathways for treated residential screen solutions.',
            outputs: [
              'Built market prioritisation, customer demand and channel feasibility analysis to assess commercial viability across priority U.S. states.',
              'Supported revenue opportunity sizing, acquisition cost assumptions and phased entry recommendations for an OEM-first pilot strategy.',
            ],
            coverage: [
              'Market Entry',
              'Commercial Viability',
              'Revenue Opportunity',
              'Channel Strategy',
              'Go-to-Market',
              'Financial Analysis',
            ],
          },
          {
            title: 'The Vegetarian Society - Digital Consultancy Strategy',
            logo: '/logos/vegetarian-society.png',
            summary:
              'Finance-led strategy project to scale COOK! from a low-profile in-person service into a national digitally enabled vegetarian and vegan consultancy.',
            outputs: [
              'Assessed market demand, stakeholder needs, competitor alternatives and pricing options to shape a scalable digital consultancy model.',
              'Supported revenue projections, tiered package design and launch planning to move COOK! toward a sustainable national growth pathway.',
            ],
            coverage: [
              'Digital Strategy',
              'Business Model',
              'Pricing',
              'Revenue Growth',
              'Market Demand',
              'Stakeholder Needs',
            ],
          },
          {
            title: 'Carymor - Strategy / Market Analysis',
            logo: '/logos/carymor.png',
            summary:
              'Strategy project focused on market assessment, commercial positioning and growth recommendations for Carymor.',
            outputs: [
              'Analysed market context, customer needs and competitive positioning to identify practical growth opportunities.',
              'Developed recommendation-led growth priorities, execution considerations and next-step actions.',
            ],
            coverage: [
              'Strategy',
              'Market Analysis',
              'Commercial Positioning',
              'Growth Priorities',
              'Recommendations',
            ],
          },
        ],
      },
      {
        title: 'Investment & Finance Competitions',
        items: [
          {
            title: 'VCIC - Venture Capital Investment Competition',
            year: '2025',
            logo: '/logos/vcic.avif',
            summary:
              'Venture capital investment competition involving startup assessment, investment thesis development and investor-style recommendation.',
            outputs: [
              'Evaluated startup opportunity, market attractiveness, business model quality and investment risks under time pressure.',
              'Contributed to investment discussion, due diligence framing and recommendation development for a VC-style decision process.',
            ],
            coverage: [
              'Venture Capital',
              'Startup Evaluation',
              'Investment Thesis',
              'Due Diligence',
              'Market Assessment',
            ],
          },
          {
            title: 'Oxford Private Equity Competition - Finalist',
            year: '2025',
            logo: '/logos/oxford-pe.avif',
            summary:
              'Finalist in the Oxford Private Equity Competition, applying private equity-style analysis to assess investment opportunity, value creation levers and transaction rationale.',
            outputs: [
              'Supported investment evaluation through market analysis, business model assessment, valuation thinking and value-creation framing.',
              'Contributed to finalist presentation materials, investment recommendation and stakeholder-facing deal rationale.',
            ],
            coverage: [
              'Private Equity',
              'Finalist',
              'Investment Analysis',
              'Value Creation',
              'Valuation',
              'Deal Rationale',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Market Risk & Portfolio Management',
    organisation: 'Bank of America',
    dateRange: 'Jul 2022 - Jun 2024',
    summary:
      'Supported market risk reporting, RWA analysis, VaR/SVaR commentary, stress metrics and exposure monitoring across a multi-asset trading business.',
    bullets: experiences[1].bullets,
    tags: experiences[1].coverageTags,
    logo: '/logos/bank-of-america.png',
  },
  {
    title: 'Rates Trading & Market Analysis',
    organisation: 'Futures First',
    dateRange: 'Jul 2019 - Jun 2022',
    summary:
      'Worked on listed interest-rate derivatives, rates futures, curve analysis, macro event impact and execution/risk monitoring.',
    bullets: experiences[2].bullets,
    tags: experiences[2].coverageTags,
    logo: '/logos/futures-first.png',
  },
  {
    title: 'Bachelor of Engineering',
    organisation: 'Birla Institute of Technology, Mesra',
    dateRange: 'Jul 2015 - May 2019',
    summary:
      'Engineering foundation with quantitative, analytical and project-based problem-solving experience.',
    bullets: [
      'Engineering training with quantitative coursework, analytical projects and structured problem-solving exposure.',
    ],
    tags: ['Engineering', 'Quantitative', 'Problem Solving'],
    logo: '/logos/bit-mesra.png',
  },
]

export const contact = {
  email: 'akshaysinghwork@gmail.com',
  linkedin: 'https://linkedin.com/in/akshaysingh7861',
  phone: '+44 7767561673',
  cvPath: '/cv-akshay-singh-capital-markets.pdf',
}

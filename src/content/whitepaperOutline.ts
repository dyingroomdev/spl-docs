export type WhitepaperSection = {
  id: string
  title: string
  summary: string
  highlights: string[]
}

export type TokenMetric = {
  label: string
  value: string
}

export type TokenDistribution = {
  category: string
  allocation: string
  percent: number
  vesting: string
}

export const WHITEPAPER_META = {
  project: 'SPL Shield + TDL',
  version: '2.0',
  year: 2025,
  title: 'SPL Shield — The AI-Secured Future of Solana',
  description:
    'Reference outline for the SPL Shield v2 whitepaper, capturing AI-driven security, token utility, governance, and roadmap updates for 2025.',
}

export const WHITEPAPER_SECTIONS: WhitepaperSection[] = [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    summary:
      'SPL Shield v2 is an AI-powered security and analytics layer for Solana that protects investors, developers, and institutions from scams and exploits using the $TDL utility and governance token.',
    highlights: [
      'Version 2.0 consolidates AI risk intelligence, analytics, and governance into a unified security layer.',
      '$TDL powers all premium features, governance, staking, and access controls.',
      'Built to safeguard every participant in the Solana ecosystem from real-time threats.',
    ],
  },
  {
    id: 'introduction',
    title: 'Introduction',
    summary:
      'Solana has surpassed $10B total value locked and now faces sophisticated threats from malicious contracts, MEV exploits, and unverified projects. SPL Shield responds with an AI Risk Intelligence Network for real-time protection.',
    highlights: [
      'Addresses rapid Solana growth while mitigating the parallel rise in exploit attempts.',
      'AI-driven monitoring covers malicious contracts, MEV activity, and social vectors.',
      'Purpose-built to give institutions and communities continuous security telemetry.',
    ],
  },
  {
    id: 'problem',
    title: 'The Problem',
    summary:
      'Market participants face escalating risk from unaudited contracts, fragmented tooling, opaque teams, and AI-generated scams that overwhelm existing defenses.',
    highlights: [
      'Rug pulls and liquidity manipulation by unaudited projects.',
      'Fragmented tools lacking behavioral analytics.',
      'Opaque governance and unverifiable team trust.',
      'AI-generated scams increasing complexity.',
    ],
  },
  {
    id: 'solution',
    title: 'The SPL Shield Solution',
    summary:
      'SPL Shield delivers a multilayer solution with an AI risk engine, deep DeFi analytics, community defense tooling, and cross-chain intelligence to neutralize emerging threats.',
    highlights: [
      'AI-Powered Risk Engine: Detects MEV, flash-loan, and honeypot threats within 2 seconds.',
      'DeFi Analytics Core: Provides liquidity maps and token health scoring.',
      'Community Protection Suite: Bounties, Telegram/Discord alerts, and verified badges.',
      'Cross-Chain Intelligence Node: Extends coverage to EVM, Sui, and Aptos networks.',
    ],
  },
  {
    id: 'core-technical-methodology',
    title: 'Core Technical Methodology',
    summary:
      'ShieldScore v2 weights smart contract integrity, liquidity, sentiment, and AI heuristics while operating with sub-two-second detection latency on a modern microservice stack.',
    highlights: [
      'Smart Contract Health: 35% of the ShieldScore v2 weighting.',
      'Liquidity & Holder Integrity: 35% weighting with automated anomaly detection.',
      'Community Sentiment & AI Threat Heuristics: 30% combined weighting.',
      'Average Detection Latency: 1.8 seconds across monitored assets.',
      'Architecture: Rust Anchor programs, Python microservices, PostgreSQL, Redis, WebSocket APIs.',
    ],
  },
  {
    id: 'tdl-token-utility',
    title: 'TDL Token Utility',
    summary:
      '$TDL is the fuel for SPL Shield, unlocking governance, staking, incentive rewards, payments, and AI access credits across the platform.',
    highlights: [
      'Governance voting on protocol upgrades and security policies.',
      'Staking for advanced analytics access and revenue sharing.',
      'Rewards that incentivize community reporting and audit participation.',
      'Payments and AI access credits for enterprise integrations.',
    ],
  },
  {
    id: 'tokenomics-distribution',
    title: 'Tokenomics & Distribution',
    summary:
      'SPL Shield v2 introduces a 10B $TDL supply with a $0.002 presale price, $0.004 listing target, and balanced allocations that lock liquidity while funding growth.',
    highlights: [
      'Total Supply: 10,000,000,000 $TDL with a 12-month presale vesting schedule.',
      'Funding Targets: $400K soft cap and $500K hard cap to underwrite roadmap delivery.',
      'Distribution spans presale, liquidity, team, staking, marketing, and treasury cohorts.',
      'Listing Target doubles presale entry to $0.004 with DAO-managed treasury reserves.',
    ],
  },
  {
    id: 'ai-api-expansion',
    title: 'AI & API Expansion',
    summary:
      'Enterprise APIs and developer SDKs turn SPL Shield into an embedded security oracle for DEXs, wallets, and Solana-native applications.',
    highlights: [
      'Enterprise API: Live JSON risk scoring for exchanges, wallets, and institutions.',
      'Developer SDK: Toolkits for React, Python, and Solana integrations.',
      'Allows partners to surface ShieldScore analytics within their user experience.',
    ],
  },
  {
    id: 'governance-dao',
    title: 'Governance & DAO 2.0',
    summary:
      'Governance upgrades introduce a DAO 2.0 stack with multi-sig controls, quadratic voting, and an execution pipeline tied to on-chain staking.',
    highlights: [
      'Multi-Sig Treasury oversight with community-elected signers.',
      'Quadratic voting to balance whales and long-tail token holders.',
      'Stake-Vote-Execute workflow linking $TDL staking to proposal enactment.',
      'DAO dashboard for live governance, treasury analytics, and compliance tracking.',
    ],
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    summary:
      'End-to-end safeguards span smart contract audits, adversarial AI red teaming, and regulatory alignment without sacrificing decentralization.',
    highlights: [
      'Mandatory pre-launch smart contract audits and immutable deployment practices.',
      'AI red teaming to harden detection models against adversarial exploits.',
      'KYC-optional participation model respecting jurisdictional requirements.',
      'GDPR-compliant data design for institutional partners.',
    ],
  },
  {
    id: 'market-opportunity',
    title: 'Market Opportunity',
    summary:
      'SPL Shield positions itself as the Security Oracle of Solana, targeting a market grappling with $2.5B in annual losses amid 150% year-over-year growth.',
    highlights: [
      'Solana ecosystem growth exceeding +150% YoY in TVL and activity.',
      'Annual exploit losses estimated at $2.5B across chains.',
      'Security oracle positioning to become default infrastructure for builders.',
    ],
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    summary:
      'A 2025-focused roadmap accelerates ShieldScore v2, enterprise integrations, DAO tooling, and cross-chain threat intelligence ahead of autonomous AI scoring.',
    highlights: [
      'Q1 2025: Risk Engine v2 launch and $TDL presale.',
      'Q2 2025: Enterprise API alpha and partner onboarding.',
      'Q3 2025: DAO and staking dashboard release.',
      'Q4 2025: Cross-chain threat network expansion.',
      '2026+: Fully autonomous AI scoring and continuous model retraining.',
    ],
  },
  {
    id: 'team-advisory',
    title: 'Team & Advisory Board',
    summary:
      'The SPL Shield leadership stack spans protocol engineering, security research, operations, growth, and advisory talent to drive institutional adoption.',
    highlights: [
      'Founder/CEO guiding security vision and strategic partnerships.',
      'CTO overseeing protocol engineering and AI architecture.',
      'COO and CMO coordinating operations, go-to-market, and community growth.',
      'External advisors providing regulatory, exchange, and cyber defense expertise.',
    ],
  },
  {
    id: 'legal-disclaimer',
    title: 'Legal Disclaimer',
    summary:
      '$TDL is a utility token that grants access to platform services; it is not issued or promoted as a security.',
    highlights: [
      'Participation is contingent on local regulatory compliance.',
      'Whitepaper content remains subject to updates as the protocol evolves.',
      'No guarantees of financial returns are made or implied.',
    ],
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    summary:
      'SPL Shield v2 redefines Solana security through AI intelligence and community-driven governance, with $TDL as the catalyst for expansion.',
    highlights: [
      'Combines real-time threat detection with transparent tokenomics.',
      '$TDL aligns incentives between contributors, investors, and partners.',
      'Objective: become the default security backbone for the Solana ecosystem.',
    ],
  },
]

export const TOKEN_METRICS: TokenMetric[] = [
  { label: 'Whitepaper Version', value: '2.0 (2025)' },
  { label: 'Total Supply', value: '10,000,000,000 TDL' },
  { label: 'Presale Price', value: '$0.002 per TDL' },
  { label: 'Listing Target', value: '$0.004 per TDL' },
  { label: 'Soft Cap', value: '$400,000' },
  { label: 'Hard Cap', value: '$500,000' },
  { label: 'ShieldScore v2 Latency', value: '1.8 seconds average detection' },
  { label: 'AI Access Credits', value: '$TDL required for enterprise API usage' },
]

export const TOKEN_DISTRIBUTION: TokenDistribution[] = [
  {
    category: 'Presale',
    allocation: '25%',
    percent: 25,
    vesting: '12-month linear unlock.',
  },
  {
    category: 'Liquidity + CEX',
    allocation: '20%',
    percent: 20,
    vesting: '12-month lock aligned with exchange depth targets.',
  },
  {
    category: 'Team & Development',
    allocation: '20%',
    percent: 20,
    vesting: '12-month vesting with performance milestones.',
  },
  {
    category: 'Staking + Rewards',
    allocation: '15%',
    percent: 15,
    vesting: '48-month linear distribution for long-term incentives.',
  },
  {
    category: 'Marketing + Partnerships',
    allocation: '10%',
    percent: 10,
    vesting: '12-month lock with milestone-based releases.',
  },
  {
    category: 'Treasury + Ecosystem Growth',
    allocation: '10%',
    percent: 10,
    vesting: 'DAO-managed reserve for grants and expansion.',
  },
]

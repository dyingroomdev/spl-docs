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
    'Narrative outline for the SPL Shield v2 online whitepaper covering AI-driven security, $TDL economics, DAO upgrades, and the 2025+ roadmap.',
}

export const WHITEPAPER_SECTIONS: WhitepaperSection[] = [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    summary:
      'SPL Shield v2 is the first AI-powered security and analytics layer purpose-built for Solana, pairing real-time threat intelligence with the $TDL governance and utility token to create a trust fabric for investors, builders, and institutions.',
    highlights: [
      '$TDL (Dollar Token) unlocks access, staking, rewards, and governance.',
      'AI defenses focus on rug pulls, fraudulent contracts, and emerging DeFi exploits.',
      'Goal: make Solana the most secure, data-driven environment in decentralized finance.',
    ],
  },
  {
    id: 'introduction',
    title: 'Introduction',
    summary:
      'Solana’s TVL has climbed into the billions while malicious contracts, MEV exploiters, and unverifiable teams grow in parallel, demanding a machine-verified trust layer.',
    highlights: [
      'Malicious contract deployments and flash-rug patterns stress retail traders.',
      'MEV actors drain liquidity pools before threats can be flagged.',
      'Shield introduces an AI Risk Intelligence Network combining ML, monitoring, and DAO governance.',
    ],
  },
  {
    id: 'problem',
    title: 'The Problem',
    summary:
      'Solana participants operate without mandatory audits, cohesive analytics, or transparent team verification, while adversaries now weaponize AI to craft evasive scams.',
    highlights: [
      'Rug pulls and liquidity manipulation flourish across unaudited launches.',
      'Fragmented analytics provide snapshots instead of actionable insights.',
      'Communities cannot easily validate developer credibility or governance.',
      'AI-generated contracts bypass legacy detection systems.',
    ],
  },
  {
    id: 'solution',
    title: 'The SPL Shield Solution',
    summary:
      'SPL Shield introduces a four-layer defense fabric that pairs fast AI detection with transparent analytics, community tooling, and a roadmap to cross-chain intelligence.',
    highlights: [
      'AI-Powered Risk Engine finds MEV, wash trading, honeypots, and anomaly clusters in <2s.',
      'DeFi Analytics Core supplies liquidity heatmaps and holder integrity scoring.',
      'Community Protection Suite powers alerts, verification badges, and bounty programs.',
      'Cross-Chain Intelligence Network targets EVM, Sui, Aptos, and L2s starting 2026.',
    ],
  },
  {
    id: 'core-technical-methodology',
    title: 'Core Technical Methodology',
    summary:
      'ShieldScore v2 blends contract analysis, liquidity forensics, social signals, and AI heuristics to deliver hybrid risk scoring with ~1.8s average detection latency on a Rust + Python microservice stack.',
    highlights: [
      'Smart Contract Health: 35% weighting focused on vulns and mint authority risk.',
      'Liquidity & Holder Integrity: 35% weighting across locks, burns, and wallet flows.',
      'Community Sentiment: 15% weighting tracking developer activity and social metrics.',
      'AI Threat Heuristics: 15% weighting detecting predictive scam indicators.',
      'Architecture: Rust, Python microservices, PostgreSQL, Redis, WebSocket APIs.',
    ],
  },
  {
    id: 'tdl-token-utility',
    title: 'TDL Token Utility',
    summary:
      '$TDL fuels DAO governance, staking, rewards, and enterprise-grade AI access, aligning incentives across users, auditors, and institutional partners.',
    highlights: [
      'Governance: vote on upgrades, ShieldScore tuning, and treasury deployments.',
      'Staking: unlock premium analytics and higher-frequency API endpoints.',
      'Rewards: fund scam reporting, bounty programs, and vulnerability disclosures.',
      'Payments & AI Credits: settle audits, verifications, KYC, and ShieldScore API usage.',
    ],
  },
  {
    id: 'tokenomics-distribution',
    title: 'Tokenomics & Distribution',
    summary:
      'SPL Shield v2 introduces a 10B $TDL supply with balanced allocations, clear vesting, and funding targets designed to bootstrap liquidity while supporting long-term growth.',
    highlights: [
      'Total Supply: 10,000,000,000 $TDL with presale price $0.002 and listing target $0.004.',
      'Soft/Hard Cap: $400k – $500k to underwrite roadmap execution.',
      'Distribution spans presale, liquidity, team, staking, marketing, and treasury allocations with stated purposes.',
      'Vesting schedules range from 12-month locks to 48-month linear staking emissions.',
    ],
  },
  {
    id: 'ai-api-expansion',
    title: 'AI & API Expansion',
    summary:
      'Enterprise APIs and developer SDKs extend ShieldScore into exchanges, wallets, launchpads, and custom dashboards, each gated by tiered $TDL access.',
    highlights: [
      'Enterprise API: JSON risk feeds for DEXs, wallets, launchpads, and institutional partners.',
      'Tiered API keys require $TDL allocations or staking commitments.',
      'Developer SDKs available for React, Python, and Solana to accelerate integrations.',
      'Extendable modules enable partners to craft custom analytics dashboards.',
    ],
  },
  {
    id: 'governance-dao',
    title: 'Governance & DAO 2.0',
    summary:
      'DAO 2.0 introduces multi-sig safeguards, quadratic voting, and a stake-discuss-vote-execute pipeline with full transparency over treasury flows and model updates.',
    highlights: [
      'Multi-sig treasury with external auditors overseeing releases.',
      'Quadratic voting mitigates whale dominance in sensitive proposals.',
      'Stake → discuss → vote → execute workflow enforces accountable governance.',
      'DAO dashboard shares budget usage, model releases, and compliance signals.',
    ],
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    summary:
      'Security remains anchored in mandatory audits, AI-driven penetration tests, immutable contract principles, and GDPR-aligned architecture with optional KYC flows.',
    highlights: [
      'Mandatory audits precede launches and upgrades.',
      'Continuous AI-assisted penetration testing hardens the stack.',
      'KYC-optional contribution paths respect user privacy while enabling compliance.',
      'Immutable contract discipline plus GDPR-aligned off-chain data storage.',
    ],
  },
  {
    id: 'market-opportunity',
    title: 'Market Opportunity',
    summary:
      'Solana’s projected 150% YoY DeFi growth and the $2.5B in annual exploit losses present a massive opportunity for a dedicated security oracle.',
    highlights: [
      '+150% YoY growth in Solana DeFi activity.',
      '$2.5B+ in yearly DeFi scam losses waiting to be mitigated.',
      'SPL Shield positions itself as the Security Oracle for Solana and broader Web3.',
    ],
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    summary:
      'A 2025 roadmap accelerates ShieldScore v2, enterprise API adoption, staking + DAO dashboards, and cross-chain threat intelligence ahead of autonomous AI upgrades.',
    highlights: [
      'Q1 2025: Risk Engine v2 + presale launch.',
      'Q2 2025: Enterprise API alpha.',
      'Q3 2025: Staking + DAO governance dashboard.',
      'Q4 2025: Cross-chain threat network.',
      '2026+: Autonomous AI model upgrades.',
    ],
  },
  {
    id: 'future-strategy',
    title: 'Future Strategic Development',
    summary:
      'Post-2025, SPL Shield targets three flagship initiatives: a multimodel intelligence layer, a security-first blockchain, and a transition to a London PLC to cement institutional trust.',
    highlights: [
      'LLM Intelligence Layer: predictive analytics, enterprise SDKs, and institutional dashboards.',
      'Native Security Blockchain: modular, interoperable chain with real-time observability and compliance.',
      'PLC Transition (Jan 2026): regulatory alignment, investor trust, and European fintech access.',
      'Long-Term Vision: unified AI risk infrastructure and a globally regulated, enterprise-grade brand.',
    ],
  },
  {
    id: 'team-advisory',
    title: 'Team & Advisory Board',
    summary:
      'Leadership covers protocol engineering, security research, GTM execution, and advisor relationships with auditors, risk engineers, and partner launchpads.',
    highlights: [
      'Founder/CEO, CTO, COO, and CMO steward strategy, product, and growth.',
      'Advisors span auditors, risk engineers, and launchpad executives.',
      'Goal: institutional-grade credibility for exchanges, wallets, and regulators.',
    ],
  },
  {
    id: 'legal-disclaimer',
    title: 'Legal Disclaimer',
    summary:
      '$TDL is a utility token; participation remains jurisdiction-dependent and mechanisms may evolve to satisfy global compliance.',
    highlights: [
      'TDL is not sold or presented as a security.',
      'Participation must respect local regulations and may require adjustments.',
      'Mechanisms can evolve for compliance; no financial guarantees are implied.',
    ],
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    summary:
      'SPL Shield v2, powered by $TDL, aims to become the global standard for decentralized risk intelligence by unifying AI detection, token incentives, and transparent governance.',
    highlights: [
      'AI-secured Solana experience anchored in ShieldScore and TDL incentives.',
      'Connects on-chain intelligence with transparent governance and funding.',
      'Vision: global standard for decentralized risk intelligence.',
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
  { label: 'ShieldScore v2 Latency', value: '≈1.8 seconds' },
  { label: 'Enterprise API Access', value: '$TDL staking or credits required' },
]

export const TOKEN_DISTRIBUTION: TokenDistribution[] = [
  {
    category: 'Presale',
    allocation: '25%',
    percent: 25,
    vesting: '12mo linear unlock • fuels community participation.',
  },
  {
    category: 'Liquidity + CEX',
    allocation: '20%',
    percent: 20,
    vesting: '12mo lock • ensures market depth and stability.',
  },
  {
    category: 'Team & Development',
    allocation: '20%',
    percent: 20,
    vesting: '12mo vesting • supports long-term delivery.',
  },
  {
    category: 'Staking + Rewards',
    allocation: '15%',
    percent: 15,
    vesting: '48mo linear • powers incentive economy.',
  },
  {
    category: 'Marketing + Partnerships',
    allocation: '10%',
    percent: 10,
    vesting: '12mo lock • funds brand expansion.',
  },
  {
    category: 'Treasury + Ecosystem Growth',
    allocation: '10%',
    percent: 10,
    vesting: 'DAO-managed • supports protocol evolution.',
  },
]

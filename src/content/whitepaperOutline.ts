export type WhitepaperSection = {
  id: string
  title: string
  summary: string
  highlights: string[]
}

export const WHITEPAPER_SECTIONS: WhitepaperSection[] = [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    summary:
      'Positions SPL Shield as Solana’s security and analytics layer, pairing the platform with the TDL utility token to form a trust backbone for DeFi.',
    highlights: [
      'Protects investors, developers, and communities from scams, rug pulls, and malicious contracts.',
      'TDL powers governance, staking, rewards, and premium feature access across the ecosystem.',
      'Focuses on delivering a comprehensive security posture for Solana-based projects.',
    ],
  },
  {
    id: 'introduction',
    title: 'Introduction',
    summary:
      'Explains Solana’s rapid growth and the parallel rise of security threats in low-cost, high-throughput environments.',
    highlights: [
      'Fast adoption has attracted both legitimate builders and malicious actors.',
      'Fragmented tooling leaves communities exposed to real-time threats.',
      'SPL Shield exists to restore trust and credibility for Solana projects.',
    ],
  },
  {
    id: 'problem',
    title: 'The Problem',
    summary:
      'Details the risk landscape facing Solana users, including fraudulent launches, opaque analytics, and weak investor protections.',
    highlights: [
      'Tokens can be launched within minutes, enabling malicious intent and rug pulls.',
      'Existing analysis tools are either too technical or lack live monitoring.',
      'Communities lack a unified shield against scams and exploit attempts.',
    ],
  },
  {
    id: 'solution',
    title: 'The SPL Shield Solution',
    summary:
      'Breaks the platform into risk scanning, analytics, and community protection tooling to cover the full threat lifecycle.',
    highlights: [
      'Risk Scanner flags suspicious wallets, tokens, and contracts in real time.',
      'Analytics Dashboard visualizes token distribution, liquidity health, and risk history.',
      'Community tools include Telegram alerts, bounty programs, and developer verification.',
    ],
  },
  {
    id: 'core-technical-methodology',
    title: 'Core Technical Methodology',
    summary:
      'Describes the risk scoring model, data ingestion, and sub-2-second detection latency that power the real-time scanner.',
    highlights: [
      'Streams on-chain liquidity events, mint authority changes, and wallet clusters.',
      'Risk weighting: 40% liquidity health, 40% contract vulnerability, 20% trading anomalies.',
      'Critical threats are flagged in under four Solana blocks on average.',
    ],
  },
  {
    id: 'tdl-token-utility',
    title: 'TDL Token Utility',
    summary:
      'Outlines how TDL fuels the ecosystem by incentivizing secure participation and powering premium access.',
    highlights: [
      'Governance: token holders vote on upgrades and policy changes.',
      'Staking unlocks advanced analytics and strengthens network incentives.',
      'Rewards and ecosystem services cover scam reporting, audits, and verifications.',
    ],
  },
  {
    id: 'tokenomics-distribution',
    title: 'Tokenomics & Distribution',
    summary:
      'Provides allocation percentages, vesting timelines, and presale parameters for the 1B TDL supply.',
    highlights: [
      '1,000,000,000 TDL total supply with a 25% public presale.',
      'Presale priced at $0.002 (0.00001 SOL) targeting $400K–$500K raise.',
      'Linear vesting schedules align incentives across community, team, and partners.',
    ],
  },
  {
    id: 'platform-features',
    title: 'Platform Features & Roadmap',
    summary:
      'Summarizes current capabilities and the near-term buildout for SPL Shield and its ecosystem.',
    highlights: [
      'Fraud detection, analytics dashboards, and Telegram bot alerts ship in the MVP.',
      'Future features include confidential transfers and an enterprise-grade API.',
      'Upcoming phases deliver staking, cross-chain support, SDKs, and DAO governance.',
    ],
  },
  {
    id: 'market-opportunity',
    title: 'Market Opportunity',
    summary:
      'Quantifies the demand for Solana security, citing TVL growth and ecosystem gaps.',
    highlights: [
      'Solana TVL exceeds $4B with continued growth expectations.',
      'DeFi rug pulls cost billions annually across chains, underscoring risk.',
      'Target users include investors, launchpads, exchanges, and project teams.',
    ],
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    summary:
      'Affirms the governance standards, audits, and anti-rug protocols that safeguard the platform.',
    highlights: [
      'Mandatory external smart contract audits before major releases.',
      'Internal security reviews and regulatory alignment for token sales.',
      'Future DEX partnerships will embed risk scoring directly into trading venues.',
    ],
  },
  {
    id: 'team-governance',
    title: 'Team & Governance',
    summary:
      'Explains the pseudonymous team structure, multi-sig treasury, and DAO-aligned governance.',
    highlights: [
      'Core contributors span Solana development, smart contract security, and growth.',
      'Treasury controlled by a multi-sig with an external doxxed advisor.',
      'TDL staking confers voting rights for DAO-style decision making.',
    ],
  },
  {
    id: 'legal-disclaimer',
    title: 'Legal Disclaimer',
    summary:
      'Clarifies that TDL is a utility token for ecosystem access and not an investment security.',
    highlights: [
      'Whitepaper is informational and subject to change.',
      'No solicitation to buy or sell securities in any jurisdiction.',
      'Purchasers should evaluate the token based on utility access, not profit expectation.',
    ],
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    summary:
      'Reinforces the goal to make Solana the safest chain by pairing real-time monitoring with sustainable tokenomics.',
    highlights: [
      'Presale funds accelerate MVP delivery and global go-to-market.',
      'TDL connects community incentives with platform growth.',
      'Vision is to become the default security layer for Solana DeFi and NFTs.',
    ],
  },
]

export const TOKEN_METRICS: { label: string; value: string }[] = [
  { label: 'Total Supply', value: '1,000,000,000 TDL' },
  { label: 'Presale Allocation', value: '250,000,000 TDL (25%)' },
  { label: 'Token Standard', value: 'Solana SPL (Token-2022 with extensions)' },
  { label: 'Reference SOL Price', value: '$200 (pricing basis)' },
  { label: 'Presale Price', value: '$0.002 per TDL = 0.00001 SOL' },
  { label: 'Soft Cap', value: '$400,000' },
  { label: 'Hard Cap', value: '$500,000 (SOL/USDC)' },
  { label: 'Full Presale Proceeds', value: '$500,000 at full subscription' },
  {
    label: 'Presale Unlock Schedule',
    value: '12-month linear unlock with no cliff starting at DEX listing',
  },
  {
    label: 'Presale Pricing Mechanics',
    value: 'Fixed-price sale; SOL contributions adjust to maintain the USD peg',
  },
]

export const TOKEN_DISTRIBUTION: {
  category: string
  allocation: string
  percent: number
  vesting: string
}[] = [
  {
    category: 'Presale (Public Sale)',
    allocation: '25%',
    percent: 25,
    vesting: '12-month linear unlock, no cliff, starting at DEX listing.',
  },
  {
    category: 'Liquidity & CEX Listings',
    allocation: '20%',
    percent: 20,
    vesting:
      'Locked liquidity at launch; vesting aligns with exchange partnerships and depth targets.',
  },
  {
    category: 'Team & Development',
    allocation: '20%',
    percent: 20,
    vesting: '24-month linear vesting period.',
  },
  {
    category: 'Staking & Rewards',
    allocation: '15%',
    percent: 15,
    vesting: 'Distributed over 48 months to incentivize long-term staking and participation.',
  },
  {
    category: 'Marketing & Partnerships',
    allocation: '10%',
    percent: 10,
    vesting: 'Released according to strategic milestones and promotional partnerships.',
  },
  {
    category: 'Treasury & Ecosystem Growth',
    allocation: '10%',
    percent: 10,
    vesting: 'Reserved for ecosystem expansion, grants, and long-term sustainability.',
  },
]

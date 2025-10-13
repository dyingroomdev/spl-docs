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
      'Introduces SPL Shield and the TDL token economy, outlining the threats it mitigates for trading organizations.',
    highlights: [
      'Market problem statement and regulatory backdrop.',
      'How SPL Shield layers policy enforcement onto Solana.',
      'Key benefits for trading desks and compliance leaders.',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Protocol Design',
    summary:
      'Details the layered security model, contract design, and verifier network underpinning the risk scanner.',
    highlights: [
      'Smart contract modules with upgrade and governance controls.',
      'Risk oracle topology and data attestation pipeline.',
      'Mitigation flow for elevated-risk trades.',
    ],
  },
  {
    id: 'tdl-economics',
    title: 'TDL Token Economics',
    summary:
      'Breaks down issuance, sinks, insurance fund mechanics, and incentive alignment across stakeholders.',
    highlights: [
      'Emission curve and treasury management policies.',
      'Fee routing to the insurance backstop.',
      'Delegation and staking incentives for validators.',
    ],
  },
  {
    id: 'roadmap',
    title: 'Roadmap & Governance',
    summary:
      'Outlines the operating milestones for SPL Shield and how protocol upgrades will be governed.',
    highlights: [
      'Q1–Q4 milestone timeline.',
      'Emergency upgrade process and quorum thresholds.',
      'Community reporting and transparency commitments.',
    ],
  },
]

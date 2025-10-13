export type DocSection = {
  id: string
  title: string
  description: string
  items: { title: string; summary: string }[]
}

export const DOC_SECTIONS: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description:
      'Provision your tenant, connect wallets, and invite your trading desk in less than an hour.',
    items: [
      { title: 'Account setup checklist', summary: 'Prerequisites, access roles, and environment keys.' },
      { title: 'Connecting custodial wallets', summary: 'Supported custody providers and verification steps.' },
      { title: 'First SPL Shield policy', summary: 'Create a baseline protection policy for your trading desk.' },
    ],
  },
  {
    id: 'token-lifecycle',
    title: 'TDL Token Lifecycle',
    description:
      'Configure the treasury, execute trades, and track emission schedules for your TDL token.',
    items: [
      { title: 'Minting and circulation', summary: 'How issuance, burning, and vesting work across environments.' },
      { title: 'Trading flows', summary: 'Buy/sell workflows, fees, and risk controls for desk operators.' },
      { title: 'Reporting and analytics', summary: 'Dashboard deep dive across liquidity, counterparties, and compliance.' },
    ],
  },
  {
    id: 'risk-scanner',
    title: 'Risk Scanner',
    description:
      'Leverage the SPL Shield risk engine for proactive threat detection and incident response.',
    items: [
      { title: 'Signal catalog', summary: 'Every detection rule, severities, and remediation playbooks.' },
      { title: 'Alerting integrations', summary: 'Connecting to Slack, PagerDuty, SIEM, and webhook targets.' },
      { title: 'Governance workflows', summary: 'Review loops, approvals, and audit trails for compliance teams.' },
    ],
  },
]

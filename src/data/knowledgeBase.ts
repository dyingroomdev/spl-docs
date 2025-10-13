export type KnowledgeBaseArticle = {
  id: string
  question: string
  answer: string
  tags: string[]
}

export type KnowledgeBaseCategory = {
  id: string
  title: string
  description: string
  articles: KnowledgeBaseArticle[]
}

export const KNOWLEDGE_BASE: KnowledgeBaseCategory[] = [
  {
    id: 'onboarding',
    title: 'Onboarding & Accounts',
    description: 'Account creation, tenant provisioning, and access management.',
    articles: [
      {
        id: 'kb-001',
        question: 'How do I invite my trading desk to SPL Shield?',
        answer:
          'Navigate to Settings → Team, add each trader by corporate email, and assign the Trading Desk role. Invitations expire after 72 hours for security.',
        tags: ['access', 'roles'],
      },
      {
        id: 'kb-002',
        question: 'Can I test on mainnet with the same account?',
        answer:
          'Yes. Use the environment switcher in your profile. We recommend enabling policy mirroring so your dev and prod policies stay in sync.',
        tags: ['environment', 'policy'],
      },
    ],
  },
  {
    id: 'tdl',
    title: 'TDL Token',
    description: 'Trading flows, compliance rules, and treasury operations.',
    articles: [
      {
        id: 'kb-101',
        question: 'What are the fees when buying or selling TDL?',
        answer:
          'Primary trades execute with a 15 bps fee routed to the insurance fund. Secondary trades respect the venue’s posted maker/taker schedule.',
        tags: ['fees', 'trading'],
      },
      {
        id: 'kb-102',
        question: 'How do I pause new TDL issuance?',
        answer:
          'From the Treasury module, toggle the Emergency Halt. This requires multi-sig approval if the control plane is in protected mode.',
        tags: ['treasury', 'controls'],
      },
    ],
  },
  {
    id: 'risk-scanner',
    title: 'Risk Scanner',
    description: 'Integrations, alerts, and tuning recommendations.',
    articles: [
      {
        id: 'kb-201',
        question: 'Why am I seeing dormant wallet alerts?',
        answer:
          'Dormant wallet alerts trigger when no outbound activity occurs for 30 days. Adjust the threshold under Risk Scanner → Signal Tuning.',
        tags: ['alerts', 'configuration'],
      },
      {
        id: 'kb-202',
        question: 'Can alerts post directly to Slack?',
        answer:
          'Yes. Create a webhook destination in Integrations, paste your Slack incoming webhook URL, and enable notifications for the desired severity levels.',
        tags: ['integrations', 'slack'],
      },
    ],
  },
]

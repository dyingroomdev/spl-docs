import rawFaq from '../../faq.json'

export type KnowledgeBaseArticle = {
  id: string
  question: string
  answer: string
  tags: string[]
  difficulty: string
  audience: string
}

export type KnowledgeBaseCategory = {
  id: string
  title: string
  description: string
  articles: KnowledgeBaseArticle[]
}

type RawFaqEntry = (typeof rawFaq)[number]

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Overview: 'Foundational context for SPL Shield, the TDL token, and who benefits from the platform.',
  'Technology & AI System': 'Deep dives into the detection engine, data sources, and integration points.',
  'Tokenomics & Utility': 'Supply, distribution, and utility mechanics for the TDL token.',
  'Presale & Launch': 'Funding milestones, token sales, and liquidity protections for launch partners.',
  'Roadmap, Vision & Community': 'Long-term goals, community involvement, and partnership strategy.',
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const generateArticleId = (entry: RawFaqEntry, index: number) =>
  `${slugify(entry.category)}-${slugify(entry.question)}-${index}`

const normalizeTag = (value: string) => value.trim()

const grouped = rawFaq.reduce<Map<string, KnowledgeBaseCategory>>((acc, entry, index) => {
  const categoryId = slugify(entry.category)
  const article: KnowledgeBaseArticle = {
    id: generateArticleId(entry, index),
    question: entry.question,
    answer: entry.answer,
    tags: [normalizeTag(entry.difficulty), normalizeTag(entry.target_user)],
    difficulty: entry.difficulty,
    audience: entry.target_user,
  }

  const existing = acc.get(categoryId)
  if (existing) {
    existing.articles.push(article)
    return acc
  }

  acc.set(categoryId, {
    id: categoryId,
    title: entry.category,
    description:
      CATEGORY_DESCRIPTIONS[entry.category] ?? 'Explore frequently asked questions for this topic.',
    articles: [article],
  })
  return acc
}, new Map())

export const KNOWLEDGE_BASE: KnowledgeBaseCategory[] = Array.from(grouped.values()).map(
  (category) => ({
    ...category,
    articles: category.articles.sort((a, b) => a.question.localeCompare(b.question)),
  }),
)

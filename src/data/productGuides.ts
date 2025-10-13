import rawGuides from '../../spl_shield_product_guides_training.json' with { type: 'json' }

export type ApiTierName = keyof typeof rawGuides.api_scan_tiers.tiers

export type ApiTierFeature = {
  feature: string
  tiers: Record<ApiTierName, string>
}

const tierEntries = Object.entries(rawGuides.api_scan_tiers.tiers) as Array<
  [ApiTierName, Record<string, string>]
>

export const API_TIER_NAMES = tierEntries.map(([name]) => name)

export const API_TIER_FEATURES: ApiTierFeature[] = rawGuides.api_scan_tiers.features.map(
  (feature) => ({
    feature,
    tiers: tierEntries.reduce<Record<ApiTierName, string>>((acc, [tierName, details]) => {
      acc[tierName] = details[feature] ?? '—'
      return acc
    }, {} as Record<ApiTierName, string>),
  }),
)

type RawGuideEntry = (typeof rawGuides.kb)[number]

export type GuideCategory = {
  id: string
  title: string
  entries: RawGuideEntry[]
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

export const GUIDE_CATEGORIES: GuideCategory[] = Object.values(
  rawGuides.kb.reduce<Record<string, GuideCategory>>((acc, entry) => {
    const id = slugify(entry.category)
    if (!acc[id]) {
      acc[id] = {
        id,
        title: entry.category,
        entries: [],
      }
    }
    acc[id]!.entries.push(entry)
    return acc
  }, {}),
).map((category) => ({
  ...category,
  entries: category.entries.sort((a, b) => a.intent.localeCompare(b.intent)),
}))

export const PRODUCT_GUIDES_META = rawGuides.meta

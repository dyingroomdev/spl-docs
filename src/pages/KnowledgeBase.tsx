import Fuse from 'fuse.js'
import type { FuseResultMatch } from 'fuse.js'
import type { JSX } from 'react'
import { useMemo, useState } from 'react'
import '../styles/page.css'
import '../styles/knowledge-base.css'
import { KNOWLEDGE_BASE } from '../data/knowledgeBase'

type ArticleWithContext = (typeof KNOWLEDGE_BASE)[number]['articles'][number] & {
  categoryId: string
  categoryTitle: string
  categoryDescription: string
}

type ArticleMatch = {
  article: ArticleWithContext
  matches?: readonly FuseResultMatch[]
}

type CategoryGroup = {
  id: string
  title: string
  description: string
  articles: ArticleWithContext[]
}

const KnowledgeBase = () => {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const categories = useMemo<CategoryGroup[]>(
    () =>
      KNOWLEDGE_BASE.map((category) => ({
        id: category.id,
        title: category.title,
        description: category.description,
        articles: category.articles.map((article) => ({
          ...article,
          categoryId: category.id,
          categoryTitle: category.title,
          categoryDescription: category.description,
        })),
      })),
    [],
  )

  const categoryOrder = useMemo(() => {
    const order = new Map<string, number>()
    categories.forEach((category, index) => {
      order.set(category.id, index)
    })
    return order
  }, [categories])

  const tags = useMemo(() => {
    const tagSet = new Set<string>()
    categories.forEach((category) =>
      category.articles.forEach((article) => article.tags.forEach((tag) => tagSet.add(tag))),
    )
    return Array.from(tagSet).sort()
  }, [categories])

  const articles = useMemo<ArticleWithContext[]>(
    () => categories.flatMap((category) => category.articles),
    [categories],
  )

  const fuse = useMemo(
    () =>
      new Fuse(articles, {
        keys: ['question', 'answer', 'tags'],
        includeMatches: true,
        threshold: 0.3,
        ignoreLocation: true,
      }),
    [articles],
  )

  const normalizedQuery = query.trim()
  const hasSearch = normalizedQuery.length > 0

  const groupedResults = useMemo(() => {
    if (!hasSearch) {
      return categories
        .map((category) => ({
          ...category,
          articles: category.articles
            .filter((article) => !activeTag || article.tags.includes(activeTag))
            .map((article) => ({ article, matches: undefined })),
        }))
        .filter((category) => category.articles.length > 0)
    }

    const searchResults = fuse.search(normalizedQuery)

    const grouped = new Map<
      string,
      { id: string; title: string; description: string; articles: ArticleMatch[] }
    >()

    searchResults.forEach(({ item, matches }) => {
      if (activeTag && !item.tags.includes(activeTag)) {
        return
      }

      const existing = grouped.get(item.categoryId) ?? {
        id: item.categoryId,
        title: item.categoryTitle,
        description: item.categoryDescription,
        articles: [] as ArticleMatch[],
      }

      existing.articles.push({ article: item, matches })
      grouped.set(item.categoryId, existing)
    })

    return Array.from(grouped.values())
      .map((group) => ({
        ...group,
        articles: group.articles.sort((a, b) => a.article.question.localeCompare(b.article.question)),
      }))
      .sort((a, b) => (categoryOrder.get(a.id) ?? 0) - (categoryOrder.get(b.id) ?? 0))
  }, [activeTag, categoryOrder, categories, fuse, hasSearch, normalizedQuery])

  const resultCount = groupedResults.reduce((total, category) => total + category.articles.length, 0)

  const highlightMatches = (
    text: string,
    matches: readonly FuseResultMatch[] | undefined,
    targetKey: 'question' | 'answer',
  ) => {
    if (!matches || matches.length === 0) {
      return text
    }

    const match = matches.find((candidate) => candidate.key === targetKey)
    if (!match || !match.indices) {
      return text
    }

    const parts: Array<string | JSX.Element> = []
    let lastIndex = 0

    match.indices.forEach(([start, end]: readonly [number, number], index: number) => {
      if (start > lastIndex) {
        parts.push(text.slice(lastIndex, start))
      }

      parts.push(
        <mark key={`highlight-${index}`} className="kb-highlight">
          {text.slice(start, end + 1)}
        </mark>,
      )

      lastIndex = end + 1
    })

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts
  }

  return (
    <section className="page">
      <header className="page__header">
        <h1>Knowledge Base</h1>
        <p className="page__lede">
          Search common questions about SPL Shield, TDL, and the risk scanner. Content here is
          curated by the support team and updated with every release.
        </p>
      </header>

      <div className="kb-toolbar">
        <input
          type="search"
          className="kb-search"
          placeholder="Search questions or keywords…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search knowledge base"
        />
        <div className="kb-tags">
          <button
            type="button"
            className={!activeTag ? 'kb-tag kb-tag--active' : 'kb-tag'}
            onClick={() => setActiveTag(null)}
          >
            All topics
          </button>
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              className={activeTag === tag ? 'kb-tag kb-tag--active' : 'kb-tag'}
              onClick={() => setActiveTag((value) => (value === tag ? null : tag))}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {hasSearch && (
        <p className="kb-results-meta" role="status">
          Showing {resultCount} result{resultCount === 1 ? '' : 's'} for “{normalizedQuery}”.
        </p>
      )}

      {groupedResults.length > 0 ? (
        <div className="kb-grid">
          {groupedResults.map((category) => (
            <article key={category.id} className="kb-card">
              <header>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </header>
              <ul className="kb-list">
                {category.articles.map(({ article, matches }) => (
                  <li key={article.id} className="kb-item">
                    <h3>{highlightMatches(article.question, matches, 'question')}</h3>
                    <p>{highlightMatches(article.answer, matches, 'answer')}</p>
                    <div className="kb-tags-inline">
                      {article.tags.map((tag) => (
                        <span key={tag} className="kb-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <div className="kb-empty">
          <h2>No results yet</h2>
          <p>
            Try a different keyword or reset the filters. If you cannot find what you need, contact
            support@splshield.com and we’ll respond within one business day.
          </p>
        </div>
      )}
    </section>
  )
}

export default KnowledgeBase

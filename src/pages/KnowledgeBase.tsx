import { useMemo, useState } from 'react'
import '../styles/page.css'
import '../styles/knowledge-base.css'
import { KNOWLEDGE_BASE } from '../data/knowledgeBase'

const KnowledgeBase = () => {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const tags = useMemo(() => {
    const tagSet = new Set<string>()
    KNOWLEDGE_BASE.forEach((category) =>
      category.articles.forEach((article) => article.tags.forEach((tag) => tagSet.add(tag))),
    )
    return Array.from(tagSet).sort()
  }, [])

  const normalizedQuery = query.trim().toLowerCase()

  const filteredCategories = KNOWLEDGE_BASE.map((category) => {
    const articles = category.articles.filter((article) => {
      const matchesQuery =
        !normalizedQuery ||
        article.question.toLowerCase().includes(normalizedQuery) ||
        article.answer.toLowerCase().includes(normalizedQuery)

      const matchesTag = !activeTag || article.tags.includes(activeTag)

      return matchesQuery && matchesTag
    })

    return { ...category, articles }
  }).filter((category) => category.articles.length > 0)

  const hasResults = filteredCategories.length > 0

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

      {hasResults ? (
        <div className="kb-grid">
          {filteredCategories.map((category) => (
            <article key={category.id} className="kb-card">
              <header>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </header>
              <ul className="kb-list">
                {category.articles.map((article) => (
                  <li key={article.id} className="kb-item">
                    <h3>{article.question}</h3>
                    <p>{article.answer}</p>
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

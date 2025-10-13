import { Link } from 'react-router-dom'
import '../styles/page.css'
import '../styles/docs.css'
import { DOCS_BY_CATEGORY } from '../content/docsIndex'

const DocsHub = () => {
  const categories = Object.entries(DOCS_BY_CATEGORY)

  return (
    <section className="page">
      <header className="page__header" id="architecture">
        <h1>Product Guides</h1>
        <p className="page__lede">
          Detailed handbooks for deploying SPL Shield, managing the TDL token treasury, and operating
          the risk scanner across your trading workflows.
        </p>
      </header>

      <div className="docs-grid">
        {categories.map(([category, docs]) => (
          <article key={category} className="docs-card" id={docs[0]?.slug ?? category}>
            <h2>{category}</h2>
            <ul className="docs-list">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <h3>
                    <Link to={`/docs/${doc.slug}`} className="docs-link">
                      {doc.title}
                    </Link>
                  </h3>
                  <p>{doc.description}</p>
                  {doc.readingTime && (
                    <span className="docs-meta">{doc.readingTime} min read</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="docs-next-steps" id="token-lifecycle">
        <h2>Coming Soon</h2>
        <p>
          API references, SDK quick starts, and compliance checklists will ship alongside the v1
          launch of SPL Shield. Follow release updates in the knowledge base.
        </p>
      </section>
    </section>
  )
}

export default DocsHub

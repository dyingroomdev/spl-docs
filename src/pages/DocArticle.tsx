import { Link, Navigate, useParams } from 'react-router-dom'
import '../styles/page.css'
import '../styles/doc-article.css'
import { getDocBySlug } from '../content/docsIndex'

const DocArticle = () => {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) {
    return <Navigate to="/docs" replace />
  }

  const doc = getDocBySlug(slug)

  if (!doc) {
    return (
      <section className="page doc-article">
        <header className="page__header">
          <h1>Documentation not found</h1>
          <p className="page__lede">
            We couldn\'t find that guide. It may have moved during the reorganization.
          </p>
          <Link to="/docs" className="button button--primary">
            Back to Product Guides
          </Link>
        </header>
      </section>
    )
  }

  const { Component } = doc

  return (
    <section className="page doc-article">
      <nav className="doc-article__breadcrumbs" aria-label="Breadcrumbs">
        <Link to="/docs">Product Guides</Link>
        <span>/</span>
        <span>{doc.title}</span>
      </nav>

      <article className="doc-article__content">
        <header>
          <h1>{doc.title}</h1>
          <p className="doc-article__description">{doc.description}</p>
          <div className="doc-article__meta">
            <span>{doc.category}</span>
            {doc.readingTime && <span>{doc.readingTime} min read</span>}
          </div>
        </header>
        <Component />
      </article>
    </section>
  )
}

export default DocArticle

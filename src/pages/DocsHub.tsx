import '../styles/page.css'
import '../styles/docs.css'
import { DOC_SECTIONS } from '../content/docsOverview'

const DocsHub = () => {
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
        {DOC_SECTIONS.map((section) => (
          <article key={section.id} className="docs-card" id={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <ul className="docs-list">
              {section.items.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
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

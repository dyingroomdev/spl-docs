import { Link } from 'react-router-dom'
import '../styles/page.css'

const Home = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>SPL Shield Documentation</h1>
        <p className="page__lede">
          Your command center for deploying SPL Shield, trading the TDL token, and operating the
          risk scanner with confidence.
        </p>
        <div className="page__cta-group">
          <Link to="/docs" className="button button--primary">
            Start with Product Guides
          </Link>
          <Link to="/knowledge-base" className="button button--ghost">
            Browse Knowledge Base
          </Link>
        </div>
      </header>

      <div className="page__grid">
        <article className="page__card">
          <h2>Why SPL Shield</h2>
          <p>
            Learn how our security middleware protects trades, enforces policy, and surfaces risk so
            your operations stay compliant.
          </p>
          <Link to="/docs#architecture" className="page__link">
            Explore the architecture →
          </Link>
        </article>

        <article className="page__card">
          <h2>TDL Token Lifecycle</h2>
          <p>
            Understand issuance, buying, selling, and treasury controls for the TDL token with
            scenario-based walkthroughs.
          </p>
          <Link to="/docs#token-lifecycle" className="page__link">
            Review the lifecycle →
          </Link>
        </article>

        <article className="page__card">
          <h2>Risk Scanner Playbooks</h2>
          <p>
            Step-by-step guides for configuring the scanner, reviewing findings, and remediating
            alerts with your security team.
          </p>
          <Link to="/docs#risk-scanner" className="page__link">
            Configure the scanner →
          </Link>
        </article>
      </div>

      <section className="page__section">
        <h2>What’s Inside</h2>
        <ul className="page__list">
          <li>🚀 Quick starts for onboarding teams in under 30 minutes.</li>
          <li>🧠 Knowledge base with searchable answers from support.</li>
          <li>📄 Living whitepaper detailing SPL Shield’s economic and technical model.</li>
          <li>🔐 Compliance resources and API references for integration partners.</li>
        </ul>
      </section>
    </section>
  )
}

export default Home

import { Link } from 'react-router-dom'
import '../styles/page.css'
import { OVERVIEW_CONTENT } from '../data/overview'

const Home = () => {
  const firstCoreItems = OVERVIEW_CONTENT.core_components.slice(0, 3)
  const firstTargets = OVERVIEW_CONTENT.target_users.slice(0, 3)

  return (
    <section className="page">
      <header className="page__header">
        <h1>{OVERVIEW_CONTENT.title}</h1>
        <div className="page__logo-row" aria-hidden="true">
          <img src="/logo.png" alt="" className="page__logo" />
          <img src="/logo_tdl.png" alt="" className="page__logo" />
        </div>
        <p className="page__lede">{OVERVIEW_CONTENT.subtitle}</p>
        <p className="page__lede">{OVERVIEW_CONTENT.mission}</p>
        <div className="page__cta-group">
          <Link to="/docs/overview" className="button button--primary">
            Explore the Overview
          </Link>
          <Link to="/docs/product-guides" className="button button--ghost">
            Product Playbooks
          </Link>
        </div>
      </header>

      <div className="page__grid">
        {firstCoreItems.map((item) => (
          <article key={item.name} className="page__card">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <section className="page__section">
        <h2>Who We Support</h2>
        <div className="page__grid">
          {firstTargets.map((target) => (
            <article key={target.user} className="page__card page__card--compact">
              <h3>{target.user}</h3>
              <p>{target.value}</p>
            </article>
          ))}
        </div>
        <p className="page__note">
          Dive deeper into target workflows in the{' '}
          <Link to="/docs/product-guides" className="page__inline-link">
            Product Guidebook
          </Link>
          .
        </p>
      </section>

      <section className="page__section">
        <h2>Roadmap Highlights</h2>
        <ul className="page__list">
          {OVERVIEW_CONTENT.roadmap.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to="/docs/overview" className="page__inline-link">
          View full roadmap →
        </Link>
      </section>
    </section>
  )
}

export default Home

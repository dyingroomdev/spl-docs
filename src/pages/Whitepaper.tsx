import '../styles/page.css'
import '../styles/whitepaper.css'
import { WHITEPAPER_SECTIONS } from '../content/whitepaperOutline'

const Whitepaper = () => {
  const latestVersion = import.meta.env.VITE_WHITEPAPER_VERSION ?? 'v0.1 Draft'

  return (
    <section className="page">
      <header className="page__header">
        <h1>Online Whitepaper</h1>
        <p className="page__lede">
          The living specification for SPL Shield infrastructure, the TDL token economy, and our
          approach to automated risk mitigation.
        </p>
        <div className="whitepaper__meta">
          <span className="whitepaper__badge">{latestVersion}</span>
          <a className="button button--ghost" href="/whitepaper.pdf">
            Download PDF
          </a>
        </div>
      </header>

      <section className="whitepaper__intro">
        <h2>Reading Guide</h2>
        <p>
          Each section below summarizes the most recent published whitepaper. Use the highlights to
          orient quickly, or open the PDF for the authoritative version. We maintain a change log in
          the knowledge base for auditors and investors.
        </p>
      </section>

      <div className="whitepaper__sections">
        {WHITEPAPER_SECTIONS.map((section) => (
          <article key={section.id} className="whitepaper__card" id={section.id}>
            <h2>{section.title}</h2>
            <p>{section.summary}</p>
            <ul>
              {section.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="whitepaper__cta">
        <h2>Need a Signed Copy?</h2>
        <p>
          Request a signed, investor-ready PDF using the contact options in the footer. We also
          support GPG-signed distributions for governance partners.
        </p>
      </section>
    </section>
  )
}

export default Whitepaper

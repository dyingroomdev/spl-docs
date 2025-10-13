import '../styles/page.css'
import '../styles/whitepaper.css'
import { TOKEN_DISTRIBUTION, TOKEN_METRICS, WHITEPAPER_SECTIONS } from '../content/whitepaperOutline'

const Whitepaper = () => {
  const latestVersion = import.meta.env.VITE_WHITEPAPER_VERSION ?? 'v0.1 Draft'
  const pdfPath = '/whitepaper_v101.pdf'
  const epubPath = '/whitepaper_v101.epub'

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
          <div className="whitepaper__downloads">
            <a className="button button--ghost" href={pdfPath} download>
              Download PDF
            </a>
            <a className="button button--ghost" href={epubPath} download>
              Download EPUB
            </a>
          </div>
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

      <section className="whitepaper__metrics">
        <h2>TDL Token Metrics</h2>
        <div className="whitepaper__metric-grid">
          {TOKEN_METRICS.map((metric) => (
            <div key={metric.label} className="whitepaper__metric-card">
              <span className="whitepaper__metric-label">{metric.label}</span>
              <span className="whitepaper__metric-value">{metric.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="whitepaper__chart" aria-labelledby="whitepaper-chart-heading">
        <h2 id="whitepaper-chart-heading">Token Allocation Snapshot</h2>
        <div className="whitepaper__chart-bars">
          {TOKEN_DISTRIBUTION.map((row) => (
            <div key={`chart-${row.category}`} className="whitepaper__chart-row">
              <div className="whitepaper__chart-row-header">
                <span className="whitepaper__chart-category">{row.category}</span>
                <span className="whitepaper__chart-percent">{row.allocation}</span>
              </div>
              <div className="whitepaper__chart-bar" role="img" aria-label={`${row.category} ${row.allocation}`}>
                <div
                  className="whitepaper__chart-bar-fill"
                  style={{ width: `${row.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="whitepaper__distribution" aria-labelledby="whitepaper-distribution-heading">
        <h2 id="whitepaper-distribution-heading">Token Distribution & Vesting</h2>
        <table className="whitepaper__distribution-table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Allocation</th>
              <th scope="col">Vesting / Unlock</th>
            </tr>
          </thead>
          <tbody>
            {TOKEN_DISTRIBUTION.map((row) => (
              <tr key={row.category}>
                <th scope="row">{row.category}</th>
                <td>{row.allocation}</td>
                <td>{row.vesting}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

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

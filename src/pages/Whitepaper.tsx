import { useCallback, useRef } from 'react'
import '../styles/page.css'
import '../styles/whitepaper.css'
import { TOKEN_DISTRIBUTION, TOKEN_METRICS, WHITEPAPER_SECTIONS } from '../content/whitepaperOutline'

const Whitepaper = () => {
  const printableRef = useRef<HTMLElement | null>(null)
  const latestVersion = import.meta.env.VITE_WHITEPAPER_VERSION ?? 'v0.1 Draft'
  const epubPath = '/whitepaper_v101.epub'

  const handleFullExport = useCallback(() => {
    const printableEl = printableRef.current

    if (!printableEl) return

    const generatedAt = new Date().toLocaleString(undefined, {
      dateStyle: 'long',
      timeStyle: 'short',
    })
    const printableHTML = printableEl.outerHTML
    const printWindow = window.open('', '_blank', 'width=900,height=1000')

    if (!printWindow) return

    const styles = `
      @page {
        size: A4;
        margin: 18mm 15mm;
      }

      body {
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        margin: 0;
        padding: 0;
        background: #edf1ff;
        color: #0f172a;
      }

      .print__header,
      .print__footer {
        max-width: 980px;
        margin: 0 auto;
        padding: 24px 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        background: #0f172a;
        color: #e0e7ff;
      }

      .print__header {
        border-bottom: 3px solid #6366f1;
        flex-wrap: wrap;
      }

      .print__footer {
        border-top: 3px solid #6366f1;
        font-size: 0.9rem;
      }

      .print__eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 0.65rem;
        margin: 0;
      }

      .print__header h1 {
        margin: 0.35rem 0;
        font-size: 1.8rem;
      }

      .print__meta {
        margin: 0;
        font-size: 0.95rem;
        color: #c7d2fe;
      }

      .print__contact {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        font-size: 0.95rem;
        text-align: right;
      }

      .print__content {
        max-width: 980px;
        margin: 0 auto;
        padding: 24px 24px 48px;
      }

      .page {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .page__header {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .page__lede {
        font-size: 1rem;
        color: #334155;
      }

      .whitepaper__meta {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        flex-wrap: wrap;
      }

      .whitepaper__badge {
        display: inline-flex;
        padding: 0.35rem 0.85rem;
        border-radius: 0.75rem;
        background: rgba(99, 102, 241, 0.18);
        color: #4338ca;
        font-weight: 600;
      }

      .whitepaper__intro,
      .whitepaper__cta,
      .whitepaper__chart,
      .whitepaper__distribution {
        border-radius: 1rem;
        border: 1px solid #dbe2f8;
        background: #fff;
        padding: 1.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
        page-break-inside: avoid;
        break-inside: avoid;
      }

      .whitepaper__sections {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }

      .whitepaper__card {
        border-radius: 1rem;
        border: 1px solid #dbe2f8;
        background: #fff;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
        page-break-inside: avoid;
        break-inside: avoid;
      }

      .whitepaper__card h2 {
        margin: 0;
      }

      .whitepaper__card ul {
        margin: 0;
        padding-left: 1.25rem;
        color: #475569;
      }

      .whitepaper__metrics {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        page-break-inside: avoid;
        break-inside: avoid;
      }

      .whitepaper__metric-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      .whitepaper__metric-card {
        border-radius: 0.85rem;
        border: 1px solid #dbe2f8;
        padding: 1.25rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        page-break-inside: avoid;
        break-inside: avoid;
      }

      .whitepaper__distribution-table {
        width: 100%;
        border-collapse: collapse;
        color: #475569;
      }

      .whitepaper__distribution-table th,
      .whitepaper__distribution-table td {
        padding: 0.75rem 0.5rem;
        border-bottom: 1px solid #e2e8f0;
        text-align: left;
        page-break-inside: avoid;
        break-inside: avoid;
      }

      .whitepaper__chart-bar {
        height: 14px;
        border-radius: 999px;
        background: rgba(59, 130, 246, 0.12);
        overflow: hidden;
      }

      .whitepaper__chart-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #2563eb, #3b82f6);
      }

      .print-hide {
        display: none !important;
      }
    `

    const headerHTML = `
      <header class="print__header">
        <div>
          <p class="print__eyebrow">SPL Shield Documentation</p>
          <h1>Online Whitepaper</h1>
          <p class="print__meta">Version ${latestVersion} • Generated ${generatedAt}</p>
        </div>
        <div class="print__contact">
          <span>splshield.com</span>
          <span>support@splshield.com</span>
        </div>
      </header>
    `

    const footerHTML = `
      <footer class="print__footer">
        <span>SPL Shield + TDL — Confidential</span>
        <span>Generated ${generatedAt}</span>
      </footer>
    `

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SPL Shield Whitepaper — Export</title>
          <style>${styles}</style>
        </head>
        <body>
          ${headerHTML}
          <main class="print__content">
            ${printableHTML}
          </main>
          ${footerHTML}
          <script>
            window.onload = function () {
              window.print();
              setTimeout(() => window.close(), 150);
            };
          <\/script>
        </body>
      </html>
    `)

    printWindow.document.close()
  }, [latestVersion])

  return (
    <section className="page" ref={printableRef}>
      <header className="page__header">
        <h1>Online Whitepaper</h1>
        <p className="page__lede">
          The living specification for SPL Shield infrastructure, the TDL token economy, and our
          approach to automated risk mitigation.
        </p>
        <div className="whitepaper__meta">
          <span className="whitepaper__badge">{latestVersion}</span>
          <div className="whitepaper__downloads print-hide">
            <button type="button" className="button button--ghost" onClick={handleFullExport}>
              Export PDF
            </button>
            <a className="button button--ghost" href={epubPath} download>
              Export EPUB
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

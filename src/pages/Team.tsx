import '../styles/page.css'

const Team = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>Team</h1>
        <p className="page__lede">Meet the leadership team guiding SPL Shield and the TDL ecosystem.</p>
      </header>

      <div className="page__grid">
        <article className="page__card">
          <h2>🧠 Aragorn</h2>
          <p>
            <strong>Role:</strong> Lead Developer
          </p>
          <p>
            <strong>About:</strong> Architect of SPL Shield’s AI backend and blockchain core.
            Oversees all smart contract, API, and infrastructure development.
          </p>
          <p>
            <strong>Contact:</strong> <a className="page__inline-link" href="https://t.me/aragornspl">@aragornspl</a> on Telegram
          </p>
        </article>

        <article className="page__card">
          <h2>📈 Tom Harris</h2>
          <p>
            <strong>Role:</strong> Marketing Head
          </p>
          <p>
            <strong>About:</strong> Leads global outreach, partnerships, and branding for TDL. Focuses on community growth and exchange visibility.
          </p>
          <p>
            <strong>Contact:</strong> <a className="page__inline-link" href="https://t.me/tomharrisuk">@tomharrisuk</a> on Telegram
          </p>
        </article>

        <article className="page__card">
          <h2>🧩 Ethan Miller</h2>
          <p>
            <strong>Role:</strong> Chief Operating Officer
          </p>
          <p>
            <strong>About:</strong> Manages operations, investor relations, and ecosystem partnerships. Ensures smooth coordination between development and marketing teams.
          </p>
          <p>
            <strong>Contact:</strong> <a className="page__inline-link" href="https://t.me/ethanspl">@ethanspl</a> on Telegram
          </p>
        </article>
      </div>
    </section>
  )
}

export default Team

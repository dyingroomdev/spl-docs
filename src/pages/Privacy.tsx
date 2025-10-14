import '../styles/page.css'

const Privacy = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>Privacy Policy</h1>
        <p className="page__lede">
          At SPL Shield we are committed to protecting your privacy and ensuring the security of your
          personal information across our Solana security scanning services and the TDL token
          ecosystem.
        </p>
      </header>

      <article className="page__section">
        <h2>SPL Shield &mdash; Security First</h2>
        <p>Last Updated: December 15, 2024</p>
        <p>
          This Privacy Policy explains how we collect, use, and protect your data when you use our
          services.
        </p>
      </article>

      <article className="page__section">
        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>
          We may collect personal details such as email addresses, wallet addresses, and contact
          information when you voluntarily provide them through forms, newsletter subscriptions, or
          while using our services.
        </p>
        <h3>Usage Data</h3>
        <p>
          We automatically gather information about how you interact with our services, including IP
          addresses, browser types, device information, and usage patterns to improve our security
          scanning capabilities.
        </p>
        <h3>Blockchain Data</h3>
        <p>
          Our scanning services analyze publicly available blockchain data&mdash;such as transaction
          histories, token holdings, and smart contract interactions&mdash;to provide risk
          assessments.
        </p>
      </article>

      <article className="page__section">
        <h2>How We Use Your Information</h2>
        <h3>Service Provision</h3>
        <p>
          Data helps us provide, maintain, and improve our security scanning services, risk analysis
          tools, and customer support.
        </p>
        <h3>Security Enhancement</h3>
        <p>
          We enhance our AI algorithms, detect emerging threats, and improve risk assessment accuracy
          using the insights gleaned from collected data.
        </p>
        <h3>Communication</h3>
        <p>
          Contact details allow us to deliver important service updates, security alerts, and respond
          to your requests.
        </p>
      </article>

      <article className="page__section">
        <h2>Data Protection &amp; Security</h2>
        <h3>Encryption</h3>
        <p>
          All data transmission is protected with TLS, and sensitive data is encrypted at rest using
          AES-256.
        </p>
        <h3>Access Control</h3>
        <p>
          We implement strict access controls and authentication to ensure only authorized personnel
          can view user data.
        </p>
        <h3>Data Minimization</h3>
        <p>We collect and retain only the minimum data needed to deliver our services effectively.</p>
      </article>

      <article className="page__section">
        <h2>Information Sharing</h2>
        <h3>Third-Party Services</h3>
        <p>
          We do not sell, trade, or rent personal information. We may share anonymized, aggregated
          data for research and improvement.
        </p>
        <h3>Legal Requirements</h3>
        <p>
          We may disclose information when required by law, regulation, or legal process, or to
          protect our rights and user safety.
        </p>
        <h3>Service Providers</h3>
        <p>
          Certain trusted providers assist with our operations under strict confidentiality
          agreements.
        </p>
      </article>

      <article className="page__section">
        <h2>Your Rights</h2>
        <ul className="page__list">
          <li>Access and review your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Withdraw consent for data processing</li>
          <li>Exercise data portability rights</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>Contact Us</h2>
        <p>Email: <a className="page__inline-link" href="mailto:privacy@splshield.com">privacy@splshield.com</a></p>
        <p>Address: SPL Shield Legal Department</p>
        <p>Response Time: Within 30 days</p>
      </article>

      <article className="page__section">
        <h2>International Users</h2>
        <p>
          SPL Shield operates globally and complies with applicable privacy laws including GDPR,
          CCPA, and other regional regulations. We may update this policy to reflect changes in our
          practices or legal requirements and will notify users of material changes through our
          website or email.
        </p>
      </article>
    </section>
  )
}

export default Privacy

import '../styles/page.css'

const Terms = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>Terms of Use</h1>
        <p className="page__lede">
          These Terms of Service govern access to SPL Shield&apos;s security scanning services, the
          TDL token ecosystem, and related platforms.
        </p>
      </header>

      <article className="page__section">
        <h2>SPL Shield &mdash; Legal Agreement</h2>
        <p>Last Updated: December 15, 2024</p>
        <p>
          These Terms of Service govern your use of SPL Shield&apos;s security scanning services, TDL
          token ecosystem, and related platforms. Please read these terms carefully before using our
          services.
        </p>
      </article>

      <article className="page__section">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using SPL Shield&apos;s services&mdash;including our token risk scanner,
          TDL token, and related platforms&mdash;you agree to be bound by these Terms of Service. If
          you do not agree, refrain from using the services. These terms form a legally binding
          agreement between you and SPL Shield.
        </p>
      </article>

      <article className="page__section">
        <h2>Description of Services</h2>
        <p>
          SPL Shield delivers AI-powered security scanning for Solana tokens and wallets, risk
          analysis tools, and the TDL utility token ecosystem. Our services help users identify
          security risks and make informed decisions about cryptocurrency holdings and transactions.
        </p>
      </article>

      <article className="page__section">
        <h2>User Responsibilities</h2>
        <ul className="page__list">
          <li>Provide accurate information</li>
          <li>Maintain the security of accounts and private keys</li>
          <li>Comply with applicable laws and regulations</li>
          <li>Do not use our services for illegal activities</li>
          <li>Do not manipulate or interfere with SPL Shield systems</li>
          <li>Conduct independent due diligence before investment decisions</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>Disclaimers and Limitations</h2>
        <p>
          Services are provided &quot;as is&quot; without warranties. SPL Shield does not guarantee
          accuracy, completeness, or reliability of assessments. Cryptocurrency investments involve
          inherent risk; past performance does not indicate future results. Users should not rely
          solely on our analysis for investment decisions.
        </p>
      </article>

      <article className="page__section">
        <h2>Limitation of Liability</h2>
        <p>
          SPL Shield&apos;s liability is limited to the maximum extent permitted by law. We are not
          liable for direct, indirect, incidental, special, or consequential damages arising from use
          of the services, including investment losses, data loss, or business interruption.
        </p>
      </article>

      <article className="page__section">
        <h2>TDL Token Terms</h2>
        <p>
          The TDL token is a utility token used in the SPL Shield ecosystem. Token holders may be
          subject to additional terms. Token value may fluctuate, and there is no guarantee of profit
          or return on investment. Regulatory treatment may change over time.
        </p>
      </article>

      <article className="page__section">
        <h2>Prohibited Uses</h2>
        <p>You agree not to use the services for activities including:</p>
        <ul className="page__list">
          <li>Illegal activities or violations of applicable laws</li>
          <li>Money laundering, terrorist financing, or financial crimes</li>
          <li>Manipulating or attempting to manipulate security algorithms</li>
          <li>Distributing malware, viruses, or harmful software</li>
          <li>Violating intellectual property rights</li>
          <li>Harassment, abuse, or threats against other users</li>
          <li>Creating multiple accounts to circumvent restrictions</li>
          <li>Automated scraping or data harvesting without permission</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>Intellectual Property</h2>
        <p>
          All content, features, and functionality are owned by SPL Shield and protected by
          intellectual property laws. Users receive a limited, non-exclusive license to use the
          services for their intended purpose, without rights to reproduce, distribute, or create
          derivative works.
        </p>
      </article>

      <article className="page__section">
        <h2>Account Termination</h2>
        <p>
          SPL Shield may suspend or terminate accounts that violate these terms, engage in prohibited
          activity, or pose security risks. Users may terminate accounts by contacting support;
          termination does not relieve users of obligations under the terms.
        </p>
      </article>

      <article className="page__section">
        <h2>Governing Law</h2>
        <p>
          These terms are governed by applicable laws, with disputes subject to the exclusive
          jurisdiction of competent courts. If any provision is unenforceable, remaining provisions
          remain in effect.
        </p>
      </article>

      <article className="page__section">
        <h2>Updates to Terms</h2>
        <p>
          SPL Shield may update these terms to reflect changes in services, legal requirements, or
          business practices. Material updates will be communicated to users. Continued use after
          changes signifies acceptance; users who disagree should discontinue use.
        </p>
      </article>

      <article className="page__section">
        <h2>Contact Information</h2>
        <p>Email: <a className="page__inline-link" href="mailto:legal@splshield.com">legal@splshield.com</a></p>
        <p>Subject Line: Terms of Service Inquiry</p>
        <p>Response Time: Within 5 business days</p>
        <p>Legal Department: Available Monday&ndash;Friday</p>
      </article>
    </section>
  )
}

export default Terms

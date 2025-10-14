import '../styles/page.css'

const RESOURCES = [
  {
    title: 'SPL Shield Docs',
    description: 'Product deep dives, architecture notes, and deployment best practices.',
    href: 'https://docs.splshield.com/splshield',
  },
  {
    title: 'Terms of Use',
    description: 'Legal terms governing access to SPL Shield services and content.',
    href: 'https://docs.splshield.com/terms',
  },
  {
    title: 'Privacy Policy',
    description: 'How SPL Shield collects, stores, and protects customer information.',
    href: 'https://docs.splshield.com/privacy',
  },
  {
    title: 'Security Guide',
    description: 'Security controls, incident response procedures, and hardening guidance.',
    href: 'https://docs.splshield.com/security',
  },
]

const SplShield = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>SPL Shield</h1>
        <p className="page__lede">
          Official resources for understanding the SPL Shield platform, policies, and security
          posture.
        </p>
      </header>

      <div className="page__grid">
        {RESOURCES.map((resource) => (
          <article key={resource.href} className="page__card">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a
              className="page__inline-link"
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open resource →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SplShield

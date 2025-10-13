import { NavLink, Outlet } from 'react-router-dom'
import '../styles/layout.css'

const NAV_ITEMS = [
  { to: '/', label: 'Overview' },
  { to: '/docs', label: 'Product Guides' },
  { to: '/knowledge-base', label: 'Knowledge Base' },
  { to: '/whitepaper', label: 'Whitepaper' },
]

const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL ?? 'support@splshield.com'
const SITE_ENV = import.meta.env.VITE_SITE_ENV ?? 'production'

const Layout = () => {
  const showEnvBanner = SITE_ENV.toLowerCase() !== 'production'

  return (
    <div className="layout">
      <aside className="layout__sidebar">
        <div className="layout__brand">
          <img src="/logo.png" alt="SPL Shield logo" className="layout__brand-logo" />
          <div className="layout__brand-text">
            <span className="layout__brand-accent">SPL</span> Shield Docs
          </div>
        </div>
        <nav className="layout__nav">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive ? 'layout__nav-link layout__nav-link--active' : 'layout__nav-link'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="layout__main">
        {showEnvBanner && (
          <div className="layout__env-banner">
            You are viewing the {SITE_ENV.toUpperCase()} build.
          </div>
        )}

        <main className="layout__content">
          <Outlet />
        </main>

        <footer className="layout__footer">
          <p>
            Need help? Reach out at{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="layout__footer-link">
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p className="layout__footer-copy">&copy; {new Date().getFullYear()} SPL Shield</p>
        </footer>
      </div>
    </div>
  )
}

export default Layout

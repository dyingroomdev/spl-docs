import { Link } from 'react-router-dom'
import '../styles/page.css'

const NotFound = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>Page not found</h1>
        <p className="page__lede">The page you’re after doesn’t exist (yet).</p>
        <Link to="/" className="button button--primary">
          Back to documentation
        </Link>
      </header>
    </section>
  )
}

export default NotFound

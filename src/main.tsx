import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import './index.css'
import App from './App.tsx'
import { mdxComponents } from './components/MDXComponents.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MDXProvider components={mdxComponents}>
        <App />
      </MDXProvider>
    </BrowserRouter>
  </StrictMode>,
)

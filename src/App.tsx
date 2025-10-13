import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import DocsHub from './pages/DocsHub'
import DocArticle from './pages/DocArticle'
import Home from './pages/Home'
import KnowledgeBase from './pages/KnowledgeBase'
import NotFound from './pages/NotFound'
import Whitepaper from './pages/Whitepaper'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<DocsHub />} />
        <Route path="docs/:slug" element={<DocArticle />} />
        <Route path="knowledge-base" element={<KnowledgeBase />} />
        <Route path="whitepaper" element={<Whitepaper />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

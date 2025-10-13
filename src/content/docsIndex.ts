import type { ComponentType } from 'react'

export type DocFrontmatter = {
  slug: string
  category: string
  title: string
  description: string
  order?: number
  readingTime?: number
}

export type DocEntry = DocFrontmatter & {
  Component: ComponentType
}

type DocModule = {
  default: ComponentType
  frontmatter: DocFrontmatter
}

const modules = import.meta.glob<DocModule>('./docs/*.mdx', { eager: true })

export const DOCS: DocEntry[] = Object.values(modules)
  .map(({ default: Component, frontmatter }) => ({
    ...frontmatter,
    Component,
  }))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

export const DOCS_BY_CATEGORY = DOCS.reduce<Record<string, DocEntry[]>>((acc, doc) => {
  const category = doc.category
  acc[category] = acc[category] ? [...acc[category], doc] : [doc]
  acc[category].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  return acc
}, {})

export const getDocBySlug = (slug: string) => DOCS.find((doc) => doc.slug === slug)

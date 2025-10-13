import type { MDXComponents } from 'mdx/types'
import type { JSX } from 'react'
import { createElement } from 'react'
import '../styles/mdx.css'

type PrimitiveTag = 'h1' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'li' | 'a' | 'blockquote' | 'code' | 'pre'

type PrimitiveProps<Tag extends PrimitiveTag> = JSX.IntrinsicElements[Tag] & { className?: string }

const mergeClassName = (base: string, extra?: string) => (extra ? `${base} ${extra}` : base)

const withClassName = <Tag extends PrimitiveTag>(tag: Tag, baseClass: string) => {
  return ({ className, ...rest }: PrimitiveProps<Tag>) =>
    createElement(tag, {
      ...rest,
      className: mergeClassName(baseClass, className),
    })
}

export const mdxComponents: MDXComponents = {
  h1: withClassName('h1', 'mdx-heading mdx-heading--h1'),
  h2: withClassName('h2', 'mdx-heading mdx-heading--h2'),
  h3: withClassName('h3', 'mdx-heading mdx-heading--h3'),
  p: withClassName('p', 'mdx-paragraph'),
  ul: withClassName('ul', 'mdx-list'),
  ol: withClassName('ol', 'mdx-list'),
  li: withClassName('li', 'mdx-list__item'),
  a: withClassName('a', 'mdx-link'),
  blockquote: withClassName('blockquote', 'mdx-quote'),
  code: withClassName('code', 'mdx-code'),
  pre: withClassName('pre', 'mdx-pre'),
}

import * as React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getAllPosts } from '@/lib/api'

export default function Home({ allPosts }): React.FunctionComponent {
  return allPosts.map(post => (
    <div key={post.slug}>
      <Link
        as={`/posts/${post.slug}`}
        href="/posts/[slug]"
      >
        <a>
          {post.title}
        </a>
      </Link>
    </div>
  ))
}

export async function getStaticProps(): GetStaticProps {
  const allPosts = getAllPosts([
    'title',
    'data',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

import * as React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getAllPosts } from '@/lib/api'
import Layout from '@/layouts/Layout'

export default function Home({ allPosts }): React.FunctionComponent {
  const renderPosts = () => allPosts.map(post => (
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

  return (
    <>
      {renderPosts()}
    </>
  )
}

Home.Layout = Layout

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

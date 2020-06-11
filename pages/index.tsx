import * as React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Button } from 'antd';

import { getAllPosts } from '@/lib/api'

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
      <Button 
        type="primary"
      >
        poi
      </Button>
    </>
  )
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

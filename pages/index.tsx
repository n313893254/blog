import Head from 'next/head'
import {getAllPosts, getPostBySlug} from '@/lib/api'
import Link from 'next/link'

export default function Home({allPosts}) {
  console.log(allPosts, 'allPosts')
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

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'data',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {allPosts},
  }
}

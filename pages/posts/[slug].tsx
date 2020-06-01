import * as React from 'react'

import { getPostBySlug, getAllPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { GetStaticPaths, GetStaticProps } from 'next'

interface Props {
  post: {
    content: string,
  }
}

export default function Post(props: Props): React.FunctionComponent {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.post.content }}
    />
  )
}

export async function getStaticProps({ params }): GetStaticProps {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths(): GetStaticPaths {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

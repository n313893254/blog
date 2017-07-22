import React from "react"
import Helmet from "react-helmet"

import Post from '../components/Post'

import 'prismjs/themes/prism-okaidia.css'

export default function BlogPost({
  data = {}
}) {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet title={`Double Sheep - ${post.frontmatter.title}`} />
      <Post/>
    </div>
  )
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

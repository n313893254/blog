import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'

const ArchiveContainer = styled.div `
  background-color: white;
  min-height: 100%;
`

export default function Archive({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <ArchiveContainer>
      <ul>
        {
          posts
            .map(({ node: post }) => {
              const { frontmatter } = post
              return (
                <li key={post.id}>
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </li>
              )
            })
        }
      </ul>
    </ArchiveContainer>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

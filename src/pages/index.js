import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import Preview from '../components/Preview'

const getParams = () => {
  if (!window || !window.location) {
    return {}
  }
  return window.location.search.replace('?', '')
}

export default class Index extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <div>
        {
          posts
            .filter(post => {
              return post.node.frontmatter.title.length > 0
            })
            .map(({ node: post }) => {
              return (
                <Preview/>
              )
            })
        }
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
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

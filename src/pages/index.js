import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

const getParams = () => {
  if (!window || !window.location) {
    return {}
  }
  return window.location.search.replace('?', '')
}

export default class Index extends React.Component {
  render() {
    const { data } = this.props
    console.log(data.allMarkdownRemark)
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div>
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

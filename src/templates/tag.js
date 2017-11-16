import React from 'react'
import Link from 'gatsby-link'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(({ node }) => (
      <li key={node.fields.slug}>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </li>
    ))
  }
}

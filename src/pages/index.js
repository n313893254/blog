import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
import { Card } from 'antd'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {/* <Bio /> */}
        {posts.map(post => {
          if (post.node.frontmatter.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            const titleLink = (
              <Link
                style={{ boxShadow: 'none' }}
                to={post.node.frontmatter.path}
              >
                {title}

              </Link>
            )
            return (
              <Card className="mt-10"
                    title={titleLink}
              >
                <div key={post.node.frontmatter.path}>
                  <small>{post.node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                </div>
              </Card>
            )
          }
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Row, Col } from 'antd'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <main className="markdown">
        <Row>
          <Col span={20} offset={2}>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <div dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Col>
        </Row>
      </main>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
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
        title
        date
      }
    }
  }
`

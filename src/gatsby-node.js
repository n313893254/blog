const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPages } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/template/blog-post.js`)
    resolve(
      graphql(`{
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }`).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPages({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {
              
            }
          })
        })
      })
    )
  })
}

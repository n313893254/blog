import React from 'react'
import '../@styles/antd/antd.less'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import { Layout } from 'antd'

import { rhythm, scale } from '../utils/typography'

const { Header, Footer, Sider, Content } = Layout;

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            DoubleSheep Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            DoubleSheep Blog
          </Link>
        </h3>
      )
    }
    return (
      <Layout>
        <Header>{header}</Header>
        <Layout>
          {/* <Sider>Sider</Sider> */}
          <Content>
            <Container
              style={{
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
              {children()}
            </Container>
          </Content>
        </Layout>
      </Layout>

    )
  }
}

export default Template

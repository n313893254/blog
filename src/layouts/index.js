import React from 'react'
import '../@styles/antd/antd.less'
import '../@styles/global.scss'
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

    header = (
      <div>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          <img
            src={'https://avatars2.githubusercontent.com/u/18737885?s=400&u=51c729c1f22c4846e7e75401af72fe9cab506510&v=4'}
            alt={`DoubleSheep`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          DoubleSheep Blog
        </Link>
      </div>
    )
    return (
      <Layout>
        <Header>{header}</Header>
        <Layout>
          <Sider>Sider</Sider>
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

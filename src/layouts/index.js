import React from 'react'
import Link from 'gatsby-link'
import '../@styles/antd/antd.less'
import '../@styles/global.scss'
import { Container } from 'react-responsive-grid'
import { Layout } from 'antd'
import SideMenu from '../SideMenu'

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
          {/* <Avatar size="large"
                  // className="text-center mt-40"
                  src="https://avatars2.githubusercontent.com/u/18737885?s=400&u=51c729c1f22c4846e7e75401af72fe9cab506510&v=4"
          /> */}
          DoubleSheep
        </Link>
      </div>
    )
    return (
      <Layout>
        {/* <Header>{header}</Header> */}
        <Layout>
          {/* <Sider>
            <SideMenu></SideMenu>
          </Sider> */}
          <Content>
            <Container
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

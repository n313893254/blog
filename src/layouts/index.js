import React from 'react'
import Link from 'gatsby-link'
import '../@styles/antd/antd.less'
import '../@styles/global.scss'
import { Layout } from 'antd'
import SideMenu from '../SideMenu'
import styles from './styles.scss'

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
          DoubleSheep
        </Link>
      </div>
    )
    return (
      <Layout>
        <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#001529'}}>
          <SideMenu></SideMenu>
        </Sider>
        <Layout style={{marginLeft: 200}}>
          <Header style={{background: '#fff'}}>{header}</Header>
          <Content style={{padding: '20px 20px'}}>
            {children()}
          </Content>
        </Layout>
      </Layout>

    )
  }
}

export default Template

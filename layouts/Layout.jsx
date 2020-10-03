import { Button, Layout, Menu } from 'antd';
import Link from 'next/link'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function MyLayout({ children }) {
  return (
    <Layout>
      <Header>
        Header
      </Header>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="markdown">
              <Link
                href="/"
              >
                <a>
                  MarkDown
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="animate">
              <Link
                href="/animates"
              >
                <a>
                  Animate
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          {children}
        </Content>
      </Layout>
      <Footer>
        Footer
      </Footer>
    </Layout>
  )
}
import React from 'react'
import Link from 'gatsby-link'
import { Avatar, Row, Col, Menu } from 'antd'
import styles from './styles.scss'

const MenuItem = Menu.Item

export default class C extends React.Component {
  render() {
    return (
      <main className="side-menu">

        <Menu className={styles.menu}
              theme="dark"
              mode="inline"
        >
          <MenuItem style={{height: '200px'}}
                    className={styles.sideLogo}
                    disabled
          >
            <Avatar size="large"
                    className="logo mt-20 ml-10"
                    style={{width: '150px', height: '150px', 'borderRadius': '50%'}}
                    src="https://avatars2.githubusercontent.com/u/18737885?s=400&u=51c729c1f22c4846e7e75401af72fe9cab506510&v=4"
            />
          </MenuItem>
          <MenuItem className="mt-0 mb-0"
          >
            <Link to={'/'}>
              <span>
                博客
              </span>
            </Link>
          </MenuItem>
          <MenuItem className="mt-0 mb-0"
          >
            <span>
              ATD
            </span>
          </MenuItem>
        </Menu>
      </main>
    )
  }
}

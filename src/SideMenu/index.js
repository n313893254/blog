import React from 'react'
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
                    style={{width: '150px', height: '150px', 'border-radius': '50%'}}
                    src="https://avatars2.githubusercontent.com/u/18737885?s=400&u=51c729c1f22c4846e7e75401af72fe9cab506510&v=4"
            />
          </MenuItem>
          <MenuItem
          >
            {/* <div className={styles.mask}>hello</div> */}
            <span>
              <span>
                博客
              </span>
            </span>
          </MenuItem>
        </Menu>
      </main>
    )
  }
}
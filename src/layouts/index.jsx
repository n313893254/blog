import React from 'react'
import Link from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import { Container } from 'react-responsive-grid'

import MediaQuery from 'react-responsive'

import SideBar from '../components/LeftCol'

import { rhythm, scale } from '../utils/typography'

require('prismjs/themes/prism-solarizedlight.css')

injectGlobal`
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #eaeaea;
  color: #1a1a1a;
  font-family: lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
}
ul, ol {
  list-style-type: none;
}
dd, dl, li, ol, ul {
  margin: 0;
  padding: 0;
}
a {
  background: transparent;
  text-decoration: none;
  color: #08c;
  box-shadow: none;
}
* {
  box-sizing: border-box;
}
`

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
      <div>
        <MediaQuery query="(min-width: 800px)">
          <SideBar showMiddle={this.showMiddleHandler}></SideBar>
        </MediaQuery>
        <Container
          style={{
            maxWidth: '75%',
            position: 'absolute',
            right: '0',
            minHeight: '100%',
            background:'#eaeaea',
            width: 'auto'
          }}
        >
          {header}
          {children()}
        </Container>
      </div>
    )
  }
}

export default Template

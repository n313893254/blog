import React from 'react'
import Link from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import { Container } from 'react-responsive-grid'

import MediaQuery from 'react-responsive'

import SideBar from '../components/LeftCol'

import { rhythm, scale } from '../utils/typography'

require('prismjs/themes/prism-solarizedlight.css')

injectGlobal`
  ul, ol {
    list-style-type: none;
  }
  a {
    background: transparent;
    text-decoration: none;
    color: #08c;
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
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            position: 'absolute',
            right: '0',
            'min-height': '100%',
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

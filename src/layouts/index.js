import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from 'styled-components'
import { rhythm } from "../utils/typography"

import loadWebFonts from '../services/web-fonts'

// import Content from '../components/Content'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  componentDidMount () {
    loadWebFonts()
  }

  render() {
    return (
      <Root>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: rhythm(1),
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                DoubleSheep
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </Root>
    )
  }
}

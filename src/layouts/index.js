import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from 'styled-components'
import { rhythm } from "../utils/typography"

import loadWebFonts from '../services/web-fonts'

import Header from '../components/Header'
import Content from '../components/Content'

import '../css/base.css'

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
        <Header />
        <Content>
          {this.props.children()}
        </Content>
      </Root>
    )
  }
}

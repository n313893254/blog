import React, { Component } from 'react'
import styled from 'styled-components'

import { animateBackground, animateShake } from '../css/animations'

const Header = styled.header`
  ${animateBackground}
  ${animateShake}
`

class BlogHeader extends Component {
  render () {
    return (
      <Header id="blog-header" {...this.props}>
        <p>poi</p>
      </Header>
    )
  }
}

export default BlogHeader

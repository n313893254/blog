import React, { Component } from 'react'
import styled from 'styled-components'

import { animateBackground } from '../css/animations'

const Header = styled.header`
  ${animateBackground}
`

class BlogHeader extends Component {
  render () {
    <Header id="blog-header">
    </Header>
  }
}

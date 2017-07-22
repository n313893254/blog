import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import StyledLink from './Link'

const Post = styled.section `
  width: 100%;
  background-color: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
  padding: ${rhythm(1)} ${rhythm(1)};
  outline: 1px solid rgba(0, 0, 0, 0.125);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    border-bottom-width: 0;
  }
  @media only screen and (min-width: 768px) {
    padding: ${rhythm(2)} ${rhythm(2)};
    padding-top: ${rhythm(1)};
    margin-bottom: ${props => props.preview ? rhythm(2) : 0};
  }
`

export default function({
  html: __html,
  linkTo,
  title,
  ...rest
}) {
  const isPost = (truthy, falsy) => {
    if (linkTo === '/') {
      return truthy
    }
    return falsy
  }
  return (
    <Post className="post" {...rest}>
      <h1>
        {
          isPost(title, <Link style={{ color: 'inherit', textDecoration: 'none' }} to={linkTo}>{title}</Link>)
        }
      </h1>
      <div dangerouslySetInnerHTML={{ __html }} />
      <StyledLink href={linkTo}>{isPost('Back', 'Read more')}</StyledLink>
    </Post>
  )
}

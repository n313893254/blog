import React from "react"
import Link from 'gatsby-link'

export default function({
  html: __html,
  linkTo,
  title,
  ...rest
}) {
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

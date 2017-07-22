import React from 'react'

import Post from './Post'

export default function Preview ({
  html,
  limit = 400,
  title,
  to,
  ...rest
}) {
  console.log(html)
  // let intro = html.split('<p>').slice(1).shift().replace('</p>', '')
  // if (intro.length > limit) {
  //   intro = intro.slice(0, limit).trim() + '...'
  // }
  return <Post />
}

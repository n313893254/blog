import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={'https://avatars2.githubusercontent.com/u/18737885?s=400&u=51c729c1f22c4846e7e75401af72fe9cab506510&v=4'}
          alt={`DoubleSheep`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>DoubleSheep</strong> who lives and works in ShenZen building useful things.{' '}
          <a href="https://twitter.com/n313893254">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio

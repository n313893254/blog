import React from 'react'

import GatsbyLink from "gatsby-link"
import styled from 'styled-components'

const Overlay = styled.div`
  background-color: #4d4d4d;
  width: 100%;
  height: 188px;
  position: absolute;
`

const SelfIntro = styled.div`
  width: 76%;
  text-align: center;
  margin: 112px auto 0
`

const Avatar = styled.img`
  border: 5px solid #fff;
  border-radius: 300px;
  width: 128px;
  height: 128px;
  margin: 0 auto;
  position: relative;
`

const Author = styled.h1`
  margin: .67em 0;
  font-family: Roboto, serif;
  font-size: 30px;
`

const Link = styled(GatsbyLink)`
  color: #696969;
  box-shadow: none;
`

const Tags = styled.p`
  color: #999;
  font-size: 14px;
  line-height: 25px;
`

const Menu = styled.nav`
  font-weight: 300;
  line-height: 31px;
  text-transform: uppercase;
  float: none;
  min-height: 150px;
  margin-left: -32px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
`

const Menu2 = styled.nav`
  font-size: 12px;
  margin-bottom: 20px;
`

const ColorA = styled.a`
  color: #696969;
  cursor: pointer;
  box-shadow: none;
`

const Social = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`

const SideBar = styled.div`
  background-color: white;
  width: 300px;
  height: 100%;
  position: fixed;
  text-align: center;
  opacity: 1;
`

export default ({ showMiddle }) => {
  return (
    <SideBar>
      <Overlay />
      <SelfIntro>
        <Link to="/">
          <Avatar src="https://avatars2.githubusercontent.com/u/18737885?s=400&u=51c729c1f22c4846e7e75401af72fe9cab506510&v=4"></Avatar>
        </Link>
        <Author>
          <Link to="/">DoubleSheep</Link>
        </Author>
        <Tags>前端 / 提督</Tags>
      </SelfIntro>
      <Menu>
        <ul>
          <li><Link to="/">主页</Link></li>
          <li><Link to="/archives">归档</Link></li>
        </ul>
      </Menu>
      <Menu2>
        <ColorA onClick={() => showMiddle('all')}>所有文章 / </ColorA>
        <ColorA onClick={() => showMiddle('me')}>关于我</ColorA>
      </Menu2>
      <Social>

      </Social>
    </SideBar>
  )
}

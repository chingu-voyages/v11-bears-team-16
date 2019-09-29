import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../shared/Colors'

const HeaderWrapper = styled('div')`
  height: 80px;
  padding: 20px 20px;
`

const Title = styled('h1')`
  width: fit-content;
  background: ${Colors.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(${Colors.textShadow});
  padding: 0px;
`

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )
  return (
    <HeaderWrapper>
      <Title>{site.siteMetadata.title}</Title>
    </HeaderWrapper>
  )
}

export default Header

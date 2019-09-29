import PropTypes from 'prop-types'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Colors } from '../shared/Colors'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Electrolize|Permanent+Marker&display=swap');  
   * {
    box-sizing: border-box;
   }  
   body {
    margin: 0;
    font-family: 'Electrolize', sans-serif;
    font-size: 18px;
    color: white;
   }  
   h1, h2, h3, h4, h5, h6 {
    font-family: 'Permanent Marker', serif;
   }
`

const LayoutWrapper = styled('div')`
  min-height: 100vh;
  background: ${Colors.primaryDark};
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout

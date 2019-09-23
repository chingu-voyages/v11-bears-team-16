import PropTypes from 'prop-types'
import React from 'react'
import './components.css'
import Footer from './footer'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <div className="content">
      <Header />
      <div>{children}</div>
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout

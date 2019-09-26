import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './components.css'

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
      <div className="header-wrapper">
        <h2>{site.siteMetadata.title}</h2>
      </div>
    )
}

export default Header

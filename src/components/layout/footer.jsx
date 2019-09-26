import React from 'react'

const Footer = () => (
  <footer>
    <hr />
    <br />
    <p>
      © {new Date().getFullYear()}{' '}
      <a href="https://github.com/chingu-voyages/v11-bears-team-16">v11 Bears Team 16</a>, All
      Rights Reserved.
    </p>
    <p>
      <i>
        {' '}
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </i>
    </p>
    <br />
    <br />
  </footer>
)

export default Footer

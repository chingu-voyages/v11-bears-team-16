import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../shared/Colors'

const Wrapper = styled('div')`
  width: 300px;
  height: 200px;
  background: ${Colors.primaryLight};

  p {
    margin: 0 auto;
  }
`

const Card = ({ title }) => (
  <Wrapper>
    <p>{title}</p>
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Card

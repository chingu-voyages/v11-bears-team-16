import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../shared/Colors'

const Wrapper = styled('div')`
  width: 300px;
  height: 200px;
  background: ${Colors.primaryLight};
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${Colors.boxShadow};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: ${Colors.boxHoverShadow};
  }
`

const Title = styled('h2')`
  font-family: 'Permanent Marker';
  font-size: 1.6rem;
  text-shadow: ${Colors.textShadow};
`

const Card = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Card

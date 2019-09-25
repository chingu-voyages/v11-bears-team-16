import PropTypes from 'prop-types'
import React from 'react'
import AnimatedBar from './AnimatedBar'

const BarsWrapper = ({ arr, left, right }) => {
  // FIXME: fix logic - left, right pointers
  // don't necessarily make sense for other algorithms
  const getColor = index => (index === left || index === right ? 'orange' : 'teal')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: '30px',
      }}
    >
      {arr.map((elem, i) => (
        <AnimatedBar index={i} color={getColor(i)} size={elem} key={elem} />
      ))}
    </div>
  )
}

BarsWrapper.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.number).isRequired,
  left: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
}

export default BarsWrapper

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import Bar from './Bar'

const AnimatedBar = ({ index, color, size }) => {
  const [position, setPosition] = useState(index)

  const animations = useSpring({
    x: position,
    config: config.wobbly,
  })

  useEffect(() => {
    setPosition(index)
  }, [index])

  const transform = animations.x.interpolate(v => `translateX(${v * 30}px)`)

  return (
    <animated.div style={{ transform }}>
      <Bar color={color} size={size} />
    </animated.div>
  )
}

AnimatedBar.propTypes = {
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

export default AnimatedBar

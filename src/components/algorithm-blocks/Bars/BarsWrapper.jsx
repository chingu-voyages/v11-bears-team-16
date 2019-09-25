import React from 'react'
import AnimatedBar from './AnimatedBar'

const BarsWrapper = ({ arr, left, right }) => {
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
      {arr.map((elem, i) => {
        return <AnimatedBar index={i} color={getColor(i)} size={elem} key={elem} />
      })}
    </div>
  )
}

export default BarsWrapper

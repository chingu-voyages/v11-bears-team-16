import React from 'react'

const Bar = ({ color, size }) => (
  <div
    style={{
      // margin: "0 5px",
      background: color,
      height: `${size * 30}px`,
      width: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'white',
      paddingBottom: '8px',
    }}
  >
    {size}
  </div>
)

export default Bar

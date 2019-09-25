import React from 'react'

const ButtonsWrapper = ({ start, pause, reset }) => (
  <>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
  </>
)

export default ButtonsWrapper

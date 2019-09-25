import PropTypes from 'prop-types'
import React from 'react'

const ButtonsWrapper = ({ start, pause, reset }) => (
  <>
    <button type="button" onClick={start}>
      Start
    </button>
    <button type="button" onClick={pause}>
      Pause
    </button>
    <button type="button" onClick={reset}>
      Reset
    </button>
  </>
)

ButtonsWrapper.propTypes = {
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}

export default ButtonsWrapper

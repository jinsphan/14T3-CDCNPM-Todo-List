
import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export const TouchSpin = ({ value, up, down, onChangeValue, id }) => (
  <div className='input-group bootstrap-touchspin'>
    <div className='input-group-prepend'>
      <button className='btn btn-secondary btn-outline bootstrap-touchspin-down' type='button' onClick={() => down()}>-</button>
    </div>
    <input id={id} type='text' value={value} onChange={(e) => onChangeValue(e.target.value)} name='tch1' className='form-control' style={{ display: 'block' }} />
    <div className='input-group-append'>
      <button className='btn btn-secondary btn-outline bootstrap-touchspin-up' type='button' onClick={() => up()}>+</button>
    </div>
  </div>

)
TouchSpin.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
}
export default TouchSpin

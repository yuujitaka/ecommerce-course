import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...props}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...props} />
    { 
    //binary_logical_operators operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators
      label &&
        (<label className={`${props.value.length ? 'shrink' : '' } form-input-label`}>{label}</label>)
    }
  </div>
)
  
export default FormInput;
import React, { useState } from 'react'
import { IconError } from '../../assets/Icon/IconError'
import './EmailInput.scss'

const EmailInput = ({ onInputChange, placeholder, error }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
    onInputChange(newValue)
  }

  return (
    <div className="input-container">
      <input
        type="email"
        className={`input-container__input ${error ? 'error' : ''}`}
        placeholder={placeholder || 'Enter value...'}
        value={inputValue}
        onChange={handleChange}
      />
      {error && (
        <span className="input-container__icon">
          <IconError />
        </span>
      )}
      {error && <span className="input-container__error">{error}</span>}
    </div>
  )
}

export default EmailInput

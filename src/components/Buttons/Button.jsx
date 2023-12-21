import React from 'react'
import './Button.scss'

const Button = ({ onClick, label, variant }) => {
  const buttonClass = `custom-button ${variant || ''}`

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button

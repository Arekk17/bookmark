import React from 'react'
import './Switch.scss'

const Switch = ({ activeMode, onModeChange }) => {
  const modes = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']

  const handleClick = (mode) => onModeChange(mode)

  return (
    <div className="switch-container">
      {modes.map((mode) => (
        <div key={mode} className="switch-wrapper">
          <button
            className={`switch-button ${activeMode === mode ? 'active' : ''}`}
            onClick={() => handleClick(mode)}
          >
            {mode}
            {activeMode === mode && <div className="active-line"></div>}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Switch

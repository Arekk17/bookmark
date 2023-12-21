import React from 'react'
import './LandingLayout.scss'

const LandingLayout = ({ title, description, image, children }) => {
  return (
    <div className="landing">
      <div className="landing-text">
        <div className="landing-text__title">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="landing-text__buttons">{children}</div>
        </div>
      </div>
      <div className="landing-image">
        <img src={image} alt="Description" />
        <div className="blue-rectangle"></div>
      </div>
    </div>
  )
}

export default LandingLayout

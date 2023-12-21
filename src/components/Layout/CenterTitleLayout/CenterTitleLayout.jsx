import React from 'react'
import './CenterTitleLayout.scss'
const CenterTitleLayout = ({ title, description, children }) => (
  <div className="centerTitleLayout">
    <div className="centerTitleLayout-text">
      <h2 className="centerTitleLayout-text__title">{title}</h2>
      <p className="centerTitleLayout-text__description">{description}</p>
    </div>
    {children}
  </div>
)

export default CenterTitleLayout

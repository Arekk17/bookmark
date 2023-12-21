import React from 'react'
import Button from '../Buttons/Button'
import { LogoChrome } from '../../assets/Icon/LogoChrome'
import { LogoOpera } from '../../assets/Icon/LogoOpera'
import { LogoFirefox } from '../../assets/Icon/LogoFirefox'
import { BgDots } from '../../assets/Icon/BgDots'
import './Card.scss'

const cardData = [
  {
    id: 1,
    logo: <LogoChrome />,
    title: 'Add to Chrome',
    description: 'Minimum version 62',
  },
  {
    id: 2,
    logo: <LogoFirefox />,
    title: 'Add to Firefox',
    description: 'Minimum version 62',
  },
  {
    id: 3,
    logo: <LogoOpera />,
    title: 'Add to Opera',
    description: 'Minimum version 62',
  },
]

const Card = () => {
  return (
    <div className="container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-image">{card.logo}</div>
          <div className="card-text">
            <div className="card-text__title">{card.title}</div>
            <div className="card-text__description">{card.description}</div>
          </div>
          <div className="card-dotted">
            <BgDots />
          </div>
          <div className="card-button">
            <Button label="Add & Install Extension" variant="blue" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card

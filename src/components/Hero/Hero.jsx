import React from 'react'
import Button from '../Buttons/Button'
import FeaturesTab from '../../assets/illustration-hero.svg'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-content__text">
          <h2>A Simple Bookmark Manager</h2>
          <p>
            A clean and simple interface to organize your favourite website.
            Open a new browser tab and see your sites load instantly. Try it for
            free
          </p>
          <div className="hero-content__text__buttons">
            <Button label="Get it on Chrome" variant={'blue'} />
            <Button label="Get it on Firefox" variant={'white'} />
          </div>
        </div>
      </div>
      <div className="hero__image">
        <img src={FeaturesTab} alt="Description" />
        <div className="blue-rectangle"></div>
      </div>
    </div>
  )
}

export default Hero

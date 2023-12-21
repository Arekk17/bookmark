import React, { useState, useEffect } from 'react'
import { IconHamburger } from '../../assets/Icon/IconHamburger'
import { LogoBookmark } from '../../assets/Icon/LogoBookmark'
import Button from '../Buttons/Button'
import MobileNav from './MobileNav'
import './Navigation.scss'

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

  const handleToggleNav = () => setIsNavOpen((prevState) => !prevState)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav>
      <div className={`navigation ${isNavOpen ? 'hidden' : ''}`}>
        <div className="navigation-logo">
          <a href="#hero">
            <LogoBookmark />
          </a>
        </div>
        {isMobileView ? (
          <div className="navigation-hamburger" onClick={handleToggleNav}>
            <IconHamburger />
          </div>
        ) : (
          <div className="navigation-buttons">
            <button className="navigation-buttons__button">FUTURE</button>
            <button className="navigation-buttons__button">PRICING</button>
            <button className="navigation-buttons__button">CONTACT</button>
            <Button
              label="Login"
              variant="red"
              onClick={() => console.log('click')}
            />
          </div>
        )}
      </div>
      {isMobileView && isNavOpen && <MobileNav toggleNav={handleToggleNav} />}
    </nav>
  )
}
export default Navigation

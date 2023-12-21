import React, { useState, useEffect } from 'react'
import Button from '../Buttons/Button'
import { LogoBookmark } from '../../assets/Icon/LogoBookmark'
import { IconFacebook } from '../../assets/Icon/IconFacebook'
import { IconClose } from '../../assets/Icon/IconClose'
import { IconTwitter } from '../../assets/Icon/IconTwitter'
import './MobileNav.scss'

const MobileNav = ({ toggleNav }) => {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isClosing) {
      const timeoutId = setTimeout(() => {
        setIsClosing(false)
        toggleNav()
      }, 300)
      return () => clearTimeout(timeoutId)
    }
  }, [isClosing, toggleNav])

  const handleCloseNav = () => setIsClosing(true)
  return (
    <div className={`mobileNavigation ${isClosing ? 'closing' : ''}`}>
      <div className="mobileNavigation__logo">
        <LogoBookmark title="#fff" circle="#fff" center="#2F354F" />
        <div onClick={handleCloseNav}>
          <IconClose />
        </div>
      </div>
      <div className="mobileNavigation-buttons">
        <button className="mobileNavigation-buttons__button">Future</button>
        <button className="mobileNavigation-buttons__button">Pricing</button>
        <button className="mobileNavigation-buttons__button">Contact</button>
        <Button
          label="Login"
          variant="transparent"
          onClick={() => console.log('click')}
        />
      </div>
      <div className="mobileNavigation__social">
        <button>
          <IconFacebook />
        </button>
        <button>
          <IconTwitter />
        </button>
      </div>
    </div>
  )
}

export default MobileNav

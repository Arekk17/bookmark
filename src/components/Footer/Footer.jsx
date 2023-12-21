import React from 'react'
import { LogoBookmark } from '../../assets/Icon/LogoBookmark'
import { IconFacebook } from '../../assets/Icon/IconFacebook'
import { IconTwitter } from '../../assets/Icon/IconTwitter'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <LogoBookmark title="#fff" />
      </div>
      <div className="footer-buttons">
        <button className="footer-buttons__button">FUTURE</button>
        <button className="footer-buttons__button">PRICING</button>
        <button className="footer-buttons__button">CONTACT</button>
      </div>
      <div className="footer-social">
        <button className="footer-social__button">
          <IconFacebook />
        </button>
        <button className="footer-social__button">
          <IconTwitter />
        </button>
      </div>
    </div>
  )
}

export default Footer

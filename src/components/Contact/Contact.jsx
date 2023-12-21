import React, { useState } from 'react'
import Counter from '../Counter/Counter'
import Button from '../Buttons/Button'
import EmailInput from '../Input/EmailInput'
import './Contact.scss'

const Contact = () => {
  const [contactEmail, setContactEmail] = useState('')
  const [error, setError] = useState('')

  const handleContactClick = () => {
    if (contactEmail.length === 0) {
      setError('email address cannot be empty')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contactEmail)) {
      setError("Whoops, make sure it's an email")
      return
    }

    console.log('Adres e-mail:', contactEmail)
    setError('')
  }

  const handleEmailChange = (value) => {
    setContactEmail(value)
    setError('')
  }

  return (
    <div className="contact">
      <div className="contact-counter">
        <Counter />
      </div>
      <div className="contact-title">
        <h2>Stay up-to-date with what we&apos;re doing</h2>
      </div>
      <div className="contact-form">
        <EmailInput error={error} onInputChange={handleEmailChange} />
        <div className="contact-form__button">
          <Button
            label="Contact Us"
            variant="red"
            onClick={handleContactClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact

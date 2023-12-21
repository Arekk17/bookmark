import React from 'react'
import Searching from '../../assets/illustration-features-tab-2.svg'
import LandingLayout from '../Layout/LandingLayout/LandingLayout'
import Button from '../Buttons/Button'
import './Modal.scss'

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <LandingLayout
          title={'Inteligente Search'}
          description={
            'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks'
          }
          image={Searching}
        >
          <Button
            label={'More info'}
            variant={'blue'}
            onClick={() => console.log('click')}
          />
        </LandingLayout>
      </div>
    </div>
  )
}

export default Modal

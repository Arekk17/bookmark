import React, { useState, useEffect } from 'react'
import Features from './components/Features/Features'
import Hero from './components/Hero/Hero'
import LandingExtension from './components/LandingExtension/LandingExtension'
import Navigation from './components/Navigation/Navigation'
import Questions from './components/Questions/Questions'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'

function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal()
    }, 30000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const navigationElement = document.querySelector('.navigation')
    const handleMouseOver = () => {
      openModal()
      navigationElement.removeEventListener('mouseover', handleMouseOver)
    }
    if (navigationElement) {
      navigationElement.addEventListener('mouseover', handleMouseOver)
    }
    return () => {
      if (navigationElement) {
        navigationElement.removeEventListener('mouseover', handleMouseOver)
      }
    }
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <LandingExtension />
      <Questions />
      <Contact />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App

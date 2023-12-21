import React, { useState } from 'react'
import Switch from '../Switch/Switch'
import Button from '../Buttons/Button'
import { FeatureData } from './FeaturesData'
import LandingLayout from '../Layout/LandingLayout/LandingLayout'
import CenterTitleLayout from '../Layout/CenterTitleLayout/CenterTitleLayout'

const Features = () => {
  const [activeMode, setActiveMode] = useState('Simple Bookmarking')

  const handleModeChange = (mode) => {
    setActiveMode(mode)
  }
  const activeFeature = FeatureData.find(
    (feature) => feature.name === activeMode,
  )

  return (
    <CenterTitleLayout
      title="Features"
      description="Our aim is to make it quick and easy for you to access your favourite
    website. Your bookmarks sync between your devices so you can access
    them on the go."
    >
      <Switch activeMode={activeMode} onModeChange={handleModeChange} />
      <LandingLayout
        title={activeFeature.title}
        description={activeFeature.description}
        image={activeFeature.image}
      >
        <Button
          label={'More info'}
          variant={'blue'}
          onClick={() => console.log('click')}
        />
      </LandingLayout>
    </CenterTitleLayout>
  )
}

export default Features

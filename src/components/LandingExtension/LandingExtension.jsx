import React from 'react'
import CenterTitleLayout from '../Layout/CenterTitleLayout/CenterTitleLayout'
import Card from '../Card/Card'

const LandingExtension = () => {
  return (
    <CenterTitleLayout
      title="Download the extension"
      description="We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritze"
    >
      <div>
        <Card />
      </div>
    </CenterTitleLayout>
  )
}

export default LandingExtension

import React from 'react'
import CenterTitleLayout from '../Layout/CenterTitleLayout/CenterTitleLayout'
import DropDownList from '../DropDownList/DropDownList'
import Button from '../Buttons/Button'

const Questions = () => (
  <CenterTitleLayout
    title="Frequently Asked Questions"
    description="Here are some of our FAQs If you have any other question you'd like answered please feel free to email us"
  >
    <DropDownList />
    <div style={{ marginTop: '30px' }}>
      <Button label="More Info" variant="blue" />
    </div>
  </CenterTitleLayout>
)

export default Questions

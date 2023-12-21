import * as React from 'react'

export const IconArrow = ({ color = '#5267DF', rotate = 0, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={12}
    {...props}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <path fill="none" stroke={color} strokeWidth={3} d="m1 1 8 8 8-8" />
  </svg>
)

import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(35000)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => Math.max(prevCount - 1, 0))
    }, 20)
    return () => clearInterval(timer)
  }, [])

  return <div>{`${count}+ ALREADY JOINED `}</div>
}

export default Counter

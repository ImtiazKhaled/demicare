import React, { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'

const Calendly = () => {
  
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js')
    head.appendChild(script)
  },[])
  
  return (
    <div className='appointment-container'>
      <InlineWidget url="https://calendly.com/hoangluu404/30min" />
    </div>
  )
}

export default Calendly
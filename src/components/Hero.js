import React from 'react'
import picture from '../img/hero-img.jpg'
import { UsersThree } from 'phosphor-react'

function Hero ({setShowPopUp}) {
  return (
    <div className='section-hero'>
      <div className='hero-text-box'>
        <h1 className='hero-heading'> <span> Secure</span> and reliable tool for everyday communication</h1>
        <button className='hero-btn' onClick={() =>setShowPopUp(true)} >Start chatting</button>
        <div className='customers'>
          <div className='customers-img'>
            <UsersThree className='customers-icon'/>
          </div>
          <span>Over 1 milion active daily users</span>
        </div>
      </div>
      <div className='hero-img-box'>
        <img className='hero-img' src={picture}/>
      </div>
    </div>
  )
}
export default Hero
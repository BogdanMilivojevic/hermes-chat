import React from 'react'
import ChromeLogo from '../img/chrome-logo.png'
import SafariLogo from '../img/safari-logo.png'
import FirefoxLogo from '../img/firefox-logo.png'
import EdgeLogo from '../img/edge-logo.png'

function Browsers () {
  return (
    <div className='section-browser'>
      <h1 className='browser-heading'> Fully compatible with all browsers</h1>
      <div className='browsers-img'>
        <img src={ChromeLogo}/>
        <img src={SafariLogo}/>
        <img src={EdgeLogo}/>
        <img src={FirefoxLogo}/>
      </div>
    </div>
  )
}
export default Browsers

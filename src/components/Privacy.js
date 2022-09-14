import React from 'react'
import privacyp from '../img/privacy.jpg'
import { EyeSlash, X, User } from 'phosphor-react'

function Privacy (){
  return (
    <div className='section-privacy'>
      <p>Privacy first</p>
      <h1 className='privacy-heading'>User&apos;s privacy is of paramount importance to us</h1>
      <div className='privacy-box'>
        <ul className='privacy-list'>
          <li>  <EyeSlash className='privacy-icon'/> Communication is completely private</li>
          <li> <X className='privacy-icon'/> No messages or locations are stored</li>
          <li> <User className='privacy-icon'/> User has the complete control</li>
        </ul>
        <img className='privacy-picture' src={privacyp}/>
      </div>
    </div>
  )
}
export default Privacy
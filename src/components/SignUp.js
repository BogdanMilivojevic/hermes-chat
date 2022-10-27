import React from 'react'
import signup from '../img/signup-img.jpg'

function SignUp ({ setShowRegister }) {
  return (
    <div className='section-signup'>
      <div className='signup-grid'>
        <div className='signup-box'>
          <h1 className='signup-heading'>Sign up now</h1>
          <p>Hermes-chat is completely free and doesn&apos;t include any hidden fees.</p>
          <button className='signup-btn' onClick={() => setShowRegister(true)} >Sign up</button>
        </div>
        <img className='signup-img' src={signup}/>
      </div>
    </div>
  )
}
export default SignUp

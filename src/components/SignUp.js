import React from 'react'
import signup from '../img/signup-img.jpg'

function SignUp (){
  return (
    <div className='section-signup'>
      <div className='signup-grid'>
        <div className='signup-box'>
          <h1 className='signup-heading'>Sign up for free</h1>
          <p>Hermes-chat is completely free and doesn&apos;t include any hidden fees.</p>
          <button className='signup-btn'>Sign up with Google</button>
        </div>
        <img className='signup-img' src={signup}/>
      </div>
    </div>
  )
}
export default SignUp
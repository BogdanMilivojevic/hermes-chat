import React from 'react'
import { Bird } from 'phosphor-react'

function Nav () {
  return (
    <>
      <nav className='navigation'>
        <div className='nav-logo'>
          <Bird className='nav-icon'/>
          <p className='logo-title'>Hermes-chat</p>
        </div>
        <div className='nav-text'>
          <a href='#'>Privacy first</a>
          <a className='nav-cta' href='#'> Sign in</a>
        </div>
      </nav>
    </>
  )
}
export default Nav

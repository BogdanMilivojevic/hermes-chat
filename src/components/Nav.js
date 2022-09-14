import React from 'react'
import { Bird } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

function Nav () {
  const navigate = useNavigate()
  return (
    <>
      <nav className='navigation'>
        <div className='nav-logo'>
          <Bird className='nav-icon'/>
          <p className='logo-title'>Hermes-chat</p>
        </div>
        <div className='nav-text'>
          <a href='#'>Privacy first</a>
          <button className='btn-login' onClick={() => navigate('/chat')}> Sign in</button>
        </div>
      </nav>
    </>
  )
}

export default Nav

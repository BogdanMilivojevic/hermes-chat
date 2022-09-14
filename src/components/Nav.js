import React, { useState } from 'react'
import { Bird} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

function Nav () {
  const [nav, stickyNav] = useState(false)

  function Sticky () {
    if (window.scrollY >= 500) {
      stickyNav(true)
    } else {
      stickyNav(false)
    }
  }
  window.addEventListener('scroll', Sticky)

  let navigate = useNavigate()
  const routeChange = () => {
    let path = '/chat'
    navigate(path)
  }

  return (
    <>
      <nav className={nav ? 'navigation sticky' : 'navigation'}>
        <div className='nav-logo'>
          <Bird className='nav-icon'/>
          <p className='logo-title'>Hermes-chat</p>
        </div>
        <div className='nav-text'>
          <a href='#'>Privacy first</a>
          <button className='btn-login' onClick={routeChange}> Sign in</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
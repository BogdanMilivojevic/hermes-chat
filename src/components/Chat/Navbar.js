import React, { useState, useEffect } from 'react'
import { Bird } from 'phosphor-react'
import { logoutUser } from '../../auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Navbar = () => {
  // Current user
  const [currentUser, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  const navigate = useNavigate()

  const signout = () => {
    logoutUser(navigate)
  }

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Bird className='navbar-icon'/>
        <p>Hermes-Chat</p>
      </div>
      <div className='navbar-user'>
        <img src={currentUser.photoURL}/>
        <span>{currentUser.displayName}</span>
      </div>
      <button className='logout-btn' onClick={signout}>Logout</button>
    </div>
  )
}

export default Navbar

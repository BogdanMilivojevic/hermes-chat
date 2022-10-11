import React, { useState } from 'react'
import { login } from '../auth'
import { useNavigate } from 'react-router-dom'

const PopUp = ({ setShowPopUp, setShowRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Navigation
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please fill-in all data')
      return
    }
    login(email, password, navigate, setShowPopUp)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='overlay' onClick={() => setShowPopUp(false)}>
      <div className='login-container' onClick={(e) => e.stopPropagation()}>
        <div className='x-container'>
          <h1>Login into your account</h1>
          <button className='x-btn' onClick={() => setShowPopUp(false)}>X</button>
        </div>
        <form className='login-form' onSubmit={onSubmit}>
          <div className='form-label-email'>
            <label>Email</label>
            <input type='email' placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='form-label-password'>
            <label>Password</label>
            <input type='password' placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <button className='login-btn'>Login</button>
          </div>
        </form>
        <div className='btn-container'>
          <button className='login-btn'onClick={() => { setShowRegister(true); setShowPopUp(false) }}>Create an account</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp

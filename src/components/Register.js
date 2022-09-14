import React, { useState } from 'react'
import { register } from '../auth'
import { useNavigate } from 'react-router-dom'

const Register = ({ setShowRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please fill-in all data')
      return
    }
    register({ email, password }, navigate)
    setEmail('')
    setPassword('')
    setShowRegister(false)
  }

  return (
    <div className='overlay' onClick={() =>
      setShowRegister(false)}>
      <div className='login-container' onClick={(e) => e.stopPropagation()}>
        <div className='x-container'>
          <h1>Register your account</h1>
          <button className='x-btn' onClick={() =>
            setShowRegister(false)}>X</button>
        </div>
        <form className='login-form' onSubmit={onSubmit}>
          <div className='form-label-email'>
            <label>Email</label>
            <input type='email' placeholder='Your username' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='form-label-password'>
            <label>Password</label>
            <input type='password' placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <button className='login-btn'>Register now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register

import React, { useState } from 'react'

const Register = ({setShowRegister,register}) => {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const onSubmit = (e) => {
  e.preventDefault()

  if(!email||!password) {
    alert('Please fill-in all data')
    return
  }
  register({email,password})
  setEmail('')
  setPassword('')
}




  return (
    <div className='overlay' onClick={()=>
        setShowRegister(false)}>
      <div className='login-container' onClick={(e)=> e.stopPropagation()}>
        <div className='x-container'>
          <h1>Register your account</h1>
          <button className='x-btn' onClick={() => 
            setShowRegister(false)}>X</button>
        </div>
        <form className='login-form' onSubmit={onSubmit}>
          <div className='form-label-email'>
            <label>Email</label>
            <input type='text' placeholder='Your username' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='form-label-password'>
            <label>Password</label>
            <input type='text' placeholder='Your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
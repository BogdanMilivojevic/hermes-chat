import React from 'react'
import { useState } from "react"


const PopUp = ({setShowPopUp,setShowRegister,login}) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault()
  
    if(!email||!password) {
      alert('Please fill-in all data')
      return
    }
    login({email,password})
    setEmail('')
    setPassword('')
    setShowRegister(false)
  }

  return (
    <div className='overlay' onClick={()=>setShowPopUp(false)}>
      <div className='login-container' onClick={(e)=> e.stopPropagation()}>
        <div className='x-container'>
          <h1>Login into your account</h1>
          <button className='x-btn' onClick={() => setShowPopUp(false)}>X</button>
        </div>
        <form className='login-form' onSubmit={onSubmit}>
          <div className='form-label-email'>
            <label>Email</label>
            <input type='text' placeholder='Your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className='form-label-password'>
            <label>Password</label>
            <input type='text' placeholder='Your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div>
            <button className='login-btn'>Login</button>
          </div>
        </form>
        <div className='btn-container'>
          <button className='login-btn'>Login with Google</button>
          <button className='login-btn'onClick={()=>{setShowRegister(true);setShowPopUp(false)}}>Create an account</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp
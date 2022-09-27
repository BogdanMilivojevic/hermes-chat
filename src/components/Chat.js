import React from 'react'
import { Bird } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../auth'

function Chat () {
  const navigate = useNavigate()

  const logoutUser = () => {
    logout(navigate)
  }

  return (
    <div className='section-chat'>
      <nav className='chat-nav'>
        <div className='chat-logo'>
          <Bird className='chat-icon'/>
          <p className='chat-title'>Hermes-chat</p>
        </div>
        <button className='logout-btn' onClick={logoutUser}>Logout</button>
      </nav>
      <div className='chat-input'>
        <div className='text-container'>
          <form className='chat-form'>
            <label></label>
            <input type='text' placeholder='Type new message'/>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Chat

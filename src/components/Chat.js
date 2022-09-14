import React from 'react'
import { Bird } from 'phosphor-react'


function Chat (){

  return (
    <div className='section-chat'>
      <nav className='chat-nav'>
        <Bird className='chat-icon'/>
        <p className='chat-title'>Hermes-chat</p>
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
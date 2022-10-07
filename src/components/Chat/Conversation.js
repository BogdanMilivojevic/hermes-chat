import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Conversation = () => {
  return (
    <div className='chat'>
      <div className='chat-info'>
        <span>Stefan</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Conversation

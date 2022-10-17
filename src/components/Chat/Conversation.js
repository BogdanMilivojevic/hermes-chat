import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../../context/ChatContext'

const Conversation = () => {
  const { data } = useContext(ChatContext)

  if (data) {
    return (
      <div className='chat' >
        <div className='chat-info'>
          {data.user && <span>{data.user?.displayName}</span>}
          {data.user.photoURL && <img src={data.user.photoURL}/>}
        </div>
        <Messages/>
        <Input/>
      </div>
    )
  }
}

export default Conversation

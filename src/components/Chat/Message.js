import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='message-info'>
        <img src=' https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <span>just now</span>
      </div>
      <div className='message-content'>
        <p>Hello bro</p>
      </div>
    </div>
  )
}

export default Message

import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='user-chat'>
        <img className='user-picture' src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 '/>
        <div className='user-info'>
          <span className='user-name'>Luka</span>
          <p className='last-m'>Hey bro, need your help</p>
        </div>
      </div>
      <div className='user-chat'>
        <img className='user-picture' src=' https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <div className='user-info'>
          <span className='user-name'>Jovana</span>
          <p className='last-m'>Hey!</p>
        </div>
      </div>
      <div className='user-chat'>
        <img className='user-picture' src=' https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        <div className='user-info'>
          <span className='user-name'>Marija</span>
          <p className='last-m'>Did you send the memo?</p>
        </div>
      </div>
    </div>
  )
}

export default Chats

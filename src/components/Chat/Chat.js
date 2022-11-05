import React, { useState } from 'react'
import Conversation from './Conversation'
import SidebarCmp from './SidebarCmp'

function Chat () {
  const [showChat, setShowChat] = useState(false)
  return (
    <div className='home'>
      <div className='container'>
        {(!showChat) && <SidebarCmp setShowChat={setShowChat}/>}
        {showChat && <Conversation setShowChat={setShowChat}/>}
      </div>
    </div>

  )
}
export default Chat

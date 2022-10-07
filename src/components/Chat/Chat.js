import React from 'react'
import Conversation from './Conversation'
import SidebarCmp from './SidebarCmp'

function Chat () {
  return (
    <div className='home'>
      <div className='container'>
        <SidebarCmp/>
        <Conversation/>
      </div>
    </div>

  )
}
export default Chat

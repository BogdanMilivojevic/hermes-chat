import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const SidebarCmp = ({ setShowChat }) => {
  const setChat = () => {
    setShowChat(true)
  }
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats setChat={setChat}/>
    </div>
  )
}

export default SidebarCmp

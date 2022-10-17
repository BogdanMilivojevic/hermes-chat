import React, { useContext, useEffect, useState } from 'react'
import { Image, FileText } from 'phosphor-react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'

const Chats = () => {
  const [chats, setChats] = useState([])
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userConversations', currentUser.uid), (doc) => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u })
  }
  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div className='user-chat' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img className='user-picture' src={chat[1].userInfo.photoURL}/>
          <div className='user-info'>
            <span className='user-name'>{chat[1].userInfo.displayName}</span>
            <p className='last-m'>{chat[1].lastMessage?.text}</p>
            {chat[1].lastMessage?.text.length === 0 && <p className='last-m-content'>
              <Image className='last-m-icon'/>
              <FileText className='last-m-icon'/>Image/File</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats

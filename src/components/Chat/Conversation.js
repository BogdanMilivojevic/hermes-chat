import React, { useContext, useEffect, useState } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import sound from '../../sound/notification-sound.mp3'

const Conversation = () => {
  const { data } = useContext(ChatContext)
  const { currentUser } = useContext(AuthContext)
  const [userData, setUserData] = useState({})
  const [count, setCount] = useState(0)

  // New Message notification
  const showNotification = (count) => {
    const newCount = count + 1
    if (document.hidden && currentUser.uid) {
      setCount(newCount)
      document.title = `(${newCount}) Messages`
      const audio = new Audio(sound)
      audio.play()
    }
  }
  useEffect(() => {
    const getData = () => {
      const unsub = onSnapshot(doc(db, 'userConversations', currentUser.uid), (doc) => {
        doc.exists() && setUserData(doc.data())
      })
      return () => {
        unsub()
      }
    }
    currentUser.uid && getData()
  }, [currentUser.uid])

  useEffect(() => {
    showNotification(count)
  }, [userData])

  // Reseting the document.title
  document.onvisibilitychange = () => {
    if (!document.hidden) {
      setCount(0)
      document.title = 'Hermes-chat'
    }
  }

  if (data.chatId) {
    return (
      <div className='chat'>
        <div className='chat-info'>
          {data.user && <span>{data.user?.displayName}</span>}
          {data.user.photoURL && <img src={data.user.photoURL}/>}
        </div>
        <Messages/>
        <Input/>
      </div>
    )
  } else {
    return (
      <div className='chat-hidden'>
        <h1>Please, select a user to send a message</h1>
      </div>
    )
  }
}

export default Conversation

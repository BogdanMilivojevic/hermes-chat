import React, { useContext, useEffect, useRef, useState } from 'react'
import Message from './Message'
import { ChatContext } from '../../context/ChatContext'
import { onSnapshot, collection, query, limit, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'
const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)
  const [messageCount, setMessageCount] = useState(25)
  const [loading, setLoading] = useState(false)
  const myRef = useRef()
  const lastIndex = messages.length - 1

  useEffect(() => {
    const getMessages = async () => {
      const messagesRef = collection(db, 'conversations', data.chatId, 'messages')
      const q = query(messagesRef, orderBy('date', 'desc'), limit(messageCount))

      const unsub = onSnapshot(q, (querySnapshot) => {
        const tempMessages = []
        querySnapshot.forEach((doc) => {
          tempMessages.push(doc.data())
        })
        setMessages(tempMessages.reverse())
      })
      return () => {
        unsub()
      }
    }
    data.chatId && getMessages()
  }, [data.chatId, messageCount])

  // Used to reset count if switched to new chat
  useEffect(() => {
    setMessageCount(10)
  }, [data.chatId])

  const fetchMore = () => {
    setLoading(true)
    setMessageCount(messageCount + 25)
  }
  // Observing if the oldest message is visible, and if it is, function fetchMore is called
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          fetchMore()
          observer.unobserve(entry.target)
        }
      }, {
        threshold: 1
      })
      if (messageCount > messages.length) {
        setLoading(false)
        observer.unobserve(myRef.current.firstElementChild)
      }
      if (myRef.current.firstElementChild) {
        observer.observe(myRef.current.firstElementChild)
      }
    }, 1500)
    return () => clearTimeout(timer)
  }, [messages])

  // Scrolling to the latest message when the chat loads
  useEffect(() => {
    const timer = setTimeout(() => {
      myRef.current.lastElementChild.scrollIntoView({ behavior: 'smooth' })
    }, 500)
    return () => clearTimeout(timer)
  }, [data.chatId])
  // Scrolling to the latest message if there is a new latest message
  useEffect(() => {
    myRef.current.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
    console.log('New last Mesage')
  }, [messages[lastIndex] ? messages[lastIndex].id : null])

  return (
    <div className='messages' ref={myRef}>
      { loading && <p className='messages-loading'>Fetching older messages...</p>}
      {messages.length > 0 && messages.map(message => (
        <Message message ={message} key={message.id}/>
      ))}
    </div>
  )
}

export default Messages

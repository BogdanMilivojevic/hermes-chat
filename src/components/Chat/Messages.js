import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { ChatContext } from '../../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
const Messages = () => {
  const [messages, setMessages] = useState([])
  if (messages) console.log(messages.slice(-20))
  const { data } = useContext(ChatContext)
  const messageResults = []
  const getResults = (results, resultsPerPage) => {
    for (let i = 0; i < results.length; i += resultsPerPage) {
      const chunk = results.slice(i, i + resultsPerPage)
      messageResults.push(chunk)
    }
  }
  if (messages) getResults(messages, 20)
  console.log(messageResults)

  useEffect(() => {
    const getMessages = () => {
      const unsub = onSnapshot(doc(db, 'conversations', data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages)
      })
      return () => {
        unsub()
      }
    }
    data.chatId && getMessages()
  }, [data.chatId])

  return (
    <div className='messages'>
      {messages?.map(message => (
        <Message message ={message} key={message.id}/>
      ))}
    </div>
  )
}

export default Messages

import React, { useContext, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = () => {
    const sendFileMessage = async () => {
      const storageRef = ref(storage, uuid())
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, 'conversations', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                name: file.name,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                [file.type !== 'image/jpeg' ? 'file' : 'img']: downloadURL
              })
            })
          } catch (err) {
            console.log(err.message)
          }
        })
      })
    }
    const sendTextMessage = async () => {
      await updateDoc(doc(db, 'conversations', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }
    if (file) {
      sendFileMessage()
    } else {
      sendTextMessage()
    }

    const updateLastMessage = (uid) => {
      uid.forEach(async uid => {
        await updateDoc(doc(db, 'userConversations', uid), {
          [data.chatId + '.lastMessage']: {
            text
          },
          [data.chatId + '.date']: serverTimestamp()
        })
      })
    }
    updateLastMessage([currentUser.uid, data.user.uid])
    setText('')
    setFile(null)
  }

  const handleKey = (e) => {
    (text || file) && e.key === 'Enter' && handleSend()
  }

  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' onChange={(e) => setText(e.target.value)} value={text} onKeyDown={handleKey}/>
      <div className='input-send'>
        <label htmlFor="file">
          <PlusCircle className='input-icon'/>
          <input style={{ display: 'none' }} type="file" id="file"onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button className='input-btn' onClick={(text || file) && handleSend}>Send</button>
      </div>
    </div>
  )
}
export default Input

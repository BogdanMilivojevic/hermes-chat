import React, { useState, useMemo, useContext } from 'react'
import { collection, query, where, getDocs, limit, getDoc, setDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import debounce from 'lodash.debounce'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'

const Search = () => {
  const [users, setUsers] = useState([])
  const [notFound, setNotFound] = useState(false)
  const { currentUser } = useContext(AuthContext)

  // User search
  const searchUser = async (username, currentUserUid) => {
    if (!username) {
      setNotFound(false)
      setUsers([])
      return
    }
    let userContainer = []
    const q = query(collection(db, 'users'), where('displayName', '==', username), limit(20))

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        userContainer.push(doc.data())
        userContainer = userContainer.filter((user) => user.uid !== currentUserUid)
        setUsers(userContainer)
      })
      if (querySnapshot.empty) {
        setUsers([])
        setNotFound(true)
      }
    } catch (err) {
      toast.error('No user found, please try again!')
    }
  }

  const debouncedSearchUser = useMemo(
    () => debounce(searchUser, 500)
    , [])

  const handleSelect = async (uid, photoURL, displayName) => {
    const input = document.getElementById('input')
    // check if the gropus exists
    const combinedId = currentUser.uid > uid ? currentUser.uid + uid : uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, 'conversations', combinedId))
      if (!res.exists()) {
        // create conversations
        await setDoc(doc(db, 'conversations', combinedId), { messages: [] })

        // create userConversations (for the current user)
        await updateDoc(doc(db, 'userConversations', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: uid,
            displayName: displayName,
            photoURL: photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
        // create userConversations (for the user with whom current user wants to chat)
        await updateDoc(doc(db, 'userConversations', uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
      }
    } catch (error) {
      console.log(error)
    }
    input.value = ''
    setUsers([])
  }

  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Find a user' id='input' onChange={(e) => debouncedSearchUser(e.target.value, currentUser.uid)}/>
      </div>
      {notFound && users.length === 0 && <div className='user-chat searched'>
        <div className='user-info'>
          <span className='user-name'>No user found!</span>
        </div>
        </div>}
      {users && users.map(users => (
        <div className='user-chat searched' key={users.uid} onClick={() => handleSelect(users.uid, users.photoURL, users.displayName)}>
          <img className='user-picture' src={users.photoURL}/>
          <div className='user-info'>
            <span className='user-name'>{users.displayName}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Search

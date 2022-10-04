import React, { useState, useMemo } from 'react'
import { collection, query, where, getDocs, limit } from 'firebase/firestore'
import { db } from '../../firebase'
import debounce from 'lodash.debounce'
import { toast } from 'react-toastify'

const Search = () => {
  const [user, setUser] = useState([])
  const [notFound, setNotFound] = useState(false)

  // User search
  const searchUser = async (username) => {
    if (!username) {
      setNotFound(false)
      setUser([])
      return
    }
    const userContainer = []
    const q = query(collection(db, 'users'), where('displayName', '==', username), limit(20))

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        userContainer.push(doc.data())
        setUser(userContainer)
      })
      if (querySnapshot.empty) {
        setUser([])
        setNotFound(true)
      }
    } catch (err) {
      toast.error('No user found, please try again!')
    }
  }

  const debouncedSearchUser = useMemo(
    () => debounce(searchUser, 500)
    , [])

  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Find a user' onChange={(e) => debouncedSearchUser(e.target.value)}/>
      </div>
      { notFound && user.length === 0 && <div className='user-chat searched'>
        <div className='user-info'>
          <span className='user-name'>No user found!</span>
        </div>
        </div>}
      {user && user.map(users => (
        <div className='user-chat searched' key={users.uid}>
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

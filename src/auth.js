import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth, db, storage } from './firebase'
import { toast } from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

// REGISTER USER
export const register = async (email, password, username, file, navigate, setShowRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const date = new Date().getTime()
    const storageRef = ref(storage, `${username + date}`)

    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
        // Update profile
          await updateProfile(res.user, {
            displayName: username,
            photoURL: downloadURL
          })
          // create user on firestore
          await setDoc(doc(db, 'users', res.user.uid), {
            uid: res.user.uid,
            displayName: username,
            email,
            photoURL: downloadURL
          })

          // create empty user chats on firestore
          await setDoc(doc(db, 'userConversations', res.user.uid), {})
          navigate('/chat')
          setShowRegister(false)
        } catch (err) {
          console.log(err.message)
        }
      })
    })
  } catch (error) {
    toast.error('Password or email are not correctly written, please try again')
  }
}
// USER LOGIN
export const login = async (email, password, navigate, setShowPopUp) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    setShowPopUp(false)
    navigate('/chat')
  } catch (error) {
    console.log(error.message)
    toast.error('Email or password is wrong, please try again')
  }
}
// LOGOUT USER
export const logoutUser = async (navigate) => {
  await signOut(auth)
  navigate('/')
}

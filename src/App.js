
import React, { useState } from 'react'
import Nav  from './components/Nav'
import Hero from './components/Hero'
import  Browsers  from './components/Browsers'
import Privacy from './components/Privacy'
import  SignUp from './components/SignUp'
import Footer from './components/Footer'
import Chat from './components/Chat'
import PopUp from './components/PopUp'
import Register from './components/Register'
import { Route,Routes,useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'


function App () {

const [showPopUp,setShowPopUp] =useState(false)
const [showRegister,setShowRegister] =useState(false)

//Navigation to chat page
let navigate=useNavigate()

//Current user
const [currentUser,setUser]= useState({})
console.log(currentUser)

React.useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
}, []) 

//Register new account
const register =  async (credentials) => {
  const registerData = {...credentials}
  try {
    const registerUser =  await createUserWithEmailAndPassword(auth, registerData.email,registerData.password)
    {registerUser? navigate('/chat'): ''}
  } catch (error) {
    console.log(error.message)
        alert('Email or password are not correctly written, please try again')

  }

}
//Login existing account
const login = async (credentials) => {
const loginData = {...credentials}
  try {
    const loginUser =  await signInWithEmailAndPassword(auth, loginData.email,loginData.password)
    {loginUser? navigate('/chat'): ''}
  } catch (error) {
    console.log(error.message)
    alert('Email or password is wrong, please try again')
  }
}

//Signout
const logout = async () => {
  await signOut(auth)
  navigate('/')
  setShowPopUp(false)
}


  return (
    <Routes>
      <Route path='/' element={ 
        <div><Nav setShowPopUp={setShowPopUp}/> 
          <Hero setShowPopUp={setShowPopUp}/> 
          <Browsers/> 
          <Privacy/> 
          <SignUp setShowPopUp={setShowPopUp}/> 
          <Footer/> 
          {showPopUp?<PopUp setShowPopUp={setShowPopUp} setShowRegister={setShowRegister} login={login}/> : ''}
          {showRegister?<Register setShowRegister={setShowRegister} register={register}/> : ''}
        </div>}/>
      <Route path='/chat' element={<Chat logout={logout}/>}/>
    </Routes>
  )
}

export default App

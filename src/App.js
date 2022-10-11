import React, { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Browsers from './components/Browsers'
import Privacy from './components/Privacy'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import Chat from './components/Chat/Chat'
import PopUp from './components/PopUp'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ChatContextProvider } from './context/ChatContext'

function App () {
  const [showPopUp, setShowPopUp] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <Routes>
      <Route path='/' element={
        <div><Nav setShowPopUp={setShowPopUp}/>
          <Hero setShowPopUp={setShowPopUp}/>
          <Browsers/>
          <Privacy/>
          <SignUp setShowPopUp={setShowPopUp}/>
          <Footer/>
          {showPopUp ? <PopUp setShowPopUp={setShowPopUp} setShowRegister={setShowRegister}/> : ''}
          {showRegister ? <Register setShowRegister={setShowRegister}/> : ''} <ToastContainer
position="top-center"
closeOnClick
rtl={false}
/>
        </div> }/>
      <Route path='/chat' element={ <div>
        <ChatContextProvider>
          <Chat/>
        </ChatContextProvider>
        <ToastContainer
position="top-center"
closeOnClick
rtl={false}
/>
      </div>}/>
    </Routes>
  )
}

export default App

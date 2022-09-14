import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Browsers from './components/Browsers'
import Privacy from './components/Privacy'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import Chat from './components/Chat'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <Routes>
      <Route path='/' element={ <div><Nav/> <Hero/> <Browsers/> <Privacy/> <SignUp/> <Footer/></div>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
  )
}

export default App

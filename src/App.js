import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Browsers from './components/Browsers'
import Privacy from './components/Privacy'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

function App () {
  return (
    <div>
      <Nav />
      <Hero />
      <Browsers />
      <Privacy />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App

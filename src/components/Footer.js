import React from 'react'
import { Bird } from 'phosphor-react'

function Footer(){
  return (
    <div className='footer'>
      <div className='section-footer'>
        <Bird className='nav-icon'/>
        <p> Hermes -chat</p>
      </div>
      <p className='copyright'> Copyright &copy; <span>2022</span> Hermes-chat, all rights reserved  </p>
    </div>
  )
}
export default Footer
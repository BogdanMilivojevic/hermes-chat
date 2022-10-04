import React from 'react'
import { PlusCircle } from 'phosphor-react'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...'/>
      <div className='input-send'>
        <PlusCircle className='input-icon'/>
        <button className='input-btn'>Send</button>
      </div>
    </div>
  )
}

export default Input

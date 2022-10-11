import React from 'react'
import { XCircle } from 'phosphor-react'

const ImagePopup = ({ image, setPopUp }) => {
  return (
    <div className='image-overlay' onClick={() => setPopUp(false)}>
      <div className='image-container' onClick={() => setPopUp(false) }>
        <img src={image} onClick={(e) => e.stopPropagation()} />
        <XCircle className='image-x-icon' onClick={() => setPopUp(false)}/>
      </div>
    </div>
  )
}

export default ImagePopup

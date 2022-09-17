import React from 'react'
import { Bird} from 'phosphor-react'

function Nav ({setShowPopUp}) {

  // let navigate = useNavigate()
  // const routeChange = () => {
  //   let path = '/chat'
  //   navigate(path)
  // }
  return (
    <>
      <nav className='navigation'>
        <div className='nav-logo'>
          <Bird className='nav-icon'/>
          <p className='logo-title'>Hermes-chat</p>
        </div>
        <div className='nav-text'>
          <button className='btn-login' onClick={()=>setShowPopUp(true)}> Sign in</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
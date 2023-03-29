 import React from 'react'
import { useHistory } from 'react-router-dom'

export default function BaseApp({title,styles,children}) {
  const history=useHistory()
  return (
    <div>
<div>
  <div className='nav'>
    <span>
    <button onClick={()=>history.push("/")}>Dashboard</button>
      <button onClick={()=>history.push("/Create/user")}>Create</button>
     
    </span>
 </div>
  <div className="title">{title}</div>
  </div>

  <div className='child'>{children}</div>

  <footer className='footer'>
    <div className='contact'>Contact us : 12345678 
     <span>example@gmail.com</span>
    </div>
  </footer>



    </div>
  )
}


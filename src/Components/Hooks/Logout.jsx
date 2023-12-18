// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Logout() {
    let navigate = useNavigate();
  return ()=>{
        navigate('/login')
  }
}

export default Logout
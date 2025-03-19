import React from 'react'
import { useNavigate } from 'react-router-dom'

const Temp = () => {
    const navigate = useNavigate();
    const registerpage = () => {
        navigate('/login-as-administrator');
    }
  return (
    <div>
        <button onClick={() => registerpage()}>Temp</button>
    </div>
  )
}

export default Temp
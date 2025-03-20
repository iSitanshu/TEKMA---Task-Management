import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from '../context/UserContext';

const Temp = () => {
  console.log("Kehdo",user)
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
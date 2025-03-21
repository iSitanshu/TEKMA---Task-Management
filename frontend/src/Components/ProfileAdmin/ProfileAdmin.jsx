import React, { useContext } from 'react'
import './ProfileAdmin.css'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const ProfileAdmin = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  
  if(user.user.host === 'Member'){
    Navigate('/login-as-team-member')
  }
  return (
    <div className='admin-main'>
        <div className="admin-info">
          <div className="admin-left">
            <p>Welcome Back</p>
            <h1>{user.user.username}</h1>
            <p>{user.user.role}</p>
          </div>
          <div className="admin-right">
            <div className="admin-right-left">
              <p className="admin-overall">Overall Progress</p>
              <p className="admin-no">5/5</p>
              <div className="admin-task">Task</div>
            </div>
            <p className="admin-right-right">5%</p>
          </div>
        </div>
    </div>
    
  )
}

export default ProfileAdmin
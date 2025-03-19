import React from 'react'
import './ProfileAdmin.css'

const ProfileAdmin = () => {
  return (
    <div className='admin-main'>
        <div className="admin-info">
          <div className="admin-left">
            <p>Welcome Back</p>
            <h1>Name</h1>
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
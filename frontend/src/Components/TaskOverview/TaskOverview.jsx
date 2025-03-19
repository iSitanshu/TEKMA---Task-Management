import React from 'react'
import ProfileAdmin from '../ProfileAdmin/ProfileAdmin'
import Sidebar from '../Sidebar/Sidebar'
import Departmentdetail from '../Departmentdetail/Departmentdetail'

const TaskOverview = () => {
  return (
    <div className='admin-dashboard'>
      <div className='side'><Sidebar /></div>
      <div className='admin-main'>
      <ProfileAdmin />  
      <Departmentdetail />
      <Departmentdetail />
      </div>
    </div>
  )
}

export default TaskOverview
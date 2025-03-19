import React from 'react'
import TaskDetails from '../TaskDetails/TaskDetails'
import AddNewProject from '../AddNewProject/AddNewProject'
import './CurrentProjectStatus.css'
import ProfileAdmin from '../ProfileAdmin/ProfileAdmin'

const CurrentProjectStatus = () => {
  return (
    <>
    <ProfileAdmin />
    <div className='current-project-status'>
        <p className='text-heading'>Current Project Status</p>
        <TaskDetails />
        <TaskDetails />
        <TaskDetails />
        <TaskDetails />
        <TaskDetails />
        <AddNewProject />
    </div>
    </>
  )
}

export default CurrentProjectStatus
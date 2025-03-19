import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
        {/* <h2>{user.userDetails.username}</h2> */}
        <h2>admmin</h2>
        <ul>
          <li>Profile</li>
          <li>Users</li>
          <li>Tasks</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>
  )
}

export default Sidebar
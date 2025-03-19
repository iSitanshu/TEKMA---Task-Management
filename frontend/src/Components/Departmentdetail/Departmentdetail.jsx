import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './Departmentdetail.css'

const Departmentdetail = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };
         
  return (
    <div className='project-details'> 
      <section className="project-centre">
        <div className='project-upside'>
        <div className="project-">
          <h1>Department</h1>
          <p>Description</p>
        </div>
        <div className="project-container">
          <span className="project-right">
          <p onClick={toggleDropdown}>{isOpen ? "▲" : "▼"}</p>            </span>
        </div>
        </div>
        {isOpen && (
          <div className="project-bottom">
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </div>
        )}
      </section>

    {/* Drop Down */}

    
      
    </div>
  )
}

export default Departmentdetail
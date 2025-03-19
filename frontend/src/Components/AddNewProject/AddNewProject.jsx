import React from 'react'
import './AddNewProject.css'

const AddNewProject = () => {
  return (
    <section className="add-task">
        <h2>Add New Projects</h2>
        <input type="text" placeholder="Project Title" />
        <textarea placeholder="Project Description"></textarea>
        <button>Add Project</button>
      </section>
  )
}

export default AddNewProject
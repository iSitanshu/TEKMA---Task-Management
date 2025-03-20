import React, { useContext, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing icons
import "./AddNewProject.css";
import { UserContext } from "../../context/UserContext"; 


const AddTask = () => {
  const { user } = useContext(UserContext); 

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    department: "",
    members: [""], // Initialize members directly inside projectData
  });

  // Handle input changes for project data
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  // Add new member input field
  const handleAddMember = () => {
    setProjectData((prevData) => ({
      ...prevData,
      members: [...prevData.members, ""],
    }));
  };

  // Remove a member input field
  const handleRemoveMember = (index) => {
    setProjectData((prevData) => ({
      ...prevData,
      members: prevData.members.filter((_, i) => i !== index),
    }));
  };

  // Update member list on input change
  const handleMemberChange = (index, value) => {
    setProjectData((prevData) => ({
      ...prevData,
      members: prevData.members.map((member, i) =>
        i === index ? value : member
      ),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(projectData); // Debugging log to check data before sending
  
    try {
      const response = await fetch("http://localhost:8000/api/v1/project/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData), // ✅ Use projectData instead of formData
      });
  
      if (response.ok) {
        const data = await response.json();
        setData(data); // ✅ Store response data
        alert("Project added successfully!");
      } else if (response.status === 409) {
        alert("User already exists!");
      } else {
        const errorData = await response.json();
        console.error("Project addition failed:", errorData);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };
  

  return (
    <section className="add-task">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          name="title"
          value={projectData.title}
          onChange={handleInput}
          required
        />
        <textarea
          placeholder="Project Description"
          name="description"
          value={projectData.description}
          onChange={handleInput}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Enter your Department"
          name="department"
          value={projectData.department}
          onChange={handleInput}
          required
        />

        {/* Dynamic Member Inputs */}
        <div>
          {projectData.members.map((member, index) => (
            <div className="member-container" key={index}>
              <input
                type="text"
                className="member-input"
                placeholder="Member Name"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
                required
              />
              {index > 0 && ( // Ensure at least one input remains
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => handleRemoveMember(index)}
                >
                  <FaMinus color="red" />
                </button>
              )}
            </div>
          ))}
          <button type="button" className="icon-button" onClick={handleAddMember}>
            <FaPlus color="green" /> Add Member
          </button>
        </div>

        <button className="handleSubmit" type="submit">
          Add Project
        </button>
      </form>
    </section>
  );
};

export default AddTask;

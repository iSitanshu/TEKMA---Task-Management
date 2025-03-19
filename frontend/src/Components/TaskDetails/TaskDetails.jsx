import React from "react";
import "./TaskDetails.css";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate('/task_detail')
  };

  return (
    <div> 
      <section className="project-details">
        <div className="project-left">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div className="project-container">
          <span className="project-right"><p onClick={goTo}>Detail</p></span>
        </div>
      </section>

      
    </div>
  );
};

export default TaskDetails;

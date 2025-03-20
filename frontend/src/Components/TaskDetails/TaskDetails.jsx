import React from "react";
import "./TaskDetails.css";
import { useNavigate } from "react-router-dom";

const TaskDetails = ({text, description}) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate('/task_detail')
  };


  return (
    <div> 
      <section className="project-details">
        <div className="project-left">
          <h1>{text}</h1>
          <p>{description}</p>
        </div>
        <div className="project-container">
          <span className="project-right"><p onClick={goTo}>Detail</p></span>
        </div>
      </section>

      
    </div>
  );
};

export default TaskDetails;

import React from "react";
import "./Task.css";
import {assets} from '../../assets/assets.js'

const Task = () => {
  return (
    <div className="task-container">
      {/* Task name on the left */}
      <div className="task-name">Task Name</div>

      {/* Actions & Icons on the right */}
      <div className="task-actions">
        <p className="task-status">Completed</p>
        <img src={assets.bell} alt="Reminder" className="task-icon" title="View" />
      </div>
    </div>
  );
};

export default Task;

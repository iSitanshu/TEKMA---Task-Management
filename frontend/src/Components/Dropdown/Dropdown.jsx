import React, { useState } from 'react';
import './Dropdown.css';
import { assets } from '../../assets/assets';
import Task from './Task';
import Assemble from './Assemble';

const Dropdown = () => {
  const [isTaskVisible, setIsTaskVisible] = useState(false);

  const toggleTask = () => {
    setIsTaskVisible(!isTaskVisible);
  };

  return (
    <div className='dropdown-menu'>
      <div className='dropdown'>
        <p>Name</p>
        <div className='dropdown-right'>
          <p>Add</p>
          <p>Progress</p>
          <p onClick={toggleTask} className="view-btn">
            {isTaskVisible ? 'Close ✖' : 'View'}
          </p>
        </div>
      </div>

      {isTaskVisible && (
        <div className='task-containe'>
          <Assemble />
        </div>
      )}
    </div>
  );
};

export default Dropdown;

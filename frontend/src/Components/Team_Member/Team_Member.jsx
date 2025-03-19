import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Team_Member.css';

const Team_Member = ({ setIsAdministrator, setIsTeamMember }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closePopup = () => {
    setIsAdministrator(false);
    setIsTeamMember(false);
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>Log In</h2>  
          <img onClick={closePopup} src={assets.Cross} alt="Close" className='cross-image' />
        </div>
        <div className="login-popup-inputs">
          <input type="email" placeholder='Your Email' name="email" value={formData.email} onChange={handleInput} required />
          <input type="password" placeholder='Enter the Password' name="password" value={formData.password} onChange={handleInput} required />
          <label htmlFor="user-role">Choose your role:</label>
          <select id="user-role" name="role" value={formData.role} onChange={handleInput} required>
            <option value="">Select Role</option>
            <option value="host">Host</option>
            <option value="member">Member</option>
          </select>
        </div>
        <button type="submit">Sign In</button>
        <p>Don't have an account? <span onClick={() => { setIsAdministrator(true); setIsTeamMember(false); }}>Sign Up</span></p>
      </form>
    </div>
  );
};

export default Team_Member;

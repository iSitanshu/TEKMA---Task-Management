import React, { useState, useContext } from 'react';
import { assets } from '../../assets/assets';
import './Administrator.css';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Administrator = ({ setIsAdministrator, setIsTeamMember }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/v1/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.data);  // ✅ Set user only when response is successful
        alert("Registration successful!");
        navigate("/login-as-administrator");
        setIsAdministrator(false);
      }
      else if(response.status === 409){
        alert('User already exited!!')
      }
      else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  }; 

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Sign Up</h2>
          <img onClick={() => setIsAdministrator(false)} src={assets.Cross} alt="Close" className="cross-image" />
        </div>
        <div className="login-popup-inputs">
          <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={handleInput} required />
          <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleInput} required />
          <input type="password" placeholder="Enter the Password" name="password" value={formData.password} onChange={handleInput} required />
          <label htmlFor="user-role">Choose your role:</label>
          <select id="user-role" name="role" value={formData.role} onChange={handleInput} required>
            <option value="">Select Role</option>
            <option value="Host">Host</option>
            <option value="Member">Member</option>
          </select>
          <input type="text" placeholder="Enter your department" name="department" value={formData.department} onChange={handleInput} required />
        </div>
        <button className="handleSubmit" type="submit">Sign Up</button>
        <p>Already have an account? <span onClick={() => { setIsAdministrator(false); setIsTeamMember(true); }}>Click here</span></p>
      </form>
    </div>
  );
};

export default Administrator;

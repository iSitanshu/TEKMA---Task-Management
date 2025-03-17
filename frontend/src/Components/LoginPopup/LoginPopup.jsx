import React from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin , setIsAdministrator, setIsTeamMember }) => {
  const navigateoadministrator = () => {
    setIsAdministrator(true)
    setShowLogin(false)
  }
  const navigatetoteammember = () => {
    setIsTeamMember(true)
    setShowLogin(false)
  }

  return (
    <div className='login-popup'>
      <div className='login-container'>
        <div className='login-top'>
          <div className='login-header'>Log in to access your account</div>
          <img src={assets.Cross} alt="" onClick={() => setShowLogin(false)} className='cross-image'/>
        </div>
        <div className='login-options'>
          <button className='login-btn' onClick={() => navigateoadministrator()}>Administrator</button>
          <button className='login-btn' onClick={() => navigatetoteammember()}>Team Member</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;

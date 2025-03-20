import React, { useState, useContext, useEffect } from 'react';
import { assets } from '../../assets/assets.js';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import {UserContext} from '../../context/UserContext';

const Navbar = ({ setShowLogin }) => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null); // Clear user context
    setIsLoggedIn(false);
  };

  return (
    <div className='Navbar'>
      <div><Link to='/'><img src={assets.logo} alt="" className='logo'/></Link></div>
      <div>
        <ul className="navbar-menu">
          <Link to='/'>Home</Link>
          <a href="#explore-menu">Menu</a>
          <a href="#guide">Guide</a>
          <a href="#footer">Contact us</a>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign Up</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

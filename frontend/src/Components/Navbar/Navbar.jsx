import React, { useState } from 'react'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Menu")

  return (
    <div className='Navbar'>
        <div><Link to='/'><img src={assets.logo} alt="" className='logo'/></Link></div>
        <div>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
          <a href="#guide" onClick={()=>setMenu("Guide")} className={menu==="Guide"?"active":""}>Guide</a>
          <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
        </ul>
        </div>
      <div><button onClick={() => setShowLogin(true)}>Sign Up</button></div>
    </div>
  )
}

export default Navbar
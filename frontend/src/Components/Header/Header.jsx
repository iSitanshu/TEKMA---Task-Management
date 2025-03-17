import React from 'react'
import Guide from '../Guide/Guide.jsx'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <>
    <div className='header' id='explore-menu'>
        <div className="header-contents">
            <h2>The Future of Task Management Awaits</h2>
            <p>Unlock the full potential of your team with our intuitive task management system. Streamline assignments, enhance accountability, and foster collaboration for unparalleled productivity.</p>
        </div>
        <div><img src={assets.bg} alt="" /></div>
    </div>
    <Guide />
    </>
  )
}

export default Header
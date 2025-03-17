import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <p className='footer-title'><img src={assets.logo} alt="" /></p>
                    <p className='footer-description'>Task management app streamlines team collaboration effectively. Stay updated with what's happening around you.</p>
                    <div className="footer-social-icons flex">
                        <img src={assets.instagram} alt="Instagram" />
                        <img src={assets.twitter} alt="Twitter" />
                        <img src={assets.Netflix} alt="Netflix" />
                        <img src={assets.whatsapp} alt="WhatsApp" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Guide</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+1-123-456-7890</li>
                        <li>contact@TEKMA.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Event Hub - All Rights Reserved.</p>
        </div>
  )
}

export default Footer
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Administrator from './Components/Administrator/Administrator.jsx'
import Team_Member from './Components/Team_Member/Team_Member.jsx'


function App() {
  const [showLogin,setShowLogin ] = useState(false)
  const [isadministrator, setIsAdministrator] = useState(false)
  const [isteamMember, setIsTeamMember] = useState(false)

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setIsAdministrator={setIsAdministrator} setIsTeamMember={setIsTeamMember}/>}
      {isadministrator && <Administrator setIsAdministrator={setIsAdministrator}/>}
      {isteamMember && <Team_Member setIsTeamMember={setIsTeamMember}/>}
      {}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Header />} />
          {/* <Route path='/login-as-administrator' element={<Administrator />}/> */}
          {/* <Route path='/login-as-team-member' element={<Team_Member />}/> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

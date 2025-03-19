import { useEffect, useState } from 'react'
import './App.css'
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Administrator from './Components/Administrator/Administrator.jsx'
import Team_Member from './Components/Team_Member/Team_Member.jsx'
import LandingAdmin from './Components/LandingAdmin/LandingAdmin.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Member from './Components/Member/Member.jsx'
import TaskOverview from './Components/TaskOverview/TaskOverview.jsx'

function App() {
  const [showLogin,setShowLogin ] = useState(false)
  const [isadministrator, setIsAdministrator] = useState(false)
  const [isteamMember, setIsTeamMember] = useState(false)

  return (
    <UserContextProvider>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setIsAdministrator={setIsAdministrator} setIsTeamMember={setIsTeamMember}/>}
      {isadministrator && <Administrator setShowLogin={setShowLogin} setIsAdministrator={setIsAdministrator} setIsTeamMember={setIsTeamMember}/>}
      {(isadministrator )&& <Administrator setShowLogin={setShowLogin} setIsAdministrator={setIsAdministrator} setIsTeamMember={setIsTeamMember}/>}
      {isteamMember && <Team_Member setShowLogin={setShowLogin} setIsAdministrator={setIsAdministrator} setIsTeamMember={setIsTeamMember}/>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login-as-administrator' element={<LandingAdmin />}/>
          <Route path='/login-as-team-member' element={<Member />}/>
          <Route path="/task_detail" element={<TaskOverview />} />
        </Routes>
      </div>
      <Footer />
    </UserContextProvider>
  )
}

export default App

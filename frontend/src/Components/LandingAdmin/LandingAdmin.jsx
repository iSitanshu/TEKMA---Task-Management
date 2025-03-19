import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./LandingAdmin.css";
import UserContext from "../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import CurrentProjectStatus from "../CurrentProjectStatus/CurrentProjectStatus";
import TaskOverview from "../TaskOverview/TaskOverview";


const LandingAdmin = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="admin-dashboard">
        <Sidebar />
        <main className="admin-main">
          <Routes>
            <Route path='/' element={<CurrentProjectStatus /> }/>
          </Routes>
        </main>
      </div>
    </>
  );
};

export default LandingAdmin;

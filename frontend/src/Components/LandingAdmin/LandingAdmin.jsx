import React from "react";
import "./LandingAdmin.css";
import Sidebar from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import CurrentProjectStatus from "../CurrentProjectStatus/CurrentProjectStatus";


const LandingAdmin = () => {

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

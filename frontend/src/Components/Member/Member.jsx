import React from "react";
import { assets } from "../../assets/assets";
import "./Member.css"; // Ensure you create styles for better UI
import ProfileAdmin from "../ProfileAdmin/ProfileAdmin";
import Sidebar from "../Sidebar/Sidebar";
import MemberTask from "../MemberPart/MemberTask/MemberTask";

const Member = ({ name, role, company, tasks }) => {
  return (
    <div className="member">
    <Sidebar />
    <div className="member-right">
    <ProfileAdmin />
    <h1>Remaining Task</h1>
    <MemberTask />
    </div>
    </div>
  );
};

export default Member;

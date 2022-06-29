import React from "react";
import "./Dashboard.scss";
import Sidebar from "./Sidebar";
import Side from "./Side";

const Dashboard = ({ popup, setPopup }) => {
  return (
    <div>
      <div className="DasboardContainer">
        <Sidebar popup={popup} setPopup={setPopup} />
        <Side />
      </div>
    </div>
  );
};

export default Dashboard;

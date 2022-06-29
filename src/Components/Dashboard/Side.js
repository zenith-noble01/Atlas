import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.scss";

const Side = () => {
  return (
    <div className="Side">
      <Outlet />
    </div>
  );
};

export default Side;

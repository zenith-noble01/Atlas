// import React, { useState } from "react";
import "./Dashboard.scss";
import { useSelector } from "react-redux";
import {
  WhatIsNew,
  Average,
  Completed,
  MostActicve,
  RankEarned,
  LatestAccomplishment,
  Need,
} from "../../Components";

const Dashboard = () => {
  const student = useSelector((state) => state.auth.student);
  const { username, isVerified } = student;
  return (
    <div className="app__dashboard">
      {!isVerified && (
        <p className="verify">Please verify Your Email {username}</p>
      )}
      {/* header */}
      <div className="dash__header">
        <p>👋 Welcome back, {username}!</p>
      </div>
      {/* main--header */}
      <div className="dash__main">
        <div className="dash__main__container"></div>
      </div>
      {/* what's neww */}
      <div className="dash__recommended">
        <p className="what__new__header">What's New</p>
        <div className="dash__new__container">
          <WhatIsNew />
          <WhatIsNew />
          <WhatIsNew />
        </div>
      </div>
      <div className="dash__recommended">
        <p className="what__new__header">Your Insights</p>
        <div className="dash__new__container re">
          <Average />
          <Completed />
          <MostActicve />
          <RankEarned />
        </div>
      </div>
      <LatestAccomplishment />
      <Need />
    </div>
  );
};

export default Dashboard;

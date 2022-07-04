import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Lander } from "./Components";
import { ToastContainer } from "react-toastify";
import { Login, Register, TakeQuestionTest } from "./Pages/";
// const

const App = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const [popup, setPopup] = useState(false);

  return (
    <div>
      {pathname === "login" || pathname === "register" ? null : (
        <Navbar popup={popup} />
      )}
      <Routes>
        <Route path="/" element={<Lander />} />

        <Route element={<Login />} path="/Login" />
        <Route element={<Register />} path="/register" />
        <Route element={<TakeQuestionTest />} path="/questionTest" />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;

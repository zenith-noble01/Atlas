import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Lander } from "./Components";
import { Auth, TakeQuestionTest } from "./Pages/";

const App = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <Navbar popup={popup} />
      <Routes>
        <Route path="/" element={<Lander />} />

        <Route element={<Auth />} path="/auth" />
        <Route element={<TakeQuestionTest />} path="/questionTest" />
      </Routes>
    </div>
  );
};

export default App;

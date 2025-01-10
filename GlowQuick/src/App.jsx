import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import Landingpage from "./Pages/Landingpage";
import CursorFollower from "./Components/CursorFollower/CursorFollower";
import LoginPage from "./Pages/LoginPage";
import WelcomePopup from "./Pages/WelcomePopup";

const App = () => {
  return (
    <Router>
      <div className="bg-[#cfe5ed] relative text-green-300 text-3xl font-semibold">
        <CursorFollower />
        <WelcomePopup/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

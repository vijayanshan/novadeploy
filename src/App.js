import React from "react";
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NovaFilmIndustry from "../src/components/homepage";
import LoginSignup from "../src/components/signup";
import FilmNetworkDashboard from "../src/components/dashboard";
import UserProfilePage from "./components/profilecard";
import JobsPage from "./components/jobpage";
import Messages from "./components/Messages";
import Connections from "./components/Connections";
import Settings from "./components/Settings";
import ForgotPassword from "./components/ForgotPassword";
import GalleryPage from "./components/gallary";
import ShootingPlace from "./components/shootingplace";
const root = ReactDOM.createRoot(document.getElementById("root"));

const loader = document.getElementById("global-loader");
if (loader) loader.style.display = "none";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NovaFilmIndustry />} />
        <Route path="/signup" element={<LoginSignup />} />
         <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<FilmNetworkDashboard />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/settings" element={<Settings />} /> 
        <Route Path="/gallary" element={<GalleryPage/>}/>
        <Route Path="/shootingplace" element={<ShootingPlace/>}/>
      </Routes>
    </Router>
  );
};

export default App;

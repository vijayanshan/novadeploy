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
<<<<<<< HEAD
import ForgotPassword from "./components/ForgotPassword";
import GalleryPage from "./components/gallary";
import ShootingPlace from "./components/shootingplace";
=======
import ForgotPassword from"./components/ForgotPassword";
import GalleryPage from "./components/gallary";
>>>>>>> c3f43e0065f92ef2abdf019e4c614383b104c9e8
const root = ReactDOM.createRoot(document.getElementById("root"));

const loader = document.getElementById("global-loader");
if (loader) loader.style.display = "none";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NovaFilmIndustry />} />
        <Route path="/signup" element={<LoginSignup />} />
<<<<<<< HEAD
         <Route path="/ForgotPassword" element={<ForgotPassword />} />
=======
>>>>>>> c3f43e0065f92ef2abdf019e4c614383b104c9e8
        <Route path="/dashboard" element={<FilmNetworkDashboard />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/connections" element={<Connections />} />
<<<<<<< HEAD
        <Route path="/settings" element={<Settings />} /> 
        <Route Path="/gallary" element={<GalleryPage/>}/>
        <Route Path="/shootingplace" element={<ShootingPlace/>}/>
=======
        <Route path="/settings" element={<Settings />} />
        <Route Path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route Path="/gallary" element={<GalleryPage/>}/>
>>>>>>> c3f43e0065f92ef2abdf019e4c614383b104c9e8
      </Routes>
    </Router>
  );
};

export default App;

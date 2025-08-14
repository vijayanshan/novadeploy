import React, { useState, useEffect, useRef } from 'react';
import '../components/stylesheet/dashboard.css';
import logoLoop from '../assets/videos/logoloop.mp4';
import Messages from './Messages';
import Connections from './Connections';
import Jobs from './jobpage';
import Settings from './Settings';
import UserProfilePage from './profilecard';
import { useNavigate } from 'react-router-dom';
import '../index.css';

 
const FilmNetworkDashboard = () => {
  const [activeSection, setActiveSection] = useState('Feed');
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const mainRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const handleLogout = () => {
    setShowLogoutPopup(true);
    setTimeout(() => {
      setShowLogoutPopup(false);
      navigate('/');
    }, 2000);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Feed':
        return (
          <div className="section-feed">
            {[...Array(4)].map((_, i) => (
              <div className="post card-neon" key={i}>
                <h3>🎬 Casting Call #{i + 1}</h3>
                <p>Short film in Chennai. Female lead, 22–28. DM to apply.</p>
                <span className="timestamp">Posted {i + 1} hr ago</span>
              </div>
            ))}
          </div>
        );
      case 'Profile':
        return <UserProfilePage />;
      case 'Messages':
        return <Messages />;
      case 'Connections':
        return <Connections />;
      case 'Jobs':
        return <Jobs />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <div className="card-neon">
            <h2>{activeSection}</h2>
            <p>Coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar-glass">
        <div className="sidebar-logo-container">
          <video
            src={logoLoop}
            autoPlay
            loop
            muted
            playsInline
            className="logo-video"
          />
        </div>

        <nav className="nav-panel">
          {['Feed', 'Profile', 'Messages', 'Connections', 'Jobs', 'Settings'].map((item) => (
            <button
              key={item}
              className={`nav-btn ${activeSection === item ? 'active-glow' : ''}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          ))}
          <button className="nav-btn logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content neon-scroll" ref={mainRef}>
        <header className="topbar-glow">
          {activeSection === 'Feed' && (
            <div className="search-bar">
              <input type="text" className="search-input" placeholder="Search posts, jobs, people..." />
              <button className="btn-glow">Search</button>
            </div>
          )}
        </header>

        {/* Right Content Based on Active Section */}
        <section className="section-wrapper">
          {renderContent()}
        </section>
      </main>

      {/* Logout Popup */}
      {showLogoutPopup && (
        <div className="logout-popup-center">
          <div className="popup-content-glow">
            <span>🚀 You have successfully logged out!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmNetworkDashboard;

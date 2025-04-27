import React from 'react';
import "./LandingPage.css";
import TestingPage from '../TestingPage';


const LandingPage = () => {
  return (
    <div>
      <div className="smart-entrance-page">
        {/* Top Navbar */}
        <div className="navbar">
          <img src="https://picsum.photos/seed/logo-left/80" alt="Left Logo" className="logo" />
          <h1 className="navbar-title">Smart Entrance Security</h1>
          <img src="https://picsum.photos/seed/logo-right/80" alt="Right Logo" className="logo" />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h2 className="subtitle">Welcome To The</h2>
          <h1 className="title">SMART ENTRANCE</h1>
          <p className="description">Security Solution</p>

          <div className="role-buttons">
            {/* Link for Admin */}
            <a href="/TestingPage" className="role-button">
              <img src="https://picsum.photos/seed/admin/160" alt="Admin" className="role-image" />
              <span className="role-label">ADMIN</span>
            </a>

            {/* Link for Security Staff */}
            <a href="/security" className="role-button">
              <img src="https://picsum.photos/seed/security/160" alt="Security Staff" className="role-image" />
              <span className="role-label">SECURITY STAFF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import './landingPage.css';

const SmartEntrancePage = () => {
  return (
    <div className="page-container">
      {/* Top Navbar */}
      <div className="navbar">
        <img src="https://picsum.photos/50?random=1" alt="Logo" className="logo" />
        <h1 className="navbar-title">Smart Entrance Security</h1>
        <img src="https://picsum.photos/50?random=2" alt="Logo" className="logo" />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="welcome-text">Welcome To The</h2>
        <h1 className="main-heading">SMART ENTRANCE</h1>
        <h3 className="sub-heading">Security Solution</h3>

        <div className="button-container">
          <div className="user-button">
            <img src="https://picsum.photos/80?random=3" alt="Admin" className="user-image" />
            <div className="user-label">ADMIN</div>
          </div>
          <div className="user-button">
            <img src="https://picsum.photos/80?random=4" alt="Security" className="user-image" />
            <div className="user-label">SECURITY STAFF</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartEntrancePage;

import React from 'react';
import "./LandingPage.css";
import TestingPage from '../TestingPage';
import Navbar from '../../components/Navbar/Navbar';

const LandingPage = () => {
  return (
    <div>
      <div className="smart-entrance-page">
        {/* Top Navbar */}
      <Navbar />

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

            {/* Link for User */}
            <a href="/SecurityStaffLogInPage" className="role-button">
              <img src="https://picsum.photos/seed/security/160" alt="Security Staff LogIn" className="role-image" />
              <span className="role-label">USERS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

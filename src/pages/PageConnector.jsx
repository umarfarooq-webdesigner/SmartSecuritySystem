import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './landingpage/LandingPage';
import SecurityStaffLogInPage from './AllUserPages/UserPages/SecurityStaffLogInPages/SecurityStaffLogInPage';
import LockedPage from './AllUserPages/UserPages/SecurityStaffLogInPages/LockedPage';
// Testing pages
import AllUserPagesConnecter from './AllUserPages/UserPages/AllUserPagesConnecter';
import TestingPage from './TestingPage';



const PageConnector = () => {
  return (
    <Router>
      <Routes>
        {/* Route for LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route for TestingPage */}
        <Route path="/TestingPage" element={<TestingPage />} />
        {/* <Route path="/User" element={<AllUserPagesConnecter />} /> */}
        <Route path="/SecurityStaffLogInPage" element={<SecurityStaffLogInPage />} />
      
      
      {/* login page routes */}
      {/* <Route path="/" element={<LoginPage />} /> */}
      {/* <Route path="/main" element={<MainPage />} /> */}
      <Route path="/locked" element={<LockedPage />} />


        {/* You can add more routes for other pages here */}
      </Routes>
    </Router>
  );
};

export default PageConnector;

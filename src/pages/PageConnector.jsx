import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './landingpage/LandingPage';
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
        <Route path="/User" element={<AllUserPagesConnecter />} />

        {/* You can add more routes for other pages here */}
      </Routes>
    </Router>
  );
};

export default PageConnector;

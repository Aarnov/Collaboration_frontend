import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound'; // Import 404 page
import ProjectDetailsPage from './components/ProjectDetailsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'
  );

  useEffect(() => {
    const authStatus = localStorage.getItem('auth') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  return (
    <Router>
    <Routes>
   
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<Signup />} />
      <Route 
        path="/dashboard" 
        element={isAuthenticated ? <Dashboard handleLogout={handleLogout} /> : <Navigate to="/login" />}
      />
     <Route path="/project/:projectId" element={<ProjectDetailsPage />} />

      
      {/* 404 Page Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;

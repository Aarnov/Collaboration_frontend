import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import your navbar component

const NotFound = () => {
  return (
    <div>
      {/* <Navbar /> Keep navbar visible */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ color: 'red' }}>404 - Page Not Found</h1>
        <p style={{ color: 'gray' }}>Oops! The page you're looking for doesn't exist.</p>
        <br></br>



        
        <Link to="/" style={{ color: 'orange', textDecoration: 'underline' }}>
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

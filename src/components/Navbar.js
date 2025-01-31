import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer, Logo, NavLinks, NavLink } from './styles';

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      handleLogout();
      navigate('/login'); // Redirect to login after logout
    }
  };

  return (
    <NavbarContainer>
      <Logo>Project Dashboard</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Profile</NavLink>
        <NavLink onClick={confirmLogout} style={{ color: 'red' }}>Logout</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
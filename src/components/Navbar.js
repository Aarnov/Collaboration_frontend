import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importing icons
import { FaAnglesRight } from "react-icons/fa6";

import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  MinimizeIcon,
  NavItem
} from "./styles";

const Navbar = ({ setSidebarOpen, isSidebarOpen, handleLogout }) => {
  const navigate = useNavigate();

  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      handleLogout();
      navigate("/login"); // Redirect to login after logout
    }
  };

  return (
    <NavbarContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MinimizeIcon
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          style={{ marginRight: "20px" }}
        >
          {/* Conditionally render the icon based on isSidebarOpen */}
          {isSidebarOpen ?  <FaBars /> : <FaAnglesRight />}
        </MinimizeIcon>
        <Logo>Collaboration App</Logo>
      </div>
      <NavLinks>
        {/* Home section with icon */}
        <NavItem>
          <NavLink onClick={() => navigate("/home")}>
            <FaHome style={{ marginRight: "8px" }} />
            Home
          </NavLink>
        </NavItem>

        {/* Profile section with icon */}
        <NavItem>
          <NavLink onClick={() => navigate("/profile")}>
            <FaUserCircle style={{ marginRight: "8px" }} />
            Profile
          </NavLink>
        </NavItem>

        {/* Logout section with icon */}
        <NavItem>
          <NavLink
            onClick={confirmLogout}
            onMouseEnter={(e) => (e.currentTarget.style.color= "black")}
            style={{  color: "red", display: "flex", alignItems: "center" }}
          >
            <FaSignOutAlt style={{ marginRight: "8px" }} />
            Logout
          </NavLink>
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
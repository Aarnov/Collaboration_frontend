import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importing icons
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
  const location = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    setShowLogoutModal(true);
  };
  
  const handleLogoutConfirm = () => {
    handleLogout();
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/dashboard");
  };


  return (
    <NavbarContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MinimizeIcon
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          style={{
            marginRight: "20px",
            transform: isSidebarOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s",
          }}
        >
 <FaAnglesRight />
        </MinimizeIcon>
        <Logo
          onClick={handleLogoClick}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ff6347",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            padding: "10px 20px",
            borderRadius: "10px",
            transition: "transform 0.3s, box-shadow 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(216, 119, 8, 0.5)";
            e.currentTarget.style.color = "#ff4500";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(86, 90, 95, 0.05)";
            e.currentTarget.style.color = "#ff6347";
          }}
        >
          Collaboration App
        </Logo>
      </div>

      <NavLinks>
        <NavItem>
          <NavLink
            onClick={() => navigate("/dashboard")}
            style={{ color: location.pathname === "/dasboard" ? "#ff6347" : "inherit" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6347")}
            onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === "/home" ? "#ff6347" : "inherit")}
          >
            <FaHome style={{ marginRight: "8px" }} />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => navigate("/profile")}
            style={{ color: location.pathname === "/profile" ? "#ff6347" : "inherit" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6347")}
            onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === "/profile" ? "#ff6347" : "inherit")}
          >
            <FaUserCircle style={{ marginRight: "8px" }} />
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={confirmLogout}
            onMouseEnter={(e) => (e.currentTarget.style.color = "black")}
            style={{ color: "red", display: "flex", alignItems: "center" }}
          >
            <FaSignOutAlt style={{ marginRight: "8px" }} />
            Logout
          </NavLink>
        </NavItem>
      </NavLinks>

      {showLogoutModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogoutConfirm}>Yes</button>
            <button onClick={() => setShowLogoutModal(false)}>No</button>
          </div>
        </div>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
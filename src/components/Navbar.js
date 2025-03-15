import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserCircle, FaSignOutAlt, FaBell } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  MinimizeIcon,
  NavItem,
} from "./styles";
import { io } from "socket.io-client";

const socket =io("http://localhost:5001");

const Navbar = ({ setSidebarOpen, isSidebarOpen, handleLogout, notifications }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsList, setNotificationsList] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail"); // Get user email
    if (userEmail) {
        socket.emit("join", userEmail);
    }

    socket.on("newNotification", (notification) => {
        setNotificationsList((prev) => [...prev, notification]);
    });

    return () => {
        socket.off("newNotification");
    };
}, []);

  const confirmLogout = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    handleLogout();
    navigate("/login");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
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
          onClick={() => navigate("/dashboard")}
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
        {/* Home Link */}
        <NavItem>
          <NavLink
            onClick={() => navigate("/dashboard")}
            style={{
              color: location.pathname === "/dashboard" ? "#ff6347" : "#FFFFFF",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6347")}
            onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === "/dashboard" ? "#ff6347" : "#FFFFFF")}
          >
            <FaHome style={{ marginRight: "8px" }} />
            Home
          </NavLink>
        </NavItem>

        {/* Profile Link */}
        <NavItem>
          <NavLink
            onClick={() => navigate("/profile")}
            style={{
              color: location.pathname === "/profile" ? "#ff6347" : "#FFFFFF",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6347")}
            onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === "/profile" ? "#ff6347" : "#FFFFFF")}
          >
            <FaUserCircle style={{ marginRight: "8px" }} />
            Profile
          </NavLink>
        </NavItem>

        {/* Notifications */}
        <NavItem style={{ position: "relative" }}>
          <NavLink
            onClick={toggleNotifications}
            style={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
          >
            <FaBell size={20} style={{ marginRight: "8px" }} />
            Notifications
            {notificationsList.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  backgroundColor: "#FF4444",
                  color: "#FFFFFF",
                  borderRadius: "50%",
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                {notificationsList.length}
              </span>
            )}
          </NavLink>

          {showNotifications && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                backgroundColor: "#1A1A1A",
                border: "1px solid #2C2C2C",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                zIndex: 1000,
                width: "280px",
                maxHeight: "300px",
                overflowY: "auto",
                color: "#FFFFFF",
              }}
            >
              <div style={{ padding: "12px", fontWeight: "bold", borderBottom: "1px solid #2C2C2C", textAlign: "center" }}>
                Notifications
              </div>

              {notificationsList.length > 0 ? (
                notificationsList.map((notification, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "12px",
                      borderBottom: "1px solid #2C2C2C",
                      cursor: "pointer",
                      transition: "background 0.3s",
                      fontSize: "14px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#444")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div style={{ fontWeight: "bold" }}>{notification.sent_by}</div>
                    <div>{notification.message}</div>
                    <div style={{ fontSize: "12px", color: "#CCCCCC" }}>
                      {new Date(notification.created_at).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ padding: "12px", color: "#CCCCCC", textAlign: "center" }}>
                  No new notifications
                </div>
              )}
            </div>
          )}
        </NavItem>

        {/* Logout */}
        <NavItem>
          <NavLink
            onClick={confirmLogout}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ff6347")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FF4444")}
            style={{ color: "#FF4444", display: "flex", alignItems: "center" }}
          >
            <FaSignOutAlt style={{ marginRight: "8px" }} />
            Logout
          </NavLink>
        </NavItem>
      </NavLinks>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
          <div style={{ backgroundColor: "#1A1A1A", padding: "20px", borderRadius: "10px", textAlign: "center", color: "#FFFFFF" }}>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogoutConfirm} style={{ backgroundColor: "#FF6347", color: "#FFFFFF", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", marginRight: "10px" }}>Yes</button>
            <button onClick={() => setShowLogoutModal(false)} style={{ backgroundColor: "#2C2C2C", color: "#FFFFFF", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>No</button>
          </div>
        </div>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

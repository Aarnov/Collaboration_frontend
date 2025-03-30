import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserCircle, FaSignOutAlt, FaBell } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { io } from "socket.io-client";

import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  MinimizeIcon,
  NavItem,
} from "./styles";


const Navbar = ({ setSidebarOpen, isSidebarOpen, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsList, setNotificationsList] = useState([]);


  const handleResponse = async (notificationId, response) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/notifications/respond`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ notificationId, response }),
      });

      if (!res.ok) throw new Error("Failed to respond to notification");

      setNotificationsList((prev) =>
        prev.filter((notif) => notif.id !== notificationId)
      );
    } catch (error) {
      console.error("Error responding to notification:", error);
    }
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

        <Logo onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
          Collaboration App
        </Logo>
      </div>

      <NavLinks>
        <NavItem>
          <NavLink onClick={() => navigate("/dashboard")}>
            <FaHome style={{ marginRight: "8px" }} />
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => navigate("/profile")}>
            <FaUserCircle style={{ marginRight: "8px" }} />
            Profile
          </NavLink>
        </NavItem>

        <NavItem style={{ position: "relative" }}>
          <NavLink onClick={() => setShowNotifications(!showNotifications)}>
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
                width: "280px",
                maxHeight: "300px",
                overflowY: "auto",
                color: "#FFFFFF",
              }}
            >
              <div style={{ padding: "12px", fontWeight: "bold", textAlign: "center" }}>
                Notifications
              </div>

              {notificationsList.length > 0 ? (
                notificationsList.map((notification) => (
                  <div
                    key={notification.id}
                    style={{
                      padding: "12px",
                      borderBottom: "1px solid #2C2C2C",
                      fontSize: "14px",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>{notification.sent_by}</div>
                    <div>{notification.message}</div>
                    <div style={{ fontSize: "12px", color: "#CCCCCC" }}>
                      {new Date(notification.created_at).toLocaleString()}
                    </div>
                    {notification.type === "invitation" && (
                      <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
                        <button
                          onClick={() => handleResponse(notification.id, "accepted")}
                          style={{
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#00C851",
                            color: "#FFFFFF",
                            cursor: "pointer",
                          }}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleResponse(notification.id, "rejected")}
                          style={{
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#FF4444",
                            color: "#FFFFFF",
                            cursor: "pointer",
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    )}
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

        <NavItem>
          <NavLink onClick={handleLogout} style={{ color: "#FF4444" }}>
            <FaSignOutAlt style={{ marginRight: "8px" }} />
            Logout
          </NavLink>
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

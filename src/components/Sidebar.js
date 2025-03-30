import React, { useState, useEffect } from "react";
import { SidebarContainer, SidebarItem, TeamMemberItem } from "./styles";
import { FaProjectDiagram, FaUsers, FaCog, FaTachometerAlt, FaUser } from "react-icons/fa";
import axios from "axios"; import { useNavigate } from "react-router-dom";
import AddMember from "./AddMember"; // Import AddMember component

const Sidebar = ({ isSidebarOpen, isProjectPage, projectId }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);
  const navigate = useNavigate();

    // Fetch team members when the project page is open
    const fetchTeamMembers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found, redirecting to login...");
          navigate("/login");
          return;
        }
  
        const response = await axios.get(`http://localhost:5000/projects/${projectId}/members`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTeamMembers(response.data);
        
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
  
    const handleTeamsClick = () => {
      if (!isTeamExpanded) {
        fetchTeamMembers(); // Fetch when expanding
      }
      setIsTeamExpanded(!isTeamExpanded);
    };

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      {isProjectPage ? (
        <>
          <SidebarItem>
            <FaProjectDiagram style={{ marginRight: "10px", color: "#FFCC00" }} />
            {isSidebarOpen && <span style={{ color: "#FFFFFF" }}>Overview</span>}
          </SidebarItem>

          {/* Team Section */}
          <SidebarItem  onClick={handleTeamsClick}>
            <FaUsers style={{ marginRight: "10px", color: "#FFCC00" }} />
            {isSidebarOpen && <span style={{ color: "#FFFFFF" }}>Team</span>}
          </SidebarItem>

          {isTeamExpanded && isSidebarOpen && (
            <div style={{ marginLeft: "20px" }}>
              {/* Add Member Section */}
              <AddMember projectId={projectId} setTeamMembers={setTeamMembers} />

              {/* List of Team Members */}
              {teamMembers.map((member, index) => (
                <TeamMemberItem key={index}>
                  <span style={{ color: "#CCCCCC" }}>{member.name}</span>
                  <span style={{ color: "#888888", fontSize: "14px" }}>{member.role}</span>
                </TeamMemberItem>
              ))}
            </div>
          )}

          <SidebarItem>
            <FaCog style={{ marginRight: "10px", color: "#FFCC00" }} />
            {isSidebarOpen && <span style={{ color: "#FFFFFF" }}>Settings</span>}
          </SidebarItem>
        </>
      ) : (
        <>
          <SidebarItem>
            <FaTachometerAlt style={{ marginRight: "10px", color: "#FFCC00" }} />
            {isSidebarOpen && <span style={{ color: "#FFFFFF" }}>Dashboard</span>}
          </SidebarItem>
          <SidebarItem>
            <FaUser style={{ marginRight: "10px", color: "#FFCC00" }} />
            {isSidebarOpen && <span style={{ color: "#FFFFFF" }}>Profile</span>}
          </SidebarItem>
          <SidebarItem>
            <FaCog style={{ marginRight: "10px", color: "#FFCC00" }} />
            {isSidebarOpen && <span style={{ color: "#FFFFFF" }}>Settings</span>}
          </SidebarItem>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

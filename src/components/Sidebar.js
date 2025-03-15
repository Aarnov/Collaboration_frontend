import React, { useState, useEffect } from "react";
import { SidebarContainer, SidebarItem, TeamMemberItem } from "./styles";
import { FaProjectDiagram, FaUsers, FaCog, FaTachometerAlt, FaUser } from "react-icons/fa";
import AddMember from "./AddMember"; // Import AddMember component

const Sidebar = ({ isSidebarOpen, isProjectPage, projectId }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);

  // Fetch team members when the project page is open
  useEffect(() => {
    if (isProjectPage && projectId) {
      const token = localStorage.getItem("token");
      fetch(`/projects/${projectId}/members`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setTeamMembers(data))
        .catch((err) => console.error("Error fetching team members:", err));
    }
  }, [projectId]);

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      {isProjectPage ? (
        <>
          <SidebarItem>
            <FaProjectDiagram style={{ marginRight: "10px", color: "#FFCC00" }} />
            {isSidebarOpen && <span style={{ color: "#FFFFFF" }}>Overview</span>}
          </SidebarItem>

          {/* Team Section */}
          <SidebarItem onClick={() => setIsTeamExpanded(!isTeamExpanded)}>
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

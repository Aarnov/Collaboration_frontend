import styled from 'styled-components';

// Navbar Container
export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "0")};
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? "calc(100% - 250px)" : "100%")};
  height: 60px;
  background-color: #1A1A1A; // Charcoal
  color: #FFFFFF; // White
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  transition: left 0.3s ease-in-out, width 0.3s ease-in-out;
`;

export const Logo = styled.h2`
  font-size: 20px;
  margin: 0; // Remove extra space
  padding: 0;
  white-space: nowrap; // Ensure it's in one line
  color: #FFCC00; // Gold
  &:hover {
    transform: scale(1.1);
    color: #FF6347; // Orange
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: #FFFFFF; // White
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: #FF6347; // Orange
  }
`;

export const MinimizeIcon = styled.button`
  background: none;
  border: none;
  color: #FFFFFF; // White
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #FFCC00; // Gold
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

// Sidebar
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isSidebarOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #1A1A1A; // Charcoal
  transition: left 0.3s ease;
  padding-top: 60px; // Space for the navbar
`;

export const SidebarItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  color: #FFFFFF; // White
  font-weight: 500;
  text-align: left;
  transition: background 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #2C2C2C; // Dark Gray

  &:hover {
    background: rgba(255, 111, 0, 0.1); // Orange with opacity
    color: #FF6347; // Orange
  }

  &:last-child {
    border-bottom: none;
  }

  svg {
    font-size: 1.5rem;
    color: #FFCC00; // Gold
  }
`;

export const TeamMemberItem = styled.div`
  color: #CCCCCC; // Light Gray
  font-size: 14px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); // Light Gray with opacity
  }

  &::before {
    content: '➜'; // Add a bullet point
    margin-right: 8px; // Add spacing between the bullet and the text
    color: #FFCC00; // Gold
  }
`;

export const Sidebar = styled.div`
  width: 250px; // Adjust as needed
  height: 100vh;
  background-color: #1A1A1A; // Charcoal
  color: #FFFFFF; // White
  display: ${(props) => (props.$isSidebarOpen ? "block" : "none")};
  flex-direction: column;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw; // Ensure it spans full width
  height: 100vh; // Use full height
  overflow: hidden;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  width: auto;
  max-width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "0px")}; // Adjust content position
  background-color: #121212; // Dark Gray
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // Show 5 tiles in one row
  gap: 20px;
  margin-top: 1.5rem;
  padding: 10px;
  width: 100%;
  max-height: 80vh; // Limit the height to 80% of the viewport
  overflow-y: auto; // Allow vertical scrolling
  overflow-x: hidden; // Prevent horizontal scrolling
`;

export const ProjectTile = styled.div`
  background-color: #1A1A1A; // Charcoal
  border: 1px solid #2C2C2C; // Dark Gray
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  // Hover effect to enlarge the tile
  &:hover {
    transform: scale(1.05); // Increase size by 5%
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); // Enhance shadow for a lifting effect
  }

  // Adjust font size and spacing
  h3 {
    font-size: 1.4rem;
    margin-bottom: 12px;
    color: #FFCC00; // Gold
  }
  p {
    font-size: 1rem;
    color: #CCCCCC; // Light Gray
    margin-bottom: 8px;
  }
  .status {
    font-size: 0.9rem;
    font-weight: bold;
    color: #00C851; // Teal
  }
`;

export const TileContainer = styled.div`
  background: rgba(255, 255, 255, 0.05); // Subtle white overlay for depth
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05); // Slightly enlarge the tile
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5); // Enhance the shadow on hover
  }
`;

export const ProjectTitle = styled.h3`
  color: #FF6347; // Orange
  margin-bottom: 12px;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  color: #CCCCCC; // Light Gray
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 12px;
`;

export const ProjectMembers = styled.p`
  font-size: 0.9rem;
  color: #BBBBBB; // Light Gray
  margin: 8px 0;
`;

export const ProjectStatus = styled.span`
  display: inline-block;
  margin-top: 12px;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.status === "Completed"
      ? "#00C851" // Teal
      : props.status === "In Progress"
      ? "#FFCC00" // Gold
      : "#FF4444"}; // Coral
  color: #FFFFFF; // White
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

export const modalOverlay = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a dim background effect
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000, // Ensures it appears above everything
};

export const modalContent = {
  backgroundColor: "#222",
  padding: "30px",
  borderRadius: "10px",
  width: "500px",
  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
};



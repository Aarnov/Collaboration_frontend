import styled from 'styled-components';
import { Link } from "react-router-dom";


// Navbar Container
export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "0")};
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? "calc(100% - 250px)" : "100%")};
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  transition: left 0.3s ease-in-out, width 0.3s ease-in-out;
`;

export const Logo = styled.h2`
  font-size: 20px;
  margin: 0; /* Remove extra space */
  padding: 0;
  white-space: nowrap; /* Ensure it's in one line */
  &:hover {
    transform: scale(1.1);
    color: red;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: black; /* Change color to red on hover */
  }
`;

export const MinimizeIcon = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;



//SIdebar
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isSidebarOpen ? "0" : "-250px")};  /* Toggle sidebar visibility */
  width: 250px;
  height: 100%;
  background-color: #333;
  transition: left 0.3s ease;
  padding-top: 60px;  /* Space for the navbar */
`;

export const SidebarItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  text-align: left;
  transition: background 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #444;
  position: relative;
  
  &:hover {
    background: rgba(255, 111, 0, 0.1);
    color: #ff6f00;
  }

  &:last-child {
    border-bottom: none;
  }

  svg {
    font-size: 1.5rem;
    color: #fff;
  }

  }
`;

export const Sidebar = styled.div`
    width: 250px; /* Adjust as needed */
    height: 100vh;
    background-color: #333;
    color: white;
    display: flex;
    flex-direction: column;
`;


export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw; /* Ensure it spans full width */
    height: 100vh; /* Use full height */
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
    margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "0px")}; /* Adjust content position */
`;



export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Show 5 tiles in one row */
  gap: 20px;
  margin-top: 1.5rem;
  padding: 10px;
  width: 100%;
  max-height: 80vh; /* Limit the height to 80% of the viewport */
  overflow-y: auto; /* Allow vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

export const ProjectTile = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(148, 44, 44, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Hover effect to enlarge the tile */
  &:hover {
    transform: scale(1.05); /* Increase size by 5% */
    box-shadow: 0 4px 10px rgba(148, 44, 44, 0.3); /* Enhance shadow for a lifting effect */
  }

  /* Adjust font size and spacing */
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    color: #555;
  }
  .status {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;




export const TileContainer = styled.div`
  background: rgba(70, 68, 68, 0.3);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(90, 88, 88, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Enlarge the tile by 5% */
    box-shadow: 0 8px 12px rgba(136, 73, 73, 0.5); /* Enhance the shadow on hover */
  }
`;

export const ProjectTitle = styled.h3`
  color: #ff6f00;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  color: #ccc;
`;

export const ProjectMembers = styled.p`
  font-size: 12px;
  color: #bbb;
  margin: 5px 0;
`;

export const ProjectStatus = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.status === "Completed"
      ? "#28a745"
      : props.status === "In Progress"
      ? "#ffc107"
      : "#dc3545"};
  color: #fff;
  font-weight: 600;
`;
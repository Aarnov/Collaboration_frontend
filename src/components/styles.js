import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: #1e1e1e; /* Dark gray background */
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff6f00; /* Bright orange logo */
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const NavLink = styled.span`
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
  color: #fff; /* White text */
  &:hover {
    color: #ff6f00; /* Bright orange on hover */
  }
`;

export const SidebarContainer = styled.aside`
  background: #1e1e1e; /* Dark gray background */
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 60px; // Height of the navbar
  left: 0;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    top: 0;
  }
`;

export const SidebarItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  color: #fff; /* White text */
  font-weight: 500;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    background: rgba(255, 111, 0, 0.1); /* Light orange background on hover */
    color: #ff6f00; /* Bright orange text on hover */
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  margin-top: 60px; // Height of the navbar
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  background-color: #000; /* Black background */
  padding: 2rem;
  margin-left: 250px; // Width of the sidebar
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const TileContainer = styled.div`
  background: #1e1e1e; /* Dark gray background */
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  flex: 1 1 calc(25% - 1.5rem); // 4 projects per row
  max-width: calc(25% - 1.5rem);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 1200px) {
    flex: 1 1 calc(33.33% - 1.5rem); // 3 projects per row
    max-width: calc(33.33% - 1.5rem);
  }
  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 1.5rem); // 2 projects per row
    max-width: calc(50% - 1.5rem);
  }
  @media (max-width: 480px) {
    flex: 1 1 100%; // 1 project per row
    max-width: 100%;
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff; /* White text */
`;

export const ProjectDescription = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #bbb; /* Light gray text */
`;

export const ProjectStatus = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) =>
    props.status === 'In Progress'
      ? '#ff6f00' /* Bright orange for in progress */
      : props.status === 'Completed'
      ? '#4caf50' /* Green for completed */
      : '#f44336'}; /* Red for not started */
`;
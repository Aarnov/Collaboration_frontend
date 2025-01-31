import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProjectTile from './components/ProjectTile';
import { DashboardContainer, MainContent, ProjectsContainer } from './components/styles';

const Dashboard = ({ handleLogout }) => {
  // Sample project data
  const projects = [
    { name: 'Project 1', description: 'This is the first project', status: 'In Progress' },
    { name: 'Project 2', description: 'This is the second project', status: 'Completed' },
    { name: 'Project 3', description: 'This is the third project', status: 'Not Started' },
    { name: 'Project 4', description: 'This is the fourth project', status: 'In Progress' },
    { name: 'Project 5', description: 'This is the fifth project', status: 'In Progress' },
    { name: 'Project 6', description: 'This is the sixth project', status: 'Completed' },
    { name: 'Project 7', description: 'This is the seventh project', status: 'In Progress' },
    { name: 'Project 8', description: 'This is the eighth project', status: 'Not Started' },
  ];

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <DashboardContainer>
        <Sidebar />
        <MainContent>
          <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Projects</h2>
          <ProjectsContainer>
            {projects.map((project, index) => (
              <ProjectTile key={index} project={project} />
            ))}
          </ProjectsContainer>
        </MainContent>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
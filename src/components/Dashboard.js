import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProjectTile from "./ProjectTile";
import {
  DashboardContainer,
  MainContent,
  ProjectsContainer,
} from "./styles";
import { CiSquarePlus } from "react-icons/ci";
import AddProjectMemberForm from "./ProjectMemberform";
import axios from "axios";
import { FaPlus } from 'react-icons/fa';


const Dashboard = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]); // Initially empty
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
  
        if (!token) {
          navigate("/login");
          return;
        }
  
        const response = await axios.get("http://localhost:5000/projects", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
  
    fetchProjects();
  }, [navigate]);
  

  const handleCloseForm = () => setShowForm(false);

  const handleAddMember = (newProject) => {
    setShowForm(false);
    setProjects((prevProjects) => [...prevProjects, newProject]); // Append new project
};


  return (
    <div>
      <Navbar handleLogout={handleLogout} setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <DashboardContainer>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <MainContent isSidebarOpen={isSidebarOpen} style={{ marginTop: "60px" }}>
          <h1 style={{ color: "#fff", marginBottom: "1.5rem" }}>Projects</h1>



          <ProjectsContainer>
            {projects.map((project) => (
              <ProjectTile
                key={project.project_id}
                project={project}
                onClick={() => {
                  console.log("Navigating to:", `/projects/${project.project_id}`);
                  navigate(`/projects/${project.project_id}`);
                }}
              />
            ))}
          </ProjectsContainer>


        </MainContent>

        {/* Floating Button */}
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            right: "40px",
            backgroundColor: "#e65c00",
            color: "white",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0px 0px 50px 2px rgba(243, 109, 69, 0.84)",
            transition: "transform 0.3s ease-in-out",
          }}
          className="floating-button"
          onClick={() => setShowForm(true)}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <FaPlus style={{ width: "30px", height: "30px", color: "#ffffff" }} />
        </div>
        {showForm && <AddProjectMemberForm onAddMember={handleAddMember} onClose={handleCloseForm} />}
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProjectData from "./ProjectData";
import { DashboardContainer, MainContent } from "./styles";
import { CiSquarePlus } from "react-icons/ci";
import AddProjectMemberForm from "./ProjectMemberform";


const ProjectDetailsPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [projects, setProjects] = useState(ProjectData);
    const [selectedProject, setSelectedProject] = useState(null);

        
    const { projectName } = useParams();
    const navigate = useNavigate();
    const project = ProjectData.find((p) => p.name === projectName);

    const handleCloseForm = () => setShowForm(false);

    const handleAddMember = (memberName) => {
    if (selectedProject) {
        const updatedProjects = projects.map((project) =>
        project.name === selectedProject.name
            ? { ...project, members: [...project.members, memberName] }
            : project
        );

        setProjects(updatedProjects);
        setShowForm(false);
    }
    };

    if (!project) {
        return <h2 style={{ color: "white" }}>Project not found</h2>;
    }

    return (
        <div>
        <Navbar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
        <DashboardContainer>
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <MainContent style={{ marginTop: "60px" }}>
            <button
                onClick={() => navigate("/")}
                style={{
                padding: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginBottom: "15px",
                }}
            >
                ← Back to Dashboard
            </button>
            <h2 style={{ color: "#fff" }}>{project.name}</h2>
            <p style={{ color: "#bbb" }}>{project.description}</p>
            <h3 style={{ color: "orange" }}>Team Members:</h3>
            <ul>
                {project.members.map((member, index) => (
                <li key={index} style={{ color: "#fff" }}>{member}</li>
                ))}
            </ul>
            </MainContent>

            {/* Floating Button */}
            <div
            style={{
                position: "fixed",
                bottom: "80px",
                right: "70px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
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
            <CiSquarePlus style={{ width: "50px", height: "50px", color: "orange" }} />
            </div>
            {showForm && <AddProjectMemberForm onAddMember={handleAddMember} onClose={handleCloseForm} />}
        </DashboardContainer>
        </div>
    );
};

export default ProjectDetailsPage;


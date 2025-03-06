import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { DashboardContainer, MainContent } from "./styles";
import { CiSquarePlus } from "react-icons/ci";
import AddTaskForm from "./TaskAddForm";
import axios from "axios";


const ProjectDetailsPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [project, setProject] = useState({ tasks: [], members: [] }); // Default empty tasks array
    const [showTaskForm, setShowTaskForm] = useState(false);


    const navigate = useNavigate();
    const { projectId } = useParams(); // Get project ID from URL

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await axios.get(`http://localhost:5000/projects/${projectId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log("Fetched project:", response.data); // Debugging line
                setProject(response.data); // Store the fetched project
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };

        fetchProject();
    }, [projectId, navigate]);

    const handleCloseForm = () => setShowTaskForm(false);

    if (!project) {
        return <h2 style={{ color: "white" }}>Project not found</h2>;
    }

    
    return (
        <div>
            <Navbar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
            <DashboardContainer style={{ display: "flex", width: "100%" }}>
                {/* Sidebar with dynamic team members */}
                <Sidebar 
                    isSidebarOpen={isSidebarOpen} 
                    isProjectPage={true} 
                    teamMembers={project.members || []} // Pass dynamic team members
                />
    
                {/* Main Content */}
                <MainContent 
                    isSidebarOpen={isSidebarOpen} 
                    style={{
                        marginTop: "20px",
                        flexGrow: 1, 
                        backgroundColor: "#121212", 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100vh",
                        padding: "500px",
                    }}
                >

                    <div
                        style={{
                            width: "200%", 
                            maxWidth: "2000px",
                            backgroundColor: "#1A1A1A",
                            padding: "40px",
                            borderRadius: "15px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)", 
                            textAlign: "left",
                            border: "1px solid rgba(255, 255, 255, 0.1)", 
                            overflowY: "auto", // Add vertical scrollbar if content overflows
                            maxHeight: "200vh", // Limit height to 80% of viewport height
                            minHeight: "700px", // Ensure a minimum height
                        }}
                    >
                        <h2 style={{ color: "orange", marginBottom: "15px", fontSize: "40px", fontWeight: "bold" }}>
                            {project.name}
                        </h2>
                        <p style={{ color: "#ccc", marginBottom: "25px", fontSize: "25px", lineHeight: "1.6" }}>
                            {project.description}
                        </p>
    
                        {/* Tasks Section */}
                       
                        <h3 style={{ color: "#ffcc00", marginBottom: "15px", fontSize: "22px", fontWeight: "600" }}>
                            Tasks
                        </h3>
                        <div style={{ 
                            display: "flex", // Change to flex
                            flexDirection: "column", // Stack items vertically
                            gap: "15px", // Add spacing between tasks
                            marginBottom: "25px"
                        }}>
                            {project.tasks && project.tasks.length > 0 ? (
                                project.tasks.map((task) => (
                                    <div key={task.task_id}style={{ 
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        padding: "15px",
                                        borderRadius: "8px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        transition: "transform 0.2s",
                                        position: "relative", // For absolute positioning of icons
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                            <span style={{ color: "#fff", fontSize: "18px", fontWeight: "500" }}>
                                                {task.name}
                                            </span>
                                            <span style={{ color: "rgb(235, 125, 91)", fontSize: "16px" }}>
                                                Assigned to: {task.assigned_to || "Unassigned"}
                                            </span>
                                            <span style={{ color: "#ccc", fontSize: "14px" }}>
                                                Due: {task.due_date || "No due date"}
                                            </span>
                                        </div>
    
                                        {/* Progress Bar */}
                                        <div style={{ marginTop: "10px" }}>
                                            <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "4px",overflow: "hidden" }}>
                                                <div style={{
                                                    width: `${task.progress || 0}%`,
                                                    height: "6px",
                                                    backgroundColor: "#007bff",
                                                    borderRadius: "4px"
                                                }}></div>
                                            </div>
                                        </div>
    
                                        {/* Task Priority */}
                                        <div style={{ marginTop: "10px", color: task.priority === "High" ? "#ff4444" : task.priority === "Medium" ? "#ffcc00" : "#00c851",  fontSize: "14px",
                                                fontWeight: "500" }}>
                                            {task.priority || "Low"} Priority
                                        </div>
    
                                        {/* Mark as Completed Button */}
                                        <button 
                                            style={{
                                                marginTop: "15px",
                                                padding: "8px 12px",
                                                backgroundColor: task.completed ? "#00c851" : "rgba(255, 255, 255, 0.1)",
                                                color: task.completed ? "#fff" : "#ccc",
                                                border: "none",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                transition: "background-color 0.3s, color 0.3s",
                                            }}
                                            onClick={() => console.log("Task completed!")}
                                        >
                                            {task.completed ? "Completed" : "In Progress . . ."}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: "#ccc", textAlign: "center", fontSize: "18px" }}>
                                    No tasks available
                                </p>
                            )}
                        </div>
                    </div>
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
                    onClick={() => setShowTaskForm(true)}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <CiSquarePlus style={{ width: "50px", height: "50px", color: "orange" }} />
                </div>
                {showTaskForm && <AddTaskForm onClose={handleCloseForm} />}
            </DashboardContainer>
        </div>
    );
    
};

export default ProjectDetailsPage;
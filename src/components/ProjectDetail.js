import React from "react";

const ProjectDetail = ({ project }) => {
return (
    <div style={{ padding: "20px", color: "white" }}>
    <h1>{project.name}</h1>
    <p><strong>Description:</strong> {project.description}</p>
    <p><strong>Owner ID:</strong> {project.ownerId}</p>
    <p><strong>Status:</strong> {project.status || "Not Started"}</p>
    <p><strong>Created At:</strong> {project.createdAt}</p>
    <p><strong>Members:</strong> {project.members.join(", ")}</p>
    </div>
);
};

export default ProjectDetail;
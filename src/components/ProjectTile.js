import React from "react";
import { TileContainer, ProjectTitle, ProjectDescription, ProjectStatus, ProjectMembers } from "./styles";


import { useNavigate } from "react-router-dom";

const ProjectTile = ({ project }) => {
  const navigate = useNavigate();

  console.log("Project data:", project); // Debugging line to check if project contains an id

  return (
    <TileContainer 
      onClick={() => {
        if (project && project.project_id) {
          navigate(`/project/${project.project_id}`);
        }
         else {
          console.error("Project ID is undefined!", project);
        }
      }} 
      style={{ cursor: "pointer" }}
    >
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectMembers>Team: {project.members?.join(", ")}</ProjectMembers>
      <ProjectStatus status={project.status || "Not Started"}>
        Status: {project.status || "Not Started"}
      </ProjectStatus>
    </TileContainer>
  );
};



export default ProjectTile;
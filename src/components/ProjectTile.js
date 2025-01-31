import React from 'react';
import { TileContainer, ProjectTitle, ProjectDescription, ProjectStatus } from './styles';

const ProjectTile = ({ project }) => {
  return (
    <TileContainer>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectStatus status={project.status}>Status: {project.status}</ProjectStatus>
    </TileContainer>
  );
};

export default ProjectTile;
import React from 'react';
import './ProjectCard.css';
import ProjectCover from './ProjectCover/ProjectCover';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectFooter from './ProjectFooter/ProjectFooter';

function ProjectCard(props) {
  return (
    <div ref={props.sendRef} className="ProjectCard">
      <ProjectCover
        projectName={props.project.name}
        projectImage={props.project.image}
      />
      <div className="ProjectInformation">
        <ProjectDescription
          projectWebsite={props.project.website}
          projectName={props.project.name}
          projectDescription={props.project.description}
        />
        <ProjectFooter
          projectTechnologyStack={props.project.technologyStack}
          projectGitHubLink={props.project.gitHubLink}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
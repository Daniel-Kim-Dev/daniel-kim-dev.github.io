import React from 'react';
import './Projects.css';
import projectsData from './Projects.json';
import ProjectCard from './ProjectCard/ProjectCard';

function Projects(props) {
  return (
    <div id="Projects">
      <section className="ProjectCardsContainer">
        <h2 ref={props.sendRef} className="ProjectsHeading">Projects</h2>
        {projectsData.projects.map(project => {
          return <ProjectCard key={project.id} sendRef={props.sendRef} project={project} />
        })
        }
      </section>
    </div>
  );
}

export default Projects;
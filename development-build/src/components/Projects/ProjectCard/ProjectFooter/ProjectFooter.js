import React from 'react';
import './ProjectFooter.css';
import GitHubIcon from './GitHubIcon';

function ProjectFooter(props) {
  return (
    <div className="ProjectFooter">
      <div className="TechnologyStack">
        {props.projectTechnologyStack.map(technology => {
          return <div key={technology} className="Technology">{technology}</div>
        })
        }
      </div>
      <GitHubIcon projectGitHubLink={props.projectGitHubLink} />
    </div>
  );
}

export default ProjectFooter;
import React from 'react';
import './ProjectDescription.css';

function ProjectDescription(props) {
  return (
    <div className="ProjectDescription">
      {props.projectWebsite &&
        <>
          <span>Website: </span>
          <a
            href={props.projectWebsite}
            rel="noopener noreferrer"
            target="_blank"
          >
            {props.projectName}
          </a>
          <br /><br />
        </>
      }
      <p className="ProjectDescriptionText">{props.projectDescription}</p>
    </div>
  );
}

export default ProjectDescription;
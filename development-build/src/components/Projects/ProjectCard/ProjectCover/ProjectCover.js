import React, { useState } from 'react';
import './ProjectCover.css';
import ModalImage from './ModalImage/ModalImage';

function ProjectCover(props) {
  const [showModalImage, setShowModalImage] = useState(false);

  function openModalImage() {
    setShowModalImage(true);
  }

  function closeModalImage() {
    setShowModalImage(false);
  }

  return (
    <>
      <div
        className="ProjectCover"
        onClick={openModalImage}
      >
        <img
          className="ProjectImage"
          src={require(`./images/${props.projectImage}`)}
          alt={props.projectName}
        />
        <div className="ProjectNameContainer">
          <h3 className="ProjectName">{props.projectName}</h3>
        </div>
      </div>
      {showModalImage &&
        <ModalImage
          projectImage={props.projectImage}
          projectName={props.projectName}
          closeModalImage={closeModalImage}
        />
      }
    </>
  );
}

export default ProjectCover;
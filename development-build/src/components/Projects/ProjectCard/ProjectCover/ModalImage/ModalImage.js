import React from 'react';
import './ModalImage.css';

function ModalImage(props) {
  return (
    <div className="ModalImage">
      <span
        className="Close"
        onClick={props.closeModalImage}
      >
        &times;
      </span>
      <img
        className="ModalContent"
        src={require(`./../images/${props.projectImage}`)}
        alt={props.projectName}
      />
      <div className="Caption">{props.projectName}</div>
    </div>
  );
}

export default ModalImage;
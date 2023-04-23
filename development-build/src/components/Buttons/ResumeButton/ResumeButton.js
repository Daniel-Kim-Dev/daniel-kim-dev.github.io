import React from 'react';
import './ResumeButton.css';
import ResumeFile from './Resume.pdf';
import { ReactComponent as  DownloadIcon } from './DownloadIcon.svg';

function ResumeButton(props) {
  return (
    <a
      href={ResumeFile}
      download="resume"
      className={`ResumeButton ${props.customClass}`}
    >
      <DownloadIcon />
      Resume
    </a>
  );
}

export default ResumeButton;
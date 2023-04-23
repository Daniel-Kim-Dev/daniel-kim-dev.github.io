import React from 'react';
import './NavBar.css';
import logo from './images/Logo.png';
import ResumeButton from './../Buttons/ResumeButton/ResumeButton';

function NavBar(props) {
  return (
    <div className="NavBar">
      <a className="Logo Animated" href="/">
        <img src={logo} alt="logo" width="45px" />
      </a>
      {props.isDesktopOrLaptop &&
        <div className="NavMenu Animated">
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
          <ResumeButton customClass="NavMenuResumeButton" />
        </div>
      }
    </div>
  );
}

export default NavBar;
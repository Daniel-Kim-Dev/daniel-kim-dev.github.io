import React, { useState, useEffect } from 'react';
import './SideNavMenu.css';
import ResumeButton from './../Buttons/ResumeButton/ResumeButton';

function SideNavMenu(props) {
  const [openOrNot, setOpenOrNot] = useState('');

  useEffect(() => {
    if (props.sideNavMenuOpened) {
      setOpenOrNot(' Open');
    } else {
      setOpenOrNot('');
    }
  }, [props.sideNavMenuOpened]);

  return (
    <div
      className={"SideNavMenu" + openOrNot}
      onTransitionEnd={props.removeSideNavMenu}
    >
      <a href="#About" onClick={props.menuItemClicked}>About</a>
      <a href="#Projects" onClick={props.menuItemClicked}>Projects</a>
      <a href="#Contact" onClick={props.menuItemClicked}>Contact</a>
      <ResumeButton customClass="SideNavMenuResumeButton" />
    </div>
  );
}

export default SideNavMenu;
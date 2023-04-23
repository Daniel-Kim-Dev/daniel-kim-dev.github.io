import React from 'react';
import './MenuIcon.css';

function MenuIcon(props) {
  return (
    <div className="MenuIconContainer">
      <div
        className={"MenuIcon Animated" +
                  (props.sideNavMenuOpened ? ' Change' : '')}
        onClick={props.menuIconClicked}
      >
        <div className="Bar1"></div>
        <div className="Bar2"></div>
        <div className="Bar3"></div>
      </div>
    </div>
  );
}

export default MenuIcon;
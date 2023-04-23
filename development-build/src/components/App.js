import React, { useState } from 'react';
import './App.css';
import useAnimateElement from './useAnimateElement';
import { useMediaQuery } from 'react-responsive';
import NavBar from './NavBar/NavBar';
import MenuIcon from './MenuIcon/MenuIcon';
import SideNavMenu from './SideNavMenu/SideNavMenu';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  const [isSideNavMenuOpen, setIsSideNavMenuOpen] = useState(false);
  const [isSideNavMenuClosing, setIsSideNavMenuClosing] = useState(false);
  const observeElement = useAnimateElement();

  const handleMediaQueryChange = (isDesktopOrLaptop) => {
    if (isDesktopOrLaptop) {
      setIsSideNavMenuOpen(false);
      setIsSideNavMenuClosing(false);
    }
  }

  const isDesktopOrLaptop = useMediaQuery(
    { minWidth: 768 }, undefined, handleMediaQueryChange
  );

  function handleSideNavMenu() {
    if (isSideNavMenuOpen) {
      setIsSideNavMenuOpen(false);
      setIsSideNavMenuClosing(true);
    } else {
      setIsSideNavMenuOpen(true);
    }
  }

  function closeSideNavMenu() {
    if (isSideNavMenuOpen) {
      setIsSideNavMenuOpen(false);
      setIsSideNavMenuClosing(true);
    }
  }

  function removeSideNavMenu() {
    if (isSideNavMenuClosing) {
      setIsSideNavMenuClosing(false);
    }
  }

  return (
    <div className="App">
      <NavBar isDesktopOrLaptop={isDesktopOrLaptop} />
      {!isDesktopOrLaptop &&
        <MenuIcon
          menuIconClicked={handleSideNavMenu}
          sideNavMenuOpened={isSideNavMenuOpen}
        />
      }
      {(isSideNavMenuOpen || isSideNavMenuClosing) &&
        <SideNavMenu
          sideNavMenuOpened={isSideNavMenuOpen}
          menuItemClicked={closeSideNavMenu}
          removeSideNavMenu={removeSideNavMenu}
        />
      }
      <main className="MainContent">
        <Introduction sendRef={observeElement} />
        <About sendRef={observeElement} />
        <Projects sendRef={observeElement} />
        <Contact sendRef={observeElement} />
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import About from './About';
import DesktopWork from './DesktopWork';
import Top from './Top';
import WebWork from './WebWork';

function Header() {
  return (
    <div>
      <Top />
      <About />
      <WebWork />
      <DesktopWork />
    </div>
  );
}

export default Header;

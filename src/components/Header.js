import React from 'react';
import Menu from './Menu.js';
import Logo from './Logo.js';


function Header() {

  return (
    <header className="header" >
      <Logo />
      <Menu />
    </header>
  )
}

export default Header;
import React from 'react';

import LogoButton from './logo-button/LogoButton';

import './header.css';
import logo from '../../images/logo.png';

const Header = () => (
  <header>
    <LogoButton src={logo} alt="Logo" />
  </header>
);

export default Header;

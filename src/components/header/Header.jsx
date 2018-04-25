import React from 'react';

import LogoButton from './logo-button/LogoButton';
import Links from './links/Links';

import './header.css';
import logo from '../../images/logo.png';

const Header = () => (
  <header>
    <LogoButton src={logo} alt='Logo' href='./' />
    <Links />
  </header>
);

export default Header;
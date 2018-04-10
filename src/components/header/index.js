import React from 'react';

import LogoButton from './logo-button';
import Links from './links';

import './header.css';
import logo from '../../images/logo.png';

const Header = () => (
  <header>
    <LogoButton src={logo} alt='Logo' href='./' />
    <Links />
  </header>
);

export default Header;
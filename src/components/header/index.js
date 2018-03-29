import React from 'react';

import Logo from './logo';
import Links from './links';

import './header.css';
import logo from '../../images/logo.png'

const Header = () => (
  <header>
    <Logo src={logo} alt='Logo' href='./' />
    <Links />
  </header>
);

export default Header;
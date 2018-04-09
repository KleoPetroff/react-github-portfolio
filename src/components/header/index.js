import React from 'react';

import LogoButton from './logo-button';
import Links from './links';

import './header.css';
import logo from '../../images/logo.png';
import back from '../../images/back-button.png';

const Header = () => (
  <header>
    <LogoButton src={logo} alt='Logo' href='./' />
    <Links />

    <a className='back-button' href='https://kleopetrov.me'>
      <img src={back} alt='Back to kleopetrov.me' />
    </a>
  </header>
);

export default Header;
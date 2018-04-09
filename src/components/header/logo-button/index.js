import React from 'react';

import './logo-button.css';

const LogoButton = ({src, alt, href}) => (
  <a className='logo' href={href} >
    <img src={src} alt={alt} />
  </a>
);

export default LogoButton;
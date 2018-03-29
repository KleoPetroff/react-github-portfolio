import React from 'react';

import './logo.css';

const Logo = ({src, alt, href}) => (
  <a className='logo' href={href}>
    <img src={src} alt={alt} />
  </a>
);

export default Logo;
import React from 'react';

const LogoButton = ({src, alt, href, style}) => (
  <a className='logo' href={href} style={style}>
    <img src={src} alt={alt} />
  </a>
);

export default LogoButton;
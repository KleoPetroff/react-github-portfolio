import React from 'react';

import './logo-button.css';

const LogoButton = ({ src, alt }) => (
  <div className="logo">
    <img src={src} alt={alt} />
  </div>
);

export default LogoButton;

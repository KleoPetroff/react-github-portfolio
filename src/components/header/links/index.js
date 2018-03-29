import React from 'react';

import './links.css';

const Links = () => (
  <div className='header-links-wrapper'>
    <a className='header-links active' href="javascript:void(0)">Projects</a>
    <a className='header-links disabled' href="javascript:void(0)">Current Project</a>
  </div>
);

export default Links;
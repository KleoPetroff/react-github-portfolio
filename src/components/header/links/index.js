import React, {Fragment} from 'react';

import './links.css';

const Links = () => (
  <Fragment>
    <a className='header-links active' href="javascript:void(0)">Projects</a>
    <a className='header-links disabled' href="javascript:void(0)">Current Project</a>
  </Fragment>
);

export default Links;
import React, {Fragment} from 'react';

import './links.css';

const Links = () => (
  <Fragment>
    <a className='header-links active' href="">Projects</a>
    <a className='header-links disabled' >Current Project</a>
  </Fragment>
);

export default Links;
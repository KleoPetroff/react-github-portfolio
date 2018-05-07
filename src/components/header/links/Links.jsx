import React, { Fragment } from 'react';

import './links.css';

const Links = () => (
  <Fragment>
    <div className="header-links active">Projects</div>
    <div className="header-links disabled">Current Project</div>
    <div className="header-links disabled">Issues</div>
  </Fragment>
);

export default Links;

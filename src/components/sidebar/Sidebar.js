import React from 'react';

import Sorting from './filters/Filters';

import './sidebar.css';

const Sidebar = (props) => (
  <div className="sidebar">
    <Sorting onSortChange={props.onSortChange} />
  </div>
);

export default Sidebar;
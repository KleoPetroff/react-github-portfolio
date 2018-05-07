import React from 'react';

import Sorting from './filters/Filters';
import Info from './info/Info';

import './sidebar.css';

const Sidebar = (props) => (
  <div className="sidebar">
    <Sorting onSortChange={props.onSortChange} />
    <Info />
  </div>
);

export default Sidebar;

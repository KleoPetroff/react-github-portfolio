import React from 'react';

import './repos.css';
import RepoCard from "./repo-card";

const Repos = () => (
  <div className='main-content'>
    <h2 className='content-heading'>Projects</h2>

    <div className='content-grid'>
      <RepoCard />
      <RepoCard />
      <RepoCard />
    </div>
  </div>
);

export default Repos;
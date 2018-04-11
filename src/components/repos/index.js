import React from 'react';
import shortid from 'shortid';

import './repos.css';
import RepoCard from "./repo-card";

const Repos = ({repos}) => (
  <div className='main-content'>
    <h2 className='content-heading'>Projects</h2>

    <div className='content-grid'>
      { repos.map(repo => <RepoCard repo={repo} key={shortid.generate()} />) }
    </div>
  </div>
);

export default Repos;